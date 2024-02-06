
let sum = 0;

for (let i = 200; i <= 2700; i++) {
  if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    sum += i;
  }
}

console.log(sum);


/*
function shiftArrayToFront(arr) {
    if (arr.length === 0) {
      return arr; // Return the array as is if it's empty
    }
  
    const poppedElement = arr.pop(); // Remove the last element and store it
    arr.unshift(poppedElement); // Add the popped element to the front of the array
  
    return arr;
  }
  
  // Example usage:
  const X = [2, 1, 6, 4, -7];
  const shiftedArray = shiftArrayToFront(X);
  console.log(shiftedArray); // Output: [-7, 4, 6, 1, 2]



  function fizzBuzz() {
    const result = [];
  
    for (let i = 1; i <= 135; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const output = fizzBuzz();
  console.log(output);



  function sumFibonacciBelowLimit(limit) {
    let sum = 0;
    let fibPrev = 0;
    let fibCurr = 1;
  
    while (fibCurr < limit) {
      if (fibCurr % 2 === 0) {
        sum += fibCurr;
      }
      const nextFib = fibPrev + fibCurr;
      fibPrev = fibCurr;
      fibCurr = nextFib;
    }
  
    return sum;
  }
  
  // Example usage:
  const limit = 1000000;
  const summs = sumFibonacciBelowLimit(limit);
  console.log(summs); // Output: 1089154

  


  function removeNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }
  
  // Example usage:
  const X = [1, -2, 4, 1];
  const result = removeNegativeNumbers(X);
  console.log(result); // Output: [1, 4, 1]

  

  function replaceWordWithStars(arr, wordToReplace) {
    return arr.map(word => word === wordToReplace ? '*'.repeat(word.length) : word);
  }
  
  // Example usage:
  const X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
  const wordToReplace = 'Program';
  const result = replaceWordWithStars(X, wordToReplace);
  console.log(result); // Output: ['Man', 'I', 'Love', 'The', 'Matrix', '*******']
  */