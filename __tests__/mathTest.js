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

describe('add', () => {
  it('should only contain numbers', () => {
    expect(add([1,4,2,'a','z'])).toMatch('Invalid Dataset');
  });
  
  it('should add all numbers in array', () => {
    expect(add([1, 2, 3, 4, 5])).toBe(15);
  });
  
  it('should not add if numbers are less than 5', () => {
    expect(add([1,2,3])).toMatch('need more');
  });
});

describe('subtract', () => {
  it('should subtract the smaller number from the greater number', () => {
    expect(subtract(10,5)).toBe(5);
  });
  
  it('should log invalid if the second number is bigger than the first', () => {
    expect(subtract(5,10)).toMatch('Invalid');
  });
});