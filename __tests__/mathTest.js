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