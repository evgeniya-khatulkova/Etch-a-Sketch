// const container = document.querySelector('#window');

// const content = document.createElement('div');
// const newContent = document.createElement('div');

// // content.classList.add('content');

// container.appendChild(content);
// container.appendChild(newContent);


//creates a simple grid 16x16 in a given div

function createGrid() {
    const container = document.querySelector('#window');
    const content = document.createElement('div');

    content.style.width = '28px';
    content.style.height = '28px';

    for (var i =0; i < 256; i++) {
        container.appendChild(content.cloneNode());
    }
}

createGrid();
