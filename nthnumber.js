function nSumSequence(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

console.log(nSumSequence(10))
