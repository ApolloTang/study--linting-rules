let mockReturn: number;
jest.mock('./get-number', () => ({ getNumber: jest.fn(() => mockReturn) }));

import * as util from './util'; // <-- this will not work with previous version of jest
//                                     need workarounds using commonjs's require
//                                     see: https://stackoverflow.com/questions/49650323/jest-mock-module-multiple-times-with-different-values

describe('[util.multiplier using ECMAScript module]', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should mock getNumber so that getNumber return 3', () => {
    mockReturn = 3;
    expect(util.multiplier(2)).toBe(6);
  });

  it('should mock getNumber so that getNumber return 4', () => {
    mockReturn = 4;
    expect(util.multiplier(2)).toBe(8);
  });

  it('should mock getNumber so that getNumber return 5', () => {
    mockReturn = 5;
    expect(util.multiplier(2)).toBe(10);
  });
});
