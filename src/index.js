import renderGame from './game'

/**
 * This is a bunch of not-too-pretty boilerplate for setting up the intiial
 * render and rendering it. After this point, all game rendering should be
 * handled within the game.
 *
 * That's the intent anyway. Could very well change as I learn more.
 *
 * If I bring in some UI framework to build some dev UI (react,preact,etc) then
 * I could move all this in there most likely.
 *
 * NOTE: It's super important that the html and body get full height, since
 * that's where we're currently pulling the width and height for the game.
 */
const _makeRootElement = ({ id }) => {
  const styles = document.createElement('style');

  // Styles. Shouldn't need much since working with Canvas
  styles.textContent = `
html,body {
  height: 100%;
}
body {
  margin: 0;
}
#game {
  width: 100%;
  height: 100%;
}
`.trim();
  document.head.appendChild(styles);

  const root = document.createElement('div');
  root.setAttribute('id', id);
  document.body.appendChild(root);

  return root;
};

document.addEventListener('DOMContentLoaded', () => {
  const el = _makeRootElement({ id: 'game' });
  renderGame(el);
});
