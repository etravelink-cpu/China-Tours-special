// Etrips 首页滚动航线：袋鼠小飞机沿虚线航线随页面滚动飞行（俯视图，flightradar 风格）
// 仅桌面端 + 无 reduced-motion；GSAP ScrollTrigger + MotionPathPlugin（本地 vendor）
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
  mm.add(
    "(min-width: 1081px) and (prefers-reduced-motion: no-preference)",
    function () {
      var stops = STOPS.map(function (s) {
        return document.querySelector(s);
      }).filter(Boolean);
      if (stops.length < 2) return;

      var wrap = document.createElement("div");
      wrap.className = "flight-route";
      main.appendChild(wrap);

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
        var d = "M " + start.x + " " + start.y;
        var prev = start;
        pts.forEach(function (p) {
          var dy = (p.y - prev.y) * 0.5;
          d +=
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
          pins +
          '</svg><img class="fr-plane" src="assets/img/plane-etrips.png" alt="" aria-hidden="true">';
      }

      var tween;
      function build() {
        buildPath();
        tween = gsap.to(wrap.querySelector(".fr-plane"), {
          motionPath: {
            path: "#fr-path",
            align: "#fr-path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          ease: "none",
          scrollTrigger: {
            trigger: main,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
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
    },
  );
})();
