
$("#btn").click(function(){
    let xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${$("#input").val()}&api_key=eUbh1WIvO4Inn2bmlDvRkczs7Dos7MeD&limit=5`);
    xhr.done(function(data) { 
    $('#gif').attr('src', data.data[0].embed_url)
});})


