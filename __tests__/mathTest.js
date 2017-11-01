const add = require('../lib/math').add;
const subtract = require('../lib/math').subtract;
const multiply = require('../lib/math').multiply;
const divide = require('../lib/math').divide;
const Validate = require('../lib/math').Validate;

describe('ifNumber', () => {
  it('should validate a dataset if it contains numbers', () => {
    expect(Validate.ifNumber([1,2,3,4,5])).toBeTruthy();
  });
  
  it('should not validate a dataset if it contains characters', () => {
    expect(Validate.ifNumber([1,2,'a',4,'z'])).toBeFalsy();
  });
});

describe('minFive', () => {
  it('should validate a dataset if it has a minimum of 5 numbers', () => {
    expect(Validate.minFive([1,2,3,4,5])).toBeTruthy();
  });
  
  it('should not validate a dataset if it does not have a minimum of 5 numbers', () => {
    expect(Validate.minFive([1,2,4])).toBeFalsy();
  });
});