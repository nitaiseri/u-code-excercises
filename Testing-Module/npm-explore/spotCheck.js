const {request} = require('urllib');

async function run(){
    const { data, res } = await request('http://www.omdbapi.com/?apikey=4a3353b7&t=The Lion King');
    console.log(JSON.parse(data.toString()).Released)
}
run()