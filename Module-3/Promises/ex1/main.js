// Ex 1

// $.get('https://random-word-api.herokuapp.com/word') 
//     .then(function (word) {
//         $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//         .then(function(book){
//             console.log(book);
//         })
//     })



// Ex 2
$.get('https://random-word-api.herokuapp.com/word') 
    .then(function (word) {
        let bookList =  $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`);
        let gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=eUbh1WIvO4Inn2bmlDvRkczs7Dos7MeD&limit=5`)

        Promise.all([bookList, gif])
        .then(function (results) {
            $('body').append(`<h1>${results[0].items[0].volumeInfo.title}</h1>`)
            console.log(results[1])
            $('body').append(`<iframe src="${results[1].data[0].embed_url}" frameborder="0"></iframe>`)
        })
    })
