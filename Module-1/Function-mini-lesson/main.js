people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); 
    capitalizedStr += str.slice(1) 
    return capitalizedStr
  }

const getAge = function(age){
    if (age < 21){
        return "Underage"
    }else if (age > 55){
        return "55+"
    }else{
        return age + " years old"
    }
}

const getJob = function(jobStr){
    let jobDescription = "";
    for (let word of jobStr.split(" ")){
        jobDescription += capitalize(word) + " "
    }
    return jobDescription
}

const getCity = function(city, country){
    return capitalize(city) + ", " + capitalize(country)
}

const getCatchPhrase = function(phrase){
    return '"' + capitalize(phrase[0]) + phrase.slice(1)
}

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += ` is ${getJob(person.age)} ` //call function for profession
    summary += getCity(person.city, person.country)
    summary += getCatchPhrase(person.phrase)
 }

for (person of people_info){
    console.log(getSummary(person))
}

