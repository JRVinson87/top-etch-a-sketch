function createEtchWindow() {
    const container = document.querySelector("#etch-container");

    // set up a 16 by 16 etch window
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add('etch-block');
            container.appendChild(div);
        }
    }
}

function addBlockListener() {
    
}

createEtchWindow();