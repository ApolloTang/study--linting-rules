// import { multiplier } from "./multiplier"  // <-- this will not work

// @ts-expect-error | Reason: non isolated does not apply to jest
let mockReturn: number;
jest.mock('./get-number', () => ({ getNumber: jest.fn(() => mockReturn) }));

// @ts-expect-error | Reason: non isolated does not apply to jest
describe('[multiplier]', () => {
  let multiplier: (num: number) => number;

  beforeEach(() => {
    jest.resetModules();
  });

  it('should mock getNumber so that getNumber return 3', () => {
    mockReturn = 3;
    multiplier = require('./multiplier').multiplier;
    expect(multiplier(2)).toBe(6);
  });

  it('should mock getNumber so that getNumber return 4', () => {
    mockReturn = 4;
    multiplier = require('./multiplier').multiplier;
    expect(multiplier(2)).toBe(8);
  });

  it('should mock getNumber so that getNumber return 5', () => {
    mockReturn = 5;
    multiplier = require('./multiplier').multiplier;
    expect(multiplier(2)).toBe(10);
  });
});
