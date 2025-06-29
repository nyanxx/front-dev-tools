(function () {
  if (window.DEBUG_BORDERS_LOADED) return;
  window.DEBUG_BORDERS_LOADED = true;

  const style = document.createElement('style');
  style.textContent = `
    * {
      outline: 1px solid rgba(255, 0, 0, 0.3) !important;
      outline-offset: -1px;
    }
  `;
  document.head.appendChild(style);
})();


// Script to inject in consolse

// Add thin red border to every element for debugging
// (function () {
//   const elements = document.querySelectorAll('*');
//   elements.forEach(el => {
//     el.style.outline = '1px solid rgba(255, 0, 0, 0.2)';
//     el.style.outlineOffset = '-1px';
//   });
// })();