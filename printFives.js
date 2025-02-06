/* 
Write a function printFives(max) that prints out the multiples of 5 that are less than the max.

Try to solve this in two ways, one using an if statement, and one without.
*/

function printFives(max) {
  i = 0;
  while (i < max) {
    console.log(i);
    i += 5;
  }
}


printFives(20) // prints out:
// 0
// 5
// 10
// 15

function printFivesIf(max) {
  i = 0;
  while(i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i += 5;
  }
}

printFivesIf(20) // prints out:
// 0
// 5
// 10
// 15
