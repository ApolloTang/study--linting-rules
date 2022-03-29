import main from './main';

describe('Example Test', () => {
  it('Correctly run a test', () => {
    expect(true).toBeTruthy();
  });

  it('Return correction number', () => {
    expect(main()).toBe('3411');
  });
});
