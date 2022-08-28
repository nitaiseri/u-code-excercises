// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })

// $.get("https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })

function fetch(){
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}