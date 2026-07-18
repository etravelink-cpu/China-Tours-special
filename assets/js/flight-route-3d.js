// Etrips 首页 3D 飞机（桌面端增强层）：three.js 渲染 hunyuan3d 品牌小飞机，
// 逐帧跟踪 2D .fr-plane（GSAP 航线驱动）的屏幕位置与朝向 — 不复制路径数学。
// 任何失败（无 WebGL / 模块加载失败 / GLB 404）静默保留 2D 贴纸飞机。
// 移动端刻意不加载：700KB three + 850KB GLB 对装饰动效不值，2D 贴纸更快。
(function () {
  if (!document.getElementById("adv-grid") || !window.gsap) return; // 仅首页
  var mql = window.matchMedia(
    "(min-width: 1081px) and (prefers-reduced-motion: no-preference)",
  );
  var teardown = null;

  function webglOk() {
    try {
      var c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch (e) {
      return false;
    }
  }

  function boot() {
    if (teardown || !webglOk()) return;
    var dead = false;
    teardown = function () {
      dead = true;
      teardown = null;
    };
    Promise.all([
      import("three"), // importmap → ./assets/js/vendor/three.module.min.js
      import("./vendor/GLTFLoader.js"), // classic-script import() 以本脚本 URL 为基准
    ]).then(
      function (mods) {
        if (!dead) init(mods[0], mods[1].GLTFLoader);
      },
      function () {},
    );

    function init(THREE, GLTFLoader) {
      new GLTFLoader().load(
        "assets/3d/plane-etrips.glb", // GLTFLoader 用 fetch，以文档 URL 为基准

        function (gltf) {
          if (dead) return;
          var route = document.querySelector(".flight-route");
          if (!route) {
            teardown = null; // 释放 boot 锁，断点回跳时可重启
            return;
          }

          var canvas = document.createElement("canvas");
          canvas.className = "fr-canvas";
          canvas.setAttribute("aria-hidden", "true");
          document.body.appendChild(canvas);
          var renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
          });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
          var W = window.innerWidth,
            H = window.innerHeight;
          var scene = new THREE.Scene();
          var cam = new THREE.OrthographicCamera(
            -W / 2,
            W / 2,
            H / 2,
            -H / 2,
            0.1,
            4000,
          );
          cam.position.z = 1000;

          // 无光材质：烘焙贴图自带柔和明暗，PBR 光照反而压暗品牌色
          var model = gltf.scene;
          model.traverse(function (n) {
            if (n.isMesh)
              n.material = new THREE.MeshBasicMaterial({ map: n.material.map });
          });
          // 校准：hunyuan 输出 机头-X/顶+Y → 规格 机头+X/顶+Z（朝相机）
          // ZYX：先绕 X 立起（顶转向 +Z），再绕 Z 掉头（机头转向 +X）
          model.rotation.set(Math.PI / 2, 0, Math.PI, "ZYX");
          model.scale.y = 0.55; // 本地 Y = 机身厚度轴：压扁玩具感，创始人嫌太厚 2026-07-18

          var inner = new THREE.Group(); // 滚转（banking）绕机头轴
          inner.add(model);
          var headingG = new THREE.Group(); // 航向绕屏幕法线
          headingG.add(inner);
          var tilt = new THREE.Group(); // 屏幕系固定倾斜 → 3/4 俯视感
          tilt.rotation.x = -0.5;
          tilt.add(headingG);
          scene.add(tilt);

          // 机身长度规格化到 ~150px
          var box = new THREE.Box3().setFromObject(headingG);
          var size = box.getSize(new THREE.Vector3());
          var s = 150 / Math.max(size.x, 0.001);
          inner.scale.setScalar(s);
          box.setFromObject(headingG);
          var c0 = box.getCenter(new THREE.Vector3());
          inner.position.sub(c0);

          function resize() {
            W = window.innerWidth;
            H = window.innerHeight;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setSize(W, H);
            cam.left = -W / 2;
            cam.right = W / 2;
            cam.top = H / 2;
            cam.bottom = -H / 2;
            cam.updateProjectionMatrix();
          }
          resize();
          window.addEventListener("resize", resize);

          var plane2d = null,
            lastH = 0,
            bank = 0,
            flip = 0,
            raf = 0,
            firstFrame = true;
          function frame(t) {
            if (dead) return;
            raf = requestAnimationFrame(frame);
            if (!plane2d || !plane2d.isConnected)
              plane2d = document.querySelector(".flight-route .fr-plane");
            if (!plane2d) {
              renderer.clear();
              return;
            }
            var r = plane2d.getBoundingClientRect();
            var cx = r.left + r.width / 2,
              cy = r.top + r.height / 2;
            if (cy < -260 || cy > H + 260) {
              renderer.clear();
              return;
            }
            var rot =
              ((gsap.getProperty(plane2d, "rotation") || 0) * Math.PI) / 180;
            var flipTarget = plane2d.classList.contains("rev") ? Math.PI : 0;
            flip += (flipTarget - flip) * 0.12;
            var h = -rot + flip; // css 顺时针为正 → three 逆时针为正
            if (firstFrame) lastH = h; // 首帧不产生 dh，避免开场滚转猛拍
            var dh = h - lastH;
            if (dh > Math.PI) dh -= 2 * Math.PI;
            if (dh < -Math.PI) dh += 2 * Math.PI;
            lastH = h;
            bank += (Math.max(-0.55, Math.min(0.55, dh * 10)) - bank) * 0.08;
            headingG.rotation.z = h;
            inner.rotation.x = bank + Math.sin(t * 0.0016) * 0.06; // 转弯滚转 + 待机轻摆
            tilt.position.set(
              cx - W / 2,
              H / 2 - cy + Math.sin(t * 0.002) * 4, // 轻微浮沉
              0,
            );
            renderer.render(scene, cam);
            if (firstFrame) {
              firstFrame = false;
              route.classList.add("fr-3d"); // 首帧已画完才藏 2D 贴纸：瞬时接棒，无双机窗口
            }
          }
          raf = requestAnimationFrame(frame);

          teardown = function () {
            dead = true;
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            route.classList.remove("fr-3d");
            scene.traverse(function (n) {
              if (n.isMesh) {
                n.geometry.dispose();
                if (n.material.map) n.material.map.dispose();
                n.material.dispose();
              }
            });
            renderer.dispose();
            renderer.forceContextLoss();
            canvas.remove();
            teardown = null;
          };
        },
        undefined,
        function () {},
      );
    }
  }

  if (mql.matches) boot();
  mql.addEventListener("change", function (e) {
    if (e.matches) boot();
    else if (teardown) teardown();
  });
})();
