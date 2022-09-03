let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
p.then(function(word){
    return $.get(`/sentiment/${word}`)
})
.then(function(word){
    console.log(word)
})

//Spot Check 1

$.get('/randomWord')
    .then(function (word) {
        console.log(word)
    })

//Spot Check 2
$.get('/sentiment/Ploy')
    .then(function (response) {
        console.log(response)
    })


$.get('/randomWord')
.then(function (word) {
    return $.get(`/synonyms/${word}`)
})
.catch(function (error) { console.log(error) })
.then(function (synonyms) {
    console.log(synonyms)
})
.catch(function (error) { console.log(error) }) 