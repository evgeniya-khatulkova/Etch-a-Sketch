
const container = document.querySelector('#window');
const content = document.createElement('div');
let reset = document.getElementById('reset');
let gridSize = document.getElementById('size');
let discoButton = document.getElementById('disco');



reset.addEventListener('click', newStart);
gridSize.addEventListener('click', createGrid);
discoButton.addEventListener('click',discoColor);

//creates a simple grid 16x16 in a given div

startGrid();

function createGrid(e) {
    if (e.target.id = 'size') {
    let choice = prompt('Enter your sketch size (from 1 to 99)');
    if (choice <= 0 || choice > 99){
        alert("please choose number from 1 to 99");
        return;
    }
    else if (isNaN(choice) == true) {
        alert("Only number imput is valid!");
        return;
    }
    var smallThings = document.querySelectorAll('.active');
    for (var i =0; i < smallThings.length; i++) {
        container.removeChild(smallThings[i]);
    }
    let side = 480 / choice - 2; 
    let amount = choice * choice; 
    content.style.width = `${side}px`;
    content.style.height = `${side}px`;
    content.classList.add('active');
    content.style.background = 'white';

    for (var i =0; i < amount; i++) {
        container.appendChild(content.cloneNode());
    }
}
}


function startGrid() {

    var side = 28;
    var amount = 256;

    content.style.width = `${side}px`;
    content.style.height = `${side}px`;
    content.classList.add('active');

    var smallThings = document.querySelectorAll('.active');
    for (var i =0; i < amount; i++) {
        container.appendChild(content.cloneNode());
    }
}

// paints in one color
container.addEventListener('mouseover', (event) => {
    event.target.style.background = "pink";
} ); 

//function for reset
function newStart(e) {
    if (e.target.id = 'reset') {
        var smallThings = document.querySelectorAll('.active');
        for(var i = 0; i < smallThings.length; i++) {
            smallThings[i].style.background = 'white';
  }
 }
}

//function for colorful drawing 
function discoColor(e) {
    if (e.target.id = 'disco') {
        // const randomColor = Math.floor(Math.random()*16777215).toString(16);
        container.addEventListener('mouseover', (event) => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.background = "#" + randomColor;
    })}}