const d3 = require('d3-time-format');

// Define the MILLISECONDS constant
const MILLISECONDS = 'milliseconds';

// Define the spec object with various format patterns
const spec = {
  seconds: ':%S',
  minutes: '%M',
  hours: '%H',
  // Note: MILLISECONDS key is intentionally omitted to demonstrate the default value
};

// Use the format function to create a formatter for milliseconds
const L = d3.timeFormat(spec[MILLISECONDS] || '.%L');

// Example usage of the formatter
const now = new Date();
console.log(L(now)); // Outputs the current milliseconds portion of the date, using '.%L' as the format

// Additional formatters could be created for other parts of the date
const S = d3.timeFormat(spec.seconds);
const M = d3.timeFormat(spec.minutes);
const H = d3.timeFormat(spec.hours);

console.log(S(now)); // Outputs the current seconds portion of the date
console.log(M(now)); // Outputs the current minutes portion of the date
console.log(H(now)); // Outputs the current hours portion of the date
