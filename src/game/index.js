import gameBoardImg from './board.png';
import _heroImg from './hero.png';
import _monsterImg from './monster.png';

export default function initialize() {
  const width = 512;
  const height = 480;
  const boardMargin = 32; // Tile width?

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  document.body.appendChild(canvas);

  let bgReady = false;
  const bgImg = new Image();
  bgImg.onload = () => { bgReady = true; };
  bgImg.src = gameBoardImg;

  let heroReady = false;
  const heroImg = new Image();
  heroImg.onload = () => { heroReady = true; };
  heroImg.src = _heroImg;

  let monsterReady = false;
  const monsterImg = new Image();
  monsterImg.onload = () => { monsterReady = true; };
  monsterImg.src = _monsterImg;

  const hero = {
    speed: 256, // px per second
    x: canvas.width / 2,
    y: canvas.height / 2,
  };

  const monster = {
    x: 0,
    y: 0,
  };

  let score = 0;

  const keysDown = {};

  window.addEventListener('keydown', e => {
    console.log(e.key);
    keysDown[e.key] = true;
  });
  window.addEventListener('keyup', e => {
    delete keysDown[e.key];
  });

  const resetMonster = () => {
    monster.x = boardMargin + Math.random() * (canvas.width - boardMargin * 2);
    monster.y = boardMargin + Math.random() * (canvas.height - boardMargin * 2);
  };

  const hasCollision = (a, b) => {
    const threshold = 32;

    return (
      a.x <= (b.x + threshold) &&
      (b.x - threshold) <= a.x &&
      a.y <= (b.y + threshold) &&
      (b.y - threshold) <= a.y
    );
  };

  const update = (modifier) => {
    if ('ArrowUp' in keysDown) {
      hero.y -= hero.speed * modifier;
    }
    if ('ArrowDown' in keysDown) {
      hero.y += hero.speed * modifier;
    }
    if ('ArrowLeft' in keysDown) {
      hero.x -= hero.speed * modifier;
    }
    if ('ArrowRight' in keysDown) {
      hero.x += hero.speed * modifier;
    }

    if (hasCollision(hero, monster)) {
      score += 1;
      resetMonster();
    }
  };

  const render = () => {
    if (bgReady) ctx.drawImage(bgImg, 0, 0);
    if (heroReady) ctx.drawImage(heroImg, hero.x, hero.y);
    if (monsterReady) ctx.drawImage(monsterImg, monster.x, monster.y);

    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.font = '24px Helvetica';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(`Score: ${score}`, boardMargin, boardMargin);
  };

  const main = () => {
    const now = Date.now();
    const delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    requestAnimationFrame(main);
  };

  let then = Date.now();
  main();
}
