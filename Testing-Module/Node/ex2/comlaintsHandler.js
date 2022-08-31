const topics = require('./consts');
function handleComplaint(complaint){
    if (complaint.type === topics.global.FINANCE){
        console.log("Money doesn’t grow on trees, you know.")
    }else if (complaint.type === topics.global.WEATHER){
        console.log("It is the way of nature. Not much to be done")
    }else if (complaint.type === topics.global.EMOTIONS){
        console.log("It’ll pass, as all things do, with time")
    }
}

let complaint1 = {
    text: "I'm not getting enough money",
    type: topics.global.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: topics.global.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: topics.global.EMOTIONS
}

handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."