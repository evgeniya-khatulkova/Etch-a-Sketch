
const container = document.querySelector('#window');
const content = document.createElement('div');
let reset = document.getElementById('reset');
let gridSize = document.getElementById('size');



reset.addEventListener('click', newStart);
gridSize.addEventListener('click', createGrid);

//creates a simple grid 16x16 in a given div

startGrid();

//var smallThings = document.querySelectorAll('.active');

function createGrid(e) {
    if (e.target.id = 'size') {
    let choice = prompt('Enter your sketch size.');
    var smallThings = document.querySelectorAll('.active');
    for (var i =0; i < smallThings.length; i++) {
        container.removeChild(smallThings[i]);
    }
    let side = 480 / choice - 2; 
    let amount = choice * choice; 
    content.style.width = `${side}px`;
    content.style.height = `${side}px`;
    content.classList.add('active');

    for (var i =0; i < amount; i++) {
        container.appendChild(content.cloneNode());
    }
}
}

var remove = document.querySelectorAll('.active');
console.log(remove);

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
    event.target.style.background = "blue";
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