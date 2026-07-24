// Etrips 国安易游 — 目的地分区行程规划（可复用模板）
// 新增子页只需在此对象加一个 key（如 nz / china），list.js 按 ?d= 自动取用
(function(){
  window.REGION_PLANS = window.REGION_PLANS || {};

window.REGION_PLANS.australia = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/hero-sydney.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/au-sydney.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/au-uluru.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/au-apostles.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>澳大利亚 · 全景旅游</h1>
    <div class="rp-sub">Australia Region Tours</div>
    <p class="rp-desc">9 大目的地全覆盖 · 一日游 / 多日团 / 定制行程 · 纯玩无购物 · 中文导游</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="澳洲目的地">
    <div class="rp-group open" data-group="sydney">
      <div class="rp-group-title">悉尼及周边 <span class="rp-arrow">▼</span></div>
      <div class="rp-group-list">
        <div class="rp-route active" data-route="au-blue-mountain">蓝山有氧+动物园一日游</div>
        <div class="rp-route" data-route="au-stephens">史蒂芬港观海豚一日游</div>
        <div class="rp-route" data-route="au-hunter">猎人谷品酒一日游</div>
        <div class="rp-route" data-route="au-sydney-city">悉尼市区网红地标一日游</div>
        <div class="rp-route" data-route="au-blue-star">蓝山日落观星精品小团</div>
      </div>
    </div>
    <div class="rp-group" data-group="melbourne">
      <div class="rp-group-title">墨尔本及周边 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-melbourne-mel5days">墨尔本 5 日全景之旅</div>
        <div class="rp-route" data-route="au-melbourne-mel4days">墨尔本 4 日经典之旅</div>
        <div class="rp-route" data-route="au-melbourne-mel3days">墨尔本 3 日休闲之旅</div>
        <div class="rp-route" data-route="au-melbourne-melpbpr">蒸汽火车 & 企鹅岛一日游</div>
        <div class="rp-route" data-route="au-melbourne-melppc">蒸汽小火车 + 企鹅岛 天天出发！一日游</div>
        <div class="rp-route" data-route="au-melbourne-melmpt">墨尔本绵羊 + 吉朗朗斯戴尔小镇一日游</div>
        <div class="rp-route" data-route="au-melbourne-melsvh">疏芬山淘金镇一日游</div>
        <div class="rp-route" data-route="au-melbourne-melpbi">彩虹小屋 + 神仙企鹅归巢 天天出发！一日游</div>
        <div class="rp-route" data-route="au-melbourne-melgori">经典大洋路一日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="qld">
      <div class="rp-group-title">黄金海岸&布里斯班 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-qld-ool3dk">黄金海岸 3/4 日游</div>
        <div class="rp-route" data-route="au-qld-tang3d">海豚岛全新趣味 3 天 2 晚</div>
        <div class="rp-route" data-route="au-qld-bnem2">摩顿海豚岛三天两夜套餐</div>
        <div class="rp-route" data-route="au-qld-oolcct">可伦宾动物园 + 翠儿河捉蟹一日游</div>
        <div class="rp-route" data-route="au-qld-ool403">黄金海岸四大主题公园 3 日套票</div>
        <div class="rp-route" data-route="au-qld-oolby">拜伦湾一日游</div>
        <div class="rp-route" data-route="au-qld-ooltro">热带水果园 + 危险角一日游</div>
        <div class="rp-route" data-route="au-qld-ooltam">天宝林山 + 蓝光萤火虫自然风光一日游</div>
        <div class="rp-route" data-route="au-qld-bhetgl">布里斯班摩顿海豚岛一日游套餐（多种选择）</div>
        <div class="rp-route" data-route="au-qld-oolgwn">黄金海岸蓝光萤火虫中文夜游</div>
        <div class="rp-route" data-route="au-qld-oolcrb">黄金海岸翠儿河捉蟹 + 生蚝农场半日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="cairns">
      <div class="rp-group-title">凯恩斯（大堡礁） <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-cairns-cns3d4d">凯恩斯 3/4 日经典游</div>
        <div class="rp-route" data-route="au-cairns-hi4dpack">汉密尔顿岛自助游套餐</div>
        <div class="rp-route" data-route="au-cairns-wsifcg">心形大堡礁直升机 + 游船一日游</div>
        <div class="rp-route" data-route="au-cairns-cnssegd">豪华游船超值一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsdbl">绝代双礁一日游</div>
        <div class="rp-route" data-route="au-cairns-cnssga">阿金考特大堡礁一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsgbr01">凯恩斯摩尔外大堡礁一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsnga">诺曼 / 摩尔外海大堡礁一日游船</div>
        <div class="rp-route" data-route="au-cairns-cnssrc02">摩尔外海大堡礁一日游</div>
        <div class="rp-route" data-route="au-cairns-wsi1dt">白天堂沙滩双舒适游船一日游</div>
        <div class="rp-route" data-route="au-cairns-cwcsd1d">卡米拉帆船航海一日游</div>
        <div class="rp-route" data-route="au-cairns-cnstrr">塔利河漂流一日游 (含凯恩斯往返接送)</div>
        <div class="rp-route" data-route="au-cairns-rctwb">白天堂沙滩一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsrfd">热带雨林土著文化一日游</div>
        <div class="rp-route" data-route="au-cairns-rcsail">圣灵群岛帆船一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsdm1d">棕榈湾 + 鳄鱼园 + 道格拉斯港一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsppd">阿瑟顿高原 - 天空之城一日游</div>
        <div class="rp-route" data-route="au-cairns-cnsbr">巴伦河半日漂流（含凯恩斯往返接送）</div>
        <div class="rp-route" data-route="au-cairns-cnsgbg">绿岛体验一日游船</div>
      </div>
    </div>
    <div class="rp-group" data-group="whitsunday">
      <div class="rp-group-title">圣灵群岛 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list"><div class="rp-route rp-coming" data-route="au-whitsunday" data-p-adult="1699" data-p-child="0" data-p-infant="0">汉密尔顿岛 / 心形礁（见凯恩斯大堡礁组）</div></div>
    </div>
    <div class="rp-group" data-group="multi">
      <div class="rp-group-title">澳洲跨地区联游 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-multi-cnsoolmel">凯恩斯 - 黄金海岸 - 墨尔本 11 天游【周二，周五出发】</div>
        <div class="rp-route" data-route="au-multi-sydcnsool">悉尼 - 凯恩斯 - 黄金海岸 10 日游【周二，周五，周日出发】</div>
        <div class="rp-route" data-route="au-multi-sydcnsmel">悉尼 - 凯恩斯 - 墨尔本 11 天游【周二，周五出发】</div>
        <div class="rp-route" data-route="au-multi-sydmel8pg">悉尼墨尔本 8 日游</div>
        <div class="rp-route" data-route="au-multi-sydmel7pg">悉尼墨尔本 7 日游</div>
        <div class="rp-route" data-route="au-multi-sydmel6pg">悉尼墨尔本 6 日游</div>
        <div class="rp-route" data-route="au-multi-cnsool">凯恩斯 - 黄金海岸 6 日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="perth">
      <div class="rp-group-title">西澳 / 珀斯 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-perth-7d">西澳粉色海洋心动7日游</div>
        <div class="rp-route" data-route="au-perth-6d" data-p-adult="1499" data-p-child="0" data-p-infant="0">西澳粉色海洋微笑6日游</div>
        <div class="rp-route" data-route="au-perth-5d">西澳粉色海洋小火车灯塔童话5日游</div>
        <div class="rp-route" data-route="au-perth-4d">西澳粉红湖小火车浪漫4日游</div>
        <div class="rp-route" data-route="au-perth-3d">西澳粉红湖自然之窗龙虾美食经典3日游</div>
        <div class="rp-route" data-route="au-perth-pinnacles" data-p-adult="200" data-p-child="0" data-p-infant="0">尖峰石阵品质一日游</div>
        <div class="rp-route" data-route="au-perth-margaret" data-p-adult="198" data-p-child="0" data-p-infant="0">玛格利特河一日游</div>
        <div class="rp-route" data-route="au-perth-wave" data-p-adult="195" data-p-child="0" data-p-infant="0">波浪岩品质一日游</div>
        <div class="rp-route" data-route="au-perth-swamp" data-p-adult="165" data-p-child="0" data-p-infant="0">天鹅河谷美食美酒一日游</div>
        <div class="rp-route" data-route="au-perth-rottnest" data-p-adult="85" data-p-child="0" data-p-infant="0">罗特尼斯岛一日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="tas">
      <div class="rp-group-title">塔斯马尼亚 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-tas-5dt">塔斯马尼亚全景5日游</div>
        <div class="rp-route" data-route="au-tas-6dt">塔斯马尼亚深度6日游</div>
        <div class="rp-route" data-route="au-tas-5dts">塔斯马尼亚南部5日游</div>
        <div class="rp-route" data-route="au-tas-4dt">塔斯马尼亚4日精华游</div>
        <div class="rp-route" data-route="au-tas-3dt">塔斯马尼亚3日精华游</div>
        <div class="rp-route" data-route="au-tas-seafood">塔斯马尼亚海鲜盛宴一日游船</div>
        <div class="rp-route" data-route="au-tas-fish">塔斯马尼亚海钓</div>
        <div class="rp-route" data-route="au-tas-maria">玛丽亚岛纯净之美一日游</div>
        <div class="rp-route" data-route="au-tas-pot">亚瑟港一日游</div>
        <div class="rp-route" data-route="au-tas-wgb">酒杯湾一日游</div>        <div class="rp-route" data-route="au-tas-field">费尔德山一日游</div>        <div class="rp-route" data-route="au-tas-hobart">霍巴特周边+里奇蒙小镇一日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="adelaide">
      <div class="rp-group-title">阿德莱德 / 南澳 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-adl-kid">袋鼠岛精华一日游</div>
        <div class="rp-route" data-route="au-adl-mrd">穆理河仙履奇缘一日游</div>
        <div class="rp-route" data-route="au-adl-bvd">红酒之乡巴罗莎谷一日游</div>
        <div class="rp-route" data-route="au-adl-hmv">阿德莱德市区与汗道夫德国村一日游</div>
        <div class="rp-route" data-route="au-adl-fpd">菲尔半岛一日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="uluru">
      <div class="rp-group-title">乌鲁鲁 / 北领地 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route" data-route="au-uluru-atvauk5">乌鲁鲁帝王谷精品五日游（维珍团）四人起成团</div>
        <div class="rp-route" data-route="au-uluru-atusp4">乌鲁鲁精品中文 4 日游</div>
        <div class="rp-route" data-route="au-uluru-atuk3">乌鲁鲁帝王谷探索之旅 3 日游 [四人成团]</div>
        <div class="rp-route" data-route="au-uluru-atuw3">乌鲁鲁卡塔丘塔经典之旅三日游</div>
        <div class="rp-route" data-route="au-uluru-atvw3">乌鲁鲁经典之旅三日游（维珍团）天天出发</div>
        <div class="rp-route" data-route="au-uluru-atay03">帝王谷一日游</div>
        <div class="rp-route" data-route="au-uluru-ayqe04">寂静之声晚宴</div>
        <div class="rp-route" data-route="au-uluru-atay04">卡塔丘塔日出及风之谷徒步之旅</div>
        <div class="rp-route" data-route="au-uluru-atay01">卡塔丘塔和乌鲁鲁日落之旅</div>
        <div class="rp-route" data-route="au-uluru-atay02">乌鲁鲁日出，圣迹寻踪及岩石环游之旅</div>
        <div class="rp-route" data-route="au-uluru-atay07">乌鲁鲁摄影观星之旅</div>
        <div class="rp-route" data-route="au-uluru-atay06">乌鲁鲁马拉文化徒步之旅</div>
        <div class="rp-route" data-route="au-uluru-ayqe03">极致浪漫日落原野星光展 (含接送无导游)</div>
      </div>
    </div>
  </nav>
  
    <div class="rp-route-pane" data-route="au-syd4d" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼四天三晚经典之旅</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cnsxmas26" data-p-adult="1799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>【圣诞】2026 年凯恩斯豪华圣诞 4 日航空团</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydhun" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>【精品小团】猎人谷品酒豪华之旅一日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydbms" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼蓝山日落 + 观星精品小团【一价全含】</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydpst" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>【每周二、四、日固定出发】史蒂芬港观海豚一日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydjvs" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>蓝色海洋路 & 杰维斯湾一日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydzjg" data-p-adult="159" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>复古铁路蓝山风光一日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydcbr" data-p-adult="149" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>首都堪培拉一日游【每周六，日出发】</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydbmt" data-p-adult="159" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>【天天出发】蓝山有氧一日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydsct" data-p-adult="139" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>【四人成团 天天出发】悉尼网红地标一日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-ayqecr" data-p-adult="98" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>红土中心骑骆驼之旅 [英文]</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydcsb" data-p-adult="220" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼晚餐歌舞表演游轮</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydpse" data-p-adult="41" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>史蒂芬港鲨鱼馆 鲨鱼与鳐鱼亲密接触</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydoph" data-p-adult="37" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼歌剧院内部解说文化探索之旅</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydww2" data-p-adult="127" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼观鲸 2.5 小时刺激快艇</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydpqb" data-p-adult="119" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>史蒂芬港四驱车体验</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-syddc1" data-p-adult="115" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼海港 1 小时暮光晚餐巡游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydstb" data-p-adult="99" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼塔天空旋转餐厅自助餐</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydstat" data-p-adult="88" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼塔下午茶 Bar 83</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-sydjet" data-p-adult="89" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>悉尼喷射快艇探险体验</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-oolobs" data-p-adult="119" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>黄金海岸狂野奇观表演入场券</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-pqagc" data-p-adult="65" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>黄金海岸鸭子船</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cnstube" data-p-adult="119" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>凯恩斯半日 Tubing 漂流 (含往返接送)</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div><div class="rp-detail-area">
    <!-- 路线1：蓝山有氧+动物园 -->
    <div class="rp-route-pane active" data-route="au-blue-mountain" data-p-adult="179" data-p-child="179" data-p-infant="89">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/au-sydney.jpg')">
        <span class="rp-badge">天天出发 · 精品奔驰小团</span>
        <div class="rp-detail-hero-in">
          <h3>【精品小团】蓝山有氧+动物园精品11人小团一日游【天天出发】</h3>
          <div class="rp-meta"><span>游玩时长：1天</span><span>行程凭证：电子票</span><span>悉尼市区免费接送</span></div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label class="rp-date-label">出发日期<span class="rp-date-req">*</span></label>
        <div class="rp-date-row">
          <select class="rp-date-select" onchange="onRouteDateChange(this)">
            <option value="">请选择出发日期</option>
            <option value="__custom__">自选具体日期…</option>
          </select>
          <input type="date" class="rp-date-input" hidden min="">
        </div>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="window.printRoute(this)">下载行程单</a>
      </div>
      <section class="rp-sec"><h4>产品简介</h4><div><p>精选蓝山国家公园核心景观，搭配澳洲本土野生动物园，11人精品奔驰小团出行，市区酒店免费接送，全程中文导游讲解。</p><p>一站打卡三姐妹峰、网红景观缆车、英伦卢拉小镇与 Featherdale 野生动物园，可近距离抱考拉合影，适合家庭出行与休闲观光。</p></div></section>
      <section class="rp-sec"><h4>行程介绍</h4><div class="rp-timeline">
        <div><div class="rp-time">09:00 唐人街/市区酒店集合出发</div><div>专业中文导游接团，乘坐豪华奔驰商务车前往蓝山国家公园，车程约1.5小时。</div></div>
        <div><div class="rp-time">10:30 回音谷观景台</div><div>拍摄经典三姐妹峰全景；可自费乘坐倾斜52度的矿山轨道缆车，体验山谷穿越。</div></div>
        <div><div class="rp-time">11:30 卡通巴小镇 + 卢拉小镇漫步</div><div>游览主街精品店、工艺品店与咖啡馆，感受英伦小镇风光。</div></div>
        <div><div class="rp-time">13:30 午餐自理</div><div>小镇内自行安排午餐，推荐当地炸鱼薯条、澳式牛排与咖啡甜点。</div></div>
        <div><div class="rp-time">14:30 Featherdale 野生动物园</div><div>澳洲本土生态动物园；特别安排早茶点心，可免费与考拉拍照，近距离接触袋鼠、袋熊等。</div></div>
        <div><div class="rp-time">18:00 返回悉尼市区</div><div>结束行程，送回唐人街/市区酒店解散。</div></div>
        <div style="font-size:12px;color:#999;margin-top:8px">* 具体行程顺序可能因当天交通、天气情况微调，以导游实际安排为准。</div>
      </div></section>
      <section class="rp-sec"><h4>费用说明</h4><div>
        <p style="margin:0 0 6px"><strong style="color:#1B9FE0">✅ 费用包含</strong></p>
        <ul><li>悉尼市区指定地点往返接送</li><li>11人精品奔驰商务车交通</li><li>全程中文导游服务</li><li>蓝山国家公园门票</li><li>Featherdale 动物园门票</li><li>动物园早茶点心一份</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#1B9FE0">❌ 费用不含</strong></p>
        <ul><li>全程午餐、个人消费</li><li>景观缆车、索道等自费项目</li><li>导游小费（建议每人5澳元）</li><li>其他一切未提及的费用</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#FF9F1C">参考市场价：</strong>成人 A$179 起（儿童价待核）。</p>
      </div></section>
      <section class="rp-sec"><h4>预订须知</h4><div>
        <p style="margin:0 0 6px">1. 成团人数：2人成团，11人满团。</p>
        <p style="margin:0 0 6px">2. 预订后24小时内发送电子确认单，凭电子票出行。</p>
        <p style="margin:0 0 6px">3. 因交通、天气、景点停业等不可抗力造成的行程变更，旅行社保留调整权利，费用差额多退少补。</p>
        <p style="margin:0">4. 退改政策：出发前3天以上取消可全额退款；3天内取消收取100%损失费用。</p>
      </div></section>
    </div>
    <!-- 路线2：史蒂芬港 -->
    <div class="rp-route-pane" data-route="au-stephens">
      <div class="rp-detail-hero" style="background-image:url('assets/img/hero-sydney.jpg')">
        <span class="rp-badge" style="background:#1B9FE0">每周二/四/日发团</span>
        <div class="rp-detail-hero-in">
          <h3>史蒂芬港观海豚+安娜海湾沙漠一日游</h3>
          <div class="rp-meta"><span>游玩时长：1天</span><span>行程凭证：电子票</span><span>含游船观光+沙滩体验</span></div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label class="rp-date-label">出发日期<span class="rp-date-req">*</span></label>
        <div class="rp-date-row">
          <select class="rp-date-select" onchange="onRouteDateChange(this)">
            <option value="">请选择出发日期</option>
            <option value="__custom__">自选具体日期…</option>
          </select>
          <input type="date" class="rp-date-input" hidden min="">
        </div>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="window.printRoute(this)">下载行程单</a>
      </div>
      <section class="rp-sec"><h4>产品简介</h4><div>
        <p>史蒂芬港被誉为"澳洲海豚之都"，常年栖息超150只宽吻海豚，遇见率高达99%。</p>
        <p>行程搭配安娜海湾沙丘滑沙、海滨小镇漫步，一次体验海洋萌宠与沙漠奇观，适合家庭休闲与海滨度假。</p>
      </div></section>
      <section class="rp-sec"><h4>行程介绍</h4><div class="rp-timeline">
        <div><div class="rp-time">07:30 悉尼市区集合出发</div><div>市区指定地点集合，乘坐空调旅游大巴前往史蒂芬港，车程约2.5小时。</div></div>
        <div><div class="rp-time">10:30 海豚观赏游船</div><div>乘坐专业观海豚游船出海，近距离观赏野生海豚群嬉戏，船员全程讲解海洋生态知识。</div></div>
        <div><div class="rp-time">12:30 尼尔森湾小镇午餐</div><div>海滨小镇自行用餐，推荐炸鱼薯条、海鲜拼盘，可漫步沙滩休闲。</div></div>
        <div><div class="rp-time">14:00 安娜海湾沙丘滑沙</div><div>体验南半球最大的海岸沙丘，可自费参与滑沙项目，感受沙漠与海洋交汇的奇观。</div></div>
        <div><div class="rp-time">18:30 返回悉尼市区</div><div>结束行程，送回市区集合点解散。</div></div>
      </div></section>
      <section class="rp-sec"><h4>费用说明</h4><div>
        <p style="margin:0 0 6px"><strong style="color:#1B9FE0">✅ 费用包含</strong></p>
        <ul><li>悉尼市区往返空调大巴</li><li>海豚观赏游船船票</li><li>全程中文导游服务</li><li>安娜海湾沙丘入场费</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#1B9FE0">❌ 费用不含</strong></p>
        <ul><li>全程午餐、个人消费</li><li>滑沙体验项目费用</li><li>导游小费（建议每人5澳元）</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#FF9F1C">参考市场价：</strong>成人 A$179 起（儿童价待核）。</p>
      </div></section>
      <section class="rp-sec"><h4>预订须知</h4><div>
        <p style="margin:0 0 6px">1. 发团时间：每周二、周四、周日固定发团，节假日加开班次。</p>
        <p style="margin:0 0 6px">2. 海豚观赏为自然生态项目，不保证100%遇见，如未看到不做退款。</p>
        <p style="margin:0">3. 出发前1天晚上发送集合通知，含具体时间地点与导游联系方式。</p>
      </div></section>
    </div>
    <!-- 路线3：猎人谷 -->
    <div class="rp-route-pane" data-route="au-hunter">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/au-sydney.jpg')">
        <span class="rp-badge" style="background:#5a8a3e">精品小团 含品鉴</span>
        <div class="rp-detail-hero-in">
          <h3>猎人谷精品酒庄品酒一日游（含3家酒庄品鉴）</h3>
          <div class="rp-meta"><span>游玩时长：1天</span><span>行程凭证：电子票</span><span>含酒庄品鉴+芝士拼盘</span></div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label class="rp-date-label">出发日期<span class="rp-date-req">*</span></label>
        <div class="rp-date-row">
          <select class="rp-date-select" onchange="onRouteDateChange(this)">
            <option value="">请选择出发日期</option>
            <option value="__custom__">自选具体日期…</option>
          </select>
          <input type="date" class="rp-date-input" hidden min="">
        </div>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="window.printRoute(this)">下载行程单</a>
      </div>
      <section class="rp-sec"><h4>产品简介</h4><div>
        <p>澳洲历史最悠久的葡萄酒产区，精选3家特色精品酒庄，品鉴西拉、赛美蓉等经典酒款。</p>
        <p>搭配芝士拼盘、乡村美食与田园风光，是红酒爱好者、情侣休闲的经典选择。</p>
      </div></section>
      <section class="rp-sec"><h4>行程介绍</h4><div class="rp-timeline">
        <div><div class="rp-time">08:30 市区集合出发</div><div>市区指定酒店接人，前往猎人谷产区，车程约2小时。</div></div>
        <div><div class="rp-time">10:30 第一家精品酒庄品鉴</div><div>到访家族传承酒庄，品鉴4款经典酒款，酿酒师讲解产区历史与酿酒工艺。</div></div>
        <div><div class="rp-time">12:30 酒庄午餐</div><div>酒庄餐厅享用澳式乡村午餐，搭配葡萄酒与田园景致。</div></div>
        <div><div class="rp-time">14:00 第二家+第三家酒庄品鉴</div><div>探访两家不同风格酒庄，涵盖红葡萄酒、白葡萄酒与甜酒，搭配芝士拼盘。</div></div>
        <div><div class="rp-time">17:00 返回悉尼</div><div>结束品酒之旅，送回市区酒店。</div></div>
      </div></section>
      <section class="rp-sec"><h4>费用说明</h4><div>
        <p style="margin:0 0 6px"><strong style="color:#1B9FE0">✅ 费用包含</strong></p>
        <ul><li>市区往返交通</li><li>3家酒庄品酒费用</li><li>芝士拼盘一份</li><li>中文导游服务</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#1B9FE0">❌ 费用不含</strong></p>
        <ul><li>午餐费用</li><li>购酒费用、个人消费</li><li>导游小费</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#FF9F1C">参考市场价：</strong>成人 A$199 起（儿童价待核）。</p>
      </div></section>
      <section class="rp-sec"><h4>预订须知</h4><div>
        <p style="margin:0 0 6px">1. 饮酒需年满18周岁，未满18岁可替换为无酒精饮品。</p>
        <p style="margin:0 0 6px">2. 酒庄可能根据当日营业情况微调，保证品鉴数量与品质。</p>
        <p style="margin:0">3. 建议适量饮酒，酒后请勿驾车。</p>
      </div></section>
    </div>
    <!-- 路线4：悉尼市区 -->
    <div class="rp-route-pane" data-route="au-sydney-city">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/au-sydney.jpg')">
        <span class="rp-badge" style="background:#1B9FE0">天天出发 新手首选</span>
        <div class="rp-detail-hero-in">
          <h3>悉尼市区网红地标打卡一日游</h3>
          <div class="rp-meta"><span>游玩时长：1天</span><span>行程凭证：电子票</span><span>含渡轮+水族馆门票</span></div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label class="rp-date-label">出发日期<span class="rp-date-req">*</span></label>
        <div class="rp-date-row">
          <select class="rp-date-select" onchange="onRouteDateChange(this)">
            <option value="">请选择出发日期</option>
            <option value="__custom__">自选具体日期…</option>
          </select>
          <input type="date" class="rp-date-input" hidden min="">
        </div>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="window.printRoute(this)">下载行程单</a>
      </div>
      <section class="rp-sec"><h4>产品简介</h4><div>
        <p>覆盖悉尼全部经典地标，海港渡轮+市区观光结合，一站式打卡歌剧院、海港大桥、岩石区、邦迪海滩。</p>
        <p>中文导游全程讲解，适合首次到访悉尼、希望快速了解城市的游客。</p>
      </div></section>
      <section class="rp-sec"><h4>行程介绍</h4><div class="rp-timeline">
        <div><div class="rp-time">09:00 市区集合</div><div>导游带队游览岩石区历史街区，讲解悉尼殖民历史与人文故事。</div></div>
        <div><div class="rp-time">10:30 悉尼歌剧院外观+海港大桥</div><div>歌剧院外景打卡，麦考利夫人座椅拍摄经典角度，漫步海港步道。</div></div>
        <div><div class="rp-time">12:00 达令港午餐</div><div>达令港自由午餐，可选择海鲜餐厅或快餐。</div></div>
        <div><div class="rp-time">13:30 悉尼水族馆</div><div>参观悉尼水族馆，观赏大堡礁生态缸、鸭嘴兽、企鹅等澳洲特色生物。</div></div>
        <div><div class="rp-time">15:30 邦迪海滩</div><div>前往邦迪海滩，漫步海滨步道，体验澳洲海滩文化。</div></div>
        <div><div class="rp-time">17:30 返回市区解散</div><div>结束行程，送回市中心集合点。</div></div>
      </div></section>
      <section class="rp-sec"><h4>费用说明</h4><div>
        <p style="margin:0 0 6px"><strong style="color:#1B9FE0">✅ 费用包含</strong></p>
        <ul><li>全程空调巴士交通</li><li>悉尼水族馆门票</li><li>海港渡轮船票</li><li>中文导游服务</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#1B9FE0">❌ 费用不含</strong></p>
        <ul><li>全程午餐、个人消费</li><li>歌剧院内部参观</li><li>导游小费</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#FF9F1C">参考市场价：</strong>成人 A$139 起（儿童价待核）。</p>
      </div></section>
      <section class="rp-sec"><h4>预订须知</h4><div>
        <p style="margin:0 0 6px">1. 天天发团，2人即可成行。</p>
        <p style="margin:0 0 6px">2. 如遇恶劣天气，海滩行程可能调整为室内景点。</p>
        <p style="margin:0">3. 请穿舒适步行鞋，做好防晒准备。</p>
      </div></section>
    </div>
    <!-- 路线5：蓝山日落观星 -->
    <div class="rp-route-pane" data-route="au-blue-star">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/au-uluru.jpg')">
        <span class="rp-badge" style="background:#9254de">精品6人小团</span>
        <div class="rp-detail-hero-in">
          <h3>蓝山日落+星空观测精品小团（专业天文向导）</h3>
          <div class="rp-meta"><span>游玩时长：半天</span><span>行程凭证：电子票</span><span>含专业望远镜+热饮</span></div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label class="rp-date-label">出发日期<span class="rp-date-req">*</span></label>
        <div class="rp-date-row">
          <select class="rp-date-select" onchange="onRouteDateChange(this)">
            <option value="">请选择出发日期</option>
            <option value="__custom__">自选具体日期…</option>
          </select>
          <input type="date" class="rp-date-input" hidden min="">
        </div>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="window.printRoute(this)">下载行程单</a>
      </div>
      <section class="rp-sec"><h4>产品简介</h4><div>
        <p>避开日间人流，下午出发欣赏蓝山金色日落，夜间在专业天文向导带领下观测南半球星空。</p>
        <p>6人精品小团，配备高倍天文望远镜，提供热饮与小食，适合情侣、摄影爱好者与深度体验客。</p>
      </div></section>
      <section class="rp-sec"><h4>行程介绍</h4><div class="rp-timeline">
        <div><div class="rp-time">14:30 悉尼市区集合出发</div><div>市区酒店接人，乘坐商务车前往蓝山。</div></div>
        <div><div class="rp-time">16:00 观景台日落观赏</div><div>抵达林肯岩观景台，等待日落，拍摄蓝山金色峡谷与三姐妹峰黄昏景致。</div></div>
        <div><div class="rp-time">18:30 山间晚餐</div><div>小镇餐厅享用晚餐，补充体力。</div></div>
        <div><div class="rp-time">20:00 专业星空观测</div><div>天文向导讲解南半球星座，使用高倍望远镜观测月球、行星与星云，提供热饮与小食。</div></div>
        <div><div class="rp-time">22:30 返回悉尼</div><div>结束行程，送回市区酒店。</div></div>
      </div></section>
      <section class="rp-sec"><h4>费用说明</h4><div>
        <p style="margin:0 0 6px"><strong style="color:#1B9FE0">✅ 费用包含</strong></p>
        <ul><li>市区往返商务车接送</li><li>专业天文向导服务</li><li>高倍天文望远镜使用</li><li>夜间热饮与小食</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#1B9FE0">❌ 费用不含</strong></p>
        <ul><li>晚餐费用</li><li>个人消费</li><li>向导小费</li></ul>
        <p style="margin:10px 0 6px"><strong style="color:#FF9F1C">参考市场价：</strong>成人 A$199 起（儿童价待核）。</p>
      </div></section>
      <section class="rp-sec"><h4>预订须知</h4><div>
        <p style="margin:0 0 6px">1. 每周二、四、六发团，6人满团，建议提前预订。</p>
        <p style="margin:0 0 6px">2. 观星受天气影响较大，如遇阴天可视情况改期或全额退款。</p>
        <p style="margin:0">3. 夜间山区气温较低，请携带保暖外套。</p>
      </div></section>
    </div>
    <!-- 占位：其余分组 -->
    <div class="rp-route-pane" data-route="au-whitsunday"><div class="rp-coming-box">该分组线路正在整理上线，敬请期待。<br>欢迎 <a href="contact.html">在线咨询</a> 获取最新行程与报价。</div></div>
    <div class="rp-route-pane" data-route="au-perth-7d">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>西澳粉色海洋心动7日游</h3><div class="rp-detail-meta">7日游 · 珀斯进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>纵览西澳粉红湖、自然之窗、波浪岩、罗特尼斯岛小袋鼠与海角灯塔，龙虾美食贯穿全程，海岸童话一站尽收。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯 → 粉红湖 → 自然之窗 → 波浪岩 → 罗特尼斯岛 → 海上小火车 → 珀斯散团。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$1699 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；粉红湖为季节性自然景观；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-6d">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>西澳粉色海洋微笑6日游</h3><div class="rp-detail-meta">6日游 · 珀斯进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>粉红湖、自然之窗、波浪岩与海角灯塔经典串联，龙虾美食品鉴，6日轻松巡游西澳海岸。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯 → 粉红湖 → 自然之窗 → 波浪岩 → 海角灯塔 → 珀斯。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$1499 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-5d" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>西澳粉色海洋小火车灯塔童话5日游</h3><div class="rp-detail-meta">5日游 · 珀斯进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>粉红湖、海上小火车与海岸灯塔童话之旅，5日浓缩西澳最梦幻海岸线。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯 → 粉红湖 → 海上小火车 → 海角灯塔 → 珀斯。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、小火车票、部分餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$1199 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；小火车班次受限；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-4d" data-p-adult="949" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>西澳粉红湖小火车浪漫4日游</h3><div class="rp-detail-meta">4日游 · 珀斯进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>粉红湖与浪漫小火车4日短假线，节奏舒缓，适合情侣与周末出行。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯 → 粉红湖 → 小火车体验 → 珀斯。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、小火车票。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$949 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-3d" data-p-adult="699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>西澳粉红湖自然之窗龙虾美食经典3日游</h3><div class="rp-detail-meta">3日游 · 珀斯进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>粉红湖、自然之窗与西澳龙虾美食品鉴，3日经典体验西澳招牌景观。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯 → 粉红湖 → 自然之窗 → 龙虾美食品尝 → 珀斯。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、龙虾餐。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$699 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-pinnacles">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>尖峰石阵品质一日游</h3><div class="rp-detail-meta">1日游 · 珀斯周边 · 中文司导 · 每周三、六出发</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>探访沙漠奇观尖峰石阵，亿万年风化石柱矗立黄沙，落日光影最是震撼。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯接送 → 尖峰石阵 → 自由活动 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、公园门票。<br><b>价格不含：</b>个人消费。<br><b>参考市场价：</b>成人 A$200 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>周三、六固定出发；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-margaret">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>玛格利特河一日游</h3><div class="rp-detail-meta">1日游 · 珀斯周边 · 中文司导 · 每周四出发</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>西澳知名酒乡玛格利特河，酒庄品鉴、海岸峭壁与灯塔风光一日尽览。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯接送 → 玛格利特河酒庄 → 海岸风光 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、酒庄参观。<br><b>价格不含：</b>品酒费、个人消费。<br><b>参考市场价：</b>成人 A$198 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>周四固定出发；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-wave">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>波浪岩品质一日游</h3><div class="rp-detail-meta">1日游 · 珀斯周边 · 中文司导 · 每周五出发</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>天然波浪岩奇观，亿年地质杰作形如巨浪凝固，沿途草原小镇风光宜人。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯接送 → 波浪岩 → 自由活动 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、景点门票。<br><b>价格不含：</b>个人消费。<br><b>参考市场价：</b>成人 A$195 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>周五固定出发；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-swamp">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>天鹅河谷美食美酒一日游</h3><div class="rp-detail-meta">1日游 · 珀斯周边 · 中文司导 · 每周日出发</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>天鹅河谷酒庄与美食之旅，品西澳佳酿、享田园风味，周末轻松一日。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯接送 → 天鹅河谷酒庄与美食体验 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、酒庄美食参观。<br><b>价格不含：</b>品鉴费、个人消费。<br><b>参考市场价：</b>成人 A$165 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>周日固定出发；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-perth-rottnest">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>罗特尼斯岛一日游</h3><div class="rp-detail-meta">1日游 · 珀斯出海 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>登罗特尼斯岛邂逅世界最开心动物短尾矮袋鼠（quokka），环岛骑行赏碧海白沙。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>珀斯接送 → 渡轮上岛 → 环岛观光 → 返程（Rottnest Express）。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、渡轮、中文司导。<br><b>价格不含：</b>岛上自行车租赁、个人消费。<br><b>参考市场价：</b>成人 A$85 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>受船期影响；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-5dt" data-p-adult="1028" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚全景5日游</h3><div class="rp-detail-meta">5日游 · 霍巴特进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>环游塔州精华，摇篮山、酒杯湾、亚瑟港、里奇蒙古镇一线串联，纵览世界自然遗产与流放史迹。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特集合 → 摇篮山国家公园 → 酒杯湾 → 亚瑟港历史遗址 → 里奇蒙古镇 → 霍巴特散团。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$1028 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；季节影响路况；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-6dt" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚深度6日游</h3><div class="rp-detail-meta">6日游 · 霍巴特进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>深度漫游塔州，增加西海岸与高原湖泊，节奏舒缓，适合摄影与慢游客群。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特 → 摇篮山 → 西部荒野 → 酒杯湾 → 亚瑟港 → 里奇蒙 → 霍巴特。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$1198 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-5dts" data-p-adult="998" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚南部5日游</h3><div class="rp-detail-meta">5日游 · 霍巴特进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>聚焦塔州南部，霍巴特、亚瑟港、酒杯湾、里奇蒙经典环线，时间紧凑不赶路。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特 → 亚瑟港 → 酒杯湾 → 里奇蒙 → 霍巴特。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$998 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-4dt" data-p-adult="848" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚4日精华游</h3><div class="rp-detail-meta">4日游 · 霍巴特进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>塔州4日精华，摇篮山、酒杯湾、亚瑟港核心三站，短假首选。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特 → 摇篮山 → 酒杯湾 → 亚瑟港 → 霍巴特。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$848 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-3dt" data-p-adult="658" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚3日精华游</h3><div class="rp-detail-meta">3日游 · 霍巴特进出 · 中文司导 · 纯玩无购物</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>塔州3日快览，霍巴特、摇篮山、亚瑟港浓缩体验，适合周末出行。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特 → 摇篮山 → 亚瑟港 → 霍巴特。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>住宿、中文司导、旅游车、部分门票餐食。<br><b>价格不含：</b>机票、个人消费、小费。<br><b>参考市场价：</b>成人 A$658 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-seafood" data-p-adult="700" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚海鲜盛宴一日游船</h3><div class="rp-detail-meta">1日游 · 霍巴特出海 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>登船畅享塔州生蚝、龙虾、鲍鱼等现捞海鲜盛宴，边赏海岸风光边品鲜。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特码头登船 → 外海巡游 + 海鲜自助 → 返港。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>游船票、海鲜餐、中文司导。<br><b>价格不含：</b>接送、个人消费。<br><b>参考市场价：</b>成人 A$700 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>受天气与海况影响；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-fish" data-p-adult="299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>塔斯马尼亚海钓</h3><div class="rp-detail-meta">1日游 · 霍巴特出海 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>专业向导带领外海垂钓，装备齐全，收获可现场处理，享受塔州纯净海域渔趣。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特码头登船 → 钓点垂钓 → 返港。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>船票、钓具、中文向导。<br><b>价格不含：</b>接送、个人消费。<br><b>参考市场价：</b>成人 A$299 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>受天气海况影响；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-maria" data-p-adult="208" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>玛丽亚岛纯净之美一日游</h3><div class="rp-detail-meta">1日游 · 霍巴特周边 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>世界自然遗产玛丽亚岛，邂逅野生袋獾与海岸奇观，徒步探秘监狱遗迹。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特接送 → 渡轮上岛 → 徒步观光 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、渡轮、中文司导。<br><b>价格不含：</b>个人消费。<br><b>参考市场价：</b>成人 A$208 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>受天气与船期影响；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-pot" data-p-adult="168" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>亚瑟港一日游</h3><div class="rp-detail-meta">1日游 · 霍巴特周边 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>探访澳洲最具历史的流放监狱遗址亚瑟港，含巡游与遗址通票，沉浸殖民往事。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特接送 → 亚瑟港遗址参观 + 港口游船 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、门票通票、中文司导。<br><b>价格不含：</b>个人消费。<br><b>参考市场价：</b>成人 A$168 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-wgb" data-p-adult="148" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>酒杯湾一日游</h3><div class="rp-detail-meta">1日游 · 霍巴特周边 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>前往被誉全球最美海湾之一的酒杯湾，徒步观景台俯瞰白沙碧海，邂逅野生动物。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特接送 → 酒杯湾观景台徒步 → 自由活动 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导。<br><b>价格不含：</b>游船票、个人消费。<br><b>参考市场价：</b>成人 A$148 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-field" data-p-adult="138" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>费尔德山一日游</h3><div class="rp-detail-meta">1日游 · 霍巴特周边 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>探访塔州最高瀑布与温带雨林，费尔德山国家公园徒步，赏三瀑与高山湖泊。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特接送 → 费尔德山三瀑徒步 → 自由活动 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导。<br><b>价格不含：</b>个人消费。<br><b>参考市场价：</b>成人 A$138 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-tas-hobart" data-p-adult="98" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>霍巴特周边+里奇蒙小镇一日游</h3><div class="rp-detail-meta">1日游 · 霍巴特周边 · 中文司导</div></div></div>
      <div class="rp-detail-date"><label>出发日期<span class="req">*</span></label><select class="rp-date-select" onchange="onRouteDateChange(this)"><option value="">请选择出发日期</option><option value="__custom__">自选具体日期…</option></select><input type="date" class="rp-date-input" hidden></div>
      <div class="rp-detail-cta"><a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a><a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a></div>
      <div class="rp-sec"><h4>产品简介</h4><p>霍巴特市区观光 + 百年德式里奇蒙古镇，跨越时空的塔州人文半日闲。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>霍巴特市区 → 里奇蒙古镇 → 返程。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导。<br><b>价格不含：</b>个人消费。<br><b>参考市场价：</b>成人 A$98 起（儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-adl-kid" data-p-adult="388" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero">
        <div class="rp-detail-hero-in">
          <h3>袋鼠岛精华一日游（中文）</h3>
          <div class="rp-detail-meta">1日游 · 阿德莱德进出 · 中文司导 · 纯玩无购物</div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>探访澳洲 Wildlife 宝库袋鼠岛，近距离观赏野生袋鼠、考拉、海狮与企鹅，漫步神奇岩石与旗舰拱门，沉浸原始海岸与自然保护区。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>阿德莱德市区接送 → 渡轮/车经杰维斯角 → 袋鼠岛野生动物保护区 → 神奇岩石 → 旗舰拱门 → 傍晚返回市区。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、景区门票、部分餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差（一日游无）。<br><b>参考市场价：</b>成人 A$388 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；出海与野生动物受季节与天气影响，行程顺序可能调整；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-adl-mrd" data-p-adult="185" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero">
        <div class="rp-detail-hero-in">
          <h3>穆理河仙履奇缘一日游</h3>
          <div class="rp-detail-meta">1日游 · 阿德莱德进出 · 中文司导 · 纯玩无购物</div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>畅游南澳母亲河穆理河，乘特色游船赏河畔风光与野生生态，童话小镇慢游，体验"仙履奇缘"般的田园诗意。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>阿德莱德市区接送 → 穆理河游船 → 河畔酒庄品鉴 → 童话小镇自由活动 → 傍晚返回市区。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、游船票、部分餐食。<br><b>价格不含：</b>个人消费、自费项目、司导小费。<br><b>参考市场价：</b>成人 A$185 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；游船受水位与天气影响；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-adl-bvd" data-p-adult="185" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero">
        <div class="rp-detail-hero-in">
          <h3>红酒之乡巴罗莎谷一日游</h3>
          <div class="rp-detail-meta">1日游 · 阿德莱德进出 · 中文司导 · 纯玩无购物（仅限1-3月；4-12月走粉湖）</div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>探访澳洲最负盛名红酒产区巴罗莎谷，多家名庄品鉴设拉子，领略葡萄园山谷风光；4-12月班期改走粉湖（粉红湖）奇观。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>阿德莱德市区接送 → 巴罗莎谷酒庄巡礼 → 品酒午餐 →（季节）粉湖或峡谷 → 傍晚返回市区。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、酒庄品鉴、部分餐食。<br><b>价格不含：</b>个人消费、自费项目、司导小费。<br><b>参考市场价：</b>成人 A$185 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>1-3月走巴罗莎谷，4-12月走粉湖；四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-adl-hmv" data-p-adult="185" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero">
        <div class="rp-detail-hero-in">
          <h3>阿德莱德市区与汗道夫德国村一日游</h3>
          <div class="rp-detail-meta">1日游 · 阿德莱德进出 · 中文司导 · 纯玩无购物</div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>游览阿德莱德市区地标与维多利亚风格建筑，深入澳洲最古老德国移民村汗道夫，品德式猪手香肠，感受欧洲风情。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>阿德莱德市区观光（议会大厦/维多利亚广场）→ 德国村汗道夫自由活动与午餐 → 傍晚返回市区。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、部分餐食。<br><b>价格不含：</b>个人消费、自费项目、司导小费。<br><b>参考市场价：</b>成人 A$185 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-adl-fpd" data-p-adult="185" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero">
        <div class="rp-detail-hero-in">
          <h3>菲尔半岛一日游</h3>
          <div class="rp-detail-meta">1日游 · 阿德莱德进出 · 中文司导 · 纯玩无购物</div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>驰骋菲尔半岛，搭乘复古观光小火车，探访海岸小镇与葡萄酒庄，享受南澳最惬意的海滨一日。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>阿德莱德市区接送 → 菲尔半岛观光小火车 → 酒庄/海岸小镇 → 傍晚返回市区。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>往返交通、中文司导、小火车票、部分餐食。<br><b>价格不含：</b>个人消费、自费项目、司导小费。<br><b>参考市场价：</b>成人 A$185 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>四人成团；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-mel5days" data-p-adult="969" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>墨尔本 5 日全景之旅</h3>
        <div class="rp-detail-meta">多日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>墨尔本 5 日全景之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$969 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-mel4days" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>墨尔本 4 日经典之旅</h3>
        <div class="rp-detail-meta">多日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>墨尔本 4 日经典之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$799 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-mel3days" data-p-adult="649" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>墨尔本 3 日休闲之旅</h3>
        <div class="rp-detail-meta">多日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>墨尔本 3 日休闲之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$649 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-melpbpr" data-p-adult="229" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【精致奔驰小团】蒸汽火车 & 企鹅岛一日游</h3>
        <div class="rp-detail-meta">1日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>蒸汽火车 & 企鹅岛一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$229 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-melppc" data-p-adult="185" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【重磅经典必玩】蒸汽小火车 + 企鹅岛 天天出发！一日游</h3>
        <div class="rp-detail-meta">1日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>蒸汽小火车 + 企鹅岛 天天出发！一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$185 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-melmpt" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【重磅】墨尔本绵羊 + 吉朗朗斯戴尔小镇一日游</h3>
        <div class="rp-detail-meta">1日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>墨尔本绵羊 + 吉朗朗斯戴尔小镇一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$169 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-melsvh" data-p-adult="119" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【畅游淘金】疏芬山淘金镇一日游</h3>
        <div class="rp-detail-meta">1日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>疏芬山淘金镇一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$119 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-melpbi" data-p-adult="119" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【菲利普岛必玩】彩虹小屋 + 神仙企鹅归巢 天天出发！一日游</h3>
        <div class="rp-detail-meta">1日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>彩虹小屋 + 神仙企鹅归巢 天天出发！一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$119 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-melbourne-melgori" data-p-adult="79" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【天天出发】经典大洋路一日游</h3>
        <div class="rp-detail-meta">1日游 · 墨尔本进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>经典大洋路一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$79 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-ool3dk" data-p-adult="969" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【全新】黄金海岸 3/4 日游</h3>
        <div class="rp-detail-meta">多日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>黄金海岸 3/4 日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$969 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-tang3d" data-p-adult="1120" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>海豚岛全新趣味 3 天 2 晚</h3>
        <div class="rp-detail-meta">多日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>海豚岛全新趣味 3 天 2 晚，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1120 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-bnem2" data-p-adult="578" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【天阁露玛】摩顿海豚岛三天两夜套餐</h3>
        <div class="rp-detail-meta">多日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>摩顿海豚岛三天两夜套餐，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$578 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-oolcct" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>可伦宾动物园 + 翠儿河捉蟹一日游</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>可伦宾动物园 + 翠儿河捉蟹一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$259 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-ool403" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【特价】黄金海岸四大主题公园 3 日套票</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>黄金海岸四大主题公园 3 日套票，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$179 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-oolby" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【全新】拜伦湾一日游</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>拜伦湾一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$179 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-ooltro" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>热带水果园 + 危险角一日游</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>热带水果园 + 危险角一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$179 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-ooltam" data-p-adult="175" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>天宝林山 + 蓝光萤火虫自然风光一日游</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>天宝林山 + 蓝光萤火虫自然风光一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$175 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-bhetgl" data-p-adult="99" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>布里斯班摩顿海豚岛一日游套餐（多种选择）</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>布里斯班摩顿海豚岛一日游套餐（多种选择），中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$99 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-oolgwn" data-p-adult="99" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>黄金海岸蓝光萤火虫中文夜游</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>黄金海岸蓝光萤火虫中文夜游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$99 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-qld-oolcrb" data-p-adult="95" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>黄金海岸翠儿河捉蟹 + 生蚝农场半日游</h3>
        <div class="rp-detail-meta">1日游 · 黄金海岸/布里斯班进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>黄金海岸翠儿河捉蟹 + 生蚝农场半日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$95 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cns3d4d" data-p-adult="818" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>凯恩斯 3/4 日经典游</h3>
        <div class="rp-detail-meta">多日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>凯恩斯 3/4 日经典游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$818 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-hi4dpack" data-p-adult="1856" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>汉密尔顿岛自助游套餐</h3>
        <div class="rp-detail-meta">多日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>汉密尔顿岛自助游套餐，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1856 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-wsifcg" data-p-adult="720" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【汉密尔顿岛出发】心形大堡礁直升机 + 游船一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>心形大堡礁直升机 + 游船一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$720 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnssegd" data-p-adult="395" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【Evolution 蜕变号】豪华游船超值一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>豪华游船超值一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$395 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsdbl" data-p-adult="353" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【大冒险号】绝代双礁一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>绝代双礁一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$353 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnssga" data-p-adult="348" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【银梭号】阿金考特大堡礁一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>阿金考特大堡礁一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$348 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsgbr01" data-p-adult="325" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【梦幻丽礁号】凯恩斯摩尔外大堡礁一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>凯恩斯摩尔外大堡礁一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$325 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsnga" data-p-adult="322" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【大冒险号】诺曼 / 摩尔外海大堡礁一日游船</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>诺曼 / 摩尔外海大堡礁一日游船，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$322 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnssrc02" data-p-adult="317" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【太阳恋人号】摩尔外海大堡礁一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>摩尔外海大堡礁一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$317 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-wsi1dt" data-p-adult="279" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>白天堂沙滩双舒适游船一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>白天堂沙滩双舒适游船一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$279 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cwcsd1d" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>卡米拉帆船航海一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>卡米拉帆船航海一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$259 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnstrr" data-p-adult="240" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>塔利河漂流一日游 (含凯恩斯往返接送)</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>塔利河漂流一日游 (含凯恩斯往返接送)，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$240 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-rctwb" data-p-adult="230" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【雷霆猫号】白天堂沙滩一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>白天堂沙滩一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$230 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsrfd" data-p-adult="228" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>热带雨林土著文化一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>热带雨林土著文化一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$228 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-rcsail" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>圣灵群岛帆船一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>圣灵群岛帆船一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$199 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsdm1d" data-p-adult="190" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>棕榈湾 + 鳄鱼园 + 道格拉斯港一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>棕榈湾 + 鳄鱼园 + 道格拉斯港一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$190 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsppd" data-p-adult="190" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>阿瑟顿高原 - 天空之城一日游</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>阿瑟顿高原 - 天空之城一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$190 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsbr" data-p-adult="184" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>巴伦河半日漂流（含凯恩斯往返接送）</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>巴伦河半日漂流（含凯恩斯往返接送），中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$184 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-cairns-cnsgbg" data-p-adult="162" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>【大猫号】绿岛体验一日游船</h3>
        <div class="rp-detail-meta">1日游 · 凯恩斯进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>绿岛体验一日游船，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$162 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atvauk5" data-p-adult="1230" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁帝王谷精品五日游（维珍团）四人起成团</h3>
        <div class="rp-detail-meta">多日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁帝王谷精品五日游（维珍团）四人起成团，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1230 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atusp4" data-p-adult="1180" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁精品中文 4 日游</h3>
        <div class="rp-detail-meta">多日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁精品中文 4 日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1180 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atuk3" data-p-adult="998" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁帝王谷探索之旅 3 日游 [四人成团]</h3>
        <div class="rp-detail-meta">多日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁帝王谷探索之旅 3 日游 [四人成团]，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$998 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atuw3" data-p-adult="868" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁卡塔丘塔经典之旅三日游</h3>
        <div class="rp-detail-meta">多日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁卡塔丘塔经典之旅三日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$868 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atvw3" data-p-adult="748" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁经典之旅三日游（维珍团）天天出发</h3>
        <div class="rp-detail-meta">多日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁经典之旅三日游（维珍团）天天出发，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$748 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含住宿餐食以产品说明为准；请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atay03" data-p-adult="355" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>帝王谷一日游</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>帝王谷一日游，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$355 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-ayqe04" data-p-adult="295" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>寂静之声晚宴</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>寂静之声晚宴，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$295 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atay04" data-p-adult="239" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>卡塔丘塔日出及风之谷徒步之旅</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>卡塔丘塔日出及风之谷徒步之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$239 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atay01" data-p-adult="219" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>卡塔丘塔和乌鲁鲁日落之旅</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>卡塔丘塔和乌鲁鲁日落之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$219 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atay02" data-p-adult="209" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁日出，圣迹寻踪及岩石环游之旅</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁日出，圣迹寻踪及岩石环游之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$209 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atay07" data-p-adult="139" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁摄影观星之旅</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁摄影观星之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$139 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-atay06" data-p-adult="139" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>乌鲁鲁马拉文化徒步之旅</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>乌鲁鲁马拉文化徒步之旅，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$139 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-uluru-ayqe03" data-p-adult="50" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>极致浪漫日落原野星光展 (含接送无导游)</h3>
        <div class="rp-detail-meta">1日游 · 乌鲁鲁进出 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>极致浪漫日落原野星光展 (含接送无导游)，中文司导、纯玩无购物，行程轻松舒适，适合家庭与休闲出游。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专业中文司导随行；具体行程顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内交通、中文司导、指定景点门票（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费（一日游无单房差）。<br><b>参考市场价：</b>成人 A$50 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>请以客服确认的团期与报价为准；受季节与天气影响，行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-cnsoolmel" data-p-adult="3026" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>凯恩斯 - 黄金海岸 - 墨尔本 11 天游【周二，周五出发】</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>凯恩斯 - 黄金海岸 - 墨尔本 11 天游【周二，周五出发】，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$3026 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-sydcnsool" data-p-adult="2959" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>悉尼 - 凯恩斯 - 黄金海岸 10 日游【周二，周五，周日出发】</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>悉尼 - 凯恩斯 - 黄金海岸 10 日游【周二，周五，周日出发】，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$2959 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-sydcnsmel" data-p-adult="2839" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>悉尼 - 凯恩斯 - 墨尔本 11 天游【周二，周五出发】</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>悉尼 - 凯恩斯 - 墨尔本 11 天游【周二，周五出发】，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$2839 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-sydmel8pg" data-p-adult="1868" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>悉尼墨尔本 8 日游</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>悉尼墨尔本 8 日游，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1868 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-sydmel7pg" data-p-adult="1698" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>悉尼墨尔本 7 日游</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>悉尼墨尔本 7 日游，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1698 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-sydmel6pg" data-p-adult="1548" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>悉尼墨尔本 6 日游</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>悉尼墨尔本 6 日游，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1548 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
    <div class="rp-route-pane" data-route="au-multi-cnsool" data-p-adult="1939" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in">
        <h3>凯恩斯 - 黄金海岸 6 日游</h3>
        <div class="rp-detail-meta">多日游 · 跨州联游 · 中文司导 · 纯玩无购物</div>
      </div></div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec"><h4>产品简介</h4><p>凯恩斯 - 黄金海岸 6 日游，跨州串联精华目的地，中文司导、纯玩无购物，一程多游省心高效。</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>指定地点集合出发，专车中文司导随行；具体经停城市与顺序以当天实际安排为准，详情请咨询客服。</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p><b>价格包含：</b>行程内跨州交通、中文司导、指定景点门票与住宿餐食（以实际产品为准）。<br><b>价格不含：</b>个人消费、自费项目、司导小费、单房差。<br><b>参考市场价：</b>成人 A$1939 起（最终以确认为准，儿童价待核）。</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>多日游含跨州住宿与接送；受季节与天气影响行程顺序可能微调；退改以合同为准。</p></div>
    </div>
  </div>
</div>`;

  window.REGION_PLANS.nz = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/nz-hero.webp')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/nz-milford.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/nz-queenstown.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/nz-cook.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>新西兰 · 分区行程规划</h1>
    <div class="rp-sub">New Zealand Region Tours</div>
    <p class="rp-desc">从北岛火山地热到南岛冰川峡湾，3 大分区一图读懂。点击左侧分区，查看各地核心行程品类与经典连游组合。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="新西兰目的地">
    <div class="rp-group open" data-group="south">
      <div class="rp-group-title">新西兰南岛 <span class="rp-arrow">▼</span></div>
      <div class="rp-group-list">
        <div class="rp-route active" data-route="nz-south7">南岛7日湖光山色之旅</div>
        <div class="rp-route rp-coming" data-route="nz-south9">南岛全景9日游</div>
      </div>
    </div>
    <div class="rp-group" data-group="north">
      <div class="rp-group-title">新西兰北岛 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route rp-coming" data-route="nz-north4">北岛4日中土风情之旅</div>
        <div class="rp-route rp-coming" data-route="nz-north4b">北岛4日探索之旅</div>
      </div>
    </div>
    <div class="rp-group" data-group="both">
      <div class="rp-group-title">南北岛连线 <span class="rp-arrow">▶</span></div>
      <div class="rp-group-list">
        <div class="rp-route rp-coming" data-route="nz-10a">南北岛10日精华之旅</div>
        <div class="rp-route rp-coming" data-route="nz-10b">南北岛风光10日游</div>
      </div>
    </div>
  </nav>
  
    <div class="rp-route-pane" data-route="nz-nzn4da" data-p-adult="1798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>新西兰北岛 4 日中土风情之旅</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="nz-nzs9dd" data-p-adult="1798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>新西兰南岛全景 9 日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="nz-nanat4" data-p-adult="1798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>新西兰北岛 4 日探索之旅</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="nz-nzan4a7" data-p-adult="1798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>新西兰南北岛 10 日精华之旅</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div>
    <div class="rp-route-pane" data-route="nz-nzat4a7" data-p-adult="1798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero"><div class="rp-detail-hero-in"><h3>新西兰南北岛风光 10 日游</h3><div class="rp-detail-meta">详情稍后更新</div></div></div>
      <div class="rp-sec"><h4>产品简介</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>行程介绍</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>费用说明</h4><p>详情稍后更新</p></div>
      <div class="rp-sec"><h4>预订须知</h4><p>详情稍后更新</p></div>
    </div><div class="rp-detail-area">
    <div class="rp-route-pane active" data-route="nz-south7" data-p-adult="1798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero">
        <div class="rp-detail-hero-in">
          <h3>【南岛全景】新西兰南岛7日湖光山色之旅</h3>
          <div class="rp-detail-meta">7天6晚 · 基督城进出 · 中文司导 · 纯玩无购物</div>
        </div>
      </div>
      <div class="rp-detail-date">
        <label>出发日期<span class="req">*</span></label>
        <select class="rp-date-select" onchange="onRouteDateChange(this)">
          <option value="">请选择出发日期</option>
          <option value="__custom__">自选具体日期…</option>
        </select>
        <input type="date" class="rp-date-input" hidden>
      </div>
      <div class="rp-detail-cta">
        <a href="javascript:void(0)" class="btn btn-primary" onclick="goBook(this)">提交预订申请</a>
        <a href="javascript:void(0)" class="btn btn-outline" onclick="printRoute(this)">下载行程单</a>
      </div>
      <div class="rp-sec">
        <h4>产品简介</h4>
        <p>★ 星空保护区 ★ 绝美冰湖 ★ 库克山顶级步道体验 ★ 格林诺奇小镇 ★ 复古箭镇 ★ 米尔福德峡湾（含游船）★ 皇后镇自由探索 ★ 摩拉基巨型圆石 ★ 夜观蓝企鹅归巢（含）</p>
      </div>
      <div class="rp-sec">
        <h4>行程介绍</h4>
        <p><b>第1天</b> 抵达基督城，专车接机送酒店休息。<br><b>第2天</b> 基督城→蒂卡波湖→冰河湖区，夜宿星空保护区。<br><b>第3天</b> 冰河湖区→库克山→克伦威尔→皇后镇。<br><b>第4天</b> 皇后镇→格林诺奇→箭镇→皇后镇。<br><b>第5天</b> 皇后镇→米尔福德峡湾游船→蒂阿瑙。<br><b>第6天</b> 皇后镇→但尼丁→奥马鲁，夜观蓝企鹅归巢。<br><b>第7天</b> 奥马鲁→基督城，送机返程。</p>
      </div>
      <div class="rp-sec">
        <h4>费用说明</h4>
        <p><b>价格包含：</b>3-4星级酒店双人标准间、中文司机兼导游、旅游车、行程所列餐食、行程列明★景区门票（含米尔福德峡湾游船、蓝企鹅归巢）。<br><b>价格不含：</b>国际机票、签证、个人消费、自费项目、司导小费（约 AUD5/人/天）、单房差。</p>
      </div>
      <div class="rp-sec">
        <h4>预订须知</h4>
        <p>出发前 3 天发出团通知；四人成团；新西兰住宿设施有限，酒店可能根据实际情况调整；三人间默认一大床加一小床。退改：出发前 7 天以上免费，7 天内按比例收取损失。</p>
      </div>
    </div>
    <div class="rp-route-pane rp-coming" data-route="nz-south9"><div class="rp-coming-tip">该路线详情整理中，敬请期待 · 南岛全景9日游</div></div>
    <div class="rp-route-pane rp-coming" data-route="nz-north4"><div class="rp-coming-tip">该路线详情整理中，敬请期待 · 北岛4日中土风情之旅</div></div>
    <div class="rp-route-pane rp-coming" data-route="nz-north4b"><div class="rp-coming-tip">该路线详情整理中，敬请期待 · 北岛4日探索之旅</div></div>
    <div class="rp-route-pane rp-coming" data-route="nz-10a"><div class="rp-coming-tip">该路线详情整理中，敬请期待 · 南北岛10日精华之旅</div></div>
    <div class="rp-route-pane rp-coming" data-route="nz-10b"><div class="rp-coming-tip">该路线详情整理中，敬请期待 · 南北岛风光10日游</div></div>
  </div>


  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：西海岸公路 © 实拍；米尔福德峡湾 © Lindsey Costa, CC0；皇后镇瓦卡蒂普湖 © Bernard Spragg, CC0；库克山 © Bernard Spragg, CC0.</p></div>`;

                    window.REGION_PLANS.asia = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/asia.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cn-westlake.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>亚洲 · 分区行程规划</h1>
    <div class="rp-sub">Asia Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="asia 目的地">
      <div class="rp-cat" data-cat="超值特价">
        <div class="rp-cat-title">超值特价 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026纯玩韩国首尔江原道5日">2026 （纯玩）韩国首尔江原道5日</div>
        <div class="rp-route" data-route="as-2026白色圣诞浪漫新年缤纷日本9日">2026 白色圣诞浪漫新年缤纷日本9日游</div>
        <div class="rp-route" data-route="as-2026纯玩缤纷日本6日">2026（纯玩）缤纷日本6日</div>
        <div class="rp-route" data-route="as-2026纯玩日本北海道5日">2026（纯玩）日本北海道5日</div>
        <div class="rp-route" data-route="as-2026纯玩日本东京富士山北海道10">2026（纯玩）日本东京富士山北海道10日</div>
        <div class="rp-route" data-route="as-2026韩国6日">2026 韩国6日</div>
        <div class="rp-route" data-route="as-2026越南双龙湾豪华美食6日">2026 越南双龙湾豪华美食6日</div>
        <div class="rp-route" data-route="as-2026纯玩新加坡马来西亚6天新进马">2026 （纯玩）新加坡马来西亚6天-新进马出</div>
        <div class="rp-route" data-route="as-2026纯玩马来西亚新加坡6天马进新">2026（纯玩）马来西亚新加坡6天-马进新出</div>
          </div>
        </div>
        <div class="rp-group" data-group="台湾">
          <div class="rp-group-title">台湾 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026玩转台湾轻松环岛6日">2026 玩转台湾 轻松环岛6日</div>
        <div class="rp-route" data-route="as-2026玩转台湾精华环岛7日">2026 玩转台湾 精华环岛7日</div>
        <div class="rp-route" data-route="as-2026玩转台湾全景环岛8日">2026 玩转台湾 全景环岛8日</div>
        <div class="rp-route" data-route="as-2026纯玩台湾5日">2026（纯玩）台湾5日</div>
        <div class="rp-route" data-route="as-2026纯玩台湾6日">2026（纯玩）台湾6日</div>
        <div class="rp-route" data-route="as-2026纯玩台湾8日">2026（纯玩）台湾8日</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="机票套餐·特别定制">
        <div class="rp-cat-title">机票套餐·特别定制 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026白色圣诞浪漫新年缤纷日本11">2026 白色圣诞浪漫新年缤纷日本11日游 (包机票)</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="as-2026纯玩韩国首尔江原道5日2" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）韩国首尔江原道5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1198</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1198</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026白色圣诞浪漫新年缤纷日本9日2" data-p-adult="2599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 白色圣诞浪漫新年缤纷日本9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩缤纷日本6日2" data-p-adult="1058" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）缤纷日本6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1058</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1058</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1058</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩日本北海道5日2" data-p-adult="1058" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）日本北海道5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1058</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1058</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1058</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩日本东京富士山北海道102" data-p-adult="2098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）日本东京富士山北海道10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2098</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2098</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2098</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026韩国6日2" data-p-adult="919" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 韩国6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 919</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">919</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">989</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">380</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">90</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026越南双龙湾豪华美食6日2" data-p-adult="498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 越南双龙湾豪华美食6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 498</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">498</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">390</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">95</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩新加坡马来西亚6天新进马2" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）新加坡马来西亚6天-新进马出</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩马来西亚新加坡6天马进新2" data-p-adult="1498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）马来西亚新加坡6天-马进新出</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1498</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1498</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1498</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">780</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026玩转台湾轻松环岛6日2" data-p-adult="638" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 玩转台湾 轻松环岛6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 638</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">638</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1038</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026玩转台湾精华环岛7日2" data-p-adult="738" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 玩转台湾 精华环岛7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 738</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">738</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1238</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">500</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026玩转台湾全景环岛8日2" data-p-adult="1018" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 玩转台湾 全景环岛8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1018</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1018</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1518</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">500</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩台湾5日2" data-p-adult="998" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）台湾5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 998</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">998</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">998</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">240</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩台湾6日2" data-p-adult="1098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）台湾6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1098</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1098</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1098</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">350</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩台湾8日2" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）台湾8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1198</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1198</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026白色圣诞浪漫新年缤纷日本112" data-p-adult="5399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 白色圣诞浪漫新年缤纷日本11日游 (包机票)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 5399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">5399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">5399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;















      window.REGION_PLANS.europe = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/europe.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/paris.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/greece.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>欧洲 · 经典环游</h1>
    <div class="rp-sub">Europe Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="europe 目的地">
      <div class="rp-cat" data-cat="超值特价">
        <div class="rp-cat-title">超值特价 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="eu-2026欧洲定制团">2026欧洲定制团</div>
        <div class="rp-route" data-route="eu-2026欧洲红线德国法国荷兰比利时卢">2026欧洲【红线】德国法国荷兰比利时卢森堡五国9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲红线德国法国荷兰比利时卢2">2026欧洲【红线】德国法国荷兰比利时卢森堡五国7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲黄线西班牙葡萄牙9日游">2026欧洲【黄线】西班牙葡萄牙9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲黄线西班牙葡萄牙7日游">2026欧洲【黄线】西班牙葡萄牙7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲绿线法国意大利瑞士畅游三">2026欧洲【绿线】法国意大利瑞士畅游三国9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲绿线法国意大利瑞士畅游三2">2026欧洲【绿线】法国意大利瑞士畅游三国7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲蓝线德国捷克匈牙利奥地利">2026欧洲【蓝线】德国捷克匈牙利奥地利瑞士9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲蓝线德国捷克匈牙利奥地利2">2026欧洲【蓝线】德国捷克匈牙利奥地利瑞士7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲棕线匈牙利克罗地亚赛尔维">2026欧洲【棕线】匈牙利克罗地亚赛尔维波黑9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲棕线匈牙利克罗地亚赛尔维2">2026欧洲【棕线】匈牙利克罗地亚赛尔维波黑7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲紫线A英格兰苏格兰9日游">2026欧洲【紫线A】英格兰+苏格兰9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲紫线A英格兰苏格兰7日游">2026欧洲【紫线A】英格兰+苏格兰7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲紫线B英格兰苏格兰9日游">2026欧洲【紫线B】英格兰+苏格兰9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲紫线B英格兰苏格兰7日游">2026欧洲【紫线B】英格兰+苏格兰7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲橙线法国西班牙9日游">2026欧洲【橙线】法国西班牙9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲橙线法国西班牙7日游">2026欧洲【橙线】法国西班牙7日游</div>
        <div class="rp-route" data-route="eu-2026蓝红绿欧洲21天10国游不含">2026蓝红绿欧洲21天10国游【不含接送机】</div>
        <div class="rp-route" data-route="eu-2026蓝红绿欧洲23天10国游含接">2026蓝红绿欧洲23天10国游【含接送机】</div>
        <div class="rp-route" data-route="eu-2026欧洲金线意大利一地7日游">2026欧洲【金线】意大利一地7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲金线意大利一地9日游">2026欧洲【金线】意大利一地9日游</div>
        <div class="rp-route" data-route="eu-2026欧洲粉线丹麦瑞典挪威三国7日">2026欧洲【粉线】丹麦瑞典挪威三国7日游</div>
        <div class="rp-route" data-route="eu-2026欧洲粉线丹麦瑞典挪威三国9日">2026欧洲【粉线】丹麦瑞典挪威三国9日游</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="机票套餐·特别定制">
        <div class="rp-cat-title">机票套餐·特别定制 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="eu-2026澳洲包机票冬日暖阳圣诞环地中">2026【澳洲包机票】冬日暖阳圣诞环地中海六国16日亲子之旅</div>
        <div class="rp-route" data-route="eu-2026包机票欧洲七国纵览精华之旅德">2026【包机票】欧洲七国纵览精华之旅德荷比法意瑞奥7国21日</div>
        <div class="rp-route" data-route="eu-2026澳洲包机票金秋十月东欧六国文">2026【澳洲包机票】金秋十月东欧六国文化自然全景精华之旅</div>
        <div class="rp-route" data-route="eu-澳洲包机票东欧六国文化自然全景精华之">【澳洲包机票】东欧六国文化自然全景精华之旅</div>
        <div class="rp-route" data-route="eu-2026澳洲包机票西葡安摩四国伊比利">2026【澳洲包机票】西葡安摩四国伊比利亚摩洛哥环游之旅22日游</div>
        <div class="rp-route" data-route="eu-澳洲包机票欧洲七国德荷比法意瑞奥纵览">【澳洲包机票】欧洲七国德荷比法意瑞奥纵览精华之旅21日</div>
        <div class="rp-route" data-route="eu-2026澳洲包机票畅游荷德法瑞列奥意">2026【澳洲包机票】畅游荷德法瑞列奥意圣八国世纪河轮莱茵之旅17天</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="eu-2026欧洲定制团2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲定制团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 9999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲红线德国法国荷兰比利时卢3" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【红线】德国法国荷兰比利时卢森堡五国9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲红线德国法国荷兰比利时卢4" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【红线】德国法国荷兰比利时卢森堡五国7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲黄线西班牙葡萄牙9日游2" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【黄线】西班牙葡萄牙9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲黄线西班牙葡萄牙7日游2" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【黄线】西班牙葡萄牙7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲绿线法国意大利瑞士畅游三3" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【绿线】法国意大利瑞士畅游三国9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲绿线法国意大利瑞士畅游三4" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【绿线】法国意大利瑞士畅游三国7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲蓝线德国捷克匈牙利奥地利3" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【蓝线】德国捷克匈牙利奥地利瑞士9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲蓝线德国捷克匈牙利奥地利4" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【蓝线】德国捷克匈牙利奥地利瑞士7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲棕线匈牙利克罗地亚赛尔维3" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【棕线】匈牙利克罗地亚赛尔维波黑9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲棕线匈牙利克罗地亚赛尔维4" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【棕线】匈牙利克罗地亚赛尔维波黑7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲紫线A英格兰苏格兰9日游2" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【紫线A】英格兰+苏格兰9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲紫线A英格兰苏格兰7日游2" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【紫线A】英格兰+苏格兰7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲紫线B英格兰苏格兰9日游2" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【紫线B】英格兰+苏格兰9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲紫线B英格兰苏格兰7日游2" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【紫线B】英格兰+苏格兰7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲橙线法国西班牙9日游2" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【橙线】法国西班牙9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲橙线法国西班牙7日游2" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【橙线】法国西班牙7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026蓝红绿欧洲21天10国游不含2" data-p-adult="3999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026蓝红绿欧洲21天10国游【不含接送机】</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 3999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>21天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）
第20天：待补充（景点/用餐/住宿）
第21天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026蓝红绿欧洲23天10国游含接2" data-p-adult="4498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026蓝红绿欧洲23天10国游【含接送机】</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 4498</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>23天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">4498</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）
第20天：待补充（景点/用餐/住宿）
第21天：待补充（景点/用餐/住宿）
第22天：待补充（景点/用餐/住宿）
第23天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲金线意大利一地7日游2" data-p-adult="1339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【金线】意大利一地7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲金线意大利一地9日游2" data-p-adult="1829" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【金线】意大利一地9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1829</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1829</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲粉线丹麦瑞典挪威三国7日2" data-p-adult="1449" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【粉线】丹麦瑞典挪威三国7日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1449</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1449</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026欧洲粉线丹麦瑞典挪威三国9日2" data-p-adult="2079" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026欧洲【粉线】丹麦瑞典挪威三国9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2079</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2079</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026澳洲包机票冬日暖阳圣诞环地中2" data-p-adult="9699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】冬日暖阳圣诞环地中海六国16日亲子之旅</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 9699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>16天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">9299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1800</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026包机票欧洲七国纵览精华之旅德2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【包机票】欧洲七国纵览精华之旅德荷比法意瑞奥7国21日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>21天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）
第20天：待补充（景点/用餐/住宿）
第21天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026澳洲包机票金秋十月东欧六国文2" data-p-adult="6888" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】金秋十月东欧六国文化自然全景精华之旅</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 6888</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">6888</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1750</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">250</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-澳洲包机票东欧六国文化自然全景精华之2" data-p-adult="6888" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>【澳洲包机票】东欧六国文化自然全景精华之旅</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 6888</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">6888</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1750</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026澳洲包机票西葡安摩四国伊比利2" data-p-adult="8499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/europe.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】西葡安摩四国伊比利亚摩洛哥环游之旅22日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 8499</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>22天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">8499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">350</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）
第20天：待补充（景点/用餐/住宿）
第21天：待补充（景点/用餐/住宿）
第22天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-澳洲包机票欧洲七国德荷比法意瑞奥纵览2" data-p-adult="8699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/paris.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>【澳洲包机票】欧洲七国德荷比法意瑞奥纵览精华之旅21日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 8699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>21天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">8699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）
第20天：待补充（景点/用餐/住宿）
第21天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="eu-2026澳洲包机票畅游荷德法瑞列奥意2" data-p-adult="8999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/greece.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】畅游荷德法瑞列奥意圣八国世纪河轮莱茵之旅17天</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 8999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>17天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">8999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;

  window.REGION_PLANS.cruise = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/cruise.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cruise-oceanliner.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cruise-venice.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cruise-costa.jpg')"></div>
  </div>
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

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：邮轮编队 © 实拍；远洋邮轮 © Spielvogel, CC BY-SA 4.0；威尼斯邮轮码头 © Mariordo, CC BY-SA 4.0；Costa Fortuna 甲板 © MustangJoe, CC0.</p></div>`;
                    window.REGION_PLANS.china = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/china.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cn-westlake.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>中国 · 分区行程规划</h1>
    <div class="rp-sub">China Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="china 目的地">
      <div class="rp-cat" data-cat="超值特价">
        <div class="rp-cat-title">超值特价 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="江南">
          <div class="rp-group-title">江南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026铂金江南穿越胡杨林喀什南疆秘">2026 铂金江南，穿越胡杨林喀什南疆秘境14日（金秋特别团）</div>
        <div class="rp-route" data-route="ch-2026铂金江南长江新船王极光号揽月">2026 铂金江南 长江新船王极光号/揽月号12日</div>
        <div class="rp-route" data-route="ch-2026奢华江南和平饭店长江新船王揽">2026 奢华江南和平饭店-长江新船王揽月号/极光号13日AB团</div>
        <div class="rp-route" data-route="ch-2026奢华江南和平饭店长江新船王揽2">2026 奢华江南和平饭店-长江新船王揽月号/极光号13日AA团</div>
        <div class="rp-route" data-route="ch-2026金钻江南深圳机器人马来西亚文">2026 (金钻江南，深圳机器人)马来西亚-文莱-越南-中国香港爱达魔都号游轮16日</div>
        <div class="rp-route" data-route="ch-2026铂金江南7日">2026 铂金江南7日</div>
        <div class="rp-route" data-route="ch-2026璀璨金钻江南奢华8日A团">2026 璀璨金钻~江南奢华8日(A团)</div>
        <div class="rp-route" data-route="ch-2026璀璨金钻江南奢华8日AA团">2026 璀璨金钻~江南奢华8日(AA团)</div>
        <div class="rp-route" data-route="ch-2026璀璨金钻江南奢华8日AB团">2026 璀璨金钻~江南奢华8日(AB团)</div>
        <div class="rp-route" data-route="ch-2026江南长江三峡11日">2026 江南 长江三峡11日</div>
        <div class="rp-route" data-route="ch-2026金钻江南爱达魔都号游轮11日">2026 金钻江南，爱达魔都号游轮11 日 (A团)</div>
        <div class="rp-route" data-route="ch-2026金钻江南爱达魔都号游轮11日2">2026 金钻江南，爱达魔都号游轮11 日(AA团)</div>
        <div class="rp-route" data-route="ch-2026纯玩江南水乡6天">2026 (纯玩）江南水乡6天</div>
          </div>
        </div>
        <div class="rp-group" data-group="西南">
          <div class="rp-group-title">西南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026九寨沟成都重庆长新船王揽月号">2026九寨沟成都重庆长新船王揽月号/极光号13日</div>
        <div class="rp-route" data-route="ch-2026成都九寨沟8日超豪华洲际酒店">2026 成都 九寨沟8日(超豪华洲际酒店升级版）</div>
        <div class="rp-route" data-route="ch-2026九寨沟长江三峡12日超豪华洲">2026九寨沟 长江三峡12日(超豪华洲际酒店升级版)</div>
        <div class="rp-route" data-route="ch-2026醉美川藏成都西藏深度11日">2026醉美川藏 成都西藏深度11日</div>
        <div class="rp-route" data-route="ch-2026醉美川藏成都西藏深度14日">2026醉美川藏 成都西藏深度14日</div>
        <div class="rp-route" data-route="ch-2026山城重庆大足石刻武隆6日">2026 山城重庆 大足石刻武隆6日</div>
        <div class="rp-route" data-route="ch-2026重庆大足石刻长江三峡10日">2026 重庆大足石刻 长江三峡10日</div>
        <div class="rp-route" data-route="ch-2026纯玩九寨沟成都乐山峨眉7日九">2026 （纯玩）九寨沟 成都乐山峨眉7日（九寨沟高铁体验特别版）</div>
        <div class="rp-route" data-route="ch-2026纯玩九寨沟长江三峡11日">2026（纯玩）九寨沟 长江三峡11日</div>
        <div class="rp-route" data-route="ch-2026纯玩山城重庆三峡游轮6日">2026（纯玩）山城重庆 三峡游轮6日</div>
        <div class="rp-route" data-route="ch-2026纯玩宜昌重庆三峡游轮6日">2026（纯玩）宜昌重庆 三峡游轮6日</div>
        <div class="rp-route" data-route="ch-2026纯玩西藏5日洲际酒店特别版">2026（纯玩）西藏5日-洲际酒店特别版</div>
        <div class="rp-route" data-route="ch-2026纯玩丝绸之路青藏铁路西藏10">2026（纯玩）丝绸之路 青藏铁路 西藏10日</div>
        <div class="rp-route" data-route="ch-2026纯玩成都5日超豪华洲际酒店升">2026 (纯玩) 成都5日(超豪华洲际酒店升级版)</div>
        <div class="rp-route" data-route="ch-2026纯玩山城重庆3日">2026（纯玩）山城重庆3日</div>
        <div class="rp-route" data-route="ch-2026纯玩山城重庆武隆天生三桥5日">2026（纯玩）山城重庆 武隆天生三桥5日</div>
          </div>
        </div>
        <div class="rp-group" data-group="新疆">
          <div class="rp-group-title">新疆 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026横贯中国纵览山河吴越水乡西域">2026 横贯中国・纵览山河：吴越水乡西域大漠 17 天传奇丝路特别团</div>
        <div class="rp-route" data-route="ch-2026史诗画卷醉美新疆世界级绝美风">2026 史诗画卷 醉美新疆 世界级绝美风光之旅14日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-2026绿野仙踪新疆阿勒泰喀纳斯醉美">2026绿野仙踪 新疆阿勒泰喀纳斯醉美8日</div>
        <div class="rp-route" data-route="ch-2026醉美新疆禾木喀纳斯可可托海魔">2026 醉美新疆 禾木喀纳斯可可托海魔鬼城8日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-2026铂金江南醉美新疆禾木喀纳斯可">2026 铂金江南，醉美新疆 禾木喀纳斯可可托海魔鬼城14日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-2026纯玩新疆北疆8日">2026 （纯玩）新疆北疆8日</div>
        <div class="rp-route" data-route="ch-2026纯玩新疆南疆8日">2026 （纯玩）新疆南疆8日</div>
        <div class="rp-route" data-route="ch-2026纯玩新疆南疆北疆全景15日">2026（纯玩）新疆南疆北疆全景15日</div>
          </div>
        </div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026穿越胡杨林喀什南疆秘境8日金">2026 穿越胡杨林 喀什南疆秘境 8 日（金秋特别团）</div>
        <div class="rp-route" data-route="ch-2026爱达花城号首航海上丝绸之路中">2026 爱达花城号首航海上丝绸之路 中国+越南+马来西亚+汶莱四国漫游17天</div>
        <div class="rp-route" data-route="ch-2026VIP特别订制团">2026 VIP特别订制团</div>
        <div class="rp-route" data-route="ch-2026深坑洲际黄山千岛湖9日">2026 深坑洲际，黄山千岛湖9日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际婺源望仙谷9日">2026 深坑洲际，婺源望仙谷9日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际海天佛国普陀山9日">2026 深坑洲际 海天佛国普陀山9日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际九华山9日">2026 深坑洲际，九华山9日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际泰山曲阜9日">2026 深坑洲际，泰山曲阜9日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际庐山9日">2026 深坑洲际，庐山9日</div>
        <div class="rp-route" data-route="ch-2026舌尖广东珠江美食6日">2026 舌尖广东，珠江美食6日</div>
        <div class="rp-route" data-route="ch-2026珠江美食越南下龙湾10日">2026 珠江美食，越南下龙湾10日</div>
        <div class="rp-route" data-route="ch-2026张家界凤凰古城7日">2026 张家界，凤凰古城7日</div>
        <div class="rp-route" data-route="ch-2026海南海口三亚6日">2026 海南 海口三亚6日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界6日">2026（纯玩）张家界6日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界凤凰古城7日">2026（纯玩）张家界凤凰古城7日</div>
        <div class="rp-route" data-route="ch-2026纯玩山东6日">2026（纯玩）山东6日</div>
        <div class="rp-route" data-route="ch-2026纯玩河南5日">2026（纯玩）河南5日</div>
        <div class="rp-route" data-route="ch-2026纯玩丝绸之路传奇东方高铁7日">2026（纯玩）丝绸之路 传奇东方高铁7日</div>
        <div class="rp-route" data-route="ch-2026纯玩丝绸之路茶卡盐湖青海湖9">2026（纯玩）丝绸之路，茶卡盐湖青海湖9日</div>
        <div class="rp-route" data-route="ch-2026纯玩香港3日">2026（纯玩）香港3日</div>
        <div class="rp-route" data-route="ch-2026纯玩海南岛三亚5天">2026（纯玩）海南岛三亚5天</div>
          </div>
        </div>
        <div class="rp-group" data-group="东北">
          <div class="rp-group-title">东北 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026冰雪奇缘东北新年狂欢团10日">2026冰雪奇缘东北新年狂欢团 10日</div>
        <div class="rp-route" data-route="ch-2026纯玩东北四大名城长白山6日">2026 （纯玩）东北四大名城 长白山6日</div>
        <div class="rp-route" data-route="ch-2026纯玩东北五大名城长白山7日">2026 （纯玩）东北五大名城 长白山7日</div>
        <div class="rp-route" data-route="ch-2026纯玩东北名城长白山漠河9日">2026 （纯玩）东北名城 长白山 漠河9日</div>
          </div>
        </div>
        <div class="rp-group" data-group="云贵桂">
          <div class="rp-group-title">云贵桂 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026锦绣中华多彩贵州大美江西金秋">2026【锦绣中华】多彩贵州·大美江西·金秋揽胜16天</div>
        <div class="rp-route" data-route="ch-2026桂林6日">2026 桂林6日</div>
        <div class="rp-route" data-route="ch-2026云南昆明大理丽江6日">2026 云南 昆明大理丽江6日</div>
        <div class="rp-route" data-route="ch-2026云南昆明大理丽江石林7日">2026 云南 昆明大理丽江 石林7日</div>
        <div class="rp-route" data-route="ch-2026纯玩桂林漓江阳朔5日">2026（纯玩）桂林 漓江阳朔5日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州黄果树5日">2026（纯玩）贵州黄果树5日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州桂林阳朔8日">2026 （纯玩）贵州桂林阳朔8日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州凤凰张家界9日">2026（纯玩）贵州凤凰张家界9日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南香格里拉6日">2026 （纯玩）云南香格里拉6日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南昆明大理丽江香格里拉">2026 （纯玩）云南 昆明大理丽江香格里拉7日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南昆明大理丽江香格里拉2">2026 （纯玩）云南 昆明大理丽江香格里拉8日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南丽江香格里拉泸沽湖9">2026（纯玩）云南 丽江香格里拉泸沽湖9日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南丽江香格里拉泸沽湖石">2026（纯玩）云南 丽江香格里拉泸沽湖石林10日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州云南云贵高原9日">2026 （纯玩）贵州云南 云贵高原9日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州云南云贵高原12日">2026 （纯玩）贵州云南 云贵高原12日</div>
          </div>
        </div>
        <div class="rp-group" data-group="大湾区">
          <div class="rp-group-title">大湾区 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026大湾区美食机器人奇观6日">2026 大湾区美食，机器人奇观6日</div>
        <div class="rp-route" data-route="ch-2026大湾区美食机器人奇观7日">2026 大湾区美食，机器人奇观7日</div>
        <div class="rp-route" data-route="ch-2026大湾区广东美食6日">2026 大湾区，广东美食6日</div>
        <div class="rp-route" data-route="ch-2026寻味大湾区广东美食7日">2026 寻味大湾区，广东美食7日</div>
        <div class="rp-route" data-route="ch-2026香港大湾区珠江美食8日">2026 香港大湾区 珠江美食8日</div>
        <div class="rp-route" data-route="ch-2026纯玩大湾区精品美食6日">2026 （纯玩）大湾区精品美食6日</div>
        <div class="rp-route" data-route="ch-2026纯玩香港潮汕韶关佛山广州超级">2026（纯玩） 香港潮汕韶关佛山广州超级美食10日游</div>
          </div>
        </div>
        <div class="rp-group" data-group="东南">
          <div class="rp-group-title">东南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026潮汕高铁广东美食7日">2026 潮汕高铁，广东美食7日</div>
        <div class="rp-route" data-route="ch-2026潮汕风情珠江美食8日">2026 潮汕风情，珠江美食8日</div>
        <div class="rp-route" data-route="ch-2026香港潮汕珠江美食10日">2026 香港潮汕，珠江美食10日</div>
        <div class="rp-route" data-route="ch-2026厦门泉州土楼6日">2026 厦门泉州土楼6日</div>
        <div class="rp-route" data-route="ch-2026厦门土楼武夷山8日">2026 厦门土楼武夷山8日</div>
        <div class="rp-route" data-route="ch-2026纯玩厦门土楼潮汕6日">2026 (纯玩)厦门土楼潮汕6日</div>
        <div class="rp-route" data-route="ch-2026纯玩厦门土楼潮汕7日">2026 (纯玩)厦门土楼潮汕7日</div>
          </div>
        </div>
        <div class="rp-group" data-group="三峡">
          <div class="rp-group-title">三峡 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026珠江美食长江美景10日">2026 珠江美食，长江美景10日</div>
        <div class="rp-route" data-route="ch-2026大湾区美食长江三峡10日">2026 大湾区美食，长江三峡10日</div>
        <div class="rp-route" data-route="ch-2026张家界长江三峡11日">2026 张家界，长江三峡11日</div>
        <div class="rp-route" data-route="ch-2026桂林长江三峡11日">2026 桂林 长江三峡11日</div>
        <div class="rp-route" data-route="ch-2026厦门长江三峡11日">2026 厦门 长江三峡11日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界长江三峡9日">2026（纯玩）张家界长江三峡9日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界长江三峡11日">2026（纯玩）张家界长江三峡11日</div>
        <div class="rp-route" data-route="ch-2026纯玩武汉黄鹤楼三峡游轮6日">2026（纯玩）武汉黄鹤楼 三峡游轮6日</div>
        <div class="rp-route" data-route="ch-2026纯玩桂林长江三峡9日">2026 （纯玩）桂林 长江三峡9日</div>
        <div class="rp-route" data-route="ch-2026纯玩世纪游轮江山如此多娇山河">2026（纯玩）世纪游轮“江山如此多娇·山河颂”长江全览11日游</div>
        <div class="rp-route" data-route="ch-2026纯玩世纪游轮江山如此多娇山河2">2026（纯玩）世纪游轮“江山如此多娇·山河颂”长江全览12日游</div>
          </div>
        </div>
        <div class="rp-group" data-group="华北">
          <div class="rp-group-title">华北 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026北京5日">2026北京5日</div>
        <div class="rp-route" data-route="ch-2026北京6日">2026北京6日</div>
        <div class="rp-route" data-route="ch-2026北京长江三峡9日">2026 北京 长江三峡 9日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京4日">2026（纯玩）北京4日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安6日">2026 (纯玩）北京西安6日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安长江三峡10日">2026 (纯玩)北京，西安，长江三峡10日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安4日">2026（纯玩）西安4日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安华山5日">2026(纯玩)西安，华山5日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安长江三峡8日">2026 (纯玩）西安，长江三峡8日</div>
        <div class="rp-route" data-route="ch-2026纯玩山西7日">2026（纯玩）山西7日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安丝绸之路9日">2026（纯玩）西安，丝绸之路9日</div>
          </div>
        </div>
        <div class="rp-group" data-group="华东">
          <div class="rp-group-title">华东 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026纯玩北京西安上海8日">2026 （纯玩）北京西安上海8日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安上海长江三峡12">2026 （纯玩）北京西安上海长江三峡12日</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="机票套餐·特别定制">
        <div class="rp-cat-title">机票套餐·特别定制 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="新疆">
          <div class="rp-group-title">新疆 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026横贯中国纵览山河吴越水乡西域3">2026 横贯中国・纵览山河：吴越水乡西域大漠 18 天传奇丝路特别团（澳洲包机票）</div>
        <div class="rp-route" data-route="ch-2026澳洲包机票新疆南疆北疆全景1">2026（澳洲包机票） 新疆南疆北疆全景18日</div>
        <div class="rp-route" data-route="ch-2026澳洲包机票新疆南疆北疆全景12">2026 （澳洲包机票）新疆南疆北疆全景17日</div>
          </div>
        </div>
        <div class="rp-group" data-group="云贵桂">
          <div class="rp-group-title">云贵桂 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026锦绣中华多彩贵州大美江西广州">2026【锦绣中华】多彩贵州·大美江西·广州团圆19天-包机票</div>
          </div>
        </div>
        <div class="rp-group" data-group="东北">
          <div class="rp-group-title">东北 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026冰雪奇缘东北新年狂欢团12日">2026冰雪奇缘东北新年狂欢团12日-包机票</div>
          </div>
        </div>
        <div class="rp-group" data-group="西南">
          <div class="rp-group-title">西南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026澳洲包机票川藏15天西藏团">2026 （澳洲包机票）川藏15天西藏团</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="ch-2026铂金江南穿越胡杨林喀什南疆秘2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南，穿越胡杨林喀什南疆秘境14日（金秋特别团）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>14天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1798</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">810</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026铂金江南长江新船王极光号揽月2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南 长江新船王极光号/揽月号12日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1240</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026奢华江南和平饭店长江新船王揽3" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 奢华江南和平饭店-长江新船王揽月号/极光号13日AB团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>13天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2150</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026奢华江南和平饭店长江新船王揽4" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 奢华江南和平饭店-长江新船王揽月号/极光号13日AA团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>13天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2250</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026金钻江南深圳机器人马来西亚文2" data-p-adult="798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (金钻江南，深圳机器人)马来西亚-文莱-越南-中国香港爱达魔都号游轮16日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 798</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>16天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">798</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026铂金江南7日2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026璀璨金钻江南奢华8日A团2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 璀璨金钻~江南奢华8日(A团)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026璀璨金钻江南奢华8日AA团2" data-p-adult="99" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 璀璨金钻~江南奢华8日(AA团)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 99</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">99</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">900</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026璀璨金钻江南奢华8日AB团2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 璀璨金钻~江南奢华8日(AB团)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">949</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">850</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026江南长江三峡11日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 江南 长江三峡11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">780</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">170</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026金钻江南爱达魔都号游轮11日3" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 金钻江南，爱达魔都号游轮11 日 (A团)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1098</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026金钻江南爱达魔都号游轮11日4" data-p-adult="249" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 金钻江南，爱达魔都号游轮11 日(AA团)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 249</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">249</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1298</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩江南水乡6天2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩）江南水乡6天</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">260</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026九寨沟成都重庆长新船王揽月号2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026九寨沟成都重庆长新船王揽月号/极光号13日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>13天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1190</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">210</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026成都九寨沟8日超豪华洲际酒店2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 成都 九寨沟8日(超豪华洲际酒店升级版）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">530</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026九寨沟长江三峡12日超豪华洲2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026九寨沟 长江三峡12日(超豪华洲际酒店升级版)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">890</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">190</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026醉美川藏成都西藏深度11日2" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026醉美川藏 成都西藏深度11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2499</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026醉美川藏成都西藏深度14日2" data-p-adult="2999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026醉美川藏 成都西藏深度14日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>14天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1100</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026山城重庆大足石刻武隆6日2" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 山城重庆 大足石刻武隆6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026重庆大足石刻长江三峡10日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 重庆大足石刻 长江三峡10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">160</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩九寨沟成都乐山峨眉7日九2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）九寨沟 成都乐山峨眉7日（九寨沟高铁体验特别版）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩九寨沟长江三峡11日2" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）九寨沟 长江三峡11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1050</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山城重庆三峡游轮6日2" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山城重庆 三峡游轮6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">640</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩宜昌重庆三峡游轮6日2" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）宜昌重庆 三峡游轮6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西藏5日洲际酒店特别版2" data-p-adult="1599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）西藏5日-洲际酒店特别版</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩丝绸之路青藏铁路西藏102" data-p-adult="2699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）丝绸之路 青藏铁路 西藏10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩成都5日超豪华洲际酒店升2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 成都5日(超豪华洲际酒店升级版)</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">120</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山城重庆3日2" data-p-adult="549" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山城重庆3日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 549</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>3天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">549</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">549</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">230</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">90</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山城重庆武隆天生三桥5日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山城重庆 武隆天生三桥5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">350</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026横贯中国纵览山河吴越水乡西域2" data-p-adult="1098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 横贯中国・纵览山河：吴越水乡西域大漠 17 天传奇丝路特别团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1098</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>17天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1098</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1398</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">850</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">400</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026史诗画卷醉美新疆世界级绝美风2" data-p-adult="2798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 史诗画卷 醉美新疆 世界级绝美风光之旅14日（旺季特别团）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2798</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>14天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2798</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1020</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026绿野仙踪新疆阿勒泰喀纳斯醉美2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026绿野仙踪 新疆阿勒泰喀纳斯醉美8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">350</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026醉美新疆禾木喀纳斯可可托海魔2" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 醉美新疆 禾木喀纳斯可可托海魔鬼城8日（旺季特别团）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1198</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1198</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">730</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">160</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026铂金江南醉美新疆禾木喀纳斯可2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南，醉美新疆 禾木喀纳斯可可托海魔鬼城14日（旺季特别团）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>14天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1898</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩新疆北疆8日2" data-p-adult="1799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）新疆北疆8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩新疆南疆8日2" data-p-adult="1799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）新疆南疆8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩新疆南疆北疆全景15日2" data-p-adult="3399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）新疆南疆北疆全景15日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 3399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>15天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026穿越胡杨林喀什南疆秘境8日金2" data-p-adult="1098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 穿越胡杨林 喀什南疆秘境 8 日（金秋特别团）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1098</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1098</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">510</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">160</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026爱达花城号首航海上丝绸之路中2" data-p-adult="798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 爱达花城号首航海上丝绸之路 中国+越南+马来西亚+汶莱四国漫游17天</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 798</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>17天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">798</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1998</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1700</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026VIP特别订制团2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 VIP特别订制团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际黄山千岛湖9日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际，黄山千岛湖9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际婺源望仙谷9日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际，婺源望仙谷9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际海天佛国普陀山9日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际 海天佛国普陀山9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际九华山9日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际，九华山9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际泰山曲阜9日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际，泰山曲阜9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际庐山9日2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际，庐山9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 49</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026舌尖广东珠江美食6日2" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 舌尖广东，珠江美食6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 259</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">259</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026珠江美食越南下龙湾10日2" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 珠江美食，越南下龙湾10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026张家界凤凰古城7日2" data-p-adult="299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 张家界，凤凰古城7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">380</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026海南海口三亚6日2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 海南 海口三亚6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界6日2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">330</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">90</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界凤凰古城7日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界凤凰古城7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山东6日2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山东6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩河南5日2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）河南5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩丝绸之路传奇东方高铁7日2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）丝绸之路 传奇东方高铁7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩丝绸之路茶卡盐湖青海湖92" data-p-adult="2099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）丝绸之路，茶卡盐湖青海湖9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">750</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩香港3日2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）香港3日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>3天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">260</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">45</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩海南岛三亚5天2" data-p-adult="898" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）海南岛三亚5天</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 898</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">898</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">898</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026冰雪奇缘东北新年狂欢团10日2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026冰雪奇缘东北新年狂欢团 10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩东北四大名城长白山6日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）东北四大名城 长白山6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩东北五大名城长白山7日2" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）东北五大名城 长白山7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">530</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">210</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩东北名城长白山漠河9日2" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）东北名城 长白山 漠河9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">240</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026锦绣中华多彩贵州大美江西金秋2" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【锦绣中华】多彩贵州·大美江西·金秋揽胜16天</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2499</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>16天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026桂林6日2" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 桂林6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026云南昆明大理丽江6日2" data-p-adult="299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 云南 昆明大理丽江6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">619</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">320</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026云南昆明大理丽江石林7日2" data-p-adult="459" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 云南 昆明大理丽江 石林7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 459</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">459</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">679</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">380</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩桂林漓江阳朔5日2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）桂林 漓江阳朔5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州黄果树5日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）贵州黄果树5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州桂林阳朔8日2" data-p-adult="1499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）贵州桂林阳朔8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1499</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">520</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州凤凰张家界9日2" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）贵州凤凰张家界9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">570</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南香格里拉6日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）云南香格里拉6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">310</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南昆明大理丽江香格里拉3" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）云南 昆明大理丽江香格里拉7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">530</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南昆明大理丽江香格里拉4" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）云南 昆明大理丽江香格里拉8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">580</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">210</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南丽江香格里拉泸沽湖92" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）云南 丽江香格里拉泸沽湖9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">460</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南丽江香格里拉泸沽湖石2" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）云南 丽江香格里拉泸沽湖石林10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">540</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">250</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州云南云贵高原9日2" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）贵州云南 云贵高原9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">570</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州云南云贵高原12日2" data-p-adult="1999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）贵州云南 云贵高原12日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">950</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区美食机器人奇观6日2" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区美食，机器人奇观6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 169</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">169</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区美食机器人奇观7日2" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区美食，机器人奇观7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 179</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">179</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区广东美食6日2" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区，广东美食6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 259</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">259</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026寻味大湾区广东美食7日2" data-p-adult="269" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 寻味大湾区，广东美食7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 269</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">269</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">320</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026香港大湾区珠江美食8日2" data-p-adult="689" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 香港大湾区 珠江美食8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 689</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">689</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">580</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩大湾区精品美食6日2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）大湾区精品美食6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩香港潮汕韶关佛山广州超级2" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩） 香港潮汕韶关佛山广州超级美食10日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2499</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">630</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026潮汕高铁广东美食7日2" data-p-adult="269" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 潮汕高铁，广东美食7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 269</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">269</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026潮汕风情珠江美食8日2" data-p-adult="279" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 潮汕风情，珠江美食8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 279</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">279</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">360</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026香港潮汕珠江美食10日2" data-p-adult="699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 香港潮汕，珠江美食10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">670</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">160</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026厦门泉州土楼6日2" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 厦门泉州土楼6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026厦门土楼武夷山8日2" data-p-adult="369" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 厦门土楼武夷山8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 369</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">369</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">390</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">130</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩厦门土楼潮汕6日2" data-p-adult="879" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩)厦门土楼潮汕6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 879</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">879</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">879</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">90</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩厦门土楼潮汕7日2" data-p-adult="939" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩)厦门土楼潮汕7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 939</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">939</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">939</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">330</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">110</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026珠江美食长江美景10日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 珠江美食，长江美景10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">160</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区美食长江三峡10日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区美食，长江三峡10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">160</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026张家界长江三峡11日2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 张家界，长江三峡11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">860</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">170</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026桂林长江三峡11日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 桂林 长江三峡11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">170</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026厦门长江三峡11日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 厦门 长江三峡11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">170</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界长江三峡9日2" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界长江三峡9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界长江三峡11日2" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界长江三峡11日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩武汉黄鹤楼三峡游轮6日2" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）武汉黄鹤楼 三峡游轮6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">640</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩桂林长江三峡9日2" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）桂林 长江三峡9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">900</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩世纪游轮江山如此多娇山河3" data-p-adult="1" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）世纪游轮“江山如此多娇·山河颂”长江全览11日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩世纪游轮江山如此多娇山河4" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）世纪游轮“江山如此多娇·山河颂”长江全览12日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026北京5日2" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026北京5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 169</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">169</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">529</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">230</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026北京6日2" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026北京6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">569</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026北京长江三峡9日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 北京 长江三峡 9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">140</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京4日2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）北京4日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">120</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安6日2" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩）北京西安6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">480</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安长江三峡10日2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩)北京，西安，长江三峡10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安4日2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）西安4日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">180</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">120</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安华山5日2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026(纯玩)西安，华山5日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">225</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安长江三峡8日2" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩）西安，长江三峡8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山西7日2" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山西7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安丝绸之路9日2" data-p-adult="2099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）西安，丝绸之路9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2099</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">750</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安上海8日2" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）北京西安上海8日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">240</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安上海长江三峡122" data-p-adult="2399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （纯玩）北京西安上海长江三峡12日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2399</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2399</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1120</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">360</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026横贯中国纵览山河吴越水乡西域4" data-p-adult="2168" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 横贯中国・纵览山河：吴越水乡西域大漠 18 天传奇丝路特别团（澳洲包机票）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2168</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>18天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2168</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2468</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">850</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">400</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026澳洲包机票新疆南疆北疆全景13" data-p-adult="4299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（澳洲包机票） 新疆南疆北疆全景18日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 4299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>18天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">4299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">4299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026澳洲包机票新疆南疆北疆全景14" data-p-adult="4299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （澳洲包机票）新疆南疆北疆全景17日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 4299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>17天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">4299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">4299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026锦绣中华多彩贵州大美江西广州2" data-p-adult="3599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【锦绣中华】多彩贵州·大美江西·广州团圆19天-包机票</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 3599</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>19天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1300</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026冰雪奇缘东北新年狂欢团12日2" data-p-adult="3799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026冰雪奇缘东北新年狂欢团12日-包机票</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 3799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026澳洲包机票川藏15天西藏团2" data-p-adult="3299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 （澳洲包机票）川藏15天西藏团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 3299</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>15天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3299</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1100</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;














})();
PROBE_SENTINEL_20260715

                    window.REGION_PLANS.island = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/island.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/bali.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/fiji.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>海岛假日 · 度假天堂</h1>
    <div class="rp-sub">Island Holidays</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="island 目的地">
      <div class="rp-cat" data-cat="超值特价">
        <div class="rp-cat-title">超值特价 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="is-2026斐济定制团">2026斐济定制团</div>
        <div class="rp-route" data-route="is-2026经典豪华巴厘岛5天游">2026经典豪华巴厘岛5天游</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛4天游海边四星">2026经典巴厘岛4天游-海边四星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛4天游海边五星">2026经典巴厘岛4天游-海边五星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛5天游海边四星">2026经典巴厘岛5天游-海边四星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛5天游海边五星">2026经典巴厘岛5天游-海边五星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛6天游海边四星">2026经典巴厘岛6天游-海边四星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛6天游海边五星">2026经典巴厘岛6天游-海边五星</div>
        <div class="rp-route" data-route="is-2026巴厘岛科莫多双岛阿雅娜酒店5">2026巴厘岛+科莫多双岛阿雅娜酒店5天奢华之旅</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="is-2026斐济定制团2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/island.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026斐济定制团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 9999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典豪华巴厘岛5天游2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/bali.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典豪华巴厘岛5天游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛4天游海边四星2" data-p-adult="699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/fiji.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典巴厘岛4天游-海边四星</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 699</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛4天游海边五星2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/island.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典巴厘岛4天游-海边五星</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">500</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛5天游海边四星2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/bali.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典巴厘岛5天游-海边四星</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 799</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">500</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛5天游海边五星2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/fiji.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典巴厘岛5天游-海边五星</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">80</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛6天游海边四星2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/island.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典巴厘岛6天游-海边四星</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">96</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛6天游海边五星2" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/bali.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026经典巴厘岛6天游-海边五星</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">96</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026巴厘岛科莫多双岛阿雅娜酒店52" data-p-adult="1999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/fiji.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026巴厘岛+科莫多双岛阿雅娜酒店5天奢华之旅</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">950</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;















                    window.REGION_PLANS.america = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/america.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/canada.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/usa.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>美国 · 加拿大 · 南美</h1>
    <div class="rp-sub">America & Canada</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="america 目的地">
      <div class="rp-cat" data-cat="超值特价">
        <div class="rp-cat-title">超值特价 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026美国加拿大定制团">2026美国加拿大定制团</div>
        <div class="rp-route" data-route="am-2026南美定制团">2026南美定制团</div>
        <div class="rp-route" data-route="am-2026美国东海岸经典6日">2026美国东海岸经典6日</div>
        <div class="rp-route" data-route="am-2026美国东海岸经典7日">2026美国东海岸经典7日</div>
        <div class="rp-route" data-route="am-2026美国加拿大东部8日游">2026美国加拿大东部8日游</div>
        <div class="rp-route" data-route="am-2025美国加拿大东海岸9日">2025美国加拿大东海岸9日</div>
        <div class="rp-route" data-route="am-2026美国西部经典8日游">2026美国西部经典8日游</div>
        <div class="rp-route" data-route="am-2025美国加拿大东海岸10日">2025美国加拿大东海岸10日</div>
        <div class="rp-route" data-route="am-2026美国西部经典9日游">2026美国西部经典9日游</div>
        <div class="rp-route" data-route="am-2026美国西部经典10日游">2026美国西部经典10日游</div>
        <div class="rp-route" data-route="am-2026美国西部黄石峡谷9日游">2026美国西部黄石峡谷9日游</div>
        <div class="rp-route" data-route="am-2026美国西部黄石峡谷10日游">2026美国西部黄石峡谷10日游</div>
        <div class="rp-route" data-route="am-2026美国东西海岸精华14日游">2026美国东西海岸精华14日游</div>
        <div class="rp-route" data-route="am-2026美国东西海岸黄石经典15日">2026 美国东西海岸黄石经典15日</div>
        <div class="rp-route" data-route="am-2026夏威夷檀香山欧胡岛茂宜岛火山">2026夏威夷檀香山欧胡岛+茂宜岛/火山岛6日游</div>
        <div class="rp-route" data-route="am-2026加拿大落基山脉6日游">2026加拿大落基山脉6日游</div>
        <div class="rp-route" data-route="am-2026加拿大加东精品6日游A团">2026加拿大加东精品6日游-A团</div>
        <div class="rp-route" data-route="am-2026加拿大加东精品6日游B团">2026加拿大加东精品6日游-B团</div>
        <div class="rp-route" data-route="am-2026美加东名城瀑布9日游">2026美加东名城瀑布9日游</div>
        <div class="rp-route" data-route="am-2026加拿大定制团">2026加拿大定制团</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="机票套餐·特别定制">
        <div class="rp-cat-title">机票套餐·特别定制 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026澳洲包机票加拿大落基山美国阿">2026【澳洲包机票】加拿大落基山+美国阿拉斯加15天全景之旅</div>
        <div class="rp-route" data-route="am-2026澳洲包机票美国东西海岸经典1">2026【澳洲包机票】美国东西海岸经典17天游</div>
        <div class="rp-route" data-route="am-2026澳洲包机票南美七国全景精华2">2026【澳洲包机票】南美七国全景精华24日游</div>
        <div class="rp-route" data-route="am-2026澳洲包机票南美经典五国16日">2026【澳洲包机票】南美经典五国16日狂欢之旅</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="am-2026美国加拿大定制团2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国加拿大定制团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 9999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026南美定制团2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026南美定制团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 9999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东海岸经典6日2" data-p-adult="1088" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国东海岸经典6日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1088</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1088</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1088</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">340</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东海岸经典7日2" data-p-adult="1288" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国东海岸经典7日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1288</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1288</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1288</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">370</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国加拿大东部8日游2" data-p-adult="2078" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国加拿大东部8日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2078</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2078</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">630</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2025美国加拿大东海岸9日2" data-p-adult="2428" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2025美国加拿大东海岸9日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2428</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2428</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2428</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">860</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部经典8日游2" data-p-adult="1898" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国西部经典8日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1898</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1898</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1898</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2025美国加拿大东海岸10日2" data-p-adult="2618" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2025美国加拿大东海岸10日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2618</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2618</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2618</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">900</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部经典9日游2" data-p-adult="2058" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国西部经典9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2058</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2058</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2058</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部经典10日游2" data-p-adult="2198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国西部经典10日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2198</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2198</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1400</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部黄石峡谷9日游2" data-p-adult="2228" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国西部黄石峡谷9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2228</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2228</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2228</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部黄石峡谷10日游2" data-p-adult="2398" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国西部黄石峡谷10日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2398</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2398</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2398</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东西海岸精华14日游2" data-p-adult="2758" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美国东西海岸精华14日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2758</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>14天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2758</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2758</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">999</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东西海岸黄石经典15日2" data-p-adult="3498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026 美国东西海岸黄石经典15日</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 3498</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>15天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3498</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3498</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1469</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026夏威夷檀香山欧胡岛茂宜岛火山2" data-p-adult="2199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026夏威夷檀香山欧胡岛+茂宜岛/火山岛6日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2199</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大落基山脉6日游2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026加拿大落基山脉6日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大加东精品6日游A团2" data-p-adult="1539" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026加拿大加东精品6日游-A团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 1539</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1539</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大加东精品6日游B团2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026加拿大加东精品6日游-B团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 899</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美加东名城瀑布9日游2" data-p-adult="2339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026美加东名城瀑布9日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 2339</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2339</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大定制团2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026加拿大定制团</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 9999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>0天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票加拿大落基山美国阿2" data-p-adult="8580" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】加拿大落基山+美国阿拉斯加15天全景之旅</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 8580</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>15天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">8580</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2350</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票美国东西海岸经典12" data-p-adult="5999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】美国东西海岸经典17天游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 5999</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>17天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">5999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票南美七国全景精华22" data-p-adult="23499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】南美七国全景精华24日游</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 23499</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>24天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">23499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">23499</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）
第17天：待补充（景点/用餐/住宿）
第18天：待补充（景点/用餐/住宿）
第19天：待补充（景点/用餐/住宿）
第20天：待补充（景点/用餐/住宿）
第21天：待补充（景点/用餐/住宿）
第22天：待补充（景点/用餐/住宿）
第23天：待补充（景点/用餐/住宿）
第24天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票南美经典五国16日2" data-p-adult="16888" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】南美经典五国16日狂欢之旅</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> A$ 16888</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>16天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">16888</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2950</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）
第8天：待补充（景点/用餐/住宿）
第9天：待补充（景点/用餐/住宿）
第10天：待补充（景点/用餐/住宿）
第11天：待补充（景点/用餐/住宿）
第12天：待补充（景点/用餐/住宿）
第13天：待补充（景点/用餐/住宿）
第14天：待补充（景点/用餐/住宿）
第15天：待补充（景点/用餐/住宿）
第16天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;













                  window.REGION_PLANS.other = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/other.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/custom.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>其他 · 更多目的地</h1>
    <div class="rp-sub">Other Destinations</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="other 目的地">
      <div class="rp-cat" data-cat="超值特价">
        <div class="rp-cat-title">超值特价 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ot-示例线路请替换为实际团名">示例线路（请替换为实际团名）</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="ot-示例线路请替换为实际团名2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/other.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>示例线路（请替换为实际团名）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> 待确认</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
        </div>
      </div>
      <div class="rp-tabs">
        <div class="rp-tab active" data-tab="price">日期和价格</div>
        <div class="rp-tab" data-tab="itinerary">行程安排</div>
        <div class="rp-tab" data-tab="notes">参团须知</div>
        <div class="rp-tab" data-tab="brochure">彩页下载(澳洲)</div>
      </div>
      <div class="rp-tab-panel active" data-tab="price">
        <div class="rp-summary"><div><b>行程天数</b>3天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
请在此处粘贴参团须知内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;














