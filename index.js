
let today = "far gone";

let now = "This is my first assignment";
;const num = 225;
const isPerfectSquare = num => {
  let me = 1;
  while (me * me <= num) {
    if (me * me != num) {
      me++;
      continue;
    };
    return true;
  };
  return false;
};
console.log(isPerfectSquare(num));
function test_prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(34));
let number = prompt("Enter number.");
let factorial = 1;

for(let i = 1;i <= number;i++){
    factorial *= i;
}

console.log(factorial);
console.log(factorial);
