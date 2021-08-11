const MarsRover = require('../src/MarsRover');
const Position = require('../src/Position');

describe('MarsRover', () => {
  it('Init state', () => {
    const marsRover = new MarsRover(new Position(0, 0), 'N');
    expect(marsRover.getState()).toEqual({
      x: 0,
      y: 0,
      direction: 'N'
    });
  });
});