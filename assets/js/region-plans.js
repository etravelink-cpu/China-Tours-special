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
      <div class="rp-group" data-group="日本线">
        <div class="rp-group-title">日本线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026纯玩缤纷日本">2026（纯玩）缤纷日本 6 日</div>
        <div class="rp-route" data-route="as-2026纯玩日本北海">2026（纯玩）日本北海道 5 日</div>
        <div class="rp-route" data-route="as-2026纯玩日本东京">2026（纯玩）日本东京富士山北海道 10 日</div>
        <div class="rp-route" data-route="as-2026白色圣诞浪漫">2026 白色圣诞浪漫新年缤纷日本 9 日游（金牌纯玩）</div>
        </div>
      </div>
      <div class="rp-group" data-group="中国台湾线">
        <div class="rp-group-title">中国台湾线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026玩转台湾轻松">2026 玩转台湾 轻松环岛 6 日</div>
        <div class="rp-route" data-route="as-2026玩转台湾精华">2026 玩转台湾 精华环岛 7 日</div>
        <div class="rp-route" data-route="as-2026玩转台湾全景">2026 玩转台湾 全景环岛 8 日</div>
        <div class="rp-route" data-route="as-2026纯玩宝岛风情">2026（纯玩）宝岛风情台湾 5 日 / 6 日</div>
        <div class="rp-route" data-route="as-2026纯玩宝岛风情2">2026（纯玩）宝岛风情台湾 8 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="韩国线">
        <div class="rp-group-title">韩国线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026韩国6日">2026 韩国 6 日</div>
        <div class="rp-route" data-route="as-2026纯玩韩国首尔">2026（纯玩）韩国首尔江原道 5 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="东南亚线">
        <div class="rp-group-title">东南亚线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="as-2026越南双龙湾豪">2026 越南双龙湾豪华美食 6 日</div>
        <div class="rp-route" data-route="as-2026纯玩新加坡马">2026（纯玩）新加坡马来西亚 6 天 - 新进马出</div>
        <div class="rp-route" data-route="as-2026纯玩马来西亚">2026（纯玩）马来西亚新加坡 6 天 - 马进新出</div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="as-2026纯玩缤纷日本2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）缤纷日本 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩日本北海2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）日本北海道 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩日本东京2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）日本东京富士山北海道 10 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026白色圣诞浪漫2" data-p-adult="2599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 白色圣诞浪漫新年缤纷日本 9 日游（金牌纯玩）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2599</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2599</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026玩转台湾轻松2" data-p-adult="638" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 玩转台湾 轻松环岛 6 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">638</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1038</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026玩转台湾精华2" data-p-adult="638" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 玩转台湾 精华环岛 7 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">638</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1038</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026玩转台湾全景2" data-p-adult="638" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 玩转台湾 全景环岛 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">638</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1038</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩宝岛风情3" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）宝岛风情台湾 5 日 / 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩宝岛风情4" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）宝岛风情台湾 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026韩国6日2" data-p-adult="919" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 韩国 6 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">919</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">989</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">90</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩韩国首尔2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）韩国首尔江原道 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026越南双龙湾豪2" data-p-adult="498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 越南双龙湾豪华美食 6 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">498</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">95</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩新加坡马2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）新加坡马来西亚 6 天 - 新进马出</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="as-2026纯玩马来西亚2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）马来西亚新加坡 6 天 - 马进新出</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 日本/台湾/韩国线含团队签证协助，护照须有效期6个月以上。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;











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
      <div class="rp-group" data-group="新疆季节限定专线">
        <div class="rp-group-title">新疆季节限定专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-sgxjs1426f">2026 铂金江南・穿越胡杨林喀什南疆秘境 14 日（金秋特别团）</div>
        <div class="rp-route" data-route="ch-sgxjs0826f">2026 穿越胡杨林 喀什南疆秘境 8 日（金秋特别团）</div>
        <div class="rp-route" data-route="ch-sgxjn1426e">2026 江南・新疆禾木喀纳斯可可托海魔鬼城 14 日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-sgxjn0826e">2026 醉美新疆 禾木喀纳斯可可托海魔鬼城 8 日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-2026杏福新疆伊犁">2026 杏福新疆・伊犁花季 8 日（春季特别团）</div>
        <div class="rp-route" data-route="ch-2026草原牧歌新疆">2026 草原牧歌・新疆北疆 8 日（春季特别团）</div>
        <div class="rp-route" data-route="ch-2026绿野仙踪新疆">2026 绿野仙踪 新疆阿勒泰喀纳斯醉美 8 日（买一送一特别团）</div>
        <div class="rp-route" data-route="ch-2026盛夏伊犁薰衣">2026 盛夏伊犁・薰衣草之旅 8 日（夏季特别团）</div>
        </div>
      </div>
      <div class="rp-group" data-group="长江三峡游轮专线">
        <div class="rp-group-title">长江三峡游轮专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026铂金江南长江">2026 铂金江南 长江新船王极光号 / 揽月号 12 日</div>
        <div class="rp-route" data-route="ch-2026奢华江南和平">2026 奢华江南和平饭店 - 长江新船王揽月号 / 极光号 13 日（AB/AA 团）</div>
        <div class="rp-route" data-route="ch-2026九寨沟成都重">2026 九寨沟成都重庆长江新船王揽月号 / 极光号 13 日</div>
        <div class="rp-route" data-route="ch-2026江南长江三峡">2026 江南 长江三峡 11 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="江南高端酒店专线">
        <div class="rp-group-title">江南高端酒店专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026铂金江南7日">2026 铂金江南 7 日</div>
        <div class="rp-route" data-route="ch-2026璀璨金钻江南">2026 璀璨金钻～江南奢华 8 日（A 团 & AB 团 & AA 团）</div>
        <div class="rp-route" data-route="ch-2026深坑洲际黄山">2026 深坑洲际・黄山千岛湖 9 日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际婺源">2026 深坑洲际・婺源望仙谷 9 日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际海天">2026 深坑洲际・海天佛国普陀山 9 日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际九华">2026 深坑洲际・九华山 9 日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际泰山">2026 深坑洲际・泰山曲阜 9 日</div>
        <div class="rp-route" data-route="ch-2026深坑洲际庐山">2026 深坑洲际・庐山 9 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="川藏・九寨沟专线">
        <div class="rp-group-title">川藏・九寨沟专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026成都九寨沟洲">2026 成都・九寨沟 洲际酒店奢华超五星升级版 8 日</div>
        <div class="rp-route" data-route="ch-2026九寨沟长江三">2026 九寨沟 长江三峡 洲际酒店超豪华五星升级版 12 日</div>
        <div class="rp-route" data-route="ch-2026山城重庆大足">2026 山城重庆 大足石刻武隆 6 日</div>
        <div class="rp-route" data-route="ch-2026重庆大足石刻">2026 重庆大足石刻 长江三峡 10 日</div>
        <div class="rp-route" data-route="ch-2026醉美川藏成都">2026 醉美川藏 成都西藏深度 11 日 / 14 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="大湾区・岭南美食专线">
        <div class="rp-group-title">大湾区・岭南美食专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026大湾区美食机">2026 大湾区美食・机器人奇观 6 日 / 7 日</div>
        <div class="rp-route" data-route="ch-2026舌尖广东珠江">2026 舌尖广东・珠江美食 6 日</div>
        <div class="rp-route" data-route="ch-2026大湾区广东美">2026 大湾区・广东美食 6 日</div>
        <div class="rp-route" data-route="ch-2026寻味大湾区广">2026 寻味大湾区・广东美食 7 日</div>
        <div class="rp-route" data-route="ch-2026潮汕高铁广东">2026 潮汕高铁・广东美食 7 日</div>
        <div class="rp-route" data-route="ch-2026潮汕风情珠江">2026 潮汕风情・珠江美食 8 日</div>
        <div class="rp-route" data-route="ch-2026香港大湾区珠">2026 香港大湾区 珠江美食 8 日</div>
        <div class="rp-route" data-route="ch-2026香港潮汕珠江">2026 香港潮汕・珠江美食 10 日</div>
        <div class="rp-route" data-route="ch-2026珠江美食长江">2026 珠江美食・长江美景 10 日</div>
        <div class="rp-route" data-route="ch-2026大湾区美食长">2026 大湾区美食・长江三峡 10 日</div>
        <div class="rp-route" data-route="ch-2026珠江美食越南">2026 珠江美食・越南下龙湾 10 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="国内经典目的地专线">
        <div class="rp-group-title">国内经典目的地专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026张家界凤凰古">2026 张家界・凤凰古城 7 日</div>
        <div class="rp-route" data-route="ch-2026张家界长江三">2026 张家界・长江三峡 11 日</div>
        <div class="rp-route" data-route="ch-2026北京5日6日">2026 北京 5 日 / 6 日</div>
        <div class="rp-route" data-route="ch-2026北京长江三峡">2026 北京 长江三峡 9 日</div>
        <div class="rp-route" data-route="ch-2026桂林6日">2026 桂林 6 日</div>
        <div class="rp-route" data-route="ch-2026桂林长江三峡">2026 桂林 长江三峡 11 日</div>
        <div class="rp-route" data-route="ch-2026厦门泉州土楼">2026 厦门泉州土楼 6 日</div>
        <div class="rp-route" data-route="ch-2026厦门土楼武夷">2026 厦门土楼武夷山 8 日</div>
        <div class="rp-route" data-route="ch-2026厦门长江三峡">2026 厦门 长江三峡 11 日</div>
        <div class="rp-route" data-route="ch-2026云南昆明大理">2026 云南 昆明大理丽江 6 日 / 7 日</div>
        <div class="rp-route" data-route="ch-2026海南海口三亚">2026 海南 海口三亚 6 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="超长穿越与跨境游轮专线">
        <div class="rp-group-title">超长穿越与跨境游轮专线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-sgjnsr1726">2026 横贯中国・纵览山河：吴越水乡西域大漠 17 天传奇丝路特别团</div>
        <div class="rp-route" data-route="ch-2026金钻江南深圳">2026（金钻江南 + 深圳机器人）马来西亚 - 文莱 - 越南 - 爱达魔都号游轮 16 日</div>
        <div class="rp-route" data-route="ch-2026金钻江南爱达">2026 金钻江南・爱达魔都号游轮 11 日（A&AA 团）</div>
        <div class="rp-route" data-route="ch-sgjnad1726">2026 爱达花城号海上丝绸之路 亚洲巡礼・爱达花城号游轮 17 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="西南（川渝、西藏）">
        <div class="rp-group-title">西南（川渝、西藏） <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026纯玩九寨沟成">2026（纯玩）九寨沟 成都乐山峨眉 7 日（九寨沟高铁体验特别版）</div>
        <div class="rp-route" data-route="ch-2026纯玩九寨沟长">2026（纯玩）九寨沟 长江三峡 11 日</div>
        <div class="rp-route" data-route="ch-2026纯玩洲际酒店">2026（纯玩）洲际酒店豪华版 成都 5 日</div>
        <div class="rp-route" data-route="ch-2026纯玩山城重庆">2026（纯玩）山城重庆 3 日</div>
        <div class="rp-route" data-route="ch-2026纯玩山城重庆2">2026（纯玩）山城重庆 武隆天生三桥 5 日</div>
        <div class="rp-route" data-route="ch-2026纯玩山城重庆3">2026（纯玩）山城重庆 三峡游轮 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩西藏5日">2026（纯玩）西藏 5 日 - 洲际酒店特别版</div>
        </div>
      </div>
      <div class="rp-group" data-group="华北 / 中原">
        <div class="rp-group-title">华北 / 中原 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026纯玩北京4日">2026（纯玩）北京 4 日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安">2026（纯玩）北京西安 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安2">2026（纯玩）北京西安上海 8 日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安3">2026（纯玩）北京、西安、长江三峡 10 日</div>
        <div class="rp-route" data-route="ch-2026纯玩北京西安4">2026（纯玩）北京西安上海长江三峡 12 日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安4日">2026 (纯玩) 西安 4 日 / 华山 5 日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安长江">2026（纯玩) 西安、长江三峡 8 日</div>
        <div class="rp-route" data-route="ch-2026纯玩山东6日">2026（纯玩）山东 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩河南5日">2026（纯玩）河南 5 日</div>
        <div class="rp-route" data-route="ch-2026纯玩山西7日">2026（纯玩）山西 7 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="湘鄂・长江三峡线">
        <div class="rp-group-title">湘鄂・长江三峡线 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026纯玩张家界6">2026（纯玩）张家界 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界凤">2026（纯玩）张家界凤凰古城 7 日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界长">2026（纯玩）张家界长江三峡 9 日</div>
        <div class="rp-route" data-route="ch-2026纯玩张家界长2">2026（纯玩）张家界长江三峡 11 日</div>
        <div class="rp-route" data-route="ch-2026纯玩武汉黄鹤">2026（纯玩）武汉黄鹤楼 三峡游轮 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩宜昌重庆">2026（纯玩）宜昌重庆 三峡游轮 6 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="云贵桂">
        <div class="rp-group-title">云贵桂 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026锦绣中华多彩">2026【锦绣中华】多彩贵州・大美江西・金秋揽胜 16 天</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州黄果">2026（纯玩）贵州黄果树 5 日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州桂林">2026（纯玩）贵州桂林阳朔 8 日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州凤凰">2026（纯玩）贵州凤凰张家界 9 日</div>
        <div class="rp-route" data-route="ch-2026纯玩桂林漓江">2026（纯玩）桂林 漓江阳朔 5 日</div>
        <div class="rp-route" data-route="ch-2026纯玩桂林长江">2026（纯玩）桂林 长江三峡 9 日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南昆明">2026（纯玩）云南 昆明大理丽江香格里拉 6 日 / 7 日 / 8 日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南丽江">2026（纯玩）云南 丽江香格里拉泸沽湖 9 日</div>
        <div class="rp-route" data-route="ch-2026纯玩云南丽江2">2026（纯玩）云南 丽江香格里拉泸沽湖石林 10 日</div>
        <div class="rp-route" data-route="ch-2026纯玩贵州云南">2026（纯玩）贵州云南 云贵高原 9 日 / 12 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="东北">
        <div class="rp-group-title">东北 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026冰雪奇缘东北">2026 冰雪奇缘东北圣诞新年狂欢团 10 日</div>
        <div class="rp-route" data-route="ch-2026纯玩东北四大">2026（纯玩）东北四大名城 长白山 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩东北五大">2026（纯玩）东北五大名城 长白山 7 日</div>
        <div class="rp-route" data-route="ch-2026纯玩东北名城">2026（纯玩）东北名城 长白山 漠河 9 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="新疆・丝路">
        <div class="rp-group-title">新疆・丝路 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026纯玩丝绸之路">2026（纯玩）丝绸之路 传奇东方高铁 7 日</div>
        <div class="rp-route" data-route="ch-2026纯玩西安丝绸">2026 (纯玩) 西安、丝绸之路 9 日</div>
        <div class="rp-route" data-route="ch-2026纯玩丝绸之路2">2026 (纯玩) 丝绸之路、茶卡盐湖青海湖 9 日</div>
        <div class="rp-route" data-route="ch-2026纯玩丝绸之路3">2026（纯玩）丝绸之路 青藏铁路 西藏 10 日</div>
        <div class="rp-route" data-route="ch-2026纯玩新疆北疆">2026（纯玩）新疆北疆 8 日</div>
        <div class="rp-route" data-route="ch-2026纯玩新疆南疆">2026（纯玩）新疆南疆 8 日</div>
        <div class="rp-route" data-route="ch-2026纯玩新疆南疆2">2026（纯玩）新疆南疆北疆全景 15 日</div>
        </div>
      </div>
      <div class="rp-group" data-group="华东・华南・港澳">
        <div class="rp-group-title">华东・华南・港澳 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026纯玩江南水乡">2026 (纯玩) 江南水乡 6 天</div>
        <div class="rp-route" data-route="ch-2026纯玩大湾区精">2026（纯玩）大湾区精品美食 6 日</div>
        <div class="rp-route" data-route="ch-2026纯玩香港潮汕">2026（纯玩）香港潮汕韶关佛山广州超级美食 10 日游</div>
        <div class="rp-route" data-route="ch-2026纯玩香港3日">2026（纯玩）香港 3 日</div>
        <div class="rp-route" data-route="ch-2026纯玩厦门土楼">2026 (纯玩) 厦门土楼潮汕 6 日 & 7 日</div>
        <div class="rp-route" data-route="ch-2026纯玩海南岛三">2026 (纯玩) 海南岛三亚 5 天</div>
        </div>
      </div>
      <div class="rp-group" data-group="机票套餐·特别定制">
        <div class="rp-group-title">机票套餐·特别定制 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ch-2026冰雪奇缘东北3">2026冰雪奇缘东北新年狂欢团12日-包机票</div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="ch-sgxjs1426f2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南・穿越胡杨林喀什南疆秘境 14 日（金秋特别团）</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-sgxjs0826f2" data-p-adult="1098" data-p-child="0" data-p-infant="0">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-sgxjn1426e2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 江南・新疆禾木喀纳斯可可托海魔鬼城 14 日（旺季特别团）</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>14天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">780</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">170</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-sgxjn0826e2" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 醉美新疆 禾木喀纳斯可可托海魔鬼城 8 日（旺季特别团）</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026杏福新疆伊犁2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 杏福新疆・伊犁花季 8 日（春季特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026草原牧歌新疆2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 草原牧歌・新疆北疆 8 日（春季特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026绿野仙踪新疆2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 绿野仙踪 新疆阿勒泰喀纳斯醉美 8 日（买一送一特别团）</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026盛夏伊犁薰衣2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 盛夏伊犁・薰衣草之旅 8 日（夏季特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026铂金江南长江2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南 长江新船王极光号 / 揽月号 12 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1798</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">810</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026奢华江南和平2" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 奢华江南和平饭店 - 长江新船王揽月号 / 极光号 13 日（AB/AA 团）</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026九寨沟成都重2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 九寨沟成都重庆长江新船王揽月号 / 极光号 13 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026江南长江三峡2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 江南 长江三峡 11 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026铂金江南7日2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 铂金江南 7 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1798</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">810</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026璀璨金钻江南2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 璀璨金钻～江南奢华 8 日（A 团 & AB 团 & AA 团）</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际黄山2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际・黄山千岛湖 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际婺源2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际・婺源望仙谷 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际海天2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际・海天佛国普陀山 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际九华2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际・九华山 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际泰山2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际・泰山曲阜 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026深坑洲际庐山2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 深坑洲际・庐山 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026成都九寨沟洲2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 成都・九寨沟 洲际酒店奢华超五星升级版 8 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026九寨沟长江三2" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 九寨沟 长江三峡 洲际酒店超豪华五星升级版 12 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1190</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">210</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026山城重庆大足2" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 山城重庆 大足石刻武隆 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026重庆大足石刻2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 重庆大足石刻 长江三峡 10 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026醉美川藏成都2" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 醉美川藏 成都西藏深度 11 日 / 14 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区美食机2" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区美食・机器人奇观 6 日 / 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026舌尖广东珠江2" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 舌尖广东・珠江美食 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区广东美2" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区・广东美食 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026寻味大湾区广2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 寻味大湾区・广东美食 7 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026潮汕高铁广东2" data-p-adult="269" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 潮汕高铁・广东美食 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026潮汕风情珠江2" data-p-adult="279" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 潮汕风情・珠江美食 8 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026香港大湾区珠2" data-p-adult="689" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 香港大湾区 珠江美食 8 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026香港潮汕珠江2" data-p-adult="699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 香港潮汕・珠江美食 10 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026珠江美食长江2" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 珠江美食・长江美景 10 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026大湾区美食长2" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 大湾区美食・长江三峡 10 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>10天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">169</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026珠江美食越南2" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 珠江美食・越南下龙湾 10 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026张家界凤凰古2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 张家界・凤凰古城 7 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026张家界长江三2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 张家界・长江三峡 11 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026北京5日6日2" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 北京 5 日 / 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026北京长江三峡2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 北京 长江三峡 9 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026桂林6日2" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 桂林 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026桂林长江三峡2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 桂林 长江三峡 11 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026厦门泉州土楼2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 厦门泉州土楼 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026厦门土楼武夷2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 厦门土楼武夷山 8 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026厦门长江三峡2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 厦门 长江三峡 11 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>11天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026云南昆明大理2" data-p-adult="299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 云南 昆明大理丽江 6 日 / 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026海南海口三亚2" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 海南 海口三亚 6 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-sgjnsr17262" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 横贯中国・纵览山河：吴越水乡西域大漠 17 天传奇丝路特别团</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026金钻江南深圳2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（金钻江南 + 深圳机器人）马来西亚 - 文莱 - 越南 - 爱达魔都号游轮 16 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>16天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026金钻江南爱达2" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 金钻江南・爱达魔都号游轮 11 日（A&AA 团）</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-sgjnad17262" data-p-adult="798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 爱达花城号海上丝绸之路 亚洲巡礼・爱达花城号游轮 17 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩九寨沟成2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）九寨沟 成都乐山峨眉 7 日（九寨沟高铁体验特别版）</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩九寨沟长2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）九寨沟 长江三峡 11 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩洲际酒店2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）洲际酒店豪华版 成都 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山城重庆4" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山城重庆 3 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>3天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山城重庆5" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山城重庆 武隆天生三桥 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山城重庆6" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山城重庆 三峡游轮 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西藏5日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）西藏 5 日 - 洲际酒店特别版</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京4日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）北京 4 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安5" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）北京西安 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安6" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）北京西安上海 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安7" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）北京、西安、长江三峡 10 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩北京西安8" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）北京西安上海长江三峡 12 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安4日2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 西安 4 日 / 华山 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安长江2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩) 西安、长江三峡 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山东6日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山东 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩河南5日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）河南 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩山西7日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）山西 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界62" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界凤2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界凤凰古城 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界长3" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界长江三峡 9 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩张家界长4" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）张家界长江三峡 11 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩武汉黄鹤2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）武汉黄鹤楼 三峡游轮 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩宜昌重庆2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）宜昌重庆 三峡游轮 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026锦绣中华多彩2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026【锦绣中华】多彩贵州・大美江西・金秋揽胜 16 天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州黄果2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）贵州黄果树 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州桂林2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）贵州桂林阳朔 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州凤凰2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）贵州凤凰张家界 9 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩桂林漓江2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）桂林 漓江阳朔 5 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>5天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩桂林长江2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）桂林 长江三峡 9 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南昆明2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）云南 昆明大理丽江香格里拉 6 日 / 7 日 / 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南丽江3" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）云南 丽江香格里拉泸沽湖 9 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩云南丽江4" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）云南 丽江香格里拉泸沽湖石林 10 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩贵州云南2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）贵州云南 云贵高原 9 日 / 12 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026冰雪奇缘东北2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 冰雪奇缘东北圣诞新年狂欢团 10 日</h3>
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩东北四大2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）东北四大名城 长白山 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩东北五大2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）东北五大名城 长白山 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩东北名城2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）东北名城 长白山 漠河 9 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩丝绸之路4" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）丝绸之路 传奇东方高铁 7 日</h3>
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）
第7天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩西安丝绸2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 西安、丝绸之路 9 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩丝绸之路5" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 丝绸之路、茶卡盐湖青海湖 9 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>9天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩丝绸之路6" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）丝绸之路 青藏铁路 西藏 10 日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩新疆北疆2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）新疆北疆 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩新疆南疆3" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）新疆南疆 8 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>8天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩新疆南疆4" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）新疆南疆北疆全景 15 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>15天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩江南水乡2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 江南水乡 6 天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩大湾区精2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）大湾区精品美食 6 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩香港潮汕2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）香港潮汕韶关佛山广州超级美食 10 日游</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩香港3日2" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026（纯玩）香港 3 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>3天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩厦门土楼2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 厦门土楼潮汕 6 日 & 7 日</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026纯玩海南岛三2" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026 (纯玩) 海南岛三亚 5 天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 国内线含跨城交通，具体以行程单为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-2026冰雪奇缘东北4" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物</span>
        <div class="rp-detail-hero-in"><h3>2026冰雪奇缘东北新年狂欢团12日-包机票</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>12天</div><div><b>抵达城市</b>沈阳</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天 悉尼/墨尔本出发
