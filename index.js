'use strict';

function wrappingClamp(value, min, max) {
  if (min > max) {
    // Todo: Is throwing an error really the best way to handle this?
    throw new Error('minimum value must be greater than max');
  }

  var range = (max - min) + 1;

  return value - Math.floor((value - min) / range) * range;
}

module.exports = wrappingClamp;