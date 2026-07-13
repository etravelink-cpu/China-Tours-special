// Etrips 国安易游 — 目的地分区行程规划（可复用模板）
// 新增子页只需在此对象加一个 key（如 nz / china），list.js 按 ?d= 自动取用
(function(){
  window.REGION_PLANS = window.REGION_PLANS || {};

  window.REGION_PLANS.australia = `
<div class="rp-banner" style="background-image:url('assets/img/hero-sydney.jpg')">
  <div class="rp-banner-in">
    <h1>澳大利亚 · 分区行程规划</h1>
    <div class="rp-sub">Australia Region Tours</div>
    <p class="rp-desc">从悉尼都市地标到乌鲁鲁红土中心，9 大分区一图读懂。点击左侧分区，查看各地核心行程品类与经典连游组合。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav" role="tablist" aria-label="澳洲分区">
      <button type="button" data-rp="0" class="active">悉尼及周边</button>
      <button type="button" data-rp="1" class="">墨尔本及周边</button>
      <button type="button" data-rp="2" class="">昆士兰 · 黄金海岸&布里斯班</button>
      <button type="button" data-rp="3" class="">凯恩斯（大堡礁）</button>
      <button type="button" data-rp="4" class="">圣灵群岛（汉密尔顿岛/艾尔利海滩）</button>
      <button type="button" data-rp="5" class="">珀斯 / 西澳</button>
      <button type="button" data-rp="6" class="">塔斯马尼亚</button>
      <button type="button" data-rp="7" class="">阿德莱德 / 南澳</button>
      <button type="button" data-rp="8" class="">乌鲁鲁 / 北领地</button>
  </nav>
  <div class="rp-content">
    <div class="rp-panel active" data-rp="0">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">一、悉尼及周边</h3>
  <p style="color: #666; margin: 0 0 16px 0;">新南威尔士州核心门户，澳洲入境枢纽，兼顾城市地标、蓝山自然遗产、海洋生态与酒庄休闲，一日游产品成熟、班期密集，适配全类型游客。</p>

  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead>
      <tr style="background: #279EE6; color: #fff;">
        <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
        <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
        <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
        <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">悉尼网红地标一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">覆盖悉尼海港、歌剧院、岩石区等核心网红地标，一站式打卡城市名片</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天出发，4人成团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、行程紧凑的观光客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蓝山有氧一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">三姐妹峰、峡谷观景、轻量徒步，纯自然经典观光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">预算有限、偏好自然景观</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">复古铁路蓝山风光一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">复古蒸汽火车+回音谷+Leura英伦小镇，含澳式Billy Tea体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日常可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">怀旧爱好者、小镇休闲客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蓝山有氧+动物园精品小团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蓝山核心景观+澳洲本土动物园，11人封顶精品小团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">家庭亲子、自然+动物双需求</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蓝山日落+观星精品小团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">下午出发，观赏蓝山日落金辉，夜间专业向导带队观星讲解，一价全含</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每周二/四/六/日出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">情侣、摄影爱好者、深度体验客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">观鲸游船（多档位）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2小时快捷/2.5小时快艇/4小时含餐三档可选，近海观赏座头鲸迁徙</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5-11月天天发船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全年龄段、海洋爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">史蒂芬港观海豚一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北上史蒂芬港出海观赏野生海豚群，海滨休闲，一价全含</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每周二/四/日出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">家庭出游、海滨慢游客群</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">猎人谷品酒豪华之旅</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">澳洲老牌葡萄酒产区，多家酒庄品鉴，搭配乡村美食与田园风光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日常可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">红酒爱好者、情侣度假</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">悉尼数字沉浸娱乐乐园</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">沉浸式数字冒险娱乐，室内项目不受天气影响</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日常可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亲子家庭、雨天备选、年轻客群</td></tr>
    </tbody>
  </table>

  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3天经典入门款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 悉尼网红地标一日游 → Day2 蓝山有氧+动物园精品小团 → Day3 4小时含餐观鲸游船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途停留、首次到访、无班期限制</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2天周末精华款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 蓝山日落+观星精品小团 → Day2 史蒂芬港观海豚一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">本地周末游、小众深度体验</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5天深度全景款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 网红地标 → Day2 猎人谷品酒 → Day3 史蒂芬港观海豚 → Day4 复古铁路蓝山 → Day5 蓝山日落观星</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">长停留、全品类深度体验</td></tr>
    </tbody>
  </table>

  <!-- 墨尔本及周边 -->
    </div>
    <div class="rp-panel" data-rp="1">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">二、墨尔本及周边</h3>
  <p style="color: #666; margin: 0 0 16px 0;">维多利亚州首府、澳洲文艺之都，周边坐拥大洋路世界海岸奇观、菲利普岛萌宠、复古蒸汽火车等王牌IP，城市人文与自然景观兼具。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">市区文艺观光一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">弗林德斯街车站、霍西尔涂鸦巷、州立图书馆、维多利亚女王市场、雅拉河南岸夜景</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天可发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、文艺爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">大洋路海岸奇观一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">十二门徒岩、洛克阿德峡谷、小红帽灯塔、洛恩小镇，世界顶级海岸公路</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">所有到访游客、摄影爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">大洋路深度两日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">加阿波罗湾日落、雨林徒步、考拉寻踪，避开当日往返车程疲劳</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每周固定班期/4人成团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度体验、家庭慢游</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蒸汽小火车+企鹅岛一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">普芬比利复古森林蒸汽火车、Maru动物园互动、菲利普岛小企鹅归巢</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亲子家庭、年轻游客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亚拉河谷品酒一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">多家精品酒庄品鉴、田园风光，可选搭配日出热气球</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日常可订，周末班次密集</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">红酒爱好者、商务休闲</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">莫宁顿半岛度假一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布莱顿彩虹小屋、亚瑟王座缆车、半岛酒庄、海角灯塔</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">周末热门，平日可定制</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">本地度假、拍照打卡</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3天经典入门款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 市区文艺观光 → Day2 大洋路一日游 → Day3 蒸汽小火车+企鹅岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、短途停留</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5天深度全景款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 市区 → Day2-3 大洋路2日深度 → Day4 亚拉河谷品酒 → Day5 莫宁顿半岛休闲</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">长停留、全品类体验</td></tr>
    </tbody>
  </table>

  <!-- 昆士兰 -->
    </div>
    <div class="rp-panel" data-rp="2">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">三、昆士兰 · 黄金海岸&布里斯班</h3>
  <p style="color: #666; margin: 0 0 16px 0;">昆士兰州东南核心，布里斯班为州府门户，黄金海岸是南半球顶级度假海岸，主打主题乐园、阳光海滩、雨林探秘与动物互动，亲子客群为主力。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布里斯班市区+龙柏考拉一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">南岸公园、库塔山观景、龙柏考拉动物园（可抱考拉合影）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、动物爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">黄金海岸城市观光一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冲浪者天堂、Q1星空观景塔、水陆鸭子船、喂鹈鹕体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途打卡、家庭休闲</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">主题乐园单园/联票</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">华纳兄弟电影世界、梦幻世界、海洋世界、Wet'n'Wild水上乐园，可搭配接送</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">园区每日开放</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亲子家庭、年轻游乐爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">可伦宾动物园+农庄体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">可伦宾野生动物园、抱考拉喂袋鼠、天堂农庄澳式牧场秀</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亲子家庭、澳式文化体验</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">春溪雨林萤火虫夜游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">春溪国家公园、蓝光萤火虫洞、天然桥瀑布</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日日落出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">自然爱好者、年轻客群</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">黄金海岸观鲸游船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">出海观赏座头鲸迁徙，搭配海岸观光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5-10月天天发船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">海洋爱好者、季节限定体验</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日精华款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 布里斯班市区+龙柏考拉 → Day2 黄金海岸主题乐园 → Day3 春溪雨林萤火虫夜游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途度假、年轻客群</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日亲子度假款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 布里斯班市区 → Day2-3 双主题乐园 → Day4 可伦宾动物园+农庄 → Day5 海滨自由休闲</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">家庭亲子、长假度假</td></tr>
    </tbody>
  </table>

  <!-- 凯恩斯 -->
    </div>
    <div class="rp-panel" data-rp="3">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">四、凯恩斯（大堡礁）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">大堡礁北部门户，全球罕见同时坐拥两处世界自然遗产（大堡礁+热带雨林）的城市，玩法成熟、交通便利，是大众体验大堡礁的首选目的地。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">外堡礁出海一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">摩尔礁/阿金考特礁外海平台，含浮潜、玻璃底船、半潜水艇，可选深潜/海底漫步</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全年龄段、潜水爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">绿岛近礁休闲一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">近岸珊瑚沙岛，沙滩+浮潜结合，行程轻松风浪小</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亲子家庭、老人小孩、恐水休闲客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">库兰达雨林一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Skyrail空中缆车上山、百年观光火车返程，雨林小镇、水陆战车、蝴蝶园</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全年龄段、自然文化爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">戴恩树雨林深度一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">世界最古老热带雨林、莫斯曼峡谷、原住民文化体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度自然玩家、文化爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">极限体验单项</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">热带雨林热气球日出、高空跳伞、大堡礁海底漫步</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日多班次</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">年轻游客、极限运动爱好者</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日经典入门款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 外堡礁出海 → Day2 库兰达雨林 → Day3 市区海滨休闲</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、短途经典打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">4日深度体验款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 外堡礁 → Day2 绿岛近礁 → Day3 库兰达雨林 → Day4 热气球/跳伞极限体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度游玩、年轻体验客</td></tr>
    </tbody>
  </table>

  <!-- 圣灵群岛 -->
    </div>
    <div class="rp-panel" data-rp="4">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">五、圣灵群岛（汉密尔顿岛/艾尔利海滩）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">大堡礁核心精华区，坐拥心形礁、白天堂沙滩两大世界级IP，水质与景观优于凯恩斯，主打高端海岛度假、浪漫蜜月与小众深度体验。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">白天堂沙滩+希尔湾一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯白硅砂沙滩、希尔湾观景台、潮汐沙画景观，沙滩浮潜</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">所有到访游客、摄影爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">哈迪外堡礁浮潜一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">外堡礁平台浮潜、深潜、水下观景舱，珊瑚与鱼类更原始</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">潜水爱好者、深度海洋体验</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">心形礁空中观光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">观光飞机/直升机，空中俯瞰心形礁、白天堂沙滩全景</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日多班次，天气许可即飞</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">情侣蜜月、高端体验客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">汉密尔顿岛休闲度假</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">猫眼海滩、高尔夫车环岛、独树山日落、日落帆船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">岛上项目可单订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">高端度假、蜜月情侣</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">出海海钓/日落帆船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深海钓鱼现钓现做、黄昏香槟帆船巡游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班次</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">美食爱好者、浪漫体验客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日海岛精华款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 白天堂沙滩+希尔湾 → Day2 哈迪外堡礁浮潜 → Day3 心形礁空中观光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、核心打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">4日度假深度款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 白天堂+外堡礁 → Day2 空中观光 → Day3 汉密尔顿岛环岛 → Day4 日落帆船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蜜月度假、慢节奏休闲</td></tr>
    </tbody>
  </table>

  <!-- 珀斯/西澳 -->
    </div>
    <div class="rp-panel" data-rp="5">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">六、珀斯 / 西澳</h3>
  <p style="color: #666; margin: 0 0 16px 0;">西澳大利亚州首府，印度洋海岸城市，以极致小众的自然奇观为核心，分北线（沙漠奇石）、南线（酒庄海岸）两大线路，适合深度自然玩家。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">罗特尼斯岛一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短尾矮袋鼠（Quokka）自拍、环岛骑行、纯白果冻海</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">渡轮天天出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全年龄段、网红打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北线奇观一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">尖峰石阵、兰斯林白沙丘滑沙、塞万提斯龙虾餐</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">自然奇观爱好者、摄影打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">波浪岩一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">世界第八大奇观波浪岩、原住民岩画、约克小镇</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">地质爱好者、小众深度游</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">玛格丽特河品酒两日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西澳顶级葡萄酒产区、酒庄品鉴、冲浪海滩、洞穴探险</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每周固定班期/4人成团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">红酒爱好者、海滨度假</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">南线深度多日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">奥尔巴尼、埃斯佩兰斯、幸运湾袋鼠、巨人谷树顶步道</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3-5日定制/固定团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度自然玩家、全景游</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日珀斯周边精华</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 罗特尼斯岛 → Day2 尖峰石阵北线 → Day3 波浪岩</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途停留、核心奇观打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日西澳南线深度</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 珀斯市区 → Day2-3 玛格丽特河 → Day4 奥尔巴尼 → Day5 埃斯佩兰斯</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">长停留、深度自然游</td></tr>
    </tbody>
  </table>

  <!-- 塔斯马尼亚 -->
    </div>
    <div class="rp-panel" data-rp="6">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">七、塔斯马尼亚</h3>
  <p style="color: #666; margin: 0 0 16px 0;">澳洲最南端“世界尽头”，全岛近乎一半面积为世界遗产，以荒野海岸、原始雨林、珍稀萌宠、冬季南极光为特色，主打环岛多日深度游。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">霍巴特周边一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">惠灵顿山全景、里士满古镇、萨拉曼卡市集（周六限定）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日常可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途游客、美食文艺爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布鲁尼岛美食一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">生蚝农场、奶酪工坊、灯塔、荒野海岸</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">美食爱好者、小众休闲客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">酒杯湾+菲欣纳两日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">酒杯湾观景台、蜜月湾、火焰湾橙红巨石、白沙滩</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2日1晚，固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">摄影爱好者、自然深度玩家</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">摇篮山荒野两日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">摇篮山圣克莱尔湖国家公园、多芬湖徒步、雨林秘境</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2日1晚，固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">徒步爱好者、荒野自然玩家</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">环岛全景多日团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">霍巴特+朗塞斯顿+酒杯湾+摇篮山+火焰湾全岛精华</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5-7日固定团，可定制</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、全景深度游</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">季节限定体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冬季（6-8月）南极光追猎、夏季海鲜生蚝季</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">对应季节开放</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">摄影爱好者、季节体验客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日环岛精华款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 霍巴特 → Day2 布鲁尼岛 → Day3 酒杯湾 → Day4 摇篮山 → Day5 朗塞斯顿</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、核心景点全覆盖</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7日深度环岛款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日精华基础上，增加火焰湾、斯坦利、塔斯曼半岛深度体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度游玩、全岛全景</td></tr>
    </tbody>
  </table>

  <!-- 阿德莱德/南澳 -->
    </div>
    <div class="rp-panel" data-rp="7">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">八、阿德莱德 / 南澳</h3>
  <p style="color: #666; margin: 0 0 16px 0;">南澳大利亚州首府，澳洲“美酒美食之都”，周边坐拥袋鼠岛生态秘境与芭萝莎顶级产区，是澳洲酒旅与海岛生态的核心目的地。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">芭萝莎酒庄一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">奔富等顶级酒庄品鉴、德国汉多夫小镇、田园风光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">红酒爱好者、商务休闲</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">袋鼠岛生态一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">海豹湾海狮、小撒哈拉滑沙、神奇岩石、野生考拉袋鼠</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">自然生态爱好者、亲子家庭</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">袋鼠岛深度两日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">加弗林德斯蔡斯国家公园、旗舰拱门、日落星空体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2日1晚，固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度自然玩家、摄影爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">阿德莱德市区一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">中央市场、蓝道购物城、格莱内尔格海滩</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日常可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">休闲观光、美食探店客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">大洋路西段衔接游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">甘比尔山蓝湖、洞穴花园、大洋路西段海岸</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">可定制衔接</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">跨城连游、自驾环线客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日南澳精华款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 市区观光 → Day2 芭萝莎酒庄 → Day3 袋鼠岛一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途停留、酒+生态双体验</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">4日深度体验款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 市区+芭萝莎 → Day2-3 袋鼠岛两日深度 → Day4 返程休闲</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度生态、摄影创作</td></tr>
    </tbody>
  </table>

  <!-- 乌鲁鲁/北领地 -->
    </div>
    <div class="rp-panel" data-rp="8">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">九、乌鲁鲁 / 北领地</h3>
  <p style="color: #666; margin: 0 0 16px 0;">澳洲红土中心，世界文化与自然双遗产，以艾尔斯岩巨石、原住民文化、沙漠星空为核心，是澳洲标志性的深度文化与自然体验目的地。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">乌鲁鲁经典一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日出观景、卡塔丘塔风之谷徒步、原住民文化中心</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、经典打卡客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">乌鲁鲁日落+夜间体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">日落香槟、寂静之声星空晚宴、原野星光艺术展</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每晚开放</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">高端度假、浪漫体验、摄影爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">帝王谷一日/两日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">帝王谷边缘徒步、红土峡谷奇观，可选沙漠过夜</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">徒步爱好者、深度自然玩家</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">红土中心多日团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">乌鲁鲁+卡塔丘塔+帝王谷+爱丽丝泉全景</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3-5日固定团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全景深度玩家、内陆探索客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">原住民文化体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">丛林徒步、点画艺术、原住民美食、星空讲解</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">可定制搭配</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">文化爱好者、深度体验客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2日经典打卡款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 乌鲁鲁日出+卡塔丘塔徒步 → Day2 日落+原野星光晚宴</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途停留、地标打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日深度体验款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 乌鲁鲁经典一日 → Day2 帝王谷徒步 → Day3 原住民文化+星空晚宴</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度游玩、文化自然双体验</td></tr>
    </tbody>
  </table>
    </div>
  </div>
</div>`;

  window.REGION_PLANS.nz = `
<div class="rp-banner" style="background-image:url('assets/img/nz-hero.webp')">
  <div class="rp-banner-in">
    <h1>新西兰 · 分区行程规划</h1>
    <div class="rp-sub">New Zealand Region Tours</div>
    <p class="rp-desc">从北岛火山地热到南岛冰川峡湾，3 大分区一图读懂。点击左侧分区，查看各地核心行程品类与经典连游组合。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav" role="tablist" aria-label="nz 分区">
      <button type="button" data-rp="0" class="active">新西兰北岛</button>
      <button type="button" data-rp="1" class="">新西兰南岛</button>
      <button type="button" data-rp="2" class="">南北岛连线（北岛+南岛）</button>
  </nav>
  <div class="rp-content">
    <div class="rp-panel active" data-rp="0">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">一、新西兰北岛</h3>
  <p style="color: #666; margin: 0 0 16px 0;">新西兰门户枢纽，以奥克兰为核心，坐拥火山地热、萤火虫洞、霍比特人村等世界级IP，融合毛利文化、电影奇幻与海岛休闲，是新西兰入境首站的经典选择。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">奥克兰市区+海港一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">伊甸山火山口俯瞰全城、天空塔观光、使命湾海滨、高架桥港游艇码头</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、入境适应、休闲观光客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">怀托摩萤火虫洞+霍比特人村一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">乘船漂流地下星空萤火虫洞、《指环王》霍比特村44座洞屋+绿龙酒馆，中土世界双IP连线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">电影爱好者、亲子家庭、必打卡游客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">罗托鲁瓦地热毛利文化一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Wai-O-Tapu地热公园香槟池、诺克斯夫人间歇泉、毛利文化村Hangi餐、波利尼西亚温泉</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">文化爱好者、自然奇观、温泉休闲客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">岛屿湾观海豚一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">派希亚出海观赏野生宽吻海豚、岩中洞穿洞、岛屿湾144座群岛风光，可下水浮潜</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">海洋爱好者、家庭亲子、海滨度假客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">怀赫科岛品酒一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">渡轮前往葡萄酒之岛，多家精品酒庄品鉴黑皮诺、海滨步道、橄榄园与艺术画廊</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日多班渡轮</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">红酒爱好者、文艺休闲、本地度假客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">汤加里罗高山穿越一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">世界十大徒步路线之一，穿越火山地貌、翡翠湖、红火山口，《指环王》末日火山取景地</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">夏季每日发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">徒步爱好者、深度自然玩家、电影打卡客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3日精华入门款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 奥克兰市区观光 → Day2 怀托摩萤火虫洞+霍比特人村 → Day3 罗托鲁瓦地热文化</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途停留、北岛核心三IP打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日深度全景款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 奥克兰 → Day2 怀赫科岛品酒 → Day3 萤火虫洞+霍比特村 → Day4 罗托鲁瓦地热温泉 → Day5 岛屿湾观海豚</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">单岛深度、自然文化全覆盖</td></tr>
    </tbody>
  </table>

  <!-- 二、新西兰南岛 -->
    </div>
    <div class="rp-panel" data-rp="1">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">二、新西兰南岛</h3>
  <p style="color: #666; margin: 0 0 16px 0;">新西兰自然风光核心精华区，以皇后镇为冒险中心，串联冰川雪山、星空湖泊、峡湾海岸与童话小镇，是全球顶级的自然观光与户外体验目的地。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇后镇休闲一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Skyline天空缆车+山顶自助、TSS蒸汽船游瓦卡蒂普湖、瓦尔特高原牧场剪羊毛秀</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全年龄段、休闲观光、家庭亲子</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">米尔福德峡湾一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">世界第八大奇观，乘游船穿越峡湾，观赏瀑布直泻、雪山悬崖、海豹与海豚，沿途经镜湖、荷马隧道</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">所有到访游客、自然奇观爱好者</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">库克山冰川湖泊一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">普卡基奶蓝色湖泊、胡克谷步道徒步、塔斯曼冰川观景，可选直升机冰川降落体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">自然摄影、徒步爱好者、冰川体验客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">蒂卡波湖星空一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">好牧羊人教堂、奶蓝色蒂卡波湖、约翰山天文台、夜间专业向导观星，世界首个暗黑天空保护区</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日可订</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">摄影爱好者、情侣、星空体验客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">瓦纳卡+箭镇休闲一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">瓦纳卡孤独的树、湖畔轻徒步、箭镇复古淘金小镇，秋季金黄落叶绝美，可选跳伞体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">天天发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">休闲度假、拍照打卡、年轻客群</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">凯库拉观鲸一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">出海近距离观赏抹香鲸、毛皮海豹、海豚，可选龙虾餐，世界顶级观鲸圣地</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日多班次</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">海洋爱好者、美食游客、家庭亲子</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">但尼丁苏格兰风情一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">世界最陡街道鲍德温街、奥塔哥大学、火车站古建筑、皇家信天翁中心、小蓝企鹅归巢</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">每日固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">文化爱好者、动物观赏、慢游客群</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日精华环线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 皇后镇休闲 → Day2 米尔福德峡湾 → Day3 瓦纳卡+箭镇 → Day4 库克山冰川 → Day5 蒂卡波湖星空</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次到访、南岛核心自然精华</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7日深度环岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Day1 基督城出发 → Day2 蒂卡波 → Day3 库克山 → Day4 瓦纳卡 → Day5 皇后镇 → Day6 米尔福德峡湾 → Day7 但尼丁返程</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">长停留、南岛全景深度体验</td></tr>
    </tbody>
  </table>

  <!-- 三、南北岛连线 -->
    </div>
    <div class="rp-panel" data-rp="2">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">三、南北岛连线（北岛+南岛）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">一次出行覆盖新西兰双岛精华，串联北岛火山地热文化与南岛冰川峡湾星空，搭配境内航班高效衔接，是首次到访新西兰的全景首选方案。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心连线方案</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">交通衔接</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">8日精华连线（北3南5）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北岛：奥克兰→霍比特人村+萤火虫洞→罗托鲁瓦地热；南岛：皇后镇→米尔福德峡湾→瓦纳卡→库克山→蒂卡波</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">罗托鲁瓦/奥克兰飞皇后镇，境内航班1.5小时</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">假期有限、首次到访、双岛打卡客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">12日全景连线（北4南8）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北岛：奥克兰→怀赫科岛→霍比特+萤火虫洞→罗托鲁瓦；南岛：皇后镇→米尔福德→瓦纳卡→库克山→蒂卡波→凯库拉→基督城</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">奥克兰飞基督城/皇后镇，南岛走环线不走回头路</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度游玩、全景体验、长假期游客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">14日深度全览（北5南9）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北岛增加岛屿湾/汤加里罗徒步；南岛增加但尼丁、奥马鲁企鹅、西海岸冰川，覆盖东西南北全线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">南北岛境内航班衔接，南岛全程环岛自驾/跟团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度玩家、摄影创作、超长假期</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">规划实用贴士</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">维度</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 80%;">说明</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">最佳季节</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">11月-次年4月为春夏暖季，户外活动黄金期；11-12月鲁冰花季，南岛湖畔花海盛放；6-8月为滑雪季</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">人群适配</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">亲子家庭优先北岛轻松项目+南岛湖景休闲；年轻客群增加跳伞、蹦极、徒步等极限体验；长者优选观景火车、温泉、小镇慢游</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">衔接建议</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">建议北岛入境玩3-4天，再飞南岛深度游览，最后从基督城/皇后镇返程；境内航班单程约1.5小时，班次密集</td></tr>
    </tbody>
  </table>
    </div>
  </div>
</div>`;

  window.REGION_PLANS.asia = `
<div class="rp-banner" style="background-image:url('assets/img/destinations/asia.jpg')">
  <div class="rp-banner-in">
    <h1>亚洲 · 分区行程规划</h1>
    <div class="rp-sub">Asia Region Tours</div>
    <p class="rp-desc">日本、韩国、中国台湾到东南亚，4 大分区尽在其中。点击左侧分区，查看各地核心行程品类与经典连游组合。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav" role="tablist" aria-label="asia 分区">
      <button type="button" data-rp="0" class="active">日本</button>
      <button type="button" data-rp="1" class="">韩国</button>
      <button type="button" data-rp="2" class="">中国台湾</button>
      <button type="button" data-rp="3" class="">东南亚（越南 / 新马）</button>
  </nav>
  <div class="rp-content">
    <div class="rp-panel active" data-rp="0">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">一、日本</h3>
  <p style="color: #666; margin: 0 0 16px 0;">亚洲热门短途目的地，主打纯玩无购物体验，覆盖本州都市风光、北海道雪景与节日限定主题，行程节奏轻松、配套成熟，适配家庭度假、年轻出行与节日赏景等多元需求。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩缤纷日本6日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全程纯玩无购物，覆盖东京、大阪、京都等核心都市，串联经典地标与日式风情，短途出行高性价比首选</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2026年多班期滚动发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次赴日、短途假期、家庭休闲客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩日本北海道5日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北海道深度纯玩，冬季赏雪泡温泉、夏季赏花看花海，聚焦道央核心风光，行程轻松不赶路</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冬夏旺季固定发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">度假休闲、雪景/花海爱好者、慢游客群</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩东京富士山北海道10日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">本州+北海道双岛连线，一次打卡东京都市、富士山圣景与北海道自然风光，纯玩全程无购物</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">旺季固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">时间充裕、想一次玩遍双岛的深度游客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">白色圣诞浪漫新年缤纷日本9日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">金牌纯玩品质，圣诞/新年专属排期，覆盖白川乡合掌村、都市节日灯饰与冰雪景观，打造冬日节日浪漫体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2026年圣诞/新年季固定发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">情侣出行、节日度假、摄影爱好者</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">6日本州经典款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">缤纷日本6日纯玩 → 可加1-2天东京/大阪自由活动</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">一周假期、首次赴日、经典打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">10日双岛深度款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">东京富士山+北海道10日纯玩 → 可延伸关西地区</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">长假期、深度体验、一次玩透</td></tr>
    </tbody>
  </table>

  <!-- 二、韩国 -->
    </div>
    <div class="rp-panel" data-rp="1">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">二、韩国</h3>
  <p style="color: #666; margin: 0 0 16px 0;">短途休闲热门目的地，聚焦首尔都市潮流与江原道自然风光，兼顾购物美食、人文古迹与山海度假，行程轻松灵活，适合短途假期与年轻客群。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">韩国经典6日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首尔+周边经典连线，覆盖景福宫、明洞、南怡岛等核心地标，兼顾美食、购物与人文观光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2026年多班期发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次赴韩、购物美食爱好者、休闲度假客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩首尔江原道5日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全程纯玩无购物，首尔都市潮流+江原道山海风光，冬季可滑雪、夏季可看海，体验丰富</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">四季固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">年轻客群、品质出行、短途度假</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">5日纯玩休闲款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首尔江原道5日纯玩 → 可加首尔自由活动</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途假期、品质出行、购物+休闲</td></tr>
    </tbody>
  </table>

  <!-- 三、中国台湾 -->
    </div>
    <div class="rp-panel" data-rp="2">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">三、中国台湾</h3>
  <p style="color: #666; margin: 0 0 16px 0;">主打环岛观光与纯玩体验，设多天数梯度可选，覆盖台北都市、东部海岸、阿里山日月潭与垦丁南国风光，行程成熟、语言无障碍，适配全年龄段游客。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">玩转台湾·轻松环岛6日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">经典环岛基础款，覆盖台北、台中、高雄、台东核心城市与地标，节奏适中，快速领略台湾全境风情</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">多班期滚动发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次赴台、短途假期、休闲观光客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">玩转台湾·精华环岛7日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">在6日基础上增加日月潭/阿里山核心自然景点，兼顾都市与山水，是环岛游的热门性价比之选</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">固定班期发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">家庭出行、想兼顾自然与都市的游客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">玩转台湾·全景环岛8日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度环岛全覆盖，增加垦丁、花东纵谷等小众精华路段，行程更从容，不留遗憾打卡全境风光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">固定班期发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">时间充裕、想深度玩透台湾的游客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩宝岛风情5/6/8日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全程纯玩无购物，多天数可选，主打台湾本土人文、美食与自然深度体验，行程品质更高</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">多班期可选</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">追求品质、拒绝购物、深度体验客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7日精华环岛款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">精华环岛7日 → 可加台北1-2天自由活动</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">一周假期、首次赴台、高性价比首选</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">8日纯玩全景款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩宝岛风情8日 → 深度覆盖东西岸全境</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">品质出行、深度游玩、全年龄段适配</td></tr>
    </tbody>
  </table>

  <!-- 四、东南亚（越南/新马） -->
    </div>
    <div class="rp-panel" data-rp="3">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">四、东南亚（越南 / 新马）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">热带滨海与美食度假胜地，主打纯玩品质与豪华美食体验，覆盖越南山海奇观与新马双城都市风情，行程温暖轻松，适合反季度假与美食爱好者。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 38%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">出团规则</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">适配人群</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">越南双龙湾豪华美食6日</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">打卡下龙湾、陆龙湾双世界遗产，全程豪华住宿，深度体验越南地道美食与法式风情</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2026年固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">美食爱好者、度假休闲、反季避寒客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩新加坡马来西亚6日（新进马出）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全程纯玩无购物，新加坡花园城市+马来西亚吉隆坡/马六甲双城连线，新进马出不走回头路</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">多班期滚动发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次赴东南亚、家庭休闲、都市观光客</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">纯玩马来西亚新加坡6日（马进新出）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">同线路反向行程，马进新出灵活选择，纯玩无购物，兼顾南洋风情、都市繁华与自然景观</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">多班期滚动发团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">灵活搭配返程、品质出行的游客</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">6日新马双城款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">新马纯玩6日 → 可加新加坡自由活动</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">短途假期、首次东南亚、都市休闲</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">6日越南美食度假款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">越南双龙湾豪华美食6日 → 可延伸海滨度假</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">美食度假、反季避寒、慢节奏休闲</td></tr>
    </tbody>
  </table>
    </div>
  </div>
</div>`;

  window.REGION_PLANS.europe = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/europe.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/europe-santorini.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/europe-colosseo.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/europe-lofoten.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>欧洲 · 分区行程规划</h1>
    <div class="rp-sub">Europe Region Tours</div>
    <p class="rp-desc">从西欧都市到北欧极光，4 大分区全景覆盖。点击左侧分区，查看各地核心行程品类与经典连游组合。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav" role="tablist" aria-label="europe 分区">
      <button type="button" data-rp="0" class="active">Last Minute 限时特惠团</button>
      <button type="button" data-rp="1" class="">欧洲大巴环线（6条彩色线路）</button>
      <button type="button" data-rp="2" class="">精品多日小包团</button>
      <button type="button" data-rp="3" class="">当地一日游（Day Trips）</button>
  </nav>
  <div class="rp-content">
    <div class="rp-panel active" data-rp="0">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">一、Last Minute 限时特惠团</h3>
  <p style="color: #666; margin: 0 0 16px 0;">圣诞/新年档期限时特惠青年团，余位有限、先到先得，覆盖西欧、北欧、希腊、极光、伊比利亚半岛多条热门线路，直降优惠力度大，适合时间灵活、追求高性价比的年轻客群。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 26%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 36%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 18%;">团期与余位</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">特惠价格</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西欧4日青年团（法比荷德卢）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">串联法国、比利时、荷兰、德国、卢森堡五国核心地标，短途快速打卡西欧精华，青年专属团型氛围轻松</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2025/12/20-12/23<br>剩余2名额</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€421<br><span style="color:#999;text-decoration:line-through;font-size:12px;">原价 €468</span></td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北欧四国6日青年团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">覆盖北欧四国核心城市与自然风光，冬季体验圣诞氛围与冰雪景观，青年团节奏灵活、社交属性强</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2025/12/21-12/26<br>剩余3名额</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€583起<br><span style="color:#999;text-decoration:line-through;font-size:12px;">原价 €648起</span></td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">希腊经典6日青年团（雅典+圣托里尼+迈泰奥拉）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">雅典卫城古迹+圣托里尼蓝白小镇+迈泰奥拉天空之城，三大希腊王牌IP全覆盖，跨年档期专属</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2025/12/26-12/31<br>剩余1名额</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€646<br><span style="color:#999;text-decoration:line-through;font-size:12px;">原价 €718</span></td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">拉普兰7日极光团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">圣诞老人村、破冰船、帝王蟹餐、狗拉雪橇、雪地摩托追极光、极地VR火车、免费驯鹿农场，一站式全体验极地项目</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2025/12/27-2026/01/02<br>剩余1名额</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1142<br><span style="color:#999;text-decoration:line-through;font-size:12px;">原价 €1298</span></td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">伊比利亚半岛9日精品小团（西葡，里斯本出发）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西班牙+葡萄牙全景深度，里斯本、马德里、巴塞罗那、安达卢西亚全涵盖，体验伊比利亚风情与美食</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">2025/12/31-2026/01/08<br>剩余2名额</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1494<br><span style="color:#999;text-decoration:line-through;font-size:12px;">原价 €1698</span></td></tr>
    </tbody>
  </table>

  <!-- 二、欧洲大巴环线（6条彩色线路） -->
    </div>
    <div class="rp-panel" data-rp="1">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">二、欧洲大巴环线（6条彩色线路）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">欧洲经典大巴环游产品，按天计价、灵活选天数，全程包含大巴交通、酒店住宿与双语导游服务，6条彩色线路覆盖全欧核心区域，性价比高、适配自由规划行程的游客。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心线路一览</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 18%;">线路名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 42%;">覆盖国家与核心城市</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">核心特色</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">参考价格</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Pink Line 粉线<br>北欧线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">丹麦、挪威、瑞典<br>哥本哈根、奥斯陆、卑尔根、弗洛姆、歌德堡、柏林</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">峡湾风光、北欧城市、松恩峡湾小火车</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;" rowspan="6">€108 /天起<br>含大巴、酒店、双语导游</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Purple Line 紫线<br>西欧线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">德国、荷兰、比利时、法国、卢森堡<br>巴黎、阿姆斯特丹、布鲁日、布鲁塞尔、科隆、法兰克福</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西欧五国精华、经典地标全覆盖</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Red Line 红线<br>法瑞意线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">法国、瑞士、意大利、摩纳哥<br>巴黎、琉森、少女峰、米兰、罗马、摩纳哥</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">雪山湖景+文艺复兴+浪漫都市</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Yellow Line 黄线<br>西葡线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西班牙、葡萄牙<br>马德里、巴塞罗那、瓦伦西亚、马拉加、里斯本、托莱多</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">阳光海岸、伊比利亚历史风情</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Green Line 绿线<br>中东欧线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">瑞士、奥地利、列支敦士登、匈牙利、捷克、德国<br>柏林、布拉格、维也纳、布达佩斯、慕尼黑、琉森</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">文艺小镇、音乐之都、多瑙河风光</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Blue Line 蓝线<br>西南欧线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">瑞士、法国、西班牙<br>法兰克福、科尔马、安纳西、日内瓦、琉森、巴塞罗那</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">法兰西风情+阿尔卑斯+地中海</td></tr>
    </tbody>
  </table>

  <!-- 三、精品多日小包团 -->
    </div>
    <div class="rp-panel" data-rp="2">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">三、精品多日小包团</h3>
  <p style="color: #666; margin: 0 0 16px 0;">精品小团模式，全程配备双语导游，行程深度、体验更佳，覆盖冰岛、巴尔干、希腊、伊比利亚、东欧等热门目的地，适合追求品质、不想赶大巴节奏的游客。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 26%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 36%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 18%;">出发说明</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">价格</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冰岛经典6日团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">黄金圈、蓝湖温泉、南岸瀑布、黑沙滩等核心地标，冰岛入门经典线路，双语导游全程陪同</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">雷克雅未克出发<br>多固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€998</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冰岛环岛8日团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">环岛一号公路全景，覆盖火山、冰川、瀑布、冰河湖全地貌，深度玩转冰岛全境</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">雷克雅未克出发<br>固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1758</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">巴尔干9日精品小团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">克罗地亚+斯洛文尼亚+波黑+塞尔维亚四国连线，亚得里亚海海岸+中世纪古城+东欧人文</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布达佩斯出发<br>固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1198</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">希腊8日精品小团</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">雅典+迈泰奥拉+德尔菲+圣托里尼+扎金索斯，古迹、海岛、天空之城全覆盖，深度希腊体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">雅典出发<br>固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1798</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">伊比利亚半岛9日小团（巴塞罗那出发）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西班牙+葡萄牙深度环游，加泰罗尼亚风情+安达卢西亚阳光+里斯本老城，美食与建筑双重体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">巴塞罗那出发<br>固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1698</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">东欧8日精品小团（匈奥捷斯）</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">匈牙利+奥地利+捷克+斯洛伐克四国连线，布达佩斯多瑙河、维也纳音乐、布拉格童话、CK小镇</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布达佩斯出发<br>固定班期</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€1398</td></tr>
    </tbody>
  </table>

  <!-- 四、当地一日游（Day Trips） -->
    </div>
    <div class="rp-panel" data-rp="3">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">四、当地一日游（Day Trips）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">可灵活搭配自由行或多日团的单日行程，覆盖慕尼黑、法兰克福、瑞士少女峰等热门出发地，含交通与双语导游，省心打卡周边精华景点。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 26%;">行程线路</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 36%;">核心亮点</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 18%;">出发地</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">价格</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">慕尼黑一日游A线<br>新天鹅堡+林德霍夫宫+上阿玛高</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">打卡迪士尼原型新天鹅堡、国王行宫林德霍夫宫、彩绘小镇上阿玛高，巴伐利亚经典精华</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">慕尼黑</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€49</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">慕尼黑一日游B线<br>国王湖+魔法森林</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">德国最美湖泊国王湖、红顶洋葱教堂、魔法森林徒步，阿尔卑斯山自然山水风光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">慕尼黑</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€49</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">少女峰经典一日游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">乘坐登山火车登顶欧洲屋脊，打卡冰宫、斯芬克斯观景台，俯瞰阿尔卑斯雪山全景</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">苏黎世/琉森/因特拉肯</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€285</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">法兰克福一日游A线<br>海德堡+吕德斯海姆+莱茵河游船</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">海德堡古堡老城、莱茵河谷小镇、莱茵河游船观光，体验德国浪漫与莱茵河谷风情</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">法兰克福</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€99</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">法兰克福一日游B线<br>维尔茨堡+罗腾堡童话小镇</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">浪漫之路起点维尔茨堡、中世纪童话小镇罗腾堡，打卡德国最美古镇与巴洛克建筑</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">法兰克福</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">€99</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典连游组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">西欧经典环线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">紫线大巴环线（法德荷比卢）7日 → 可搭配巴黎/阿姆斯特丹当地自由活动</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">首次赴欧、预算友好、多国打卡</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">南欧海岛度假款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">希腊8日精品小团 → 可延伸伊比利亚半岛西葡连线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">度假休闲、海岛+人文双体验</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">北欧极光深度款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">拉普兰7日极光团 → 可搭配北欧四国大巴环线延伸</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冬季出行、极光追猎、极地体验</td></tr>
    </tbody>
  </table>
    </div>
  </div>
  <p style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：埃菲尔铁塔 © Wikimedia (Public Domain)；圣托里尼蓝顶教堂 © Kevin Poh, CC BY 2.0；罗马斗兽场 © FeaturedPics, CC BY-SA 4.0；罗弗敦极光 © Johannes Groll, CC0。</p>
</div>`;

  window.REGION_PLANS.cruise = `
<div class="rp-banner" style="background-image:url('assets/img/destinations/cruise.jpg')">
  <div class="rp-banner-in">
    <h1>邮轮 · 分区行程规划</h1>
    <div class="rp-sub">Cruise Routes</div>
    <p class="rp-desc">短途休闲到国际远洋，3 大航线分区任你选。点击左侧分区，查看各航线核心行程品类与参考价格。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav" role="tablist" aria-label="cruise 分区">
      <button type="button" data-rp="0" class="active">短途休闲航线（2-4晚 澳洲本土出发）</button>
      <button type="button" data-rp="1" class="">中长航线（7-14晚 澳新/南太平洋/昆士兰）</button>
      <button type="button" data-rp="2" class="">国际远洋航线（全球目的地）</button>
  </nav>
  <div class="rp-content">
    <div class="rp-panel active" data-rp="0">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">一、短途休闲航线（2-4晚 澳洲本土出发）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">主打短假期轻松度假，2-4晚短途航程，从悉尼、布里斯班就近出发，覆盖周边海岸、海岛与城市连线，适合周末出行、小长假休闲与邮轮初体验，价格友好、选择丰富。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心航线一览</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">航线主题</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">邮轮与出发信息</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 36%;">核心亮点与停靠</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">参考价格 (AUD)</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">悉尼3晚逍遥游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇家加勒比<br>海洋圣歌号<br>2026.11.20 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全新豪华邮轮，海上休闲度假，全程吃喝玩乐一价包含，适合周末短途放松</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $978/人<br>四人房 $786/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布里斯班3晚逍遥游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇家加勒比<br>海洋量子号<br>2026.11.06 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">量子系列豪华邮轮，丰富娱乐设施与餐饮选择，短途海上度假体验佳</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $783/人<br>四人房 $631/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布里斯班3晚趣味逍遥游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">嘉年华邮轮<br>Carnival Encounter<br>2026.09.11 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">欢乐型邮轮，派对氛围浓厚，适合年轻群体、朋友出行，性价比极高</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $632/人<br>四人房 $400/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布里斯班3晚圣诞逍遥游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">嘉年华邮轮<br>Carnival Encounter<br>2026.12.27 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">圣诞主题航次，节日氛围浓郁，海上跨年度假，适合家庭节日出行</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $673/人<br>四人房 $440/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布里斯班4晚艾尔利海滩航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">嘉年华邮轮<br>Carnival Encounter<br>2027.01.23 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">停靠艾尔利海滩，可衔接大堡礁圣灵群岛游玩，海岛+邮轮双重体验</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $594/人<br>四人房 $377/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">悉尼4晚霍巴特航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">诺唯真邮轮<br>Norwegian Spirit<br>2027.01.06 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">船费已含小费，停靠塔斯马尼亚霍巴特，体验塔州风光与澳南海岸景色</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1536/人<br>单人房 $2348/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">布里斯班-悉尼 2晚连线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">公主邮轮<br>Crown Princess<br>2026.11.02 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">高端舒适型邮轮，两城海上连线，可搭配两地陆地行程，灵活便捷</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $349/人<br>四人房 $276/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">悉尼-布里斯班 2晚连线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">公主邮轮<br>Grand Princess<br>2026.12.09 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">东海岸海上通勤，公主级优质服务，价格亲民，适合搭配东海岸行程</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $224/人<br>四人房 $178/人</td></tr>
    </tbody>
  </table>

  <!-- 二、中长航线（7-14晚 澳新/南太平洋） -->
    </div>
    <div class="rp-panel" data-rp="1">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">二、中长航线（7-14晚 澳新/南太平洋/昆士兰）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">7-14晚中长航程，从悉尼、布里斯班出发，覆盖新西兰南岛峡湾、南太平洋海岛、昆士兰海岸、南澳全景等核心目的地，是长假度假、深度邮轮体验的主流选择，覆盖多家主流邮轮公司不同定位。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心航线一览</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">航线主题</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">邮轮与出发信息</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 36%;">核心亮点与停靠</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">参考价格 (AUD)</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">9晚南太平洋群岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇家加勒比<br>海洋圣歌号<br>2026.11.23 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">停靠维拉港、努美阿、神秘岛，热带海岛风情，海水澄澈，适合休闲度假</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1665/人<br>四人房 $1471/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">9晚新西兰峡湾航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇家加勒比<br>海洋圣歌号<br>2026.12.28 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">停靠皮克顿、基督城，穿越米尔福德峡湾、神奇峡湾、达斯奇峡湾，自然风光顶级</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $3135/人<br>四人房 $3027/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">8晚南太平洋群岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇家加勒比<br>海洋量子号<br>2026.12.12 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">南太平洋经典海岛连线，圣诞假期航次，热带海岛度假氛围浓郁</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1469/人<br>四人房 $1801/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7晚昆士兰海岸航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">皇家加勒比<br>海洋量子号<br>2027.02.19 布里斯班出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">沿昆士兰海岸北上，体验热带海岸风光，夏季航次气候舒适</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1322/人<br>四人房 $1255/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">11晚昆士兰航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">精致邮轮<br>Celebrity Edge<br>2026.12.01 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">高端奢华邮轮，船费含小费，深度游览昆士兰海岸线，服务与餐饮品质出众</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $2550/人<br>四人房 $1874/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">12晚南太平洋群岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">精致邮轮<br>Celebrity Edge<br>2027.01.02 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">高端邮轮体验，船费含小费，深度巡游南太平洋多岛，新年假期专属航次</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $2684/人<br>四人房 $2206/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">10晚南太平洋群岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">嘉年华邮轮<br>Carnival Adventure<br>2027.11.15 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">欢乐型邮轮，高性价比，南太平洋多海岛停靠，适合家庭度假出行</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1069/人<br>四人房 $845/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">9晚南太平洋群岛</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">嘉年华邮轮<br>Carnival Splendor<br>2027.02.04 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">夏季航次，热带海岛度假，娱乐设施丰富，性价比之选</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $971/人<br>四人房 $707/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">11晚南澳全景航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">诺唯真邮轮<br>Norwegian Spirit<br>2027.01.10 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">船费含小费，环游南澳大利亚海岸，深度体验南部海岸风光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $3169/人<br>单人房 $4525/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">9晚昆士兰航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">公主邮轮<br>Grand Princess<br>2026.11.30 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">经典高端邮轮，优质服务与餐饮，北上昆士兰海岸，行程舒适舒缓</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1371/人<br>四人房 $924/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">14晚南澳探索航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">荷美邮轮<br>ms Noordam<br>2026.12.20 悉尼出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">高端典雅邮轮，深度探索南澳大利亚全境，圣诞假期专属长航线</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">三人房 $3327/人<br>四人房 $3273/人</td></tr>
    </tbody>
  </table>

  <!-- 三、国际远洋航线（全球目的地） -->
    </div>
    <div class="rp-panel" data-rp="2">
<h3 style="color: #279EE6; font-size: 20px; margin: 36px 0 8px 0; padding-bottom: 6px; border-bottom: 2px solid #279EE6;">三、国际远洋航线（全球目的地）</h3>
  <p style="color: #666; margin: 0 0 16px 0;">覆盖欧洲、阿拉斯加、东南亚、地中海等全球热门邮轮目的地，包含小型奢华邮轮、顶级远洋邮轮与新锐品牌，适配深度邮轮玩家、环球度假与小众目的地体验需求。</p>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">核心航线一览</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #279EE6; color: #fff;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">航线主题</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 22%;">邮轮与出发信息</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 36%;">核心亮点与停靠</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">参考价格 (AUD)</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7晚土耳其&希腊</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Azamara精钻邮轮<br>Azamara Onward<br>2026.09.12 雅典出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">小型奢华邮轮，深度停靠地中海小众港口，体验爱琴海与土耳其风情</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $3144/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">11晚里斯本-巴塞罗那</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">Azamara精钻邮轮<br>Azamara Onward<br>2026.11.17 里斯本出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">伊比利亚半岛西海岸巡游，小型邮轮停靠小众港口，深度体验伊比利亚文化</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $4873/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">10晚阿拉斯加&加拿大</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冠达邮轮<br>Queen Elizabeth<br>2026.08.10 西雅图出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">顶级英式奢华邮轮，阿拉斯加冰川与加拿大西海岸风光，夏季赏冰川最佳</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1841/人<br>四人房 $1543/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7晚挪威峡湾</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">冠达邮轮<br>Queen Anne<br>2027.09.24 南安普顿出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全新旗舰邮轮，巡游挪威峡湾，体验北欧山海奇观与英式邮轮服务</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1619/人<br>四人房 $1567/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">14晚香港-新加坡</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">荷美邮轮<br>ms Westerdam<br>2026.12.20 香港出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">东南亚南洋航线，串联南海多国港口，圣诞假期航次，体验东南亚风情</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $2889/人<br>四人房 $2442/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">14晚阿拉斯加&加拿大</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">荷美邮轮<br>ms Noordam<br>2027.08.22 西雅图出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度阿拉斯加航线，更长时间体验冰川、峡湾与北美西北海岸风光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1331/人<br>四人房 $2078/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7晚法国/意大利/突尼斯</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">MSC地中海邮轮<br>MSC Euribia<br>2026.12.12 巴塞罗那出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">地中海环线，覆盖南法、意大利与北非突尼斯，体验多元地中海文化</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1013/人<br>四人房 $935/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7晚希腊爱琴海</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">MSC地中海邮轮<br>MSC Sinfonia<br>2026.09.19 巴里出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">爱琴海列岛巡游，打卡希腊多座经典海岛，体验蓝白地中海风情</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1559/人<br>四人房 $1306/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">7晚意/马/西/法地中海</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">MSC地中海邮轮<br>MSC Seaview<br>2027.06.23 那不勒斯出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">地中海四国连线，可上岸游览庞贝、卡普里岛等知名景点，夏季航次体验佳</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $2269/人<br>四人房 $1964/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">6晚百慕大</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">维珍邮轮<br>Valiant Lady<br>2026.10.07 纽约出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">新锐成人向邮轮，主打潮流度假体验，百慕大粉色沙滩与海岛度假</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $1203/人<br>单人房 $1970/人</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">11晚希腊&土耳其</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">维珍邮轮<br>Scarlet Lady<br>2027.07.21 雅典出发</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">潮流奢华邮轮，深度爱琴海与土耳其海岸巡游，夏季度假体验出众</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">双人房 $2813/人<br>单人房 $5026/人</td></tr>
    </tbody>
  </table>
  <h4 style="font-size: 16px; margin: 20px 0 10px 0;">经典选线组合</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead><tr style="background: #f0f7fc; color: #279EE6;">
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 20%;">方案名称</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 55%;">行程安排</th>
      <th style="padding: 10px 12px; text-align: left; font-weight: normal; width: 25%;">适配场景</th>
    </tr></thead>
    <tbody>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">周末短途体验款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">3-4晚悉尼/布里斯班出发短途航线 → 可衔接出发城市1-2天陆地观光</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">小长假、周末出行、邮轮初体验</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">海岛度假休闲款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">9-12晚南太平洋群岛航线 → 可延伸出发城市陆地行程</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">长假度假、家庭出行、热带海岛休闲</td></tr>
      <tr><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">全景深度环球款</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">10+晚国际远洋航线（欧洲/阿拉斯加/东南亚）→ 可搭配目的地陆地深度游</td><td style="border: 1px solid #e0e0e0; padding: 10px 12px; vertical-align: top;">深度邮轮玩家、环球度假、小众目的地体验</td></tr>
    </tbody>
  </table>
    </div>
  </div>
</div>`;
  window.REGION_PLANS.china = `
<div class="rp-banner" style="background-image:url('assets/img/china-map.png')">
  <div class="rp-banner-in">
    <h1>中国 · 分区行程规划</h1>
    <div class="rp-sub">China Region Tours</div>
    <p class="rp-desc">从江南水乡到西北丝路，7 大分区完整呈现。点击左侧分区，查看各地核心行程品类与经典连游组合。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav" role="tablist" aria-label="china 分区">
      <button type="button" data-rp="0" class="active">北京 · 西安（华北）</button>
      <button type="button" data-rp="1" class="">江南 · 上海（华东）</button>
      <button type="button" data-rp="2" class="">九寨 · 张家界 · 云南 · 贵州（西南）</button>
      <button type="button" data-rp="3" class="">新疆 · 西藏 · 青海 · 丝绸之路（西北）</button>
      <button type="button" data-rp="4" class="">长江三峡（游轮专线）</button>
      <button type="button" data-rp="5" class="">山东 · 山西 · 东北 · 河南</button>
      <button type="button" data-rp="6" class="">广东 · 广西 · 福建 · 海南（华南）</button>
      <button type="button" data-rp="7" class="">经典连游组合</button>
  </nav>
  <div class="rp-content">
    <div class="rp-panel active" data-rp="0">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">一、北京 · 西安（华北）</h3>
  <p style="color:#666;margin:0 0 16px 0;">帝都地标与十三朝古都，历史文化核心线，纯玩无购物，班期灵活。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?350.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 北京4日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">故宫、长城、颐和园核心地标</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?350.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?351.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 北京西安6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">北京+西安双古都连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?351.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?352.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 北京西安上海8日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">华北+华东都市连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?352.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?353.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 北京西安上海长江三峡12日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">古都+都市+长江三峡长线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?353.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?354.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 北京西安长江三峡10日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">古都+长江三峡山水线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?354.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?389.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 西安4日 / 华山5日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西安古都+华山险峰</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?389.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?355.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 西安长江三峡8日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西安+长江三峡连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?355.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>

  <!-- 二、江南 · 上海（华东） -->
    </div>
    <div class="rp-panel" data-rp="1">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">二、江南 · 上海（华东）</h3>
  <p style="color:#666;margin:0 0 16px 0;">长三角核心，水乡古镇与都市繁华兼具，纯玩无购物。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?348.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 江南水乡6天</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">沪苏杭经典水乡环线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?348.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>

  <!-- 三、九寨 · 张家界 · 云南 · 贵州（西南） -->
    </div>
    <div class="rp-panel" data-rp="2">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">三、九寨 · 张家界 · 云南 · 贵州（西南）</h3>
  <p style="color:#666;margin:0 0 16px 0;">西南山水王国，九寨彩林、张家界峰林、云南高原湖泊，纯玩无购物。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?379.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 九寨沟 成都乐山峨眉7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">九寨沟+成都+乐山峨眉</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?379.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?380.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 九寨沟 长江三峡11日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">九寨沟+长江三峡连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?380.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?358.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 张家界6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">张家界地貌奇观</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?358.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?399.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 张家界凤凰古城7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">张家界+凤凰古镇</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?399.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?359.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 张家界长江三峡9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">张家界+长江三峡</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?359.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?400.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 张家界长江三峡11日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">张家界+长江三峡长线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?400.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?373.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 贵州黄果树5日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">贵州黄果树瀑布</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?373.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?369.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 贵州桂林阳朔8日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">贵州+桂林山水</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?369.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?368.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 贵州凤凰张家界9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">贵州+凤凰+张家界</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?368.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?395.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 云南 丽江香格里拉泸沽湖石林10日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">云南高原湖泊全景</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?395.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?396.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 云南 昆明大理丽江香格里拉6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">云南经典三城</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?396.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?397.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 云南 昆明大理丽江香格里拉7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">云南经典三城</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?397.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?398.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 云南 昆明大理丽江香格里拉8日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">云南经典三城</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?398.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?394.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 云南 丽江香格里拉泸沽湖9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">丽江+香格里拉+泸沽湖</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?394.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?374.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 贵州云南 云贵高原9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">云贵高原连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?374.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?375.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 贵州云南 云贵高原12日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">云贵高原长线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?375.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?346.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 洲际酒店豪华版 成都5日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">成都+洲际酒店升级</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?346.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>

  <!-- 四、新疆 · 西藏 · 青海 · 丝绸之路（西北） -->
    </div>
    <div class="rp-panel" data-rp="3">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">四、新疆 · 西藏 · 青海 · 丝绸之路（西北）</h3>
  <p style="color:#666;margin:0 0 16px 0;">大西北长线王国，丝路、高原与花季特别团，纯玩无购物。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?356.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 西藏5日 - 洲际酒店特别版</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西藏核心+洲际酒店</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?356.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?386.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 丝绸之路 传奇东方高铁7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">丝路高铁连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?386.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?385.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 西安丝绸之路9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西安+丝绸之路</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?385.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?384.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 丝绸之路茶卡盐湖青海湖9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">青海湖+茶卡盐湖</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?384.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?387.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 丝绸之路 青藏铁路 西藏10日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">青藏铁路+西藏</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?387.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?390.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 新疆北疆8日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">新疆北疆风光</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?390.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?392.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 新疆南疆8日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">新疆南疆风情</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?392.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?391.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 新疆南疆北疆全景15日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">新疆全景环线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?391.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>

  <!-- 五、长江三峡（游轮专线） -->
    </div>
    <div class="rp-panel" data-rp="4">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">五、长江三峡（游轮专线）</h3>
  <p style="color:#666;margin:0 0 16px 0;">长江新船王与三峡游轮为代表，沿江奢华慢游，纯玩无购物。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?403.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 山城重庆 三峡游轮6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">重庆+三峡游轮</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?403.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?388.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 武汉黄鹤楼 三峡游轮6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">武汉+三峡游轮</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?388.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?393.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 宜昌重庆 三峡游轮6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">宜昌+重庆三峡游轮</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?393.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>

  <!-- 六、山东 · 山西 · 东北 · 河南 -->
    </div>
    <div class="rp-panel" data-rp="5">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">六、山东 · 山西 · 东北 · 河南</h3>
  <p style="color:#666;margin:0 0 16px 0;">齐鲁中原与东北名城，长白雪山、漠河极地，纯玩无购物。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?382.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 山东6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">齐鲁大地连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?382.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?378.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 河南5日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">中原古都</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?378.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?383.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 山西7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">晋商大院+古建</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?383.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?360.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 东北四大名城 长白山6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">东北名城+长白山</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?360.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?361.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 东北五大名城 长白山7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">东北名城+长白山</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?361.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?372.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 东北名城 长白山 漠河9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">东北+漠河极地</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?372.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?425.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 冰雪奇缘东北圣诞新年狂欢团10日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">东北冰雪圣诞新年</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?425.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>

  <!-- 七、广东 · 广西 · 福建 · 海南（华南） -->
    </div>
    <div class="rp-panel" data-rp="6">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">七、广东 · 广西 · 福建 · 海南（华南）</h3>
  <p style="color:#666;margin:0 0 16px 0;">大湾区美食线与滨海度假，粤式饮食、闽南土楼、三亚海岛，纯玩无购物。</p>
  <h4 style="font-size:16px;margin:20px 0 10px 0;">核心行程品类</h4>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#279EE6;color:#fff;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">行程线路</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:34%;">核心亮点</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">出团规则</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:16%;">详情</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?367.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 大湾区精品美食6日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">大湾区美食</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?367.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?357.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 香港潮汕韶关佛山广州超级美食10日游</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">港粤美食连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?357.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?349.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 香港3日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">香港都市</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?349.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?381.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 厦门土楼潮汕6日 & 7日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">闽南土楼+潮汕</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?381.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?347.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 海南岛三亚5天</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">三亚海岛度假</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?347.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?376.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 桂林 漓江阳朔5日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">桂林漓江山水</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?376.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?377.html" target="_blank" style="color:#279EE6;text-decoration:none;">2026 纯玩 桂林 长江三峡9日</a></td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">桂林+长江三峡</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">2026 多班期</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;"><a href="https://au.echinatours.com/cwwgw/html/?377.html" target="_blank" style="color:#279EE6;">查看详情</a></td></tr>
    </tbody>
  </table>
  <!-- 经典连游组合 -->
    </div>
    <div class="rp-panel" data-rp="7">
<h3 style="color:#279EE6;font-size:20px;margin:36px 0 8px 0;padding-bottom:6px;border-bottom:2px solid #279EE6;">经典连游组合</h3>
  <p style="color:#666;margin:0 0 16px 0;">以下为真实在售线路的推荐拼接方式，具体组合班期与报价请咨询在线客服。</p>
  <table border="0" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    <thead><tr style="background:#f0f7fc;color:#279EE6;"><th style="padding:10px 12px;text-align:left;font-weight:normal;width:22%;">方案名称</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:53%;">行程安排</th><th style="padding:10px 12px;text-align:left;font-weight:normal;width:25%;">适配场景</th></tr></thead>
    <tbody>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西南山水全景</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">九寨沟7日 → 张家界凤凰7日 → 云南昆大丽6/7日</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">多省连游、自然风光爱好者</td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西北丝路大环线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">新疆北疆8日 → 丝绸之路青藏西藏10日</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">西北长线、深度与摄影客</td></tr>
      <tr><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">古都+长江连线</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">北京西安8日 → 长江三峡游轮6日</td><td style="border:1px solid #e0e0e0;padding:10px 12px;vertical-align:top;">历史+山水长线客</td></tr>
    </tbody>
  </table>

  <p style="color:#999;font-size:13px;margin:24px 0 0 0;border-top:1px dashed #e0e0e0;padding-top:12px;">* 以上线路均选自 2026 中国纯玩无购物系列（AUD 计价），详情与报名请点击各线路「查看详情」。最终班期、行程细节与报价以在线咨询确认为准。</p>
    </div>
  </div>
</div>`;
})();
