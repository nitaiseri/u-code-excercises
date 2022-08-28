
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=eUbh1WIvO4Inn2bmlDvRkczs7Dos7MeD&limit=5");
    xhr.done(function(data) { 
        // console.log("success got data", data.data[0]); 
        $('body').append(`<iframe src="${data.data[0].embed_url}" frameborder="0"></iframe>`)
    });