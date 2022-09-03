const moment = require('moment');

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017

const { request } = require('urllib');

async function run(){
    const { data, res } = await request('http://data.nba.net/10s/prod/v1/2016/players.json');
    console.log(JSON.parse(data.toString()))
}
run()