// Etrips 国安易游 — 目的地分区行程规划（可复用模板）
// 新增子页只需在此对象加一个 key（如 nz / china），list.js 按 ?d= 自动取用
(function(){
  window.REGION_PLANS = window.REGION_PLANS || {};

  window.REGION_PLANS.australia = `
<div class="region-hero">
  <img src="assets/img/australia-map.jpg" alt="澳洲分区地图" class="region-map-img">
</div>
<div style="max-width: 1200px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6;">

  <!-- 悉尼及周边 -->
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

</div>`;
})();
