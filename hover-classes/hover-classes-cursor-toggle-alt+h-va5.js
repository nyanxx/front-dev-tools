(function () {
  let tooltipEnabled = false;
  let tooltip;

  function createTooltip() {
    tooltip = document.createElement('div');
    Object.assign(tooltip.style, {
      position: 'fixed',
      background: '#111',
      color: '#fff',
      fontSize: '12px',
      fontFamily: 'monospace',
      lineHeight: '1.4',
      padding: '6px 10px',
      borderRadius: '6px',
      pointerEvents: 'none',
      zIndex: '9999',
      opacity: '0',
      transform: 'translateY(10px)',
      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      whiteSpace: 'pre-line',
      boxShadow: '0 0 8px rgba(0,0,0,0.4)',
    });
    document.body.appendChild(tooltip);
  }

  function showTooltip(e) {
    if (!tooltipEnabled || !tooltip) return;

    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el) return;

    const tag = el.tagName.toLowerCase();
    const classList = el.className
      ? `.${el.className.toString().trim().replace(/\s+/g, ' .')}`
      : '[no class]';

    const parentTag = el.parentElement
      ? el.parentElement.tagName.toLowerCase()
      : '[no parent]';

    // tooltip.textContent = `classes: ${classList}\ntag: ${tag}`;
    tooltip.textContent = `classes: ${classList}\ntag: ${tag}\nparent-tag: ${parentTag}`;
    tooltip.style.top = `${e.clientY + 15}px`;
    tooltip.style.left = `${e.clientX + 15}px`;
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateY(0)';
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateY(10px)';
  }

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'h') {
      tooltipEnabled = !tooltipEnabled;
      if (!tooltipEnabled) hideTooltip();
    }
  });

  document.addEventListener('mousemove', showTooltip);
  document.addEventListener('mouseout', hideTooltip);

  createTooltip();
})();
