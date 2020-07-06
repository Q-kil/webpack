const mod = require('../src/js/async');

test('test ajax', async () => {
  expect(await mod.sum(12,5)).toBe(17);
})