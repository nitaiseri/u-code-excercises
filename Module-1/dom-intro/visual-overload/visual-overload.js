
function createBox(id){
  const newBox = document.createElement("div");
  newBox.setAttribute("class", "box");
  newBox.setAttribute("id", id);
  newBox.onmouseenter = enterColor;
  // newBox.addEventListener("mouseover", enterColor, false);
  document.getElementById("container").appendChild(newBox);
}

function generateBoxes(num){
  for (let i = 0; i < num; i++){
    createBox(i);
  }
}

const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
  
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

const enterColor = function (e) {
  this.style.backgroundColor = getRandomColor();
}

generateBoxes(100);






