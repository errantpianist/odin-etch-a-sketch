const grid = document.getElementById("grid");
createGrid(16, onHoverRainbow);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearGrid);

const blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", () => {
  blackBtn.classList.add("active");
  rainbowBtn.classList.remove("active");
  clearGrid();
  createGrid(sizeSlider.value, onHoverBlack);
});

const rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.add("active");
  blackBtn.classList.remove("active");
  clearGrid();
  createGrid(sizeSlider.value, onHoverRainbow);
});

const sizeSlider = document.getElementById("size");
const sizeSliderValue = document.getElementById("size-slider-value");
sizeSlider.addEventListener("input", (e) => {
  sizeSliderValue.textContent = e.target.value;
});
sizeSlider.addEventListener("change", (e) => {
  clearGrid();
  createGrid(e.target.value, onHoverBlack);
});

function createGrid(size, onHover) {
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.onmouseover = onHover;
    grid.appendChild(cell);
  }
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function onHoverBlack(e) {
  e.target.style.backgroundColor = "black";
}
function onHoverRainbow(e) {
  e.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}
