const container = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.setAttribute('style', `grid-column: auto; grid-row: auto;`); 
  div.textContent = "Hover Over Me";
  container.appendChild(div);
}
