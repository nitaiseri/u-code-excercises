$("body").append('<div class="box" id="box1"></div>');
$("body").append('<div class="box" id="box2"></div>');
$(".box").css("border-radius", "10px")
$(".box").css("box-shadow", "2px 2px 5px")
$("#box1").css("background-color", "red");



$("body").on("mouseover", ".box",
    function () {
      const hoverBoxColor =$(this).css("background-color");
      if ($(this).attr("id") === "box1") {
          $(this).css("background-color", $("#box2").css("background-color"));
          $("#box2").css("background-color", hoverBoxColor);
      }else if ($(this).attr("id") === "box2"){
          $(this).css("background-color", $("#box1").css("background-color"));
          $("#box1").css("background-color", hoverBoxColor);
      }
    }
  );

// $(".box").hover(
//   function () {
//     const hoverBoxColor =$(this).css("background-color");
//     if ($(this).attr("id") === "box1") {
//         $(this).css("background-color", $("#box2").css("background-color"));
//         $("#box2").css("background-color", hoverBoxColor);
//     }else if ($(this).attr("id") === "box2"){
//         $(this).css("background-color", $("#box1").css("background-color"));
//         $("#box1").css("background-color", hoverBoxColor);
//     }
//   }
// );
