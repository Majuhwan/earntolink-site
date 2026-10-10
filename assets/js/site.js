(function () {
  var h = document.querySelector('.hdr');
  var b = document.querySelector('.menu-btn');
  if (!h || !b) return;
  b.addEventListener('click', function () {
    var open = h.classList.toggle('open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && h.classList.contains('open')) { h.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); b.focus(); }
  });
})();
