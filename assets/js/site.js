document.addEventListener('DOMContentLoaded', function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var toggle = document.querySelector('.menu-toggle');
  var mnav = document.getElementById('mnav');
  if (toggle && mnav) {
    toggle.addEventListener('click', function () {
      mnav.classList.toggle('open');
    });
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mnav.classList.remove('open'); });
    });
  }
});
