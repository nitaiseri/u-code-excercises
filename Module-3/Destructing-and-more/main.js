// let meatArrReg = ["beef","chicken","rabbit"]
// let vegetableArrReg = ["carrots","potatoes","lettuce"]
// let meatArr = ["beef","chicken"]
// let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]
// let fixedMeatArr, fixedVegetableArr = (...(meatArr + vegetableArr));

var firstPiece = { id: 101, name: 'Ofri' }

var seoncdPiece = { country: 'Israel'}

let allPieces = {...firstPiece, ...seoncdPiece};


let employeesArr = [
    { name : "Joey" , id: 1 , age: 26},
    { name : "Lily" , id: null , age: 24},
    { name : "Alice" , id: 7 , age: null},
    { name : "Sam" , id: 8 , age: 24},
    { name : "Ray" , id: null , age: null}
    ]

    
for (let employee of employeesArr){
    console.log((employee.id && employee.age)?? employee.name)
}