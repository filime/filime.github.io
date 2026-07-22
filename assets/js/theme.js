(function () {
  var root = document.documentElement;
  var themeButtons = document.querySelectorAll('[data-theme-toggle]');
  var themeIcons = document.querySelectorAll('[data-theme-icon]');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function syncTheme() {
    var isDark = root.dataset.theme !== 'light';
    themeIcons.forEach(function (icon) { icon.textContent = isDark ? '☀' : '☾'; });
    themeButtons.forEach(function (button) {
      button.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
    });
    if (themeMeta) themeMeta.setAttribute('content', isDark ? '#000000' : '#ffffff');
  }

  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.setItem('filime-theme', next); } catch (error) {}
      syncTheme();
    });
  });

  syncTheme();

  var links = Array.prototype.slice.call(document.querySelectorAll('[data-section-link]'));
  var sections = links.map(function (link) {
    return document.querySelector(link.getAttribute('href'));
  }).filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-ready');
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (element) { revealObserver.observe(element); });
  }

  var chips = document.querySelectorAll('[data-vendor-filter]');
  var cards = document.querySelectorAll('[data-vendor]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var selected = chip.dataset.vendorFilter;
      chips.forEach(function (item) { item.classList.toggle('active', item === chip); });
      cards.forEach(function (card) {
        card.hidden = selected !== 'all' && card.dataset.vendor !== selected;
      });
      document.querySelectorAll('[data-vuln-group]').forEach(function (group) {
        group.hidden = !group.querySelector('[data-vendor]:not([hidden])');
      });
    });
  });

  var printButton = document.querySelector('[data-print-page]');
  if (printButton) printButton.addEventListener('click', function () { window.print(); });
}());
