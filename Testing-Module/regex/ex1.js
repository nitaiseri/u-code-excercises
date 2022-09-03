const str = "the fat cat hit the rat with a bat"
const str1 ="bob yelled hello"
const str2 = "it's fleece wast white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

//Checks if it contains “a” in the string
const checkIfContainsA = function (text){
   let pattern = /\S*a\S*/i;
   return pattern.test(text);
}

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function(text){
  /**
   * should return true if a string ending with at exsists in string
   * HINT : look into $
   */
   let pattern = /at$/i;
   return pattern.test(text);
}
//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function(text){
  /**
   * should return true if string is all numbers / size 10 / starts with 054
   * HINT : look into ^ , into Ranges [] and sizes {}
   */
   let pattern = /^054[0-9]{7}/i;
   return pattern.test(text);
}

// console.log(checkIfContainsA(str)) //returns true
// console.log(checkIfContainsA(str1)) //returns false

console.log(checkIfEndsWithAt(str)) //returns true
console.log(checkIfEndsWithAt(str1)) //returns false
console.log(checkIfEndsWithAt(str2)) //returns false

// console.log(checkIfStartsWithNum(str)) //returns false
// console.log(checkIfStartsWithNum(str3)) //return true
// console.log(checkIfStartsWithNum(str4)) //return false
// console.log(checkIfStartsWithNum(str5)) //return false