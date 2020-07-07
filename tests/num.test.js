const mod = require('../src/js/num');

test('test sum', () => {
  expect(mod.sum(12, 5)).toBe(17);
  // expect(mod.sum(0, 0)).toBe(-1);
})