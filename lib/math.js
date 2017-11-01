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