import { assert } from 'chai';
import Snake, { Direction } from '../src/snake';

describe('Snake', () => {

  it('should start out with one segment', () => {
    const snake = new Snake(0, 0);
    assert.equal(snake.segments.length, 1);
  });

  describe('#head', () => {

    it('should return the first object in Snake#segments', () => {
      const snake = new Snake(0, 0);
      assert.equal(snake.head, snake.segments[0]);
    });

  });

  describe('#direction', () => {

    it('should throw and error if a keyCode is not one of the arrow keys', () => {
      const snake = new Snake(0, 0);
      assert.throws(() => {
        snake.direction = 999;
      });
    });

  });

  describe('#addSegment()', () => {

    it('should add one segment to #segments', () => {
      const snake = new Snake(0, 0);
      snake.addSegment();
      assert.equal(snake.segments.length, 2);
    });

  });

  describe('#move()', () => {

    it('should increment head segment\'s x value if the snake\'s direction is right', () => {
      const snake = new Snake(0, 0);
      snake.direction = Direction.Right;
      snake.move();

      assert.equal(snake.head.x, 1);
    });

    it('should decrement head segment\'s x value if the snake\'s direction is left', () => {
      const snake = new Snake(0, 0);
      snake.direction = Direction.Left;
      snake.move();

      assert.equal(snake.head.x, -1);
    });

    it('should increment head segment\'s y value if the snake\'s direction is down', () => {
      const snake = new Snake(0, 0);
      snake.direction = Direction.Down;
      snake.move();

      assert.equal(snake.head.y, 1);
    });

    it('should decrement head segment\'s y value if the snake\'s direction is up', () => {
      const snake = new Snake(0, 0);
      snake.direction = Direction.Up;
      snake.move();

      assert.equal(snake.head.y, -1);
    });

    it('should move the second segment to the previous position of the head', () => {
      const snake = new Snake(0, 0);
      snake.addSegment();

      const { x, y } = snake.head;
      snake.move();

      assert.equal(snake.last.x, x);
    });

  });

});
