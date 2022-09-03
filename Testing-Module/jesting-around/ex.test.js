const Exercises = require('./ex')
const functions = new Exercises();


//Ex 1

// test("isEven should return true on the number 2", () =>{
//     expect(functions.isEven(2)).toBeTruthy();
// })

// test("isEven should return false on the number 3", () =>{
//     expect(functions.isEven(3)).toBeFalsy();
// })

// test("isEven should return true on the number 0", () =>{
//     expect(functions.isEven(0)).toBeTruthy();
// })



// // Ex 2:

// test("removeAtLeastOne should remove at least one of the elements", () => {
//     let arr =[1,2,3];
//     expect(arr.length).toBeGreaterThan(functions.removeAtLeastOne(arr).length)
// })

// test("removeAtLeastOne should remove the only element", () => {
//     let arr =[1];
//     expect(arr.length).toBeGreaterThan(functions.removeAtLeastOne(arr).length)
// })

// test("removeAtLeastOne should remove nothing from 0 elements array", () => {
//     let arr =[];
//     expect(arr.length).toEqual(functions.removeAtLeastOne(arr).length)
// })

// // Ex 3:

// test(`should return a clean string without these symbols: "!", "#", ".", ",", "'" - regular case`, () => {
//     let text = "a.b,c'd!e#"
//     expect(functions.simplify(text)).toStrictEqual("abcde")
// })

// test(`should return a clean string without these symbols: "!", "#", ".", ",", "'" - no special case`, () => {
//     let text = "abcde"
//     expect(functions.simplify(text)).toStrictEqual("abcde")
// })

// test(`should return a clean string without these symbols: "!", "#", ".", ",", "'" - "" case`, () => {
//     let text = ""
//     expect(functions.simplify(text)).toStrictEqual("")
// })

// test(`should return a clean string without these symbols: "!", "#", ".", ",", "'" - "." case`, () => {
//     expect(functions.simplify(".")).toStrictEqual("")
// })

// // Ex 4:

// test("validate that have at least one boolean", () => {
//     expect(functions.validate([])).toEqual({error: "Need at least one boolean"})
// })

// test("validate that return true when more true's", () => {
//     expect(functions.validate([true, true, false])).toBeTruthy();
// })

// test("validate that return false when equals", () => {
//     expect(functions.validate([true, false])).toBeFalsy();
// })

// test("validate that return true when more true's", () => {
//     expect(functions.validate([false, true, false])).toBeFalsy();
// })


// Extention:

test("Check whether Push function used in the function or not", () => {
    const pushSpy = jest.spyOn(functions, 'add');
    functions.add(1,2);

    expect(pushSpy).toHaveBeenCalled();


    expect(pushSpy.mock.calls.length).toBe(1);
})
