import Game from './Game.js';

const render = (instance, root) => {
  root.appendChild(instance.createElement());
  instance.render(); // Initial render
};

/**
 * Run the actual render. This is meant to be called as is. No need to pass any
 * args. But it is of course super impure, rendering to the DOM. It also
 * requires that the DOM already be rendered so that the height is calculated
 * and ready to be passed to the canvas.
 */
export default function renderGame(el) {
  const { width, height } = document.body.getBoundingClientRect();

  const app = new Game({
    width,
    height,
  });

  render(app, el);
}