请提前3小时抵达机场，搭乘国际航班在国内中转飞往沈阳，次日到达。（布里斯班/阿德莱德出发有附加费，具体附加费另询）

第2天 抵达沈阳
抵达沈阳，接机后前往酒店休息（酒店14:00後可以办理入住手续）。住宿：新都绿城喜来登酒店或同级5*酒店

第3天 沈阳 - 长春（B酒店 / L东北风味 / D满族乌拉火锅）
早餐后游览【沈阳故宫】，它是国内现存规模仅次于北京故宫的完整皇家建筑群。随后参观【张学良旧居陈列馆】，漫步【满清一条街】。游览【沈阳中街】步行街。午餐后乘车前往长春，车程约3.5小时。特别安排：满族乌拉火锅欢迎宴。住宿：福朋喜来登酒店或同级5*酒店
*温馨提示：沈阳故宫、张学良旧居每逢周一闭馆，12月26日、1月9日两期改为非遗体验【DIY李氏糖人】+【北陵公园（清昭陵）】

第4天 长春 - 吉林（B酒店 / L人参汽锅鸡 / D满族三套碗）
早餐后搭乘【长春有轨电车】（赠热饮），前往【这有山】文旅小镇。午餐后驱车前往吉林市，车程约1.5小时，傍晚沿松江中路赏江畔雪景；晚餐【满族三套碗】。住宿：戴斯温德姆大酒店或同级5*酒店

