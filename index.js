let gridSize = 16;

const randomColor = () => `background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

const changeOpacity = (e) => {
  // normal white to black
  // e.target.classList.add('writeOver');
  // each pass through is a different colour
  // e.target.style.cssText = randomColor();
  const a = getComputedStyle(e.target).backgroundColor.substring(14,17);
  
  if (a.charAt(0) === '0'){
    if(Number(a)) {
      e.target.style.cssText = `background-color: rgb(0, 0, 0, ${Number(a) + 0.1})`;
    } else {
      e.target.style.cssText = `background-color: rgb(0, 0, 0, 0.1)`;
    }
  } 
}

const createGrid = () => {
  gridContainer.style.cssText = `display: grid; height: 960px; width: 960px; grid-template-columns: repeat(${gridSize}, 1fr); grid-gap: 0px`;
  for (let i = 0; i < Math.pow(gridSize, 2); i ++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.addEventListener('mouseenter', changeOpacity)
    gridContainer.appendChild(gridItem);
  }
}

const resetGrid = (e) => {
  const gridItems = document.querySelectorAll('.gridItem');
  gridItems.forEach(item => {
    item.remove();
  })
  gridSize = window.prompt('What grid size would you like?');
  createGrid();
}

// Elements
const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
const clearGrid = document.createElement(`button`);

clearGrid.textContent = 'Clear Grid';

container.insertBefore(clearGrid, gridContainer);

createGrid();

clearGrid.addEventListener('click', resetGrid);