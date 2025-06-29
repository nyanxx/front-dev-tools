(function () {
  const tooltip = document.createElement('div');
  Object.assign(tooltip.style, {
    position: 'fixed',
    background: '#222',
    color: '#fff',
    fontSize: '12px',
    fontFamily: 'monospace',
    padding: '4px 8px',
    borderRadius: '4px',
    pointerEvents: 'none',
    zIndex: '9999',
    opacity: '0',
    transform: 'translateY(10px)',
    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
    boxShadow: '0 0 8px rgba(0,0,0,0.4)',
  });

  document.body.appendChild(tooltip);

  document.addEventListener('mousemove', e => {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const className = el?.className
      ? `.${el.className.toString().trim().replace(/\s+/g, ' .')}`
      : '[no class]';

    tooltip.textContent = `Class: ${className}`;
    tooltip.style.top = `${e.clientY + 15}px`;
    tooltip.style.left = `${e.clientX + 15}px`;
    tooltip.style.opacity = '1';
    tooltip.style.transform = 'translateY(0)';
  });

  document.addEventListener('mouseout', () => {
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateY(10px)';
  });
})();
