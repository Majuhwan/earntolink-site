(function () {
  var h = document.querySelector('.hdr');
  var b = document.querySelector('.menu-btn');
  var lsw = document.querySelector('.lsw');
  if (h && b) {
    b.addEventListener('click', function () {
      var open = h.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && lsw) lsw.open = false;
    });
  }
  document.addEventListener('click', function (e) {
    if (lsw && lsw.open && !lsw.contains(e.target)) lsw.open = false;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (lsw && lsw.open) { lsw.open = false; lsw.querySelector('summary').focus(); }
    if (h && b && h.classList.contains('open')) { h.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); b.focus(); }
  });
})();

// Home hero background video: attached after load; skipped for reduced motion / data saver / 2G; paused off-screen.
(function () {
  var v = document.querySelector('.hero-vid'); if (!v) return;
  var c = navigator.connection || {};
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || c.saveData || /(^|-)2g$/.test(c.effectiveType || '')) return;
  function go() {
    var m = matchMedia('(max-width: 760px)').matches ? 'm' : 'd';
    [['Webm', 'video/webm'], ['Mp4', 'video/mp4']].forEach(function (x) { var s = document.createElement('source'); s.src = v.dataset[m + x[0]]; s.type = x[1]; v.appendChild(s); });
    v.preload = 'auto'; v.load();
    v.addEventListener('playing', function () { v.classList.add('on'); }, { once: true });
    var p = v.play(); if (p && p.catch) p.catch(function () {});
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var q = v.play(); if (q && q.catch) q.catch(function () {}); } else v.pause(); }); }).observe(v);
  }
  if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
})();
