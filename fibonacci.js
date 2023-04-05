/**A PROGRAM THAT GENERATES THE FIBONACCI SEQUENCE UP TO A GIVEN NUMBER OF TERMS*/

function fibonacci(num) {
  let fibSq = [0, 1];

  for (let i = 2; i < num; i++) {
    fibSq[i] = fibSq[i - 1] + fibSq[i - 2];
  }

  return fibSq;
}

// Test
console.log(fibonacci(10));