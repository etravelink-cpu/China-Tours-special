// Existing EmailJS delivery retained; no booking/payment is created by an enquiry.
(function () {
  const config = {service:'service_o6p45jq', template:'template_yxlb4dp', reply:'template_p9ks58v', key:'nZv17YnCO1xz5uLPZ'};
  let busy = false;
  const zh = () => window.Etrips.getLang() === 'zh';
  let lastMessage;
  const say = (tip, cn, en, error) => { lastMessage = {tip,cn,en,error}; tip.textContent = zh() ? cn : en; tip.style.color = error ? '#b42318' : '#176b53'; };
  window.addEventListener('langchange', () => { if (lastMessage) { const {tip,cn,en,error} = lastMessage; say(tip,cn,en,error); } });
  function init() {
    const form = document.querySelector('[data-enquiry]');
    if (!form) return;
    const get = n => form.elements.namedItem(n);
    const params = new URLSearchParams(location.search);
    const id = params.get('tour') || params.get('id') || '';
    const product = (window.TOURS || []).find(t => t.id === id);
    const route = product ? (product.nameZh || product.nameEn || product.id) : params.get('route');
    if (form.dataset.enquiry === 'contact' && (route || id)) {
      get('message').value = (route || id).slice(0,300) + (params.get('date') ? '\n' + params.get('date').slice(0,40) : '');
    }
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy || !form.reportValidity()) return;
      const tip = document.getElementById('form-msg');
      const context=window.EtripsProductEnquiry?.resolve();
      if(context && !context.valid){say(tip,context.error,'Please return to the product and select its current package and date.',true);return;}
      const value = n => (get(n)?.value || '').trim();
      const name = value('name'), email = value('email'), phone = value('phone');
      if (!email && !phone) { say(tip,'请至少留下电话、微信或邮箱。','Please provide a phone number, WeChat ID or email.',true); get('phone').focus(); return; }
      if (!window.emailjs || typeof window.emailjs.send !== 'function') { say(tip,'发送服务暂不可用，内容已保留；请使用页脚电话、邮箱或微信联系。','Sending is unavailable. Your details are kept here; please use the phone, email or WeChat links below.',true); return; }
      const custom = form.dataset.enquiry === 'custom';
      const remark = custom ? ['目的地 / Destination: '+(window.EtripsMarkets?.find(m=>m.key===value('dest'))?[window.EtripsMarkets.find(m=>m.key===value('dest')).zh,window.EtripsMarkets.find(m=>m.key===value('dest')).en].join(' / '):'其他 / Other'),'预算 / Budget: '+value('budget'),value('message')].join('\n') : [value('message'),context?.text||''].filter(Boolean).join('\n\n');
      const fields = {route:custom?'定制游需求':(product?'产品咨询 '+product.id:'在线咨询'), date:custom?value('date'):(context?.date||''),name,phone,email,remark,pax:custom?value('pax'):''};
      fields.body = [fields.route,name,phone,email,fields.date,fields.pax,remark].filter(Boolean).join('\n');
      const customerBody=custom?fields.body:[name,phone,email,context?.date||'',value('message'),context?.customerText||''].filter(Boolean).join('\n');
      const button = form.querySelector('[type="submit"]');
      busy = true; button.disabled = true; form.setAttribute('aria-busy','true');
      say(tip,'正在发送…','Sending…');
      try {
        window.emailjs.init(config.key);
        await window.emailjs.send(config.service,config.template,fields);
        say(tip,'咨询已交给邮件服务发送，尚未确认预订；请等待顾问回复。','Your enquiry has been accepted by the email service. This is not a confirmed booking; please wait for an advisor’s reply.');
        form.reset();
        if (email) {
          try { await window.emailjs.send(config.service,config.reply,{name,email,body:customerBody,route:fields.route,date:fields.date}); }
          catch (_) { say(tip,'咨询已交给邮件服务发送，但确认邮件未发出；请等待顾问回复。','Your enquiry was accepted, but the acknowledgement email could not be sent. Please wait for an advisor’s reply.'); }
        }
      } catch (_) {
        say(tip,'未取得发送成功回执，内容已保留。请先联系顾问确认是否收到，避免重复提交。','Delivery could not be confirmed. Your details are kept here. Please check with an advisor before sending again.',true);
      } finally {
        busy = false; button.disabled = false; form.removeAttribute('aria-busy');
      }
    });
  }
  document.addEventListener('DOMContentLoaded',init);
})();
