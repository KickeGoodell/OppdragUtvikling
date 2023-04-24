const colorInputEl = document.getElementById('colorInput');
const changeButtonEl = document.getElementById('changeButton');
const chosenColorTextEl = document.getElementById('chosenColorText');
const selectMenuEl = document.getElementById('selectMenu');
var htmlInputEl = document.getElementById('htmlInput');
const choosePositionButtonEl = document.getElementById('choosePositionButton');
const submitButtonEl = document.getElementById('submitButton');

changeButtonEl.addEventListener('click', changeColor);
choosePositionButtonEl.addEventListener('click', choosePosition);
submitButtonEl.addEventListener('click', sumbitChanges);

function changeColor(e){
    if (colorInputEl.value === ''){
        alert("Please select a color");
        chosenColorTextEl.innerHTML = "You have not chosen a color";
    } 

    else if (!CSS.supports(`background-color: ${colorInputEl.value.toLowerCase()}`)){
        chosenColorTextEl.innerHTML = "You have not chosen a valid color";
    } 

    else{
        document.body.style.backgroundColor = colorInputEl.value;
        chosenColorTextEl.innerHTML = "You have chosen the color: " + colorInputEl.value;
    }
}   

var cordinates = [];
function choosePosition(e){
    cordinates = [];
    document.getElementById('choosePositionText').innerHTML = "Now click anywhere on the screen to choose a postion";
    var pressed = true;
    document.addEventListener('click', function placeElement(e){
        if (pressed){
            pressed = false;
        }
        else{
        cordinates.push(e.pageX, e.pageY);
        document.removeEventListener('click', placeElement);
        document.getElementById('choosePositionText').innerHTML = "";
        }
    })
}

function sumbitChanges(e){
    const newElement = document.createElement(selectMenuEl.value);
    newElement.innerHTML = htmlInputEl.value;
    newElement.style.position = "absolute";
    newElement.style.left = cordinates[0] + "px";
    newElement.style.top = cordinates[1] + "px";
    document.body.appendChild(newElement);
}