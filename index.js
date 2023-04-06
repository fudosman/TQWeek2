function isPangram(str){
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog."))
  console.log(isPangram("This is not a pangram."))
let number = prompt("Enter number.");
let factorial = 1;

for(let i = 1;i <= number;i++){
    factorial *= i;
}

console.log(factorial);
console.log(factorial);
