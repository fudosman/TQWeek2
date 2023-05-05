const numbers = [2, 5, 8, 11, 14];
let myAverage = calculateAverage(numbers);
  function calculateAverage(numbers){
    let sum = 0
    for(let i=0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
console.log(myAverage)