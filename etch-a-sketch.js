function createEtchWindow() {
    delOldGrid();

    container.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        const div = document.createElement("div");
        div.classList.add('etch-block');
        div.setAttribute('draggable', 'false');
        container.appendChild(div);
    }
}

function delOldGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function rgbToggle() {
    if (!rgbActive) {
        rgbActive = true;
        rgbToggleBtn.textContent = "Change Color to: Black";
    } else {
        rgbActive = false;
        rgbToggleBtn.textContent = "Change Color to: CHAOS RGB";
    }
}

function colorBlock(e) {
    if(rgbActive === true) {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
  
        e.target.style = "background-color: rgb(" + x + "," + y + "," + z + ")";

    } else {
        e.target.style = 'background-color: black';
    }
}

function sketchListener() {
    const block = document.querySelectorAll("div.etch-block");
    
    if (!inkActive) {
        block.forEach(div => {
            div.addEventListener('mouseover', colorBlock);
        })
        inkActive = true;
    } else { 
        block.forEach(div => {
            div.removeEventListener('mouseover', colorBlock); 
    })
        inkActive = false;
    }
}

const container = document.getElementById('etch-container');
const newGridBtn = document.getElementById('btn-new-grid');
const rgbToggleBtn = document.getElementById('btn-rgb-toggle');

let inkActive = false;
let rgbActive = false;
let slider = document.getElementById('grid-slider');
let sliderText = document.getElementById('slider-label');
let gridSize = 16;

sliderText.textContent = slider.value;

slider.oninput = function() {
    sliderText.textContent = this.value;
    gridSize = this.value;  
}

createEtchWindow();

newGridBtn.addEventListener('click', createEtchWindow);
rgbToggleBtn.addEventListener('click', rgbToggle);

container.addEventListener('click', sketchListener);