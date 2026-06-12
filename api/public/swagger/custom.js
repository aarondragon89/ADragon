(function () {
  function injectLogo() {
    const topbar = document.querySelector('.topbar');
    if (topbar && !document.getElementById('adragon-sample-logo')) {
      const logoContainer = document.createElement('div');
      logoContainer.id = 'adragon-sample-logo';
      logoContainer.className = 'swagger-logo';
      logoContainer.innerHTML = '<span>ADragon Sample API</span>';
      topbar.insertBefore(logoContainer, topbar.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLogo);
  } else {
    injectLogo();
  }

  setTimeout(injectLogo, 500);
})();
