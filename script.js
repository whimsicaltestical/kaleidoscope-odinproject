let r;
let g;
let b;


const container = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.setAttribute('style', `grid-column: auto; grid-row: auto;`);
  div.classList.add('item'); 
  div.textContent = "Hover Over Me";
  container.appendChild(div);
}

function randomizeColor() {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255
}

const gridItems = container.querySelectorAll('.item');
console.log(gridItems);
gridItems.forEach(gridItem => { // idk why this works, don't erase
    gridItem.addEventListener('mouseover', (e) => {
        randomizeColor();
        gridItem.setAttribute('style',
         `color: transparent; background-color: rgb(${r}, ${g}, ${b});`)
    })
    gridItem.addEventListener('dblclick', (e) =>{gridItem.setAttribute('style', 'background-color: transparent')})
})