第5天 吉林 - 长白山（B酒店 / L吉林风味 / D朝鲜风味）
沿雾凇观景公路赏吉林雾凇，走进【朝鲜族民俗村】体验泡菜制作。傍晚入住长白山温泉酒店，晚间自由体验温泉（自备泳衣）。住宿：金水鹤温泉酒店或同级5*酒店

第6天 长白山（B酒店 / L景区内自助 / D柴火铁锅炖）
前往【长白山北坡风景区】换乘环保车赴天池观景台，游聚龙温泉群、远观【长白瀑布】（赠温泉水煮鸡蛋）。住宿：金水鹤温泉酒店或同级5*酒店
*长白山受天气影响偶有封山，以景区当日通知为准

第7天 长白山 - 牡丹江（B酒店 / L东北鱼宴 / D东北水饺风味）
游览【镜泊湖景区】冬日冰瀑。午餐后赴牡丹江，沉浸式包饺子体验。圣诞节/新年团赠小烟花。住宿：牡丹江世茂假日大酒店或同级5*酒店

第8天 牡丹江 - 中国雪乡（B酒店 / L林场风味 / D古法锅包肉）
前往【中国雪乡风景区】，入住东北特色民宿（独立卫浴、两人一间）。赠团队15秒雪乡航拍短视频。住宿：雪乡民宿/二浪河风房车民宿或同级民宿

