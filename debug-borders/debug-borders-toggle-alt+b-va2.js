(function () {
  let bordersEnabled = false;
  let borderStyleTag;

  function toggleBorders() {
    if (bordersEnabled) {
      borderStyleTag?.remove();
    } else {
      borderStyleTag = document.createElement('style');
      borderStyleTag.textContent = `
        * {
          outline: 1px solid rgba(255, 0, 0, 0.3) !important;
          outline-offset: -1px;
        }
      `;
      document.head.appendChild(borderStyleTag);
    }
    bordersEnabled = !bordersEnabled;
  }

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'b') {
      toggleBorders();
    }
  });
})();
