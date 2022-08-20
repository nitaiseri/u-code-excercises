
function checkExists(numArray, num){
    for (curNum of numArray){
        if (curNum === num){
            return true
        }
    }
    return false
} 
console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))