第9天 雪乡 - 哈尔滨（B酒店 / L农家风味 / D自助烤肉）
穿行【林海雪原·冰雪画廊】，赴哈尔滨，傍晚漫步【中央大街】。赠马迭尔冰棍每人一支。住宿：哈尔滨施柏阁酒店或同级5*酒店

第10天 哈尔滨（B酒店 / L俄式西餐 / D"冰宫"火锅）
【圣索菲亚广场】看冬泳表演+冰上人力自行车。【哈尔滨冰雪大世界】。晚餐"冰宫火锅"。住宿：哈尔滨施柏阁酒店或同级5*酒店

第11天 哈尔滨 - 澳洲（B酒店）
早餐后前往机场，乘国际航班飞往澳洲。

第12天 抵达澳洲
抵达澳洲，返回温馨的家。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 机票：本团含悉尼/墨尔本出发国际联运机票（国内中转飞沈阳）；布里斯班/阿德莱德出发有附加费，具体另询。航班与行李额以航司出票为准。
3. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
4. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
5. 单房差：单人入住需补单房差，详见价格表。
6. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
7. 退改：机票与团费退改分别按航司与退改条款执行，详情咨询客服。
8. 班期：具体出发日期与余位以客服查询为准。沈阳故宫/张学良旧居每逢周一闭馆，部分日期行程调整见行程备注。
9. 温馨提示：雪乡民宿为两人一间独立卫浴；长白山温泉请自备泳衣；冰雪项目受天气影响以景区当日通知为准。
* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;










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
      <div class="rp-group" data-group="斐济">
        <div class="rp-group-title">斐济 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="is-2026斐济定制团">2026斐济定制团</div>
        </div>
      </div>
      <div class="rp-group" data-group="巴厘岛">
        <div class="rp-group-title">巴厘岛 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="is-2026经典豪华巴厘">2026经典豪华巴厘岛5天游</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛4">2026经典巴厘岛4天游-海边四星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛42">2026经典巴厘岛4天游-海边五星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛5">2026经典巴厘岛5天游-海边四星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛52">2026经典巴厘岛5天游-海边五星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛6">2026经典巴厘岛6天游-海边四星</div>
        <div class="rp-route" data-route="is-2026经典巴厘岛62">2026经典巴厘岛6天游-海边五星</div>
        <div class="rp-route" data-route="is-2026巴厘岛科莫多">2026巴厘岛+科莫多雙島阿雅娜酒店5天奢華之旅</div>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典豪华巴厘2" data-p-adult="899" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛43" data-p-adult="699" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">699</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛44" data-p-adult="799" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛53" data-p-adult="799" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛54" data-p-adult="899" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛63" data-p-adult="899" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026经典巴厘岛64" data-p-adult="999" data-p-child="0" data-p-infant="0">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="is-2026巴厘岛科莫多2" data-p-adult="1999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/fiji.jpg')">
        <span class="rp-badge">海岛度假</span>
        <div class="rp-detail-hero-in"><h3>2026巴厘岛+科莫多雙島阿雅娜酒店5天奢華之旅</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 海岛线含机票/酒店套餐，签证与行李额以航司规定为准。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;











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
      <div class="rp-group" data-group="定制团">
        <div class="rp-group-title">定制团 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026美国加拿大定">2026美国加拿大定制团</div>
        <div class="rp-route" data-route="am-2026加拿大定制团">2026加拿大定制团</div>
        </div>
      </div>
      <div class="rp-group" data-group="南美">
        <div class="rp-group-title">南美 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026南美定制团">2026南美定制团</div>
        <div class="rp-route" data-route="am-2026澳洲包机票南">2026【澳洲包机票】南美七国全景精华24日游</div>
        <div class="rp-route" data-route="am-2026澳洲包机票南2">2026【澳洲包机票】南美经典五国16日狂欢之旅</div>
        </div>
      </div>
      <div class="rp-group" data-group="加拿大/阿拉斯加">
        <div class="rp-group-title">加拿大/阿拉斯加 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026澳洲包机票加">2026【澳洲包机票】加拿大落基山+美國阿拉斯加15天全景之旅</div>
        <div class="rp-route" data-route="am-2026美国加拿大东">2026美国加拿大东部8日游</div>
        <div class="rp-route" data-route="am-2026加拿大落基山">2026加拿大落基山脉6日游</div>
        <div class="rp-route" data-route="am-2026加拿大落基山2">2026加拿大落基山脉7日游</div>
        <div class="rp-route" data-route="am-2026加拿大加东精">2026加拿大加东精品6日游-A团</div>
        <div class="rp-route" data-route="am-2026加拿大加东精2">2026加拿大加东精品6日游-B团</div>
        </div>
      </div>
      <div class="rp-group" data-group="美国">
        <div class="rp-group-title">美国 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026澳洲包机票美">2026【澳洲包机票】美国东西海岸经典17天游</div>
        <div class="rp-route" data-route="am-2026美国东海岸经">2026美国东海岸经典6日</div>
        <div class="rp-route" data-route="am-2026美国东海岸经2">2026美国东海岸经典7日</div>
        <div class="rp-route" data-route="am-2026美国西部经典">2026美国西部经典8日游</div>
        <div class="rp-route" data-route="am-2026美国西部经典2">2026美国西部经典9日游</div>
        <div class="rp-route" data-route="am-2026美国西部经典3">2026美国西部经典10日游</div>
        <div class="rp-route" data-route="am-2026美国西部黄石">2026美国西部黄石峡谷9日游</div>
        <div class="rp-route" data-route="am-2026美国西部黄石2">2026美国西部黄石峡谷10日游</div>
        <div class="rp-route" data-route="am-2026美国东西海岸">2026美国东西海岸精华14日游</div>
        <div class="rp-route" data-route="am-2026美国东西海岸2">2026 美国东西海岸黄石经典15日</div>
        </div>
      </div>
      <div class="rp-group" data-group="美加">
        <div class="rp-group-title">美加 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="am-2026夏威夷檀香山">2026夏威夷檀香山欧胡岛+茂宜岛/火山岛6日游</div>
        <div class="rp-route" data-route="am-2026美加东名城瀑">2026美加东名城瀑布9日游</div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="am-2026美国加拿大定2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026南美定制团2" data-p-adult="9999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">9999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票南3" data-p-adult="23499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">23499</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票南4" data-p-adult="16888" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">16888</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票加2" data-p-adult="8580" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026【澳洲包机票】加拿大落基山+美國阿拉斯加15天全景之旅</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">8580</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国加拿大东2" data-p-adult="2078" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2078</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大落基山3" data-p-adult="1799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026加拿大落基山脉6日游</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>6天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1799</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大落基山4" data-p-adult="1999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
        <span class="rp-badge">美加专线</span>
        <div class="rp-detail-hero-in"><h3>2026加拿大落基山脉7日游</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>7天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1999</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大加东精3" data-p-adult="1539" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026加拿大加东精4" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
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
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026澳洲包机票美2" data-p-adult="5999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东海岸经3" data-p-adult="1088" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1088</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东海岸经4" data-p-adult="1288" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1288</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部经典4" data-p-adult="1898" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1898</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部经典5" data-p-adult="2058" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2058</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部经典6" data-p-adult="2198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2198</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部黄石3" data-p-adult="2228" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2228</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国西部黄石4" data-p-adult="2398" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2398</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东西海岸3" data-p-adult="2758" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2758</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美国东西海岸4" data-p-adult="3498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/usa.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3498</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026夏威夷檀香山2" data-p-adult="2199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/america.jpg')">
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2199</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）
第2天：待补充（景点/用餐/住宿）
第3天：待补充（景点/用餐/住宿）
第4天：待补充（景点/用餐/住宿）
第5天：待补充（景点/用餐/住宿）
第6天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="am-2026美加东名城瀑2" data-p-adult="2339" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/canada.jpg')">
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
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【参团须知】
1. 签证：中国团需有效中国签证；外籍游客请确认入境要求。
2. 成团：最低成团人数以出团前通知为准，未成团将协商改期或全额退款。
3. 儿童：儿童价按不占床/占床区分，详见价格表；婴儿价另询。
4. 单房差：单人入住需补单房差，详见价格表「单房差」一项。
5. 预订：支付定金后留位，余款于出发前付清；以客服确认为准。
6. 退改：出发前取消按退改条款执行，详情咨询客服。
7. 价格：以上 AUD 报价含所列项目，不含个人消费、自费项目及未列费用。
8. 班期：具体出发日期与余位以客服查询为准。
9. 美加/南美线多为联运机票，签证（美签/加签）需提前办理。

* 本须知为通用模板，最终以出团合同与客服确认为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;









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
      <div class="rp-group" data-group="其他区域">
        <div class="rp-group-title">其他区域 <span class="rp-arrow">▶</span></div>
        <div class="rp-group-list">
        <div class="rp-route" data-route="ot-示例线路请替换为实际">示例线路（请替换为实际团名）</div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="ot-示例线路请替换为实际2" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/【参团须知】
请在此处粘贴参团须知内容...')">
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
第1天：待补充（景点/用餐/住宿）

* 以上为参考框架，具体每日行程以出团通知书为准。
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
【行程安排】
请在此处粘贴行程安排内容...
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;










