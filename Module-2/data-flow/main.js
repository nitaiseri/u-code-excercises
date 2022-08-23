const posts = [{
  name: "Adam",
  text: "Welcome to hell!"
},{
  name: "Eve",
  text: " Don't worry, we won't hurt you.."
},{
  name: "Cain",
  text: "Time to die"
}]

$("#post").click(function(){
  posts.push({name: $("#name").val(), text: $("#wish").val()});
  $("#name").val("");
  $("#wish").val("");
  $("#posts").empty("div");
  render();
})

function render() {
  for (const post of posts){
    $("#posts").append(`<div class="post">${post.name.bold()}: ${post.text}`);
  }
}

render()