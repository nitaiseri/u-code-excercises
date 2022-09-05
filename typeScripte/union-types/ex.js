"use strict";
function concat(arg1, arg2) {
    if (Array.isArray(arg1)) {
        arg1 = arg1.reduce((a, b) => a + b);
    }
    else if (typeof (arg1) !== 'string') {
        console.log(`${typeof (arg1)} not supported as first argument`);
    }
    if ((arg2 === true) || (arg2 === 1)) {
        console.log(arg1);
    }
    else if ((arg2 !== 0)) {
        console.log(`Second argument should be boolean 1 or 0`);
    }
}
concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);
function print_numbers(phoneNumber) {
    if (typeof phoneNumber === 'string') {
        console.log('Phone string: ' + phoneNumber);
    }
    else if (typeof phoneNumber === 'number') {
        console.log('Phone number: ' + phoneNumber);
    }
    else if (Array.isArray(phoneNumber)) {
        if (typeof phoneNumber[0] === 'string') {
            console.log('Phone string array: ' + phoneNumber);
        }
        else if (typeof phoneNumber[0] === 'number') {
            console.log('Phone number array: ' + phoneNumber);
        }
    }
}
print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);
