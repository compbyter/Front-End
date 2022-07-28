
let addToDoButton = document.getElementById("addToDo");
let inputText = document.getElementById("inputText");
let toDoContainer = document.getElementById("toDoContainer");
let clearButton = document.getElementById("clearToDo")

addToDoButton.addEventListener("click", function() {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paraGraph");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    });
    
    clearButton.addEventListener("click", function() {
        paragraph.remove();
});

});