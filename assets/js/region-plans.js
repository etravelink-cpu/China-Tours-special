window.REGION_VISIBLE = ['china', 'asia'];
// Etrips 国安易游 — 目的地分区行程规划（可复用模板）
// 新增子页只需在此对象加一个 key（如 nz / china），list.js 按 ?d= 自动取用
(function(){
  window.REGION_PLANS = window.REGION_PLANS || {};

      window.REGION_PLANS.australia = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/hero-sydney.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/au-sydney.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/au-uluru.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/au-apostles.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>澳大利亚 · 全景旅游</h1>
    <div class="rp-sub">Australia Region Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="australia 目的地">
  </nav>
  <div class="rp-detail-area">
  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;

        window.REGION_PLANS.nz = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/nz.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/nz-queenstown.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/nz-lake.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>新西兰 · 纯净之旅</h1>
    <div class="rp-sub">New Zealand Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="nz 目的地">
  </nav>
  <div class="rp-detail-area">
  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;

                                                        window.REGION_PLANS.asia = `
<div class="rp-banner">
  <div class="rp-slides">
    <div class="rp-slide active" style="background-image:url('assets/img/destinations/asia.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cn-westlake.jpg')"></div>
    <div class="rp-slide" style="background-image:url('assets/img/destinations/japan.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>亚洲 · 分区行程规划</h1>
    <div class="rp-sub">Asia Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="asia 目的地">
      <div class="rp-cat" data-cat="超值特惠团">
        <div class="rp-cat-title">超值特惠团 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="超值特惠团">
          <div class="rp-group-title">超值特惠团 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="as-cm0255">中国超值特惠团 · 玩转台湾 轻松环岛6日</div>
        <div class="rp-route" data-route="as-cm0257">中国超值特惠团 · 玩转台湾 精华环岛7日</div>
        <div class="rp-route" data-route="as-cm0259">中国超值特惠团 · 玩转台湾 全景环岛8日</div>
        <div class="rp-route" data-route="as-cm0261">中国超值特惠团 · 韩国6日</div>
        <div class="rp-route" data-route="as-cm0263">中国超值特惠团 · 越南双龙湾豪华美食6日</div>
        <div class="rp-custom" data-custom="1" data-board="超值特惠团">✨ 私人订制（超值特惠团）</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="纯玩无购物团">
        <div class="rp-cat-title">纯玩无购物团 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="纯玩无购物团">
          <div class="rp-group-title">纯玩无购物团 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="as-cm0243">中国纯玩无购物团 · （纯玩）韩国首尔江原道5日</div>
        <div class="rp-route" data-route="as-cm0245">中国纯玩无购物团 · 白色圣诞浪漫新年缤纷日本9日游</div>
        <div class="rp-route" data-route="as-cm0247">中国纯玩无购物团 · 白色圣诞浪漫新年缤纷日本11日游 (包机票)</div>
        <div class="rp-route" data-route="as-cm0249">中国纯玩无购物团 · （纯玩）缤纷日本6日</div>
        <div class="rp-route" data-route="as-cm0251">中国纯玩无购物团 · （纯玩）日本北海道5日</div>
        <div class="rp-route" data-route="as-cm0253">中国纯玩无购物团 · （纯玩）日本东京富士山北海道10日</div>
        <div class="rp-route" data-route="as-cm0265">中国纯玩无购物团 · （纯玩）台湾5日</div>
        <div class="rp-route" data-route="as-cm0267">中国纯玩无购物团 · （纯玩）台湾6日</div>
        <div class="rp-route" data-route="as-cm0269">中国纯玩无购物团 · （纯玩）台湾8日</div>
        <div class="rp-route" data-route="as-cm0271">中国纯玩无购物团 · （纯玩）新加坡马来西亚6天-新进马出</div>
        <div class="rp-route" data-route="as-cm0273">中国纯玩无购物团 · （纯玩）马来西亚新加坡6天-马进新出</div>
        <div class="rp-custom" data-custom="1" data-board="纯玩无购物团">✨ 私人订制（纯玩无购物团）</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="as-cm0255" data-p-adult="638" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 玩转台湾 轻松环岛6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">638</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1038</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0257" data-p-adult="738" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 玩转台湾 精华环岛7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">738</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1238</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">500</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0259" data-p-adult="1018" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 玩转台湾 全景环岛8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1018</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1518</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">500</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0261" data-p-adult="919" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 韩国6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">919</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">989</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">380</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0263" data-p-adult="498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 越南双龙湾豪华美食6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">498</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">390</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0243" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）韩国首尔江原道5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1198</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0245" data-p-adult="2599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · 白色圣诞浪漫新年缤纷日本9日游</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0247" data-p-adult="5399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · 白色圣诞浪漫新年缤纷日本11日游 (包机票)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">5399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">5399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0249" data-p-adult="1058" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）缤纷日本6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1058</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1058</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0251" data-p-adult="1058" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）日本北海道5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1058</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1058</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0253" data-p-adult="2098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）日本东京富士山北海道10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2098</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2098</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0265" data-p-adult="998" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）台湾5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">998</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">998</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">240</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0267" data-p-adult="1098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）台湾6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1098</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1098</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">350</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0269" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）台湾8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1198</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0271" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/japan.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）新加坡马来西亚6天-新进马出</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="as-cm0273" data-p-adult="1498" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/asia.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）马来西亚新加坡6天-马进新出</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1498</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1498</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">780</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;;;;;;;;;;;;;;;;;;















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
  </nav>
  <div class="rp-detail-area">
  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;;;;;;;;;;;;;

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
    <div class="rp-slide" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')"></div>
  </div>
  <div class="rp-banner-in">
    <h1>中国 · 分区行程规划</h1>
    <div class="rp-sub">China Tours</div>
    <p class="rp-desc">点击左侧区域，查看各地核心行程。详情与班期以客服查询为准。</p>
  </div>
</div>
<div class="rp-layout">
  <nav class="rp-nav2" aria-label="china 目的地">
      <div class="rp-cat" data-cat="超值特惠团">
        <div class="rp-cat-title">超值特惠团 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="西北">
          <div class="rp-group-title">西北 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0001">中国超值特惠团 · 铂金江南，穿越胡杨林喀什南疆秘境14日（金秋特别团）</div>
        <div class="rp-route" data-route="ch-cm0011">中国超值特惠团 · 横贯中国・纵览山河：吴越水乡西域大漠 17 天传奇丝路特别团</div>
        <div class="rp-route" data-route="ch-cm0013">中国超值特惠团 · 穿越胡杨林 喀什南疆秘境 8 日（金秋特别团）</div>
        <div class="rp-route" data-route="ch-cm0021">中国超值特惠团 · 史诗画卷 醉美新疆 世界级绝美风光之旅14日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-cm0031">中国超值特惠团 · 绿野仙踪 新疆阿勒泰喀纳斯醉美8日</div>
        <div class="rp-route" data-route="ch-cm0033">中国超值特惠团 · 爱达花城号首航海上丝绸之路 中国+越南+马来西亚+汶莱四国漫游17天</div>
        <div class="rp-route" data-route="ch-cm0041">中国超值特惠团 · 醉美新疆 禾木喀纳斯可可托海魔鬼城8日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-cm0043">中国超值特惠团 · 铂金江南，醉美新疆 禾木喀纳斯可可托海魔鬼城14日（旺季特别团）</div>
        <div class="rp-route" data-route="ch-cm0101">中国超值特惠团 · 醉美川藏 成都西藏深度11日</div>
        <div class="rp-route" data-route="ch-cm0103">中国超值特惠团 · 醉美川藏 成都西藏深度14日</div>
        <div class="rp-custom" data-custom="1" data-board="西北">✨ 私人订制（西北）</div>
          </div>
        </div>
        <div class="rp-group" data-group="长江三峡">
          <div class="rp-group-title">长江三峡 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0003">中国超值特惠团 · 铂金江南 长江新船王极光号/揽月号12日</div>
        <div class="rp-route" data-route="ch-cm0005">中国超值特惠团 · 奢华江南和平饭店-长江新船王揽月号/极光号13日AB团</div>
        <div class="rp-route" data-route="ch-cm0007">中国超值特惠团 · 奢华江南和平饭店-长江新船王揽月号/极光号13日AA团</div>
        <div class="rp-route" data-route="ch-cm0053">中国超值特惠团 · 九寨沟 长江三峡12日(超豪华洲际酒店升级版)</div>
        <div class="rp-route" data-route="ch-cm0067">中国超值特惠团 · 江南 长江三峡11日</div>
        <div class="rp-route" data-route="ch-cm0093">中国超值特惠团 · 珠江美食，长江美景10日</div>
        <div class="rp-route" data-route="ch-cm0095">中国超值特惠团 · 大湾区美食，长江三峡10日</div>
        <div class="rp-route" data-route="ch-cm0099">中国超值特惠团 · 张家界，长江三峡11日</div>
        <div class="rp-route" data-route="ch-cm0115">中国超值特惠团 · 桂林 长江三峡11日</div>
        <div class="rp-route" data-route="ch-cm0121">中国超值特惠团 · 厦门 长江三峡11日</div>
        <div class="rp-route" data-route="ch-cm0125">中国超值特惠团 · 重庆大足石刻 长江三峡10日</div>
        <div class="rp-custom" data-custom="1" data-board="长江三峡">✨ 私人订制（长江三峡）</div>
          </div>
        </div>
        <div class="rp-group" data-group="西南">
          <div class="rp-group-title">西南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0009">中国超值特惠团 · 九寨沟成都重庆长新船王揽月号/极光号13日</div>
        <div class="rp-route" data-route="ch-cm0051">中国超值特惠团 · 成都 九寨沟8日(超豪华洲际酒店升级版）</div>
        <div class="rp-route" data-route="ch-cm0097">中国超值特惠团 · 张家界，凤凰古城7日</div>
        <div class="rp-route" data-route="ch-cm0113">中国超值特惠团 · 桂林6日</div>
        <div class="rp-route" data-route="ch-cm0123">中国超值特惠团 · 山城重庆 大足石刻武隆6日</div>
        <div class="rp-route" data-route="ch-cm0127">中国超值特惠团 · 云南 昆明大理丽江6日</div>
        <div class="rp-route" data-route="ch-cm0129">中国超值特惠团 · 云南 昆明大理丽江 石林7日</div>
        <div class="rp-custom" data-custom="1" data-board="西南">✨ 私人订制（西南）</div>
          </div>
        </div>
        <div class="rp-group" data-group="江南上海">
          <div class="rp-group-title">江南上海 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0035">中国超值特惠团 · (金钻江南，深圳机器人)马来西亚-文莱-越南-中国香港爱达魔都号游轮16日</div>
        <div class="rp-route" data-route="ch-cm0039">中国超值特惠团 · 铂金江南7日</div>
        <div class="rp-route" data-route="ch-cm0045">中国超值特惠团 · 璀璨金钻~江南奢华8日(A团)</div>
        <div class="rp-route" data-route="ch-cm0047">中国超值特惠团 · 璀璨金钻~江南奢华8日(AA团)</div>
        <div class="rp-route" data-route="ch-cm0049">中国超值特惠团 · 璀璨金钻~江南奢华8日(AB团)</div>
        <div class="rp-route" data-route="ch-cm0055">中国超值特惠团 · 深坑洲际，黄山千岛湖9日</div>
        <div class="rp-route" data-route="ch-cm0057">中国超值特惠团 · 深坑洲际，婺源望仙谷9日</div>
        <div class="rp-route" data-route="ch-cm0059">中国超值特惠团 · 深坑洲际 海天佛国普陀山9日</div>
        <div class="rp-route" data-route="ch-cm0061">中国超值特惠团 · 深坑洲际，九华山9日</div>
        <div class="rp-route" data-route="ch-cm0063">中国超值特惠团 · 深坑洲际，泰山曲阜9日</div>
        <div class="rp-route" data-route="ch-cm0065">中国超值特惠团 · 深坑洲际，庐山9日</div>
        <div class="rp-route" data-route="ch-cm0069">中国超值特惠团 · 金钻江南，爱达魔都号游轮11 日 (A团)</div>
        <div class="rp-route" data-route="ch-cm0071">中国超值特惠团 · 金钻江南，爱达魔都号游轮11 日(AA团)</div>
        <div class="rp-custom" data-custom="1" data-board="江南上海">✨ 私人订制（江南上海）</div>
          </div>
        </div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0037">中国超值特惠团 · VIP特别订制团</div>
        <div class="rp-custom" data-custom="1" data-board="其他">✨ 私人订制（其他）</div>
          </div>
        </div>
        <div class="rp-group" data-group="华南">
          <div class="rp-group-title">华南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0073">中国超值特惠团 · 舌尖广东，珠江美食6日</div>
        <div class="rp-route" data-route="ch-cm0075">中国超值特惠团 · 大湾区美食，机器人奇观6日</div>
        <div class="rp-route" data-route="ch-cm0077">中国超值特惠团 · 大湾区美食，机器人奇观7日</div>
        <div class="rp-route" data-route="ch-cm0079">中国超值特惠团 · 大湾区，广东美食6日</div>
        <div class="rp-route" data-route="ch-cm0081">中国超值特惠团 · 寻味大湾区，广东美食7日</div>
        <div class="rp-route" data-route="ch-cm0083">中国超值特惠团 · 潮汕高铁，广东美食7日</div>
        <div class="rp-route" data-route="ch-cm0085">中国超值特惠团 · 潮汕风情，珠江美食8日</div>
        <div class="rp-route" data-route="ch-cm0087">中国超值特惠团 · 香港大湾区 珠江美食8日</div>
        <div class="rp-route" data-route="ch-cm0089">中国超值特惠团 · 香港潮汕，珠江美食10日</div>
        <div class="rp-route" data-route="ch-cm0091">中国超值特惠团 · 珠江美食，越南下龙湾10日</div>
        <div class="rp-route" data-route="ch-cm0117">中国超值特惠团 · 厦门泉州土楼6日</div>
        <div class="rp-route" data-route="ch-cm0119">中国超值特惠团 · 厦门土楼武夷山8日</div>
        <div class="rp-route" data-route="ch-cm0131">中国超值特惠团 · 海南 海口三亚6日</div>
        <div class="rp-custom" data-custom="1" data-board="华南">✨ 私人订制（华南）</div>
          </div>
        </div>
        <div class="rp-group" data-group="北京西安">
          <div class="rp-group-title">北京西安 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0107">中国超值特惠团 · 北京5日</div>
        <div class="rp-route" data-route="ch-cm0109">中国超值特惠团 · 北京6日</div>
        <div class="rp-route" data-route="ch-cm0111">中国超值特惠团 · 北京 长江三峡 9日</div>
        <div class="rp-custom" data-custom="1" data-board="北京西安">✨ 私人订制（北京西安）</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="纯玩无购物团">
        <div class="rp-cat-title">纯玩无购物团 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="华北中原">
          <div class="rp-group-title">华北中原 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0015">中国纯玩无购物团 · 冰雪奇缘东北新年狂欢团 10日</div>
        <div class="rp-route" data-route="ch-cm0195">中国纯玩无购物团 · （纯玩）山东6日</div>
        <div class="rp-route" data-route="ch-cm0197">中国纯玩无购物团 · （纯玩）河南5日</div>
        <div class="rp-route" data-route="ch-cm0199">中国纯玩无购物团 · （纯玩）山西7日</div>
        <div class="rp-route" data-route="ch-cm0201">中国纯玩无购物团 · （纯玩）东北四大名城 长白山6日</div>
        <div class="rp-route" data-route="ch-cm0203">中国纯玩无购物团 · （纯玩）东北五大名城 长白山7日</div>
        <div class="rp-route" data-route="ch-cm0205">中国纯玩无购物团 · （纯玩）东北名城 长白山 漠河9日</div>
        <div class="rp-custom" data-custom="1" data-board="华北中原">✨ 私人订制（华北中原）</div>
          </div>
        </div>
        <div class="rp-group" data-group="西南">
          <div class="rp-group-title">西南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0019">中国纯玩无购物团 · 【锦绣中华】多彩贵州·大美江西·金秋揽胜16天</div>
        <div class="rp-route" data-route="ch-cm0133">中国纯玩无购物团 · （纯玩）九寨沟 成都乐山峨眉7日（九寨沟高铁体验特别版）</div>
        <div class="rp-route" data-route="ch-cm0157">中国纯玩无购物团 · （纯玩）张家界6日</div>
        <div class="rp-route" data-route="ch-cm0159">中国纯玩无购物团 · （纯玩）张家界凤凰古城7日</div>
        <div class="rp-route" data-route="ch-cm0171">中国纯玩无购物团 · （纯玩）桂林 漓江阳朔5日</div>
        <div class="rp-route" data-route="ch-cm0175">中国纯玩无购物团 · （纯玩）贵州黄果树5日</div>
        <div class="rp-route" data-route="ch-cm0177">中国纯玩无购物团 · （纯玩）贵州桂林阳朔8日</div>
        <div class="rp-route" data-route="ch-cm0179">中国纯玩无购物团 · （纯玩）贵州凤凰张家界9日</div>
        <div class="rp-route" data-route="ch-cm0181">中国纯玩无购物团 · （纯玩）云南香格里拉6日</div>
        <div class="rp-route" data-route="ch-cm0183">中国纯玩无购物团 · （纯玩）云南 昆明大理丽江香格里拉7日</div>
        <div class="rp-route" data-route="ch-cm0185">中国纯玩无购物团 · （纯玩）云南 昆明大理丽江香格里拉8日</div>
        <div class="rp-route" data-route="ch-cm0187">中国纯玩无购物团 · （纯玩）云南 丽江香格里拉泸沽湖9日</div>
        <div class="rp-route" data-route="ch-cm0189">中国纯玩无购物团 · （纯玩）云南 丽江香格里拉泸沽湖石林10日</div>
        <div class="rp-route" data-route="ch-cm0191">中国纯玩无购物团 · （纯玩）贵州云南 云贵高原9日</div>
        <div class="rp-route" data-route="ch-cm0193">中国纯玩无购物团 · （纯玩）贵州云南 云贵高原12日</div>
        <div class="rp-route" data-route="ch-cm0225">中国纯玩无购物团 · (纯玩) 成都5日(超豪华洲际酒店升级版)</div>
        <div class="rp-route" data-route="ch-cm0229">中国纯玩无购物团 · （纯玩）山城重庆3日</div>
        <div class="rp-route" data-route="ch-cm0231">中国纯玩无购物团 · （纯玩）山城重庆 武隆天生三桥5日</div>
        <div class="rp-custom" data-custom="1" data-board="西南">✨ 私人订制（西南）</div>
          </div>
        </div>
        <div class="rp-group" data-group="长江三峡">
          <div class="rp-group-title">长江三峡 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0135">中国纯玩无购物团 · （纯玩）九寨沟 长江三峡11日</div>
        <div class="rp-route" data-route="ch-cm0161">中国纯玩无购物团 · （纯玩）张家界长江三峡9日</div>
        <div class="rp-route" data-route="ch-cm0163">中国纯玩无购物团 · （纯玩）张家界长江三峡11日</div>
        <div class="rp-route" data-route="ch-cm0165">中国纯玩无购物团 · （纯玩）山城重庆 三峡游轮6日</div>
        <div class="rp-route" data-route="ch-cm0167">中国纯玩无购物团 · （纯玩）武汉黄鹤楼 三峡游轮6日</div>
        <div class="rp-route" data-route="ch-cm0169">中国纯玩无购物团 · （纯玩）宜昌重庆 三峡游轮6日</div>
        <div class="rp-route" data-route="ch-cm0173">中国纯玩无购物团 · （纯玩）桂林 长江三峡9日</div>
        <div class="rp-route" data-route="ch-cm0239">中国纯玩无购物团 · （纯玩）世纪游轮“江山如此多娇·山河颂”长江全览11日游</div>
        <div class="rp-route" data-route="ch-cm0241">中国纯玩无购物团 · （纯玩）世纪游轮“江山如此多娇·山河颂”长江全览12日游</div>
        <div class="rp-custom" data-custom="1" data-board="长江三峡">✨ 私人订制（长江三峡）</div>
          </div>
        </div>
        <div class="rp-group" data-group="华南">
          <div class="rp-group-title">华南 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0137">中国纯玩无购物团 · （纯玩）大湾区精品美食6日</div>
        <div class="rp-route" data-route="ch-cm0139">中国纯玩无购物团 · （纯玩） 香港潮汕韶关佛山广州超级美食10日游</div>
        <div class="rp-route" data-route="ch-cm0233">中国纯玩无购物团 · (纯玩)厦门土楼潮汕6日</div>
        <div class="rp-route" data-route="ch-cm0235">中国纯玩无购物团 · (纯玩)厦门土楼潮汕7日</div>
        <div class="rp-route" data-route="ch-cm0237">中国纯玩无购物团 · （纯玩）海南岛三亚5天</div>
        <div class="rp-custom" data-custom="1" data-board="华南">✨ 私人订制（华南）</div>
          </div>
        </div>
        <div class="rp-group" data-group="北京西安">
          <div class="rp-group-title">北京西安 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0141">中国纯玩无购物团 · （纯玩）北京4日</div>
        <div class="rp-route" data-route="ch-cm0143">中国纯玩无购物团 · (纯玩）北京西安6日</div>
        <div class="rp-route" data-route="ch-cm0145">中国纯玩无购物团 · （纯玩）北京西安上海8日</div>
        <div class="rp-route" data-route="ch-cm0147">中国纯玩无购物团 · (纯玩)北京，西安，长江三峡10日</div>
        <div class="rp-route" data-route="ch-cm0149">中国纯玩无购物团 · （纯玩）北京西安上海长江三峡12日</div>
        <div class="rp-route" data-route="ch-cm0151">中国纯玩无购物团 · （纯玩）西安4日</div>
        <div class="rp-route" data-route="ch-cm0153">中国纯玩无购物团 · (纯玩)西安，华山5日</div>
        <div class="rp-route" data-route="ch-cm0155">中国纯玩无购物团 · (纯玩）西安，长江三峡8日</div>
        <div class="rp-custom" data-custom="1" data-board="北京西安">✨ 私人订制（北京西安）</div>
          </div>
        </div>
        <div class="rp-group" data-group="西北">
          <div class="rp-group-title">西北 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0207">中国纯玩无购物团 · （纯玩）西藏5日-洲际酒店特别版</div>
        <div class="rp-route" data-route="ch-cm0209">中国纯玩无购物团 · （纯玩）丝绸之路 传奇东方高铁7日</div>
        <div class="rp-route" data-route="ch-cm0211">中国纯玩无购物团 · （纯玩）西安，丝绸之路9日</div>
        <div class="rp-route" data-route="ch-cm0213">中国纯玩无购物团 · （纯玩）丝绸之路，茶卡盐湖青海湖9日</div>
        <div class="rp-route" data-route="ch-cm0215">中国纯玩无购物团 · （纯玩）丝绸之路 青藏铁路 西藏10日</div>
        <div class="rp-route" data-route="ch-cm0217">中国纯玩无购物团 · （纯玩）新疆北疆8日</div>
        <div class="rp-route" data-route="ch-cm0219">中国纯玩无购物团 · （纯玩）新疆南疆8日</div>
        <div class="rp-route" data-route="ch-cm0221">中国纯玩无购物团 · （纯玩）新疆南疆北疆全景15日</div>
        <div class="rp-custom" data-custom="1" data-board="西北">✨ 私人订制（西北）</div>
          </div>
        </div>
        <div class="rp-group" data-group="其他">
          <div class="rp-group-title">其他 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0223">中国纯玩无购物团·样例</div>
        <div class="rp-custom" data-custom="1" data-board="其他">✨ 私人订制（其他）</div>
          </div>
        </div>
        <div class="rp-group" data-group="江南上海">
          <div class="rp-group-title">江南上海 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0227">中国纯玩无购物团 · (纯玩）江南水乡6天</div>
        <div class="rp-custom" data-custom="1" data-board="江南上海">✨ 私人订制（江南上海）</div>
          </div>
        </div>
      </div>
      <div class="rp-cat" data-cat="含机票特别订制团">
        <div class="rp-cat-title">含机票特别订制团 <span class="rp-arrow">▶</span></div>
        <div class="rp-group" data-group="全部行程">
          <div class="rp-group-title">全部行程 <span class="rp-arrow">▶</span></div>
          <div class="rp-group-list">
        <div class="rp-route" data-route="ch-cm0017">中国超值特惠团 · 横贯中国・纵览山河：吴越水乡西域大漠 18 天传奇丝路特别团（澳洲包机票）</div>
        <div class="rp-route" data-route="ch-cm0023">中国纯玩无购物团 · 【锦绣中华】多彩贵州·大美江西·广州团圆19天-包机票</div>
        <div class="rp-route" data-route="ch-cm0025">中国纯玩无购物团 · 冰雪奇缘东北新年狂欢团12日-包机票</div>
        <div class="rp-route" data-route="ch-cm0027">中国纯玩无购物团 · （澳洲包机票） 新疆南疆北疆全景18日</div>
        <div class="rp-route" data-route="ch-cm0029">中国纯玩无购物团 · （澳洲包机票）新疆南疆北疆全景17日</div>
        <div class="rp-route" data-route="ch-cm0105">中国超值特惠团 · （澳洲包机票）川藏15天西藏团</div>
        <div class="rp-custom" data-custom="1" data-board="全部行程">✨ 私人订制（全部行程）</div>
          </div>
        </div>
      </div>
  </nav>
  <div class="rp-detail-area">
    <div class="rp-route-pane" data-route="ch-cm0001" data-p-adult="0" data-p-child="1298" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 铂金江南，穿越胡杨林喀什南疆秘境14日（金秋特别团）</h3>
          <div class="rp-price-row">
            <span class="rp-price-item"><b>大人</b> 待确认</span>
            <span class="rp-price-item"><b>儿童</b> A$ 1298</span>
            <span class="rp-price-item"><b>婴儿</b> 待确认</span>
          </div>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童不占床 Child no bed<span class="en">Child no bed</span></td><td class="price">1298</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1798</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">810</td></tr><tr><td class="item">综合服务费 Service fee<span class="en">Service</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
1



抵達上海

抵達上海機場（PVG or SHA）或虹橋高鐵站.接機/接站後送回酒店休息。相鄰2小時內的航班/車次的客人，我們將統一安排車輛接送，接機/接站可能會有等待現象，敬請諒解！（酒店14:00後可辦理入住，具體接機/接站資訊和酒店詳情請見出團通知書）

浦東機場接機匯合點：1號航站樓到達層10號門內側；2號航站樓到達層“星巴克咖啡店”門口。

虹橋機場接機匯合點：2號航站樓到達層KFC肯德基門口。1號航站樓到達的客人請乘坐航站樓擺渡車前往2號航站樓接機匯合點集合。

虹橋高鐵站到達的客人請通過走廊前往虹橋機場2號航站樓接機匯合點集合。

住宿：上海三甲港綠地鉑派酒店或同級酒店


2



上海-烏鎮-杭州  (早餐/午餐)

早餐後驅車前往遊覽被譽為“中國最後的枕水人家”的【烏鎮】。烏鎮是中國歷史文化名鎮、國家5A級景區.也因劉若英主演的《似水年華》在此取景而聞名海內外。參觀健康家居體驗館。隨後前往享有“人間天堂”美譽的杭州.抵達後遊覽杭州新晉網紅景點【城市陽臺】.在此可觀賞錢塘江.眺望杭州亞運會場館。接著前往遊覽【西湖景區】.環湖山巒疊翠.花木繁茂。遠眺柳浪聞鶯、三潭印月、雷峰夕照等西湖十景.景因名傳.名自景始。漫步西湖.無盡情調盡在此時。

住宿：杭州浦京花園大酒店或同級酒店


3



杭州-南京   (早餐/午餐)

早餐後前往龍井茶村體驗獨特的茶鄉風情.品嘗中國國茶龍井。隨後前往南京.南京是中國四大古都之一、首批國家歷史文化名城。遊覽【東水關遺址公園】.該公園將水關建築與城牆建築融為一體.享有“古橋、古河、古牆、古閘”四古之稱。繼而前往“煙籠寒水月籠沙.夜泊秦淮近酒家”的秦淮河畔【夫子廟】.它是南京十裏秦淮風光帶上的重要景點。茶肆酒樓商鋪林立.是中國著名的開放式國家5A級旅遊景區和國際旅遊勝地。

住宿：南京汪海國際大酒店或同級酒店


4



南京-無錫   (早餐/午餐)

早餐後前往遊覽歷史悠久的【大報恩寺】.它與靈穀寺、天界寺並稱為金陵三大寺。欣賞水晶內畫展覽。隨後參觀玉器博覽中心.南京素有石頭城之稱.其玉雕與浙江的東陽木雕齊名。午餐後前往無錫.遊覽江南著名的“兩園一鎮”：【錫惠公園】【寄暢園】和【惠山古鎮】。錫惠公園是太湖風景區的核心景點.寄暢園是康熙和乾隆二帝來江南的必遊之地.就連北京頤和園內的諧趣園.以及圓明園（已毀於戰火）內的廓然大公.也是仿寄暢園而建。隨後參觀紫砂壺博物館。

住宿：無錫華怡名都大酒店或同級酒店


5



無錫-蘇州  (早餐/午餐)

早餐後前往如詩如畫的【蠡湖公園】欣賞太湖風光.園中“春之媚、夏之秀、秋之韻、冬之凝”四大景觀巧妙佈局.以四季花木展現江南秀色。以水繞園.隨水賦景.季節轉換時空.林木變幻韻律.是人與自然和諧融合的代表作。參觀太湖珍珠館。午餐後驅車前往蘇州.外觀【盤門】.盤門是春秋戰國時期伍子胥所築蘇州城的八座城門之一.是中國現存最完整的水陸並聯城門。古城門、古拱橋、古運河.共同見證了蘇州2500年的歷史變遷。

住宿：蘇州維也納國際酒店或同級酒店


6



蘇州-上海  (早餐/午餐)

早餐後參觀蠶絲工廠。遊覽【金雞湖風景區】.它是中國最大的城市湖泊公園.堪稱二十一世紀蘇州“人間新天堂”的象徵。遠觀【東方之門】和【蘇州鳥巢】.它們都是延續蘇州悠久歷史、展示蘇州現代文明的嶄新建築。午餐後返回上海.參觀寶石會所和中醫養生中心.遊覽黃浦江畔的【外灘】.欣賞歷史悠久的“萬國建築博覽群”與隔江相望的浦東現代地標（東方明珠、上海中心等），漫步江畔，感受“十裏洋場”風華。

住宿：上海三甲港綠地鉑派酒店或同級酒店


7



上海-烏魯木齊/昌吉 (早餐)  （機場代碼：URC，機票自理）

指定時間送往上海機場,自行乘坐飛機前往烏魯木齊（機票自理）。

抵達烏魯木齊機場.接機/後送回酒店休息。相鄰2小時內的航班的客人，我們將統一安排車輛接送，接機可能會有等待現象，敬請諒解！

住宿：烏魯木齊萬達錦華/美豪麗致旗艦酒店/昌吉迎賓館或同級5*酒店


8



烏魯木齊/昌吉-博斯騰湖-庫爾勒

（早餐：酒店；午餐：博湖魚宴；晚餐：梨城特色風味）

早餐後，乘車前往庫爾勒，途中遊覽【博斯騰湖】（含門票）。景區坐落於新疆巴音郭楞蒙古自治州博湖縣阿洪口，是國家5A級旅遊景區，屬於山間陷落湖。湖水主要補給水源為開都河，同時也是孔雀河的源頭。博斯騰湖湖體分為大湖區與小湖區兩部分，大湖區面積近千平方公里，小湖區面積百餘平方公里。

住宿：庫爾勒半城酒店/萬達悅華酒店/錦江都城酒店或四鑽同級酒店


9



庫爾勒-塔里木胡楊林-庫車

（早餐：酒店；午餐：塔河魚風味；晚餐：市區逛吃自理）

早餐後，乘車前往庫車，途中遊覽新疆面積最大的原始胡楊林景區——【塔里木胡楊林公園】（含門票及區間車，景區內自選小交通費用自理）。景區坐落於我國最長內陸河塔里木河畔，擁有世界唯一、規模最大的原始胡楊森林保護區。抵達景區後，可沉浸式感受塔里木河、塔里木盆地、塔克拉瑪幹大沙漠與胡楊林在同一景區完美交融的壯闊景致，可見景區道路擁有220餘處彎道，是全球彎道最多的景區道路之一。道路兩側胡楊蒼勁滄桑，枝幹或彎曲倒伏、或挺拔昂揚、或靜默佇立、或傲然舒展，姿態各異、氣勢磅礴。

住宿：庫車愛美酒店/維也納國際酒店/麗都酒店或四鑽同級酒店


10



庫車-溫宿大峽谷-阿克蘇

（早餐：酒店；午餐：大盤雞風味；晚餐：精品漢餐風味）

早餐後，乘車前往阿克蘇，途中遊覽【溫宿大峽谷】（含門票及區間車）。這裏曾是連通南北天山的古代木紮爾特古道必經之地，相傳玄奘西天取經曾途經此地。2002年6月，阿克蘇戶外徒步愛好者首次發現並圖文刊發報導了溫宿縣東北部天山山脈南麓的這片大型峽谷群地質遺跡。

住宿：阿克蘇維也納國際酒店/智選假日酒店/蘭歐國際酒店/萬達美華酒店或四鑽同級酒店


11



阿克蘇-刀郎部落-喀什

（早餐：酒店；午餐：刀郎人家特色宴；晚餐：維吾爾族特色宴）

早餐後，乘車前往喀什，途中遊覽【刀郎部落】（含門票及區間車）。景區以五千餘畝千年原始胡楊林為生態底色，完整複刻展示刀郎人的傳統建築、特色飲食與民俗文化，集中呈現刀郎木卡姆、刀郎麥西熱甫等8項國家級、自治區級非物質文化遺產。其中，景區的刀郎演唱組合，創下了最大年齡民間歌舞組合的大世界基尼斯紀錄。

住宿：喀什來寧酒店/喀什飯店/其尼瓦克酒店或五鑽同級酒店


12



喀什-喀拉庫勒湖-喀什

（早餐：酒店；午餐：川湘特色風味；晚餐：歡慶宴）

早餐後，乘車前往帕米爾高原，途中參觀【和田玉石玉器展館】。玉石文化源遠流長，是中華民族的珍貴瑰寶，既是國禮佳品，亦是居家珍藏。沿途可觀賞風格各異的鄉村村落、壯闊的蓋孜峽谷、千年絲路古道與古老驛站，打卡風景絕美的【布倫口沙湖】，這裏也是傳說中《西遊記》裏沙悟淨棲息的流沙河舊址。隨後抵達【喀拉庫勒湖】，湖泊坐落於慕士塔格冰山腳下，是東帕米爾高原規模最大的天然湖泊。沿途可觀賞高原駱駝，遠眺“冰山之父”慕士塔格峰，駐足拍照、定格高原盛景。

住宿：喀什來寧酒店/喀什飯店/其尼瓦克酒店或五鑽同級酒店


13



喀什

（早餐：酒店；午餐：江浙特色風味；晚餐：市區逛吃自理）

早餐後，乘車參觀【新疆棉展館】。新疆棉花擁有上千年種植歷史，產量穩居全國首位，品質享譽世界，屬於頂級優質棉花。隨後遊覽承載喀什千年曆史的【喀什老城】，城內保留著原汁原味的維吾爾族傳統建築，特色過街樓、半街樓及精美雕花建築錯落分佈，獨具風情。之後前往【艾提尕爾清真寺】，它是國內規模宏大、影響力深遠的伊斯蘭教清真寺，也是維吾爾族民眾舉辦盛大節日禮拜的核心場所。

住宿：喀什來寧酒店/喀什飯店/其尼瓦克酒店或五鑽同級酒店


14



喀什返程

（早餐：酒店）

早餐後，根據各位貴賓的航班時間，安排專車送機，大家可順利返程，回到溫馨的家園，或開啟後續行程！（機場代碼：KHG）

旅行社有權利適當調整行程及酒店、用餐，請以實際走團為准！

    <div
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
特價團特殊條款

	1. 
接待標識

“

發現中國美

”

。

	2. 
僅提供中文導遊服務
,
如需英文導遊服務，請參加本公司英文系列團。

	3. 
團費（報名費
+
綜合服務費）均包含行程所列機場接送、酒店、中文導遊、汽車、門票、餐食等。

	4. 
團費不含國際國內機票，中國簽證費，當地推薦自費景點，旅遊與醫療保險，私人消費等。國際機票價格，簽證費用等請諮詢您的旅行社。

	5. 
團費不含不可預見或無法避免的情況或事件發生時所產生的額外費用，如私人需求，航班晚點
/
取消，戰爭，暴亂，自然災害，惡劣的天氣環境等導致的損失。

	6. 
為保證團隊氣氛和諧，僅限美國
/
加拿大

/

澳大利亞

/

歐洲等國公民或美國綠卡

/

加拿大楓葉卡

/

澳洲永久居住證明

/

歐洲永久居住證明持有的中文流利之華人華僑參加；西人或其他國籍客人收費價格請諮詢客服。

	7. 
超值購物團旅行團每天均有購物安排，購物純屬自願。絕無任何強迫購物行為，但團員不得以任何理由拒絕逛店參觀。旅途中購買的商品品質
/
價格、售後服務等請與商店直接聯繫。

	8. 
超值購物旅行團遊客必須隨團旅行，全程不得中途脫團，如脫團每天需補回旅行社
USD$150/
人

/

天離團費。

	9.  
綜合服務費為團費的重要組成部分，請在報名時與團費一併足額支付。

	10.  
推薦行程自
費
參加，願意參加者請至導遊處報名繳費辦理。推薦行程屬於綜合專案，費用包括景點價格，旅遊車服務費，導遊服務費，綜合服務費。另推薦專案導遊將根據報名人數決定是否成團。

	11. 
兒童收費標準：
2
周歲以上小童需要支付報名費，綜合服務費和自費專案

(

如有），

2

周歲以下不占床小童以上三項費用均免費。

18

歲不占床兒童不含早餐，早餐費用酒店內自理。
（
亞洲團各地酒店規定

12

周歲以上必須占床
） 

	12. 
單人房差、酒店續住價格、額外接送收費價格
:
請參考各線路網站標注以及廣告單頁。

	13. 
接機時間（請報名時提供抵達航班資訊資料）：中國線路抵達當日全天候指定機場接機，間隔二小時左右發車一次分批送回酒店。亞洲線路各國接機時間規定各不相同，請參考網站和行程表內具體說明。

	14.  
送機時間：中國線路結束當日指定時間分批機場送機。亞洲線路各國送機時間規定各不相同，請參考行程內具體說明。

	15. 
特價團報名之後無論任何原因均不得退團，退團損失費用請諮詢客服。

	16. 
廣告行程內容僅供參考，旅行社有權在不影響遊覽節目的前提下對行程做次序調整，本公司擁有最終解釋權。

	17. 
如因國家政策法規等因素或地震
，
颱風
，天氣
等不可抗力因素
或其他任何因素
導致我公司團隊無法成行，我社將提前通知並將免費提供改期或取消訂位服務，但除團款外一切損失請自行承擔。

	18. 
為維護團體所有客人最高利益，若任何旅客的健康或行為有妨礙團體正常活動或利益之情況，本公司領隊有權取消其繼續參團之資格，其未完之行程，不得要求退款、變更或轉讓；無論任何原因自行離團，自旅客離團之時起，其一切活動概與本公司無關。

	19. 
七十五周歲以上長者參團必須有六十周歲以下親友隨行並自行購買足額旅遊意外保險並簽署旅遊風險自己承擔的健康聲明書。所有客人一經報名則默認知道自身健康狀況適合參團，如參團過程中發生任何意外恕本公司無法負責，由此產生的各種費用和責任由客人自行承擔。

	20.
其他未盡事宜請諮詢組團社，凡報名之客人均視為瞭解

/

接收我公司之旅遊條款。

 

訂位及取消辦法

	1、
報名：請攜帶有效旅遊證件至代理旅行社辦理報名手續，需提供旅遊證件影本，填寫報名表並簽字。報名時請指定參加

“

發現中國美

”

旅遊團，品質才有鑽石般的保證。

	2、
訂金：報名訂位須同時繳交全部團款（報名費
+
綜費服務費）。從代理旅行社收到團款之時起，旅遊合同即告成立。

	3、
更改：對於交付團款後則不可有任何更改。如一定需要更改，則按取消辦法處理。

	4、
取消訂位及退款辦法：取消訂位需讓代理旅行社書面方式通知本公司辦理，恕不接受口頭取消。無論任何非本公司原因而導致的取消訂位均有可能會產生罰款
(
亞洲線路以及中國三峽遊船線路抵達日期前

30

日內
不可取消，如
取消報名費
+
綜合服務費全損。其他各線路損失費各有不同，請諮詢客服，我公司保留最終解釋權）。此外不論在出發日期前多久，如果代理旅行社國際機票已開，則因此產生的全部退票費用，包括各種手續費等也需客人按航空公司規定自行負擔，具體請諮詢您的旅行社

特价旅行团

旅游条款

中国和亚州旅游条款

欧洲旅游条款

关于我们

中国美简介

联系我们
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-cm0011" data-p-adult="1098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 横贯中国・纵览山河：吴越水乡西域大漠 17 天传奇丝路特别团</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1098</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1398</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">850</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0013" data-p-adult="1098" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 穿越胡杨林 喀什南疆秘境 8 日（金秋特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1098</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">510</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
      </div>
      <div class="rp-tab-panel" data-tab="itinerary"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
1



抵达乌鲁木齐/昌吉（机场代码：URC)

今天抵达举世闻名的歌舞之乡、瓜果之乡、金玉之邦—新疆。 新疆维吾尔自治区占中国面积六分之一，风光壮美，同时具有雪山、草原、沙漠、盆地、河谷等自然景观；是丝绸之路必经之地，“一带一路”中丝绸之路经济带的中心之一。

抵达机场或高铁站，接机/接站后送回酒店休息。相邻2小时内的航班/车次的客人，我们将统一安排车辆接送，接机/接站可能会有等待现象，敬请谅解！（酒店14:00后可办理入住，具体接机/接站资讯和酒店详情请见出团通知书）

住宿： 昌吉鸿都酒店/兵旅园林酒店/五一悦华尊享酒店/华东容锦酒店/东升鸿福酒店/昌吉乐途云酒店或四钻同级酒店


2



乌鲁木齐/昌吉-博斯腾湖-库尔勒

（早餐：酒店；午餐：博湖鱼宴；晚餐：梨城特色风味）

早餐后，乘车前往库尔勒，途中游览【博斯腾湖】（含门票）。景区坐落于新疆巴音郭楞蒙古自治州博湖县阿洪口，是国家5A级旅游景区，属于山间陷落湖。湖水主要补给水源为开都河，同时也是孔雀河的源头。博斯腾湖湖体分为大湖区与小湖区两部分，大湖区面积近千平方公里，小湖区面积百余平方公里。《隋书》曾记载此湖有“鱼、盐、蒲、苇之利”。湖区周边芦苇丛生，是国内重要的芦苇生产基地。此外，博斯腾湖盛产各类淡水鱼，是新疆规模最大的渔业生产基地。

住宿：库尔勒半城酒店/万达悦华酒店/锦江都城酒店或四钻同级酒店


3



库尔勒-塔里木胡杨林-库车

（早餐：酒店；午餐：塔河鱼风味；晚餐：市区逛吃自理）

早餐后，乘车前往库车，途中游览新疆面积最大的原始胡杨林景区——【塔里木胡杨林公园】（含门票及区间车，景区内自选小交通费用自理）。景区坐落于我国最长内陆河塔里木河畔，拥有世界唯一、规模最大的原始胡杨森林保护区。抵达景区后，可沉浸式感受塔里木河、塔里木盆地、塔克拉玛干大沙漠与胡杨林在同一景区完美交融的壮阔景致，可见景区道路拥有220余处弯道，是全球弯道最多的景区道路之一。道路两侧胡杨苍劲沧桑，枝干或弯曲倒伏、或挺拔昂扬、或静默伫立、或傲然舒展，姿态各异、气势磅礴。

住宿：库车爱美酒店/维也纳国际酒店/丽都酒店或四钻同级酒店


4



库车-温宿大峡谷-阿克苏

（早餐：酒店；午餐：大盘鸡风味；晚餐：精品汉餐风味）

早餐后，乘车前往阿克苏，途中游览【温宿大峡谷】（含门票及区间车）。这里曾是连通南北天山的古代木扎尔特古道必经之地，相传玄奘西天取经曾途经此地。2002年6月，阿克苏户外徒步爱好者首次发现并图文刊发报导了温宿县东北部天山山脉南麓的这片大型峡谷群地质遗迹。

住宿：阿克苏维也纳国际酒店/智选假日酒店/兰欧国际酒店/万达美华酒店或四钻同级酒店


5



阿克苏-刀郎部落-喀什

（早餐：酒店；午餐：刀郎人家特色宴；晚餐：维吾尔族特色宴）

早餐后，乘车前往喀什，途中游览【刀郎部落】（含门票及区间车）。景区以五千余亩千年原始胡杨林为生态底色，完整复刻展示刀郎人的传统建筑、特色饮食与民俗文化，集中呈现刀郎木卡姆、刀郎麦西热甫等8项国家级、自治区级非物质文化遗产。

住宿：喀什来宁酒店/喀什饭店/其尼瓦克酒店或五钻同级酒店


6



喀什-喀拉库勒湖-喀什

（早餐：酒店；午餐：川湘特色风味；晚餐：欢庆宴）

早餐后，乘车前往帕米尔高原，途中参观【和田玉石玉器展馆】。玉石文化源远流长，是中华民族的珍贵瑰宝，既是国礼佳品，亦是居家珍藏。沿途可观赏风格各异的乡村村落、壮阔的盖孜峡谷、千年丝路古道与古老驿站，打卡风景绝美的【布伦口沙湖】，这里也是传说中《西游记》里沙悟净栖息的流沙河旧址。随后抵达【喀拉库勒湖】，湖泊坐落于慕士塔格冰山脚下，是东帕米尔高原规模最大的天然湖泊。沿途可观赏高原骆驼，远眺“冰山之父”慕士塔格峰，驻足拍照、定格高原盛景。

住宿：喀什来宁酒店/喀什饭店/其尼瓦克酒店或五钻同级酒店


7



喀什

（早餐：酒店；午餐：江浙特色风味；晚餐：市区逛吃自理）

早餐后，乘车参观【新疆棉展馆】。新疆棉花拥有上千年种植历史，产量稳居全国首位，品质享誉世界，属于顶级优质棉花。随后游览承载喀什千年历史的【喀什老城】，城内保留着原汁原味的维吾尔族传统建筑，特色过街楼、半街楼及精美雕花建筑错落分布，独具风情。之后前往【艾提尕尔清真寺】，它是国内规模宏大、影响力深远的伊斯兰教清真寺，也是维吾尔族民众举办盛大节日礼拜的核心场所。

住宿：喀什来宁酒店/喀什饭店/其尼瓦克酒店或五钻同级酒店


8



 喀什返程

（早餐：酒店）

早餐后，根据各位贵宾的航班时间，安排专车送机，大家可顺利返程，回到温馨的家园，或开启后续行程！（机场代码：KHG）

旅行社有权利适当调整行程及酒店、用餐，请以实际走团为准！

    <div
</pre></div>
      <div class="rp-tab-panel" data-tab="notes"><pre style="white-space:pre-wrap;font-size:14px;line-height:1.7;color:#334">
特价团特殊条款

	1. 
接待标识

“

发现中国美

”

。

	2. 
仅提供中文导游服务
,
如需英文导游服务，请参加本公司英文系列团。

	3. 
团费（报名费
+
综合服务费）均包含行程所列机场接送、酒店、中文导游、汽车、门票、餐食等。

	4. 
团费不含国际国内机票，中国签证费，当地推荐自费景点，旅游与医疗保险，私人消费等。国际机票价格，签证费用等请咨询您的旅行社。

	5. 
团费不含不可预见或无法避免的情况或事件发生时所产生的额外费用，如私人需求，航班晚点
/
取消，战争，暴乱，自然灾害，恶劣的天气环境等导致的损失。

	6. 
为保证团队气氛和谐，仅限美国
/
加拿大

/

澳大利亚

/

欧洲等国公民或美国绿卡

/

加拿大枫叶卡

/

澳洲永久居住证明

/

欧洲永久居住证明持有的中文流利之华人华侨参加；西人或其他国籍客人收费价格请咨询客服。

	7. 
超值购物团旅行团每天均有购物安排，购物纯属自愿。绝无任何强迫购物行为，但团员不得以任何理由拒绝逛店参观。旅途中购买的商品品质
/
价格、售后服务等请与商店直接联系。

	8. 
超值购物旅行团游客必须随团旅行，全程不得中途脱团，如脱团每天需补回旅行社
USD$150/
人

/

天离团费。

	9.  
综合服务费为团费的重要组成部分，请在报名时与团费一并足额支付。

	10.  
推荐行程自
费
参加，愿意参加者请至导游处报名缴费办理。推荐行程属于综合专案，费用包括景点价格，旅游车服务费，导游服务费，综合服务费。另推荐专案导游将根据报名人数决定是否成团。

	11. 
儿童收费标准：
2
周岁以上小童需要支付报名费，综合服务费和自费专案

(

如有），

2

周岁以下不占床小童以上三项费用均免费。

18

岁不占床儿童不含早餐，早餐费用酒店内自理。
（
亚洲团各地酒店规定

12

周岁以上必须占床
） 

	12. 
单人房差、酒店续住价格、额外接送收费价格
:
请参考各线路网站标注以及广告单页。

	13. 
接机时间（请报名时提供抵达航班资讯资料）：中国线路抵达当日全天候指定机场接机，间隔二小时左右发车一次分批送回酒店。亚洲线路各国接机时间规定各不相同，请参考网站和行程表内具体说明。

	14.  
送机时间：中国线路结束当日指定时间分批机场送机。亚洲线路各国送机时间规定各不相同，请参考行程内具体说明。

	15. 
特价团报名之后无论任何原因均不得退团，退团损失费用请咨询客服。

	16. 
广告行程内容仅供参考，旅行社有权在不影响游览节目的前提下对行程做次序调整，本公司拥有最终解释权。

	17. 
如因国家政策法规等因素或地震
，
台风
，天气
等不可抗力因素
或其他任何因素
导致我公司团队无法成行，我社将提前通知并将免费提供改期或取消订位服务，但除团款外一切损失请自行承担。

	18. 
为维护团体所有客人最高利益，若任何旅客的健康或行为有妨碍团体正常活动或利益之情况，本公司领队有权取消其继续参团之资格，其未完之行程，不得要求退款、变更或转让；无论任何原因自行离团，自旅客离团之时起，其一切活动概与本公司无关。

	19. 
七十五周岁以上长者参团必须有六十周岁以下亲友随行并自行购买足额旅游意外保险并签署旅游风险自己承担的健康声明书。所有客人一经报名则默认知道自身健康状况适合参团，如参团过程中发生任何意外恕本公司无法负责，由此产生的各种费用和责任由客人自行承担。

	20.
其他未尽事宜请咨询组团社，凡报名之客人均视为了解

/

接收我公司之旅游条款。

 

订位及取消办法

	1、
报名：请携带有效旅游证件至代理旅行社办理报名手续，需提供旅游证件影本，填写报名表并签字。报名时请指定参加

“

发现中国美

”

旅游团，品质才有钻石般的保证。

	2、
订金：报名订位须同时缴交全部团款（报名费
+
综费服务费）。从代理旅行社收到团款之时起，旅游合同即告成立。

	3、
更改：对于交付团款后则不可有任何更改。如一定需要更改，则按取消办法处理。

	4、
取消订位及退款办法：取消订位需让代理旅行社书面方式通知本公司办理，恕不接受口头取消。无论任何非本公司原因而导致的取消订位均有可能会产生罚款
(
亚洲线路以及中国三峡游船线路抵达日期前

30

日内
不可取消，如
取消报名费
+
综合服务费全损。其他各线路损失费各有不同，请咨询客服，我公司保留最终解释权）。此外不论在出发日期前多久，如果代理旅行社国际机票已开，则因此产生的全部退票费用，包括各种手续费等也需客人按航空公司规定自行负担，具体请咨询您的旅行社

特价旅行团

旅游条款

中国和亚州旅游条款

欧洲旅游条款

关于我们

中国美简介

联系我们
</pre></div>
      <div class="rp-tab-panel" data-tab="brochure"><p>彩页下载：请咨询客服获取 PDF 彩页。</p></div>
    </div>    <div class="rp-route-pane" data-route="ch-cm0021" data-p-adult="2798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 史诗画卷 醉美新疆 世界级绝美风光之旅14日（旺季特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2798</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1020</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0031" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 绿野仙踪 新疆阿勒泰喀纳斯醉美8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">350</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0033" data-p-adult="798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 爱达花城号首航海上丝绸之路 中国+越南+马来西亚+汶莱四国漫游17天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">798</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1998</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1700</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0041" data-p-adult="1198" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 醉美新疆 禾木喀纳斯可可托海魔鬼城8日（旺季特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1198</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">730</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0043" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 铂金江南，醉美新疆 禾木喀纳斯可可托海魔鬼城14日（旺季特别团）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1898</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0101" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 醉美川藏 成都西藏深度11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2499</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0103" data-p-adult="2999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 醉美川藏 成都西藏深度14日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0003" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 铂金江南 长江新船王极光号/揽月号12日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1240</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0005" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 奢华江南和平饭店-长江新船王揽月号/极光号13日AB团</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2150</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0007" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 奢华江南和平饭店-长江新船王揽月号/极光号13日AA团</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">2250</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0053" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 九寨沟 长江三峡12日(超豪华洲际酒店升级版)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">890</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0067" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 江南 长江三峡11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">780</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0093" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 珠江美食，长江美景10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0095" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 大湾区美食，长江三峡10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0099" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 张家界，长江三峡11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">860</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0115" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 桂林 长江三峡11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0121" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 厦门 长江三峡11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0125" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 重庆大足石刻 长江三峡10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0009" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 九寨沟成都重庆长新船王揽月号/极光号13日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1190</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0051" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 成都 九寨沟8日(超豪华洲际酒店升级版）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">530</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0097" data-p-adult="299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 张家界，凤凰古城7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">380</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0113" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 桂林6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0123" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 山城重庆 大足石刻武隆6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0127" data-p-adult="299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 云南 昆明大理丽江6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">619</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">320</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0129" data-p-adult="459" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 云南 昆明大理丽江 石林7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">459</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">679</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">380</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0035" data-p-adult="798" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · (金钻江南，深圳机器人)马来西亚-文莱-越南-中国香港爱达魔都号游轮16日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">798</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1198</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0039" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 铂金江南7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0045" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 璀璨金钻~江南奢华8日(A团)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0047" data-p-adult="99" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 璀璨金钻~江南奢华8日(AA团)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">99</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">900</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0049" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 璀璨金钻~江南奢华8日(AB团)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">949</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">850</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0055" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 深坑洲际，黄山千岛湖9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0057" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 深坑洲际，婺源望仙谷9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0059" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 深坑洲际 海天佛国普陀山9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0061" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 深坑洲际，九华山9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0063" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 深坑洲际，泰山曲阜9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0065" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 深坑洲际，庐山9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0069" data-p-adult="49" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 金钻江南，爱达魔都号游轮11 日 (A团)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">49</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1098</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0071" data-p-adult="249" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 金钻江南，爱达魔都号游轮11 日(AA团)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">249</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1298</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0037" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · VIP特别订制团</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0073" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 舌尖广东，珠江美食6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">259</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0075" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 大湾区美食，机器人奇观6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">169</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0077" data-p-adult="179" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 大湾区美食，机器人奇观7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">179</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0079" data-p-adult="259" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 大湾区，广东美食6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">259</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0081" data-p-adult="269" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 寻味大湾区，广东美食7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">269</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">320</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0083" data-p-adult="269" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 潮汕高铁，广东美食7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">269</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0085" data-p-adult="279" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 潮汕风情，珠江美食8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">279</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">360</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0087" data-p-adult="689" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 香港大湾区 珠江美食8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">689</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">580</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0089" data-p-adult="699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 香港潮汕，珠江美食10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">670</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0091" data-p-adult="399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 珠江美食，越南下龙湾10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0117" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 厦门泉州土楼6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0119" data-p-adult="369" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 厦门土楼武夷山8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">369</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">390</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0131" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 海南 海口三亚6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0107" data-p-adult="169" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 北京5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">169</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">529</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">230</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0109" data-p-adult="199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 北京6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">569</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0111" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">超值特惠团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 北京 长江三峡 9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">680</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0015" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · 冰雪奇缘东北新年狂欢团 10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0195" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）山东6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0197" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）河南5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0199" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）山西7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0201" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）东北四大名城 长白山6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0203" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）东北五大名城 长白山7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">530</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0205" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）东北名城 长白山 漠河9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0019" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · 【锦绣中华】多彩贵州·大美江西·金秋揽胜16天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2499</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0133" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）九寨沟 成都乐山峨眉7日（九寨沟高铁体验特别版）</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">550</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0157" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）张家界6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">330</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0159" data-p-adult="1099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）张家界凤凰古城7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">400</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0171" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）桂林 漓江阳朔5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0175" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）贵州黄果树5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0177" data-p-adult="1499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）贵州桂林阳朔8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1499</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">520</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0179" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）贵州凤凰张家界9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">570</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0181" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）云南香格里拉6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">310</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0183" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）云南 昆明大理丽江香格里拉7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">530</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0185" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）云南 昆明大理丽江香格里拉8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">580</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0187" data-p-adult="1199" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）云南 丽江香格里拉泸沽湖9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1199</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1199</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">460</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0189" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）云南 丽江香格里拉泸沽湖石林10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">540</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0191" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）贵州云南 云贵高原9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">570</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0193" data-p-adult="1999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）贵州云南 云贵高原12日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">950</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0225" data-p-adult="899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩) 成都5日(超豪华洲际酒店升级版)</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0229" data-p-adult="549" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）山城重庆3日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">549</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">549</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">230</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0231" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）山城重庆 武隆天生三桥5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">350</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0135" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）九寨沟 长江三峡11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1050</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0161" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）张家界长江三峡9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0163" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）张家界长江三峡11日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0165" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）山城重庆 三峡游轮6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">640</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0167" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）武汉黄鹤楼 三峡游轮6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">640</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0169" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）宜昌重庆 三峡游轮6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0173" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）桂林 长江三峡9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">900</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0239" data-p-adult="1" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）世纪游轮“江山如此多娇·山河颂”长江全览11日游</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0241" data-p-adult="0" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）世纪游轮“江山如此多娇·山河颂”长江全览12日游</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">待确认</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">待确认</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0137" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）大湾区精品美食6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0139" data-p-adult="2499" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩） 香港潮汕韶关佛山广州超级美食10日游</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2499</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2499</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">630</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0233" data-p-adult="879" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩)厦门土楼潮汕6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">879</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">879</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0235" data-p-adult="939" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩)厦门土楼潮汕7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">939</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">939</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">330</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0237" data-p-adult="898" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）海南岛三亚5天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">898</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">898</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">270</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0141" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）北京4日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0143" data-p-adult="1299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩）北京西安6日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">480</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0145" data-p-adult="1699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）北京西安上海8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0147" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩)北京，西安，长江三峡10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">960</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0149" data-p-adult="2399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）北京西安上海长江三峡12日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1120</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0151" data-p-adult="799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）西安4日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">180</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0153" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩)西安，华山5日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">225</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0155" data-p-adult="1399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩）西安，长江三峡8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0207" data-p-adult="1599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）西藏5日-洲际酒店特别版</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">450</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0209" data-p-adult="1899" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）丝绸之路 传奇东方高铁7日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1899</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1899</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">700</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0211" data-p-adult="2099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）西安，丝绸之路9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">750</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0213" data-p-adult="2099" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）丝绸之路，茶卡盐湖青海湖9日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2099</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2099</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">750</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0215" data-p-adult="2699" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）丝绸之路 青藏铁路 西藏10日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2699</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2699</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">800</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0217" data-p-adult="1799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）新疆北疆8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0219" data-p-adult="1799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）新疆南疆8日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">1799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">1799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">600</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0221" data-p-adult="3399" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （纯玩）新疆南疆北疆全景15日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3399</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3399</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0223" data-p-adult="599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团·样例</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>4天</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">260</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0227" data-p-adult="999" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">纯玩无购物团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · (纯玩）江南水乡6天</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">999</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">260</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0017" data-p-adult="2168" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">含机票特别订制团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · 横贯中国・纵览山河：吴越水乡西域大漠 18 天传奇丝路特别团（澳洲包机票）</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">2168</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2468</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">850</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0023" data-p-adult="3599" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">含机票特别订制团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · 【锦绣中华】多彩贵州·大美江西·广州团圆19天-包机票</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3599</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3599</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1300</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0025" data-p-adult="3799" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">含机票特别订制团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · 冰雪奇缘东北新年狂欢团12日-包机票</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3799</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">3799</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1000</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0027" data-p-adult="4299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-westlake.jpg')">
        <span class="rp-badge">含机票特别订制团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （澳洲包机票） 新疆南疆北疆全景18日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">4299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">4299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0029" data-p-adult="4299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/cn-greatwall.jpg')">
        <span class="rp-badge">含机票特别订制团</span>
        <div class="rp-detail-hero-in"><h3>中国纯玩无购物团 · （澳洲包机票）新疆南疆北疆全景17日</h3>
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
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">4299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">4299</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1200</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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
    </div>    <div class="rp-route-pane" data-route="ch-cm0105" data-p-adult="3299" data-p-child="0" data-p-infant="0">
      <div class="rp-detail-hero" style="background-image:url('assets/img/destinations/china.jpg')">
        <span class="rp-badge">含机票特别订制团</span>
        <div class="rp-detail-hero-in"><h3>中国超值特惠团 · （澳洲包机票）川藏15天西藏团</h3>
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
        <div class="rp-summary"><div><b>行程天数</b>待确认</div><div><b>抵达城市</b>待确认</div><div><b>离开城市</b>待确认</div></div>
<table class="rp-pricetable"><thead><tr><th>项目</th><th style="text-align:right">价格 (AUD)</th></tr></thead><tbody><tr><td class="item">成人报名费 Tour Fee<span class="en">Adult</span></td><td class="price">3299</td></tr><tr><td class="item">儿童占床 Child with bed<span class="en">Child with bed</span></td><td class="price">2999</td></tr><tr><td class="item">单房差 Single suppl.<span class="en">Single</span></td><td class="price">1100</td></tr></tbody></table>        <p style="margin-top:12px;font-size:12px;color:#8a97a6">详情与班期以客服查询为准。</p>
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

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;;;;;;;;;;;;;;;;;;














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
  </nav>
  <div class="rp-detail-area">
  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;;;;;;;;;;;;;















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
  </nav>
  <div class="rp-detail-area">
  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;;;;;;;;;;;;;













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
  </nav>
  <div class="rp-detail-area">
  </div>
</div>

  <p class="rp-banner-credit" style="color:#999;font-size:12px;margin:14px 0 0 0;">Banner 图片：© Wikimedia (Public Domain / CC).</p>`;;;;;;;;;;;;;;;;














