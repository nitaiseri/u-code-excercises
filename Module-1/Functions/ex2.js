
const isEven = function(num){
    return (num%2) === 0;
}

const printOdd = function(numArray){
    for (let num of numArray){
        if (!isEven(num)){
            console.log(num);
        }
    }
}
