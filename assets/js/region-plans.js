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

  window.REGION_PLANS.nz = `
<div class="region-hero">
  <img src="assets/img/nz-map.jpg" alt="新西兰分区地图" class="region-map-img">
</div>
<div style="max-width: 1200px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6;">

  <!-- 一、新西兰北岛 -->
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

</div>`;

  window.REGION_PLANS.asia = `
<div class="region-hero">
  <img src="assets/img/asia-map.jpg" alt="亚洲分区地图" class="region-map-img">
</div>
<div style="max-width: 1200px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6;">

  <!-- 一、日本 -->
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

</div>`;
})();
