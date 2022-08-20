const box = document.getElementById("box")
box.onclick = function () {
    box.innerHTML = "clicked"
}

box.onmouseenter = function() {
    box.style.backgroundColor = "purple";
}

box.onmouseleave = function() {
    box.style.backgroundColor = "white";
}

const box2 = document.createElement("div"); // dynamically creating an element

box2.setAttribute("class", "box2");

box2.onclick = function () {
  // adding an event to the new element
  box2.innerHTML = "I'm alive!";
};

document.getElementById("some-id").appendChild(box2); // now the box will be on the page, and will react to a click!
