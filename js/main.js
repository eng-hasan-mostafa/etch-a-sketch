
function generateRandomColor() {
    //generate random number between 0 and 255
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

function randomizeSquareColor(target) {
    let randomColor = generateRandomColor();
    target.style.backgroundColor = randomColor;
    target.style.borderColor = randomColor;
}

function increaseSquareDarkens(target) {
    let currentOpacity = target.style.opacity;
    if(currentOpacity === 0) {
        target.style.opacity = 0.1;
    } else {
        currentOpacity = Number(currentOpacity) +  0.1
        target.style.opacity = currentOpacity;
    }
}

function generateSketchpad(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = '';
    let totalSize = size * size;
    let cellSize = 960/size;
    while(totalSize--){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        sketchpad.appendChild(cell);
    } 
    //utilize event delegation to avoid performance issues. 
    sketchpad.addEventListener('mouseover', (e)=>{
        let target = e.target.closest('.cell');
        randomizeSquareColor(target);
        increaseSquareDarkens(target);
    });
}

generateSketchpad(16);

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', ()=>{
    let userInput = prompt('the number of squares per side for the new grid:');
    if(userInput > 100) {
        alert('the number should be less than or equal to 100!');
    } else {
        generateSketchpad(userInput);
    }
})
