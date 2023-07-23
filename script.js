const grid = document.getElementById("grid");
createGrid(16);

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearGrid);

const sizeSlider = document.getElementById("size");
const sizeSliderValue = document.getElementById("size-slider-value");
sizeSlider.addEventListener("input", (e) => {
  sizeSliderValue.textContent = e.target.value;
});
sizeSlider.addEventListener("change", (e) => {
  clearGrid();
  createGrid(e.target.value);
});

function createGrid(size) {
  const onHover = (e) => {
    e.target.style.backgroundColor = "black";
  };
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", onHover);
    grid.appendChild(cell);
  }
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}
