const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const str = prompt('Enter a string:');

/**
 * Create an array of substrings given a delimiter.
 * For example, if str = 'Hello World!' and delimiter = ' ', it should return ['Hello', 'World!']
 */
let newString = 'Hello World';
let sep = newString.split(' ', 3);
let result = sep;

// DO NOT CHANGE THE LINES BELOW.
console.log(result);

module.exports = {
  result,
};
