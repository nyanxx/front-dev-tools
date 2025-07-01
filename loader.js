(async function () {
  await Promise.all([
    // debug-borders variant 2
    import('./debug-borders/debug-borders-toggle-alt+b-va2.js'),
    // hover-classes variant 5
    import('./hover-classes/hover-classes-cursor-toggle-alt+h-va5.js'),
    // label-semantic-tags variant 2
    import('./label-semantic-tags/label-semantic-tags-toggle-alt+s-va2.js')
  ]);
})();