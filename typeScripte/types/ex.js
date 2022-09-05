"use strict";
// Ex 1:
function sum(array) {
    return array.reduce((a, b) => a + b);
}
function isEven(num) {
    return num % 2 === 0;
}
function checks(times) {
    let array = new Array(10).fill(0);
    let sumArr;
    for (let i = 0; i < times; i++) {
        array = array.map(x => Math.floor(Math.random() * 100));
        console.log(array);
        sumArr = sum(array);
        console.log(sumArr);
        console.log(isEven(sumArr));
    }
}
// checks(3);
// Ex2 :
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        return sum(this.grades) / (this.grades.length);
    }
}
let std1 = new Student("Moshe", 28, [21, 34, 56, 78]);
let std2 = new Student("David", 72, [26, 38, 36, 98]);
let std3 = new Student("Hermaioni", 25, [100, 99, 101, 100]);
let students = [std1, std2, std3];
for (const std of students) {
    console.log(`${std.name} : Average is ${std.getGradeAvg()}`);
}
