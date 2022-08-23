
const addHuman = function(name) {
    $("ul").append(`<li class=human>${name}</div>`);
  };
  
  $("button").on("click", function() {
    addHuman($("#my-input").val());
    $("#my-input").val("");
  });
  

