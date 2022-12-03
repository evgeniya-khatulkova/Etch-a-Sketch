
const container = document.querySelector('#window');
const content = document.createElement('div');
let reset = document.getElementById('reset');
let gridSize = document.getElementById('size');
let discoButton = document.getElementById('disco');
let blackButton = document.getElementById('black');
let pinkButton = document.getElementById('pink');
let eraseButton = document.getElementById('erase');



reset.addEventListener('click', newStart);
gridSize.addEventListener('click', createGrid);
discoButton.addEventListener('click',discoColor);
blackButton.addEventListener('click', blackColor);
pinkButton.addEventListener('click', pinkColor);
eraseButton.addEventListener('click', eraseColor);

//creates a simple grid 16x16 in a given div

startGrid();

function createGrid(e) {
    if (e.target.id = 'size') {
    let choice = prompt('Enter your sketch size (from 1 to 100)');
    if (choice <= 0 || choice > 100){
        alert("please choose number from 1 to 100");
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

// grid we see when page is downloaded 
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
    event.target.style.background = "black";
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

//function for drowing with black color
function blackColor(e){
    if (e.target.id = 'black') {
        container.addEventListener('mouseover', (event) => {
            event.target.style.background = "black";
        })}}


//function for colorful drawing 
function discoColor(e) {
    if (e.target.id = 'disco') {
        container.addEventListener('mouseover', (event) => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.background = "#" + randomColor;
    })}}


//function for drowing with pink color
    function pinkColor(e){
      if (e.target.id = 'pink') {
            container.addEventListener('mouseover', (event) => {
                event.target.style.background = "pink";
            })}}

    //function to erase previous drawings
 function eraseColor(e){
     if (e.target.id = 'erase') {
     container.addEventListener('mouseover', (event) => {
        event.target.style.background = "white";
   })}}
        