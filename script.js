const colorInputEl = document.getElementById('colorInput');
const changeButtonEl = document.getElementById('changeButton');
const chosenColorTextEl = document.getElementById('chosenColorText');

changeButtonEl.addEventListener('click', changeColor);

colorInputEl.value = '';

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
