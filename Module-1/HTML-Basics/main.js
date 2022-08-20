const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4,
    funcEx: function(){
                console.log(this.lion)
    }
  }
animalCounts.funcEx();
  
  //Suddenly the zoo acquired two dozen eagles
  
//or
for (key in animalCounts) {
    console.log(typeof key);
    console.log(key);
    console.log(animalCounts[key]);
    //-> "string"
}  

// Ex 15.1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for (let index in names){
    people.push({name: names[index], age: ages[index]})
}
console.log(people)



const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
  if (reservations[name] == null){
    console.log("You have no reservation")
    reservations[name] = {claimed: true}
  }
  else if (reservations[name].claimed === false){
    console.log("Welcome, " + name)
  }
  else{
    console.log("Hmm, someone already claimed this reservation")
  }
  console.log(reservations[name])
