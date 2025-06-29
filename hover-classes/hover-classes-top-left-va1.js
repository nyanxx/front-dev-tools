(function () {
  const tooltip = document.createElement('div');
  tooltip.style.position = 'fixed';
  tooltip.style.zIndex = '10000';
  tooltip.style.background = 'rgba(0, 0, 0, 0.7)';
  tooltip.style.color = 'white';
  tooltip.style.fontSize = '12px';
  tooltip.style.fontFamily = 'monospace';
  tooltip.style.padding = '2px 6px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);

  document.addEventListener('mouseover', e => {
    const el = e.target;
    const rect = el.getBoundingClientRect();
    const className = el.className ? `.${el.className.toString().replace(/\s+/g, ' .')}` : '[no class]';
    tooltip.textContent = className;
    tooltip.style.top = `${rect.top + window.scrollY + 5}px`;
    tooltip.style.left = `${rect.left + window.scrollX + 5}px`;
    tooltip.style.display = 'block';
  });

  document.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
})();
