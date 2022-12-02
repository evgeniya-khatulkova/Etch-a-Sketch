
const container = document.querySelector('#window');
const content = document.createElement('div');
let reset = document.getElementById('reset');
let gridSize = document.getElementById('size');
let discoButton = document.getElementById('disco');
let blackButton = document.getElementById('black');
let buttonShaddows = document.getElementById('shaddows'); 
const greyShades = ["F8F8F8", "D8D8D8", "C0C0C0", "A8A8A8", "909090", "787878", "606060", "505050", "404040", "282828", "000000"];



reset.addEventListener('click', newStart);
gridSize.addEventListener('click', createGrid);
discoButton.addEventListener('click',discoColor);
blackButton.addEventListener('click', blackColor);
buttonShaddows.addEventListener('click', greyColor);

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
//function to work with grey which preogressivly becomes black
function greyColor(e) {
    if (e.target.id = 'shaddows') {
        container.addEventListener('mouseover', (event) => {
            event.target.style.opacity =+ (0.2);
        })}}
        // for(let i = 0; i < greyShades.length; i++) { 
        // container.addEventListener('mouseover', (event) => {
        //     event.target.style.background = "#" + greyShades[i];
        // })}}}
