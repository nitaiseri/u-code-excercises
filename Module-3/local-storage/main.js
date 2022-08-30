let wisdom = [];


function pushToLocal(name, array){
    let arr = [];
    if (localStorage[name] !== undefined){
        arr = JSON.parse(localStorage[name]);
    } else {
        arr = [];
    }
    arr.concat(array);
    localStorage.wisdom = JSON.stringify(arr);
}

$("#btn").on('click', function(){
    let text = $("input").val();
    if (!text) return;

    $("#text").text(text);
    $("input").val("");
    wisdom.push({text});
    if (wisdom.length % 2 === 0){
        pushToLocal("wisdom", wisdom);
    }
})



function render () {
    let allText = '';
    for (const text of JSON.parse(localStorage.wisdom)){
        allText += text.text + "\n";
    }
    $("#text").text(allText);
}

render();

