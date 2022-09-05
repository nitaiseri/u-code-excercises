// Ex 1:
// type Type = string | string[] | number | number[];

// function getNumber(num: string | number): number{
//     if (typeof num === 'number'){
//         return num;
//     }else if (!isNaN(parseInt(num))){
//         return Number(num);
//     }
//     return 0;
// }

// function sum<Type>(arg: Type): number{
//     let sum: number = 0;
//     if ((typeof arg === 'number') || (typeof arg === 'string')){
//         return getNumber(arg);
//     }else if (Array.isArray(arg)){
//         arg.forEach(num => sum += getNumber(num));
//     }
//     return sum;
// }

// console.log(sum("23"));
// console.log(sum("Tomer"));
// console.log(sum(44));
// console.log(sum(["test", 22, 55, "block", "9"]));
// console.log(sum([23, 433, 11]));


// Ex 2:

class Gen<Type>{
    arr: Type[];

    constructor(arr: Type[]){
        this.arr = arr;
    }

    addNumber(num: Type): void{
        this.arr.push(num);
    }

    getNumber(num: string | number): number{
        if (typeof num === 'number'){
            return num;
        }else if (!isNaN(parseInt(num))){
            return Number(num);
        }
        return 0;
    }
    
    sum(): number{
        let sum: number = 0;
        this.arr.forEach(num => {
            if (typeof num === 'string' || typeof num === 'number') {
                sum += this.getNumber(num)
            }
        });
        return sum;
    }
    
}

const numbers1: Gen<string> = new Gen<string>(["test", "22"]);
numbers1.addNumber("55");
numbers1.addNumber("block");
numbers1.addNumber("9");

const numbers2: Gen<number> = new Gen<number>([23]);
numbers2.addNumber(433);
numbers2.addNumber(11);

console.log(`1: ${numbers1.sum()}`);
console.log(`2: ${numbers2.sum()}`);
