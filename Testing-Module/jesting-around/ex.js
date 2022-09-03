class Exercises{
    constructor(){};

    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(arr){
        if (arr.length === 0){
            return {error: "Need at least one boolean"}
        }else{
            return arr.filter(a => a).length > arr.filter(a => !a).length; 
        }
    }

    add(x, y){
        let stuff = []
        stuff.push(x, y)
    }
}

module.exports = Exercises

