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

