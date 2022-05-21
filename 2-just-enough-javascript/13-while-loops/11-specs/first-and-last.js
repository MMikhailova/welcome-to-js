// #todo

'use strict';

/*
  a user can provide input that starts with a capital letter and ends with a period
    - given the user cancels, they will be prompted again
    - given the input is shorter than two characters, they will be prompted again
    - given their input does not begin with a capital letter, they will be prompted again
    - given their input does not end with a period, they will be prompted again
    - given their input is valid, the first letter will be lower-cased and the period removed
    - given their input is valid, the loop will exit

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    two-character input:
      'A.' -> 'a'
      'X.' -> 'x'
    longer words:
      'Hello.' -> 'hello'
      'JavaScript!.' -> 'javaScript!'
    with some spaces:
      'Hello World.' -> 'hello World'
      'Hack your future.' -> 'hack your future'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = null;

/* --- create final output --- */

while (output===null){
  output=prompt('enter text that starts with a capital letter and ends with a period');
if (output[0].toUpperCase!==output[0] || output[output.length]!=='.' ) {
  output===null;
}
output=output[0].toLowerCase + output.slice(1,output.length-1);

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');