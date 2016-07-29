import Snake from './snake';

export default class Segment {

  snake: Snake;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(snake: Snake, x: number, y: number, width = 10, height = 10) {
    this.snake = snake;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

}
