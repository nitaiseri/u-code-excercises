// Ex 1:

function sum(array: number[]): number{
    return array.reduce((a, b) => a + b);
}

function isEven(num: number): boolean{
    return num%2 === 0;
}

function checks(times: number): void{
    let array: number[] = new Array(10).fill(0);
    let sumArr: number;
    for (let i = 0; i < times; i++){
        array = array.map(x => Math.floor(Math.random() * 100))
        console.log(array);
        sumArr = sum(array);
        console.log(sumArr);
        console.log(isEven(sumArr));
    }
}

// checks(3);

// Ex2 :

class Student{
    name: string;
    age: number;
    grades: number[];

    constructor(name: string, age: number, grades: number[]){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(grade: number){
        this.grades.push(grade);
    }

    getGradeAvg(): number{
        return sum(this.grades)/(this.grades.length)
    }
}

let std1: Student = new Student("Moshe", 28, [21, 34, 56, 78]);
let std2: Student = new Student("David", 72, [26, 38, 36, 98]);
let std3: Student = new Student("Hermaioni", 25, [100, 99, 101, 100]);
let students: Student[] = [std1, std2, std3];
for(const std of students){
    console.log(`${std.name} : Average is ${std.getGradeAvg()}`)
}
