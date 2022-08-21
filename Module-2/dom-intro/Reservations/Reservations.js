const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

// const personName = prompt("Please enter the name for your reservation");

const personName = document.getElementById("name");

personName.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    checkReservation();
  }
});

function checkReservation() {
  if (reservations[personName.value] == null) {
    console.log("You have no reservation");
    reservations[personName.value] = { claimed: true };
  } else if (reservations[personName.value].claimed === false) {
    console.log("Welcome, " + personName.value);
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
  console.log(reservations[personName.value]);
}
