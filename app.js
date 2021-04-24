var elements = [];
var input = document.querySelector("input");
var tf = ""
var items = ""
window.onload = function () {
    if (JSON.parse(localStorage.getItem("element")) != null) {
        elements = JSON.parse(localStorage.getItem("element"));
        console.log(elements);
        display();
    }
};
function display() {
    document.querySelector('.list').innerHTML = "";
    for (var i = elements.length - 1; i >= 0; i--) {
        document.querySelector(".list").innerHTML +=
            "<center><div class='element'>" + elements[i] + "<input type = checkbox>" + "<br>"+"<img class='dustbin' src = 'delete.png' onclick='del(" + i + ")'></div></center><br>";
    }
}

function addElement() {
    var items = document.getElementById("input").value;
    tf = elements.includes(items);
    console.log(tf)
    if (tf == true) {
       alert("You already have the same task!!");
       document.getElementById("input").value = "";
    } 
    else {
        if (input.value.trim() != "") {
            elements.push(input.value.trim());
            localStorage.setItem('element', JSON.stringify(elements))
            document.getElementById("input").value = "";
            display();
        }
    }
}
function clearall(){
    elements = []
    localStorage.clear();
    display();
}
function del(i) {
    elements.splice(i, 1);
    localStorage.setItem("element", JSON.stringify(elements));
    display();
}