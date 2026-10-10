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
