(function () {
  const labelClass = '__semantic-tag-label';
  const semanticTags = [
    'header', 'nav', 'main', 'section', 'article', 'aside',
    'footer', 'figure', 'figcaption', 'mark', 'time', 'details', 'summary'
  ];

  let labelsEnabled = false;

  function toggleLabels() {
    if (labelsEnabled) {
      document.querySelectorAll(`.${labelClass}`).forEach(el => el.remove());
      labelsEnabled = false;
      return;
    }

    semanticTags.forEach(tag => {
      document.querySelectorAll(tag).forEach(el => {
        const label = document.createElement('div');
        label.className = labelClass;
        label.textContent = `<${tag}>`;
        Object.assign(label.style, {
          position: 'absolute',
          top: '0',
          left: '0',
          background: 'rgba(0, 123, 255, 0.7)',
          color: 'white',
          fontSize: '10px',
          fontFamily: 'sans-serif',
          padding: '2px 4px',
          zIndex: '9999',
          pointerEvents: 'none',
          borderBottomRightRadius: '4px'
        });

        if (window.getComputedStyle(el).position === 'static') {
          el.style.position = 'relative';
        }

        el.appendChild(label);
      });
    });

    labelsEnabled = true;
  }

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 's') {
      toggleLabels();
    }
  });
})();
