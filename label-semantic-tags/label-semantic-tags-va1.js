(function () {
  const semanticTags = [
    'header', 'nav', 'main', 'section', 'article', 'aside', 'footer',
    'figure', 'figcaption', 'mark', 'time', 'details', 'summary'
  ];

  const style = document.createElement('style');
  // pointer-events: none and position: relative
  // If you’d like the labels to appear in the top-right instead, just change left: 0 to right: 0 in the CSS.
  style.textContent = `
    .__semantic-tag-label {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 123, 255, 0.7);
      color: white;
      font-size: 10px;
      font-family: sans-serif;
      padding: 2px 4px;
      z-index: 9999;
      pointer-events: none; 
      border-bottom-right-radius: 4px;
    }
  `;
  document.head.appendChild(style);

  semanticTags.forEach(tag => {
    const elements = document.querySelectorAll(tag);
    elements.forEach((el, index) => {
      const label = document.createElement('div');
      label.className = '__semantic-tag-label';
      label.textContent = `<${tag}>`;

      // ensure the element can be positioned relative for absolute label
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.position === 'static') {
        el.style.position = 'relative';
      }

      el.appendChild(label);
    });
  });
})();
