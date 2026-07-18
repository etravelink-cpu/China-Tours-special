// Etrips 首页滚动航线：袋鼠小飞机沿虚线航线随页面滚动飞行（俯视图，flightradar 风格）
// 桌面 + 移动端；无 reduced-motion；GSAP ScrollTrigger + MotionPathPlugin（本地 vendor）
// 回滚时给机身内层 180° 翻转，飞机始终机头朝前（创始人 2026-07-18）
// 2026-07-18 评审修复：DCL 后再建路（defer 脚本先于 home.js 渲染跑，空网格量出废几何）；
// 飞机节点跨重建持久（rev/变换/3D 锚引用不丢）；建后进度直落当前滚动位（刷新不再重飞）；
// langchange 重建；仅宽度变化才重建（手机地址栏抖动不churn）
(function () {
  if (!window.gsap || !window.ScrollTrigger || !window.MotionPathPlugin) return;
  var main = document.getElementById("main");
  if (!main || !document.getElementById("adv-grid")) return; // 仅首页
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  // 刷新时浏览器恢复滚动位不触发 scroll 事件，ScrollTrigger 滚动缓存滞留 0，
  // start/end 被恢复量整体错位（实测 start=-1847）→ 飞机停错点、首次滚动跳变。
  // 官方对 scrub 页的处置：关掉浏览器恢复，刷新回到页顶。
  ScrollTrigger.clearScrollMemory("manual");

  var STOPS = [
    "#destinations",
    "#tours",
    "#why-etrips",
    "#reviews",
    "#tips",
    ".enquiry",
  ];

  var mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", function () {
    var stops = STOPS.map(function (s) {
      return document.querySelector(s);
    }).filter(Boolean);
    if (stops.length < 2) return;

    var wrap = document.createElement("div");
    wrap.className = "flight-route";
    var svgBox = document.createElement("div");
    wrap.appendChild(svgBox);
    // 飞机节点只建一次：重建仅换 SVG，rev 类/GSAP 变换/3D 层引用全部延续
    var plane = document.createElement("div");
    plane.className = "fr-plane";
    plane.setAttribute("aria-hidden", "true");
    plane.innerHTML = '<img src="assets/img/plane-etrips.png" alt="">';
    wrap.appendChild(plane);
    main.appendChild(wrap);

    var segProgress = []; // 每个航段应占的滚动进度份额（按“路标居中视口时到达”映射）
    function buildPath() {
      var W = main.clientWidth;
      var H = main.scrollHeight;
      var vh = window.innerHeight;
      var pts = stops.map(function (sec, i) {
        var y = sec.offsetTop + Math.min(140, sec.offsetHeight * 0.2);
        var x =
          i % 2 === 0 ? Math.max(64, W * 0.052) : Math.min(W - 64, W * 0.948);
        return { x: x, y: y };
      });
      // 终点：页尾中央“降落”，飞机全程贴着视口走（首屏即可见，滚到底刚好收尾）
      pts.push({ x: W * 0.5, y: H - Math.min(260, vh * 0.3) });
      var start = { x: W * 0.5, y: vh * 0.5 };
      // 进度映射：路标 y 到达视口中心时 progress = (y-vh/2)/(H-vh)，
      // 避免弧长不均导致飞机中段掉出视口（每段一条隐藏路径 + 时间轴分段）
      var denom = Math.max(1, H - vh);
      var pAt = [0];
      pts.forEach(function (p) {
        var v = (p.y - vh * 0.5) / denom;
        pAt.push(Math.max(pAt[pAt.length - 1] + 0.02, Math.min(1, v)));
      });
      var last = pAt[pAt.length - 1];
      pAt = pAt.map(function (v) {
        return v / last;
      });
      segProgress = [];
      var segs = [];
      var d = "M " + start.x + " " + start.y;
      var prev = start;
      pts.forEach(function (p, i) {
        var dy = (p.y - prev.y) * 0.5;
        var c =
          " C " +
          prev.x +
          " " +
          (prev.y + dy) +
          ", " +
          p.x +
          " " +
          (p.y - dy) +
          ", " +
          p.x +
          " " +
          p.y;
        d += c;
        segs.push("M " + prev.x + " " + prev.y + c);
        segProgress.push(pAt[i + 1] - pAt[i]);
        prev = p;
      });
      var pins = pts
        .map(function (p) {
          return (
            '<circle class="fr-pin" cx="' +
            p.x +
            '" cy="' +
            p.y +
            '" r="8"/>' +
            '<circle class="fr-pin-core" cx="' +
            p.x +
            '" cy="' +
            p.y +
            '" r="3.2"/>'
          );
        })
        .join("");
      var segPaths = segs
        .map(function (sd, i) {
          return (
            '<path class="fr-seg" id="fr-seg-' +
            i +
            '" d="' +
            sd +
            '" fill="none" stroke="none"/>'
          );
        })
        .join("");
      svgBox.innerHTML =
        '<svg class="fr-svg" width="' +
        W +
        '" height="' +
        H +
        '" viewBox="0 0 ' +
        W +
        " " +
        H +
        '" aria-hidden="true">' +
        '<path id="fr-path" d="' +
        d +
        '" fill="none"/>' +
        segPaths +
        pins +
        "</svg>";
    }

    var tween;
    var revT;
    function build() {
      buildPath();
      tween = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: main,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
          // refresh 会 revert 掉滚动动画的行内样式；进度 0 时其后不再渲染，
          // 飞机被打回 main 左上角。每次 refresh 后满进度渲染一遍再落回原进度。
          onRefresh: function (self) {
            if (self.animation)
              self.animation.progress(1, true).progress(self.progress, true);
          },
          onUpdate: function (self) {
            // 去抖：scrub 收敛时 direction 会短暂抖动，防止随机 180° 翻转
            clearTimeout(revT);
            var want = self.direction < 0;
            revT = setTimeout(function () {
              plane.classList.toggle("rev", want);
            }, 90);
          },
        },
      });
      segProgress.forEach(function (dur, i) {
        tween.to(plane, {
          motionPath: {
            path: "#fr-seg-" + i,
            align: "#fr-seg-" + i,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          duration: dur,
          // lazy 会把各段的 align 取样推迟到 tick 末尾——大跳进度时所有段都对着未
          // 变换的飞机取偏移，链条错位（刷新停错位的根因）。逐段即时取样。
          lazy: false,
        });
      });
      // 先满进度渲染一遍再落回当前滚动位：逐段按序初始化全部 motionPath 对齐，
      // 并保证进度 0 也真正渲染（否则飞机裸停 main 左上角）。刷新不再重飞。
      var st = tween.scrollTrigger;
      tween.progress(1, true).progress(st ? st.progress : 0, true);
    }
    // defer 脚本在 home.js 的 DOMContentLoaded 渲染之前执行——空网格量出的几何全是错的，
    // 等 DCL（home.js 先注册先跑）再建。matchMedia 在 load 后重进时 DCL 已过，直接建。
    if (document.readyState === "complete") build();
    else document.addEventListener("DOMContentLoaded", build, { once: true });

    // 懒加载视频/图片改变布局后重算航线
    window.addEventListener("load", refresh);
    var rt;
    var lastW = window.innerWidth;
    function refresh() {
      clearTimeout(rt);
      rt = setTimeout(function () {
        if (tween) {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        }
        build();
        ScrollTrigger.refresh();
      }, 250);
    }
    function onResize() {
      // 手机地址栏收展只改高度：忽略，避免滚动中不断杀/重建
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      refresh();
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("langchange", refresh); // 中英文行高不同，重排后路线需重算

    return function () {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", refresh);
      window.removeEventListener("langchange", refresh);
      document.removeEventListener("DOMContentLoaded", build);
      clearTimeout(rt);
      clearTimeout(revT);
      if (tween) {
        tween.scrollTrigger && tween.scrollTrigger.kill();
        tween.kill();
      }
      wrap.remove();
    };
  });
})();
