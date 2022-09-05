async function jeneratePersons(num){
    people = [];
    for (let index = 0 ; index < num; index++){
        await $.get("https://randomuser.me/api/", function(result){
            let name = result.results[0].name
            console.log(name)
            people.push({name: `${name.title} ${name.first} ${name.last}`,
                        email: result.results[0].email,
                        id: result.results[0].id.value
            })
        })
    }
    console.log(people)
    return people;
}


async function main(){
    let people = {people: await jeneratePersons(15)};
    const source = $('#person-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template(people);

    // append our new html to the page
    $('#container').append(newHTML);
}

main();