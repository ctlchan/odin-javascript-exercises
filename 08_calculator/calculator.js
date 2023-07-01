const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce( (total, current) => total + current, 0);
};

const multiply = function(...values) {
  return values.reduce( (total, current) => total * current);
};

const power = function(base, exp) {

  let result = base;

  for (let i = 1; i < exp; i++) {
    result *= base;
  }

  return result;
};

const factorial = function(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) 
      result *= i;

    return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
