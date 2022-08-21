// const setCounter = function (num) {
//   let counter = 0

//   const count = function () {
//     counter += num;
//     console.log(counter)
//   }

//   return count
// }

// const increment = setCounter(2)
// increment()
// increment()


// spot check 1:

// const family = function(){
//   let members = [];
//   const birth = function (name){
//       members.push(name);
//       console.log(members);
//   }
//   return birth;
// }

// let giveBirth = family();
// giveBirth("Adam");
// giveBirth("Eve");
// giveBirth("Kein");
// giveBirth("Hevel");

// Modules:

// const mathOperations = function () {
//   const add = function (x, y) {
//       return x + y;
//   }

//   const subtract = function (x, y) {
//       return x - y;
//   }

//   const multiply = function (x, y) {
//       return x * y;
//   }

//   const divide = function (x, y) {
//       return x / y;
//   }

//   return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
//   }
// }

// const math = mathOperations();

// console.log(math.add(1,3))
// console.log(math.sub(1,3))
// console.log(math.mult(1,3))
// console.log(math.div(1,3))


// console.log(math.mult(7,math.div(36,6)))

// Module with closure:

const UsersModule = function () {
  const _users = ['Aaron', 'Avi'];

  const addUser = function (user) {
      _users.push(user)
  }

  const listUsers = function () {
      for (let user of _users) {
          console.log(user)
      }
  }

  return {
      addUser: addUser,
      listUsers: listUsers
  }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('Nit')
usersModule.listUsers()
console.log(usersModule.users)

