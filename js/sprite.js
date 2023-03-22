(function () {
  if (typeof Mario === "undefined") window.Mario = {};

  let Sprite = (Mario.Sprite = function (img, pos, size, speed, frames, once) {
    this.pos = pos;
    this.size = size;
    this.speed = speed;
    this._index = 0;
    this.img = img;
    this.once = once;
    this.frames = frames;
  });

  Sprite.prototype.update = function (dt, gameTime) {
    if (gameTime && gameTime == this.lastUpdated) return;
    this._index += this.speed * dt;
    if (gameTime) this.lastUpdated = gameTime;
  };

  Sprite.prototype.setFrame = function (frame) {
    this._index = frame;
  };

  Sprite.prototype.render = function (ctx, posx, posy, vX, vY) {
    let frame;

    if (this.speed > 0) {
      let max = this.frames.length;
      let idx = Math.floor(this._index);
      frame = this.frames[idx % max];

      if (this.once && idx >= max) {
        this.done = true;
        return;
      }
    } else {
      frame = 0;
    }

    let x = this.pos[0];
    let y = this.pos[1];

    x += frame * this.size[0];
    ctx.drawImage(
      resources.get(this.img),
      x + 1 / 3,
      y + 1 / 3,
      this.size[0] - 2 / 3,
      this.size[1] - 2 / 3,
      Math.round(posx - vX),
      Math.round(posy - vY),
      this.size[0],
      this.size[1]
    );
  };
})();
