const Validate = {
	ifNumber: function(numbers) {
	  const types = numbers.map((num) => typeof(num) === 'number');
	  if (types.includes(false)) {
		return false;
	  }
	  return true;
	},
	minFive: function(numbers) {
	  if (numbers.length < 5) {
		return false;
	  }
	  return true;
	}
};

function add(numbers) {
	if (!Validate.ifNumber(numbers)) {
		return 'Invalid Dataset';
	}

	if (!Validate.minFive(numbers)) {
		const remainder = subtract(5, numbers.length);
		return `You need more ${remainder} number(s) in the array`;
	}
	return numbers.reduce(function(a,b) {return a+b; });
}

function subtract(a,b) {
	if (b > a) {
		return "Invalid";
	}
	return a - b;
}

function multiply(numbers) {
	if (!Validate.ifNumber(numbers)) {
		return 'Invalid Dataset';
	}

	if (!Validate.minFive(numbers)) {
		const remainder = subtract(5, numbers.length);
		return `You need more ${remainder} number(s) in the array`;
	}

	return numbers.reduce(function(a,b){return a*b;});
}

function divide(a,b,ops) {
	if (ops == 'quotient') {
		return a / b;
	}

	if (ops == 'remainder') {
		return a % b;
	}
}
  
module.exports = {add, subtract, multiply, divide, Validate};