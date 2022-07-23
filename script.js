let r;
let g;
let b;
let gridArea;
const container = document.querySelector('#container');
const button = document.querySelector('button');

function randomizeColor() {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
}

button.addEventListener('click', (e) => {  // look into getting grid content to only fit size of container
    gridArea = window.prompt("Enter the number of rows and columns you wish for the grid, less than or equal to 100", "16")
    while (gridArea > 100) {
        gridArea = window.prompt("Please enter a number less than or equal to 100", "100");
    }
    container.setAttribute('style', `grid-template-columns: repeat(${gridArea}, 1fr); grid-template-rows: repeat(${gridArea}, 1fr);`)
    for (let i = 0; i < (gridArea * gridArea); i++) {
        const div = document.createElement('div');
        div.setAttribute('style', `grid-column: auto; grid-row: auto;`);
        div.classList.add('item'); 
        div.textContent = "Hover Over Me";
        container.appendChild(div);
    }
    const gridItems = container.querySelectorAll('.item');
    gridItems.forEach(gridItem => { // idk why this works, don't erase
        gridItem.setAttribute('style', 'background-color: transparent;')
        gridItem.addEventListener('mouseover', (e) => {
            randomizeColor();
            gridItem.setAttribute('style',
             `color: transparent; background-color: rgb(${r}, ${g}, ${b});`);
        });
        gridItem.addEventListener('dblclick', (e) =>{gridItem.setAttribute('style', 'background-color: transparent')});
    })
})

//for (let i = 0; i < 256; i++) {
  //const div = document.createElement('div');
 // div.setAttribute('style', `grid-column: auto; grid-row: auto;`);
  //div.classList.add('item'); 
  //div.textContent = "Hover Over Me";
  //container.appendChild(div);
//}


