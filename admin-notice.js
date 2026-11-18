let timer;
export function notify(text,type='success'){
  clearTimeout(timer);
  document.getElementById('kuaNotice')?.remove();
  if(!document.getElementById('kuaNoticeStyle')){
    const style=document.createElement('style');style.id='kuaNoticeStyle';
    style.textContent=`#kuaNotice{position:fixed;inset:auto 20px 24px auto;z-index:2147483647;box-sizing:border-box;width:420px;max-width:calc(100vw - 32px);padding:18px 48px 18px 20px;border:1px solid #b9d7c8;border-left:5px solid #28764e;border-radius:12px;background:#f1fff6;color:#123e2c;box-shadow:0 8px 32px #0003;font:500 15px/1.6 system-ui,sans-serif;overflow-wrap:anywhere;text-align:left}#kuaNotice[data-type=error]{background:#fff5f4;color:#84251e;border-color:#e3bbb5;border-left-color:#b8382c}#kuaNotice button{position:absolute;right:8px;top:8px;border:0;background:transparent;color:inherit;font:24px/1 system-ui;cursor:pointer;width:36px;height:36px;padding:0} @media(max-width:600px){#kuaNotice{right:16px;bottom:calc(88px + env(safe-area-inset-bottom));width:calc(100vw - 32px)}}`;
    document.head.append(style);
  }
  const box=document.createElement('div');box.id='kuaNotice';box.dataset.type=type;
  box.setAttribute('role',type==='error'?'alert':'status');box.setAttribute('aria-live',type==='error'?'assertive':'polite');box.setAttribute('aria-atomic','true');
  const label=document.createElement('span');label.textContent=text;
  const close=document.createElement('button');close.type='button';close.textContent='×';close.setAttribute('aria-label','Tutup pemberitahuan');close.onclick=()=>box.remove();
  box.append(label,close);(document.querySelector('dialog[open]')||document.body).append(box);
  if(type!=='error')timer=setTimeout(()=>box.remove(),10000);
}
