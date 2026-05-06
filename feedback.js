(function(){
  const script = document.currentScript || document.querySelector('script[data-repo]');
  const repo = script ? script.getAttribute('data-repo') : 'SMSNYDER81/invoiceforge';
  const issueUrl = 'https://github.com/' + repo + '/issues/new';

  // Toast — shown once per visitor
  if (!localStorage.getItem('fb_toast_seen')) {
    setTimeout(function(){
      const toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1c1f22;border:1px solid rgba(200,169,110,0.4);border-radius:8px;padding:12px 20px;font-family:"IBM Plex Mono",monospace;font-size:12px;color:#e8e4dc;z-index:9999;display:flex;align-items:center;gap:14px;box-shadow:0 8px 32px rgba(0,0,0,0.4);white-space:nowrap';
      toast.innerHTML = '<span>💬 Got feedback on InvoiceForge?</span><a href="' + issueUrl + '" target="_blank" style="color:#c8a96e;text-decoration:none;font-weight:700;font-family:\'Syne\',sans-serif;font-size:11px;letter-spacing:0.06em;">TELL US →</a><button onclick="this.parentElement.remove()" style="background:none;border:none;color:#5a5650;cursor:pointer;font-size:18px;line-height:1;padding:0 0 0 4px">×</button>';
      document.body.appendChild(toast);
      setTimeout(function(){ if(toast.parentElement) toast.remove(); }, 6000);
      localStorage.setItem('fb_toast_seen','1');
    }, 4000);
  }

  // Exit-intent modal — shown once per visitor
  if (!localStorage.getItem('fb_exit_seen')) {
    document.addEventListener('mouseleave', function handler(e){
      if (e.clientY > 0) return;
      document.removeEventListener('mouseleave', handler);
      localStorage.setItem('fb_exit_seen','1');
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(4px);z-index:10000;display:flex;align-items:center;justify-content:center';
      overlay.innerHTML = '<div style="background:#141618;border:1px solid rgba(200,169,110,0.3);border-radius:12px;padding:32px;max-width:420px;width:90%;text-align:center;position:relative"><button onclick="this.closest(\'div\').parentElement.remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;color:#5a5650;font-size:22px;cursor:pointer;line-height:1">×</button><div style="font-family:\'Syne\',sans-serif;font-weight:800;font-size:18px;color:#e8e4dc;margin-bottom:8px">Before you go —</div><div style="font-size:13px;color:#9a9590;margin-bottom:20px;font-family:\'IBM Plex Mono\',monospace;line-height:1.6">Was InvoiceForge helpful? Missing a feature?<br>Takes 30 seconds to let us know.</div><a href="' + issueUrl + '" target="_blank" style="display:inline-block;background:#c8a96e;color:#0d0e0f;font-family:\'Syne\',sans-serif;font-weight:700;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;padding:12px 24px;border-radius:6px;text-decoration:none">Leave Feedback →</a></div>';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', function(e){ if(e.target===overlay) overlay.remove(); });
    });
  }
})();
