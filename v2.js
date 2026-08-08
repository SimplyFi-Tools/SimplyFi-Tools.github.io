(function () {
  'use strict';
  var nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', function () {
    nav.style.boxShadow = window.scrollY > 16 ? '0 4px 18px rgba(4,40,70,.06)' : 'none';
  }, { passive: true });
}());
