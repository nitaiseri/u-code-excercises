// excercise 9

let boughtTesla = false;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = false;
let currentYear = 2018;

if (!boughtTesla) {
  console.log("Would you like to buy a Tesla?");
} else if (!isUSCitizen) {
  console.log("Would you like to move to the US?");
} else {
  let yearPurchaseTesla = prompt("How long ago did you bougth the Tesla?");
  if (currentYear - yearPurchaseTesla >= 4) {
    console.log("Would you like to upgrade?");
  } else {
    console.log("Are you satisfied with the car??");
  }
}

// Excercise 13.1
const p1 = {
  name: "a",
  age: 11,
  city: "A",
};
const p2 = {
  name: "b",
  age: 11,
  city: "A",
};

if (p1.age === p2.age && p1.city === p2.city) {
  console.log("Jill wanted to date Robert");
} else if (p1.city !== p2.city) {
  console.log("Jill wanted to date Robert, but couldn't");
}

// Excercise 13.2

// const book {

// }
// const library = {
//     books: [""]
//   }

// Ex13.3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const name = prompt("Please enter the name for your reservation");
if (reservations[name] == null) {
  console.log("You have no reservation");
} else if (reservations[name].claimed === false) {
  console.log("Welcome, " + name);
} else {
  console.log("Hmm, someone already claimed this reservation");
}
