function createEtchWindow(blocks) {

    container.style['grid-template-columns'] = `repeat(${blocks}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${blocks}, 1fr)`;

    for (let i = 0; i < Math.pow(blocks, 2); i++) {
        const div = document.createElement("div");
        div.classList.add('etch-block');
        div.setAttribute('draggable', 'false');
        container.appendChild(div);
    }
}

function colorBlock(e) {
    e.target.style = 'background-color: black';
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

const container = document.querySelector("#etch-container");
let inkActive = false;

createEtchWindow(10);


container.addEventListener('click', sketchListener);