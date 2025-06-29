(function () {
  const tooltip = document.createElement('div');
  tooltip.style.position = 'fixed';
  tooltip.style.bottom = '10px';
  tooltip.style.left = '50%';
  tooltip.style.transform = 'translateX(-50%)';
  tooltip.style.background = 'linear-gradient(to right, #222, #444)';
  tooltip.style.color = '#fff';
  tooltip.style.fontSize = '12px';
  tooltip.style.fontFamily = 'monospace';
  tooltip.style.padding = '6px 10px';
  tooltip.style.borderRadius = '6px';
  tooltip.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  document.addEventListener('mouseover', e => {
    const el = e.target;
    const className = el.className ? `.${el.className.toString().trim().replace(/\s+/g, ' .')}` : '[no class]';
    tooltip.textContent = `Hovered: ${className}`;
    tooltip.style.display = 'block';
  });

  document.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
})();
