const buttom = document.getElementById("submit");
let errorFlag = false;

buttom.onclick = function () {
  errorFlag = false;
  checkPhone();
  checkBirthday();
  checkSalary();
  checkName();
  if (!errorFlag) {
    validInput();
  }
};

function checkName() {
  const name = document.getElementById("name").value;
  if (name.length <= 2) {
    notValidMessage("Name must be longer than 2 characters!");
    errorFlag = true;
  }
}
function checkSalary() {
  const salary = document.getElementById("desired-salary").value;
  if (salary < 10000 || salary > 16000) {
    notValidMessage("Salary must be greater than 10,000 but less than 16,000!");
    errorFlag = true;
  }
}
function checkBirthday() {
  const birthday = document.getElementById("birthday").value;
  if (birthday.length === 0) {
    notValidMessage("Birthday may not be null!");
    errorFlag = true;
  }
}
function checkPhone() {
  const number = document.getElementById("phone").value;
  if (number.length != 10) {
    notValidMessage("Phone must be 10 digits long!");
    errorFlag = true;
  }
}

function notValidMessage(message) {
  let errorMessage = document.getElementById("error");
  if (errorMessage === null) {
    errorMessage = document.createElement("p");
    errorMessage.setAttribute("id", "error");
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "13px";
    errorMessage.innerHTML = message;
    document.getElementById("container").appendChild(errorMessage);
  } else {
    errorMessage.innerHTML = message;
  }
}

function validInput() {
  const container = document.getElementById("container");
  container.style.display = "none";

  const gif = document.createElement("img");
  gif.setAttribute("id", "gif");
  gif.setAttribute("class", "main");
  gif.setAttribute("src", "https://media4.giphy.com/media/l1J9urAfGd3grKV6E/giphy.gif?cid=ecf05e47bfjbr8kqe8wswqr2z7x1uj2r1kds42djgzhh2az1&rid=giphy.gif&ct=g");
  document.body.appendChild(gif);
}

// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true },
// };

// // const personName = prompt("Please enter the name for your reservation");

// const personName = document.getElementById("name");

// personName.addEventListener("keydown", function (e) {
//   if (e.code === "Enter") {
//     //checks whether the pressed key is "Enter"
//     checkReservation();
//   }
// });

// function checkReservation() {
//   if (reservations[personName.value] == null) {
//     console.log("You have no reservation");
//     reservations[personName.value] = { claimed: true };
//   } else if (reservations[personName.value].claimed === false) {
//     console.log("Welcome, " + personName.value);
//   } else {
//     console.log("Hmm, someone already claimed this reservation");
//   }
//   console.log(reservations[personName.value]);
// }
