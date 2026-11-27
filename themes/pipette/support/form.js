// Pipette support form: client checks, then multipart POST to support.earntolink.com (JSON reply).
(() => {
  const form = document.getElementById('support-form');
  if (!form || !window.fetch || !window.FormData) return;
  const $ = (id) => document.getElementById(id);
  const MAX = 3, MAX_BYTES = 5 * 1024 * 1024, TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  const EMAIL = /^[^\s@<>"'(),;:]+@[^\s@<>"'(),;:]+\.[a-z]{2,24}$/i;
  const MSG = {
    name: { required: 'Enter your name.' },
    email: { required: 'Enter your email address.', invalid: 'Enter a valid email address, for example name@example.com.' },
    store: { required: 'Enter your store URL.', invalid: 'Enter a store URL, for example https://your-store.myshopify.com.' },
    message: { required: 'Describe the problem.' },
    files: { count: 'Attach up to 3 images.', size: 'Each image must be 5 MB or smaller.', type: 'Attach PNG, JPG, WebP or GIF images only.' },
  };
  const FIELD = { name: 'f-name', email: 'f-email', store: 'f-store', message: 'f-message', files: 'f-files' };
  const SERVER_KEY = { name: 'name', email: 'email', store_url: 'store', message: 'message', files: 'files' };
  const files = $('f-files'), list = $('file-list'), btn = $('f-submit');

  function setErr(key, code) {
    const el = $('e-' + key), input = $(FIELD[key]);
    const text = code ? (MSG[key] && MSG[key][code]) || 'Check this field.' : '';
    if (el) el.textContent = text;
    if (input) input.setAttribute('aria-invalid', code ? 'true' : 'false');
    return !code;
  }
  function fileErr() {
    const fs = [...files.files];
    if (fs.length > MAX) return 'count';
    if (fs.some((f) => f.size > MAX_BYTES)) return 'size';
    if (fs.some((f) => f.type && !TYPES.includes(f.type))) return 'type';
    return '';
  }
  function kb(n) { return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB'; }
  files.addEventListener('change', () => {
    list.innerHTML = '';
    for (const f of files.files) { const li = document.createElement('li'); li.textContent = `${f.name} (${kb(f.size)})`; list.appendChild(li); }
    setErr('files', fileErr());
  });

  for (const [key, id] of Object.entries(FIELD)) if (key !== 'files') $(id).addEventListener('input', () => { if ($(id).getAttribute('aria-invalid') === 'true') setErr(key, ''); });

  function check() {
    const v = (id) => $(id).value.trim();
    const store = v('f-store');
    const ok = [
      setErr('name', v('f-name') ? '' : 'required'),
      setErr('email', !v('f-email') ? 'required' : EMAIL.test(v('f-email')) ? '' : 'invalid'),
      setErr('store', !store ? 'required' : /^(https?:\/\/)?[^\s/.]+(\.[^\s/.]+)+(\/\S*)?$/i.test(store) ? '' : 'invalid'),
      setErr('message', v('f-message') ? '' : 'required'),
      setErr('files', fileErr()),
    ];
    return ok.every(Boolean);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    $('e-form').textContent = '';
    if (!check()) { const bad = form.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
    btn.disabled = true; btn.textContent = 'Sending...';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        const email = $('f-email').value.trim();
        form.hidden = true;
        $('sent-ref').textContent = data.ref || '';
        $('sent-mail').textContent = data.autoreply === 'sent'
          ? `A confirmation was sent to ${email}. If you don't see it, check your spam folder.`
          : `We couldn't send a confirmation email to ${email}. Keep this request number for reference.`;
        const box = $('sent'); box.hidden = false; box.focus();
        return;
      }
      if (data.errors) {
        for (const [k, code] of Object.entries(data.errors)) if (SERVER_KEY[k]) setErr(SERVER_KEY[k], code);
        const bad = form.querySelector('[aria-invalid="true"]'); if (bad) bad.focus();
      } else if (data.error === 'rate') {
        $('e-form').textContent = 'Too many requests from this network. Try again in an hour, or email hello@earntolink.com.';
      } else {
        $('e-form').textContent = 'Your request was not sent. Try again, or email hello@earntolink.com.';
      }
    } catch {
      $('e-form').textContent = 'Your request was not sent. Check your connection and try again, or email hello@earntolink.com.';
    } finally {
      btn.disabled = false; btn.textContent = 'Send request';
    }
  });
})();
