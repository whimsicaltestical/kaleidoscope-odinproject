const container = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.setAttribute('style', `grid-column: auto; grid-row: auto;`);
  div.classList.add('item'); 
  div.textContent = "Hover Over Me";
  container.appendChild(div);
}

const gridItems = container.querySelectorAll('.item');
console.log(gridItems);
gridItems.forEach(gridItem => { // idk why this works, don't erase
    gridItem.addEventListener('mouseover', (e) => {
        console.log(e);
        gridItem.setAttribute('style', 'color: transparent;')
    })
})