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

  var callBar = document.createElement('a');
  callBar.href = 'tel:0415874580';
  callBar.className = 'call-bar';
  callBar.setAttribute('aria-label', 'Call CCFix on 0415 874 580');
  callBar.innerHTML = '<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>Call CCFix — 0415 874 580';
  document.body.appendChild(callBar);
  document.body.classList.add('has-call-bar');
});
