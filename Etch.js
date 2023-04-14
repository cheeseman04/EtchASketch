const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(20, 20);

const singleGrid = document.querySelectorAll(".grid-item");
Array.from(singleGrid).forEach((singleGrid) => {
  singleGrid.addEventListener('mouseenter', () => {
  singleGrid.classList.add ("playing")
  })

  singleGrid.addEventListener('mouseleave', () => {
    singleGrid.classList.remove ("playing")
    })
})






//need to add a class removal for "mouse leave". Key to having each one behave this way so far is probably via a "forEach" function. Hopefully!!

