const container = document.getElementById("container");
// const userChoice = document.querySelector(".button")



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows (16,16)

// function createGrid () {
//   let rows = cols = prompt('Please enter a number' + '');
//   makeRows (rows, cols);
//   const singleGrid = document.querySelectorAll(".grid-item");
//   console.log (singleGrid)
//   Array.from(singleGrid).forEach((singleGrid) => {
//     singleGrid.addEventListener('mouseenter', () => {
//     singleGrid.classList.add ("playing")
//     })

//     singleGrid.addEventListener('mouseleave', () => {
//       singleGrid.classList.remove ("playing")
//       })
//   })





// }

// userChoice.addEventListener('click', createGrid)





