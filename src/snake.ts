import Segment from './segment';

export default class Snake {
  segments: Array<Segment>;
  private _direction: Direction = Direction.Right;

  constructor(x: number, y: number, width = 10, height = 10) {
    this.segments = [new Segment(this, x, y, width, height)];
    this.direction = Direction.Right;
  }

  get head(): Segment {
    return this.segments[0];
  }

  get tail(): Array<Segment> {
    return this.segments.slice(1);
  }

  get last(): Segment {
    return this.segments[this.segments.length - 1];
  }

  get direction(): Direction {
    return this._direction;
  }

  set direction(keyCode: Direction) {
    if (keyCode < 37 || keyCode > 41) {
      throw new Error('keyCode must be between 37 and 41');
    }

    this._direction = keyCode;
  }

  addSegment(): Snake {
    const { x, y, width, height } = this.last;
    this.segments.unshift(new Segment(this, x + width, y + height));
    return this;
  }

  move(): Snake {
    this.moveTail();

    if (this.direction === Direction.Left) { this.moveLeft(); }
    if (this.direction === Direction.Up) { this.moveUp(); }
    if (this.direction === Direction.Right) { this.moveRight(); }
    if (this.direction === Direction.Down) { this.moveDown(); }

    return this;
  }

  private moveTail() {
    this.tail.forEach((segment, index) => {
      const { x, y } = this.segments[index];
      segment.x = x;
      segment.y = y;
    });
  }

  private moveUp() {
    this.head.y = this.head.y - 1;
  }

  private moveDown() {
    this.head.y = this.head.y + 1;
  }

  private moveLeft() {
    this.head.x = this.head.x - 1;
  }

  private moveRight() {
    this.head.x = this.head.x + 1;
  }

}

export enum Direction {
    Left = 37,
    Up,
    Right,
    Down
}
