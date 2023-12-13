
function isPalindrome(str) {
  const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

const exampleString = "А роза упала на лапу Азора";
const result = isPalindrome(exampleString);

console.log(result);

// some code

