class MarsRover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  getState() {
    return {
      x: this.position.x,
      y: this.position.y,
      direction: this.direction
    }
  }
}

module.exports = MarsRover;