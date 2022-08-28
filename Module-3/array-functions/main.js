let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]

let orange = vegetables.filter(v => v.color === "orange");
console.log(orange);


//////////////////////////////
function raise(person){
    if (person.goodPerformance){
        person.salary += 300;
    }
}

let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

people.forEach(raise);
console.log(people);

///////////////////////////////
let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"];
let newMessagesFromDad = messagesFromDad.map(mf => mf.toLowerCase());
console.log(newMessagesFromDad);
console.log(messagesFromDad);


///////////////////////////////

let users = [
    {
    "name": "Leanne Graham",
    "address": {
        "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
        "geo": { "lat": "-37.3159", "lng": "81.1496" }
    }
}, {
    "name": "Ervin Howell",
    "address": {
        "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
        "geo": { "lat": "-43.9509", "lng": "-34.4618" }
    }
}
]
console.log(users)

let newUsers = users.map(u => { return { name: u.name, city: u.address.city } })
console.log(newUsers)

///////////////////////////////

let posts = [
    {
        id: 0, text: "I'm not here",
        comments: [{ id: 0, text: "support that" }]
    },
    {
        id: 1, text: "Find me",
        comments: [
            { id: 0, text: "here I am" },
            { id: 1, text: "rock you like a hurricane" },
            { id: 2, text: "dum dum" }]
    },
    {
        id: 2, text: "Where's waldo anyway",
        comments: [
            { id: 0, text: "who's waldo" },
            { id: 1, text: "he's called Effi" }]
    },
    {
        id: 3, text: "Poof",
        comments: [{ id: 0, text: "like magic" }]
    }
]

const findById = id => posts.find(p => p.id === id)
console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}


function findCommentByID(postID, commentID){
    return posts.find(p => (p.id === postID)).comments.find(c=>c.id===commentID)
}

console.log(findCommentByID(1, 0));

//////////////////////////////
let movies = [
    { title: "Dareangel", studio: "Marvel", year: 2023 },
    { title: "Batterfly", studio: "Fox", year: 2021 },
    { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
    { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

if (movies.some(m => m.studio === "Marvel")){
    console.log("Let’s go watch some movies");
}else{
    console.log("Let’s stay home");
}

if (movies.every(m => m.year >= 2020)){
    console.log("Futuristic stuf");
}else{
    console.log("Yawn");
}



