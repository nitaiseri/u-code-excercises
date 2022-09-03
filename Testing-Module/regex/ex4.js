const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
  /**
   * returns true if URL starts with www. , the URL must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
   let pattern = /www\..+\.com/
   return pattern.test(str);
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return true
console.log(urlValidator(thirdURL)) //return false