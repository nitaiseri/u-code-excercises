$(".item").click(function(){
    if ($(this).attr("data-instock") === "true"){
        $("#cart").append(`<div>${$(this).text()}</div>`);
    }
})