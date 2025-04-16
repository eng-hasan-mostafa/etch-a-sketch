
function generateSketchpad(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = '';
    let totalSize = size * size;
    while(--totalSize) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        sketchpad.appendChild(cell);
    } 
}

generateSketchpad(16);