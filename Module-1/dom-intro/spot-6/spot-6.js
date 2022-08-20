function addNewItem(){
    const list = document.getElementById("list")
    const newItem = document.createElement("li");
    newItem.innerHTML = "A New Item!";
    newItem.setAttribute("class", "new-item");
    list.appendChild(newItem);
}