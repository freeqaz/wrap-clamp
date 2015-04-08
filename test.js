'use strict';
var test = require('tape');
var wrapClamp = require('./');

function setupTest(message, min, max) {
  return function runTestFn(tests) {
    test(message, function assertFn(t) {
      t.plan(tests.length);

      tests.forEach(function testPairFn(pair) {
        var input = pair[0];
        var expected = pair[1];

        t.equal(wrapClamp(input, min, max), expected);
      });
    });
  };
}

setupTest('test positive range', 0, 4)([
  [-1, 4],
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 0],
  [6, 1],
  [7, 2]
]);

setupTest('test negative range', -5, -1)([
  [-6, -1],
  [-5, -5],
  [-4, -4],
  [-3, -3],
  [-2, -2],
  [-1, -1],
  [0, -5],
  [1, -4]
]);

test('error handling works', function assertFn(t) {
  t.plan(1);

  t.throws(function giveInvalidRange() {
    wrapClamp(0, 5, 0);
  }, null, 'minimum value must be greater than max')
});
