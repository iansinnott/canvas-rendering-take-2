const { PI } = Math;

export default class App {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
  }

  createElement() {
    const el = document.createElement('canvas');
    el.setAttribute('class', 'canvas');
    el.setAttribute('width', this.width);
    el.setAttribute('height', this.height);
    el.addEventListener('click', this.onClick);

    this.el = el;
    this.ctx = el.getContext('2d');

    return el;
  }

  onClick = (e) => {
    const { ctx } = this;
    const size = 22;
    const x = e.clientX;
    const y = e.clientY;

    console.info('clicked', { x, y, event: e });

    ctx.beginPath(); // Necessary to keep circles from connecting
    ctx.strokeStyle = 'tan';
    ctx.arc(x , y, size, 0, 2 * PI);
    ctx.stroke();

    ctx.beginPath(); // Necessary to keep circles from connecting
    ctx.strokeStyle = 'teal';
    ctx.arc(x , y, size / 3, 0, 2 * PI);
    ctx.stroke();
  };

  getStuff() {
    return this.stuff();
  }

  renderBackground() {
    const { ctx, width, height } = this;
    ctx.fillStyle = 'rgba(33,33,33,1)';
    ctx.fillRect(0, 0, width, height);
  }

  // Will be called initially once by the renderer. After that it is up to use
  // to call it again whenever we want to re-render.
  //
  // NOTE: This is an INITIAL render right now. I haven't moved to a declarative
  // rendering model, so right now this only gets called once and I imperatively
  // render wherever I want.
  render() {
    this.renderBackground();
  }
}
