
const container = document.querySelector('#window');
const content = document.createElement('div');
let reset = document.getElementById('reset');

reset.addEventListener('click', newStart);

//creates a simple grid 16x16 in a given div

function createGrid() {
   
    content.style.width = '28px';
    content.style.height = '28px';
    content.classList.add('active');

    for (var i =0; i < 256; i++) {
        container.appendChild(content.cloneNode());
    }
}

createGrid();

const smallThings = document.querySelectorAll('.active');

container.addEventListener('mouseover', (event) => {
    event.target.style.background = "pink";
} ); 

function newStart(e) {
    if (e.target.id = 'reset') {
        for(var i = 0; i < smallThings.length; i++) {
            smallThings[i].style.background = 'white';
  }
 }
}
