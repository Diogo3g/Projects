// Find de min and max value of an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log("max", max, " ", "min", min);
