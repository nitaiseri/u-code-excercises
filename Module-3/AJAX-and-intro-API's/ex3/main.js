
function fetch(queryType, queryValue){
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach(function(element) {
                console.log("Title: " + element.volumeInfo.title)
                console.log("Authors:");
                if (element.volumeInfo.industryIdentifiers != undefined){

                    for (let author of element.volumeInfo.authors){
                        console.log(author);
                    }
                }else{
                    console.log("no authors data")
                }
                console.log("ISBN:");
                if (element.volumeInfo.industryIdentifiers != undefined){
                    for (let isbn of element.volumeInfo.industryIdentifiers){
                        console.log(isbn.identifier);
                    }
                }else{
                    console.log("no ISBN data")
                }

            });
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    }); 
}
fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")