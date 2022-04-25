function createEtchWindow() {
    const container = document.querySelector("#etch-container");

    // set up a 16 by 16 etch window
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add('etch-block');
            div.setAttribute('draggable', 'false');
            container.appendChild(div);
        }
    }
}

function colorBlock(e) {
    e.target.style = 'background-color: black';
}

function sketchListener() {
    const block = document.querySelectorAll("div.etch-block");
    
    if (!inkActive) {
        block.forEach(div => {
            div.addEventListener('mouseenter', colorBlock);
        })
        inkActive = true;
    } else { 
        block.forEach(div => {
            div.removeEventListener('mouseenter', colorBlock); 
    })
        inkActive = false;
    }
}

const container = document.querySelector("#etch-container");
let inkActive = false;

createEtchWindow();


container.addEventListener('click', sketchListener);