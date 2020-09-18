let container = document.querySelector('.container');
const MAX_HEIGHT = 560;
const MAX_WIDTH = 640;
let isBlack = true;
console.log(container);

function createGrid(blocksWidth = 16, blocksHeight = 16) {
    for(let i = 0; i < blocksHeight; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add('gridRow');
        for (let j = 0; j < blocksWidth; j++) {
            let divItem = document.createElement("div");
            divItem.classList.add('gridBlock');
            divItem.style.width = `${MAX_WIDTH / blocksWidth}px`;
            divItem.style.height = `${MAX_HEIGHT / blocksHeight}px`;
            divItem.addEventListener("mouseover", function(e) {
                e.target.style.backgroundColor = isBlack ? 'black' : randomColor();
            });
            gridRow.appendChild(divItem);
        }
        container.appendChild(gridRow);
    }
}

createGrid(16, 16);

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return `rgb(${x}, ${y}, ${z})`;
}

function reset(side) {
    container.innerHTML = "";
    createGrid(side, side);
}

document.querySelector('#reset').addEventListener("click", function(e) {
    let n = prompt("Enter the number of blocks you want per side: ")
    reset(n);
});

document.querySelector('#color').addEventListener("click", function(e) {
    isBlack = !isBlack;
    e.target.innerHTML = isBlack ? "Change to Rainbow" : "Change to Black";
});


