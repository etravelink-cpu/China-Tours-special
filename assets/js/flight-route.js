// Etrips 首页滚动航线：袋鼠小飞机沿虚线航线随页面滚动飞行（俯视图，flightradar 风格）
// 桌面 + 移动端；无 reduced-motion；GSAP ScrollTrigger + MotionPathPlugin（本地 vendor）
// 回滚时给机身内层 180° 翻转，飞机始终机头朝前（创始人 2026-07-18）
(function () {
  if (!window.gsap || !window.ScrollTrigger || !window.MotionPathPlugin) return;
  var main = document.getElementById("main");
  if (!main || !document.getElementById("adv-grid")) return; // 仅首页
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
            '" fill="none"/>'
          );
        })
        .join("");
      wrap.innerHTML =
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
        '</svg><div class="fr-plane" aria-hidden="true"><img src="assets/img/plane-etrips.png" alt=""></div>';
    }

    var tween;
    function build() {
      buildPath();
      var plane = wrap.querySelector(".fr-plane");
      tween = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: main,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: function (self) {
            plane.classList.toggle("rev", self.direction < 0);
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
        });
      });
    }
    build();

    // 懒加载视频/图片改变布局后重算航线
    window.addEventListener("load", refresh);
    var rt;
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
    window.addEventListener("resize", refresh);

    return function () {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("load", refresh);
      if (tween) {
        tween.scrollTrigger && tween.scrollTrigger.kill();
        tween.kill();
      }
      wrap.remove();
    };
  });
})();
