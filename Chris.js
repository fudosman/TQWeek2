// Javascript program to check for a leap year
let year = 2000;
function checkYear(year) {

  if (year % 400 == 0)
    return true;

  if (year % 100 == 0)
    return false;

  if (year % 4 == 0)
    return true;
  return false;
}

console.log(checkYear(2000) ? "Leap Year" : "Not a Leap Year");