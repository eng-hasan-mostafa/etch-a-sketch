
function generateSketchpad(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = '';
    let totalSize = size * size;
    while(--totalSize) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        sketchpad.appendChild(cell);
    } 
    //utilize event delegation to avoid performance issues. 
    sketchpad.addEventListener('mouseover', (e)=>{
        e.target.closest('.cell').classList.add('colored');
    });
}

generateSketchpad(16);

