// Ex 1:

import validator from 'validator';

console.log(validator.isEmail('shoobert@dylan')); 

console.log(validator.isMobilePhone("786-329-9958", 'en-US')); 

let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text, blacklist)); 


// Ex 2:

import { faker } from '@faker-js/faker';


function makeSingleHuman(){
  return {
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    company: faker.company.companyName(),
  };
}


function makeHuman(num) {
    const humans = [];
    for (let i = 0; i < num; i++){
        humans.push(makeSingleHuman())
    }
    return humans;
}

let users = makeHuman(10);

// Ex 3:




