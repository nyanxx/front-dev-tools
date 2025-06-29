// <script type="module" src="./front-dev-tools/loader.js"></script> -- add this in you html file

// loader.js 
(async function () {
  await Promise.all([
    // debug-borders varient 2
    import('./debug-borders/debug-borders-toggle-alt+b-va2.js'),
    // hover-classes varient 5
    import('./hover-classes/hover-classes-cursor-toggle-alt+h-va5.js'),
    // label-semantic-tags varient 2
    import('./label-semantic-tags/label-semantic-tags-toggle-alt+s-va2.js')
  ]);
})();