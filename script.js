const container = document.querySelector('.container');
const sides = document.querySelector('.sides');

let boxRow = 16; // Default grid size

// Function to create boxes based on grid size
function createGrid(rows) {
    container.innerHTML = ''; // Clear existing boxes

    // Set grid-template-columns and grid-template-rows dynamically based on user input
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`; // Creates rows of equal size
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; // Creates columns of equal size

    // Create boxes
    for (let i = 0; i < rows * rows; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }

    // Add event listener for mouseover to change box color
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const randomColor = `rgb(${r}, ${g}, ${b})`;
            box.style.backgroundColor = randomColor;
        });
    });
}

createGrid(boxRow); // Create the initial grid

// Event listener to change the grid size
sides.addEventListener('click', () => {
    let numSquares = prompt("How many squares per side would you like? (Max 100)");

    // Ensure the input is a number between 1 and 100
    numSquares = Math.min(Math.max(Number(numSquares), 1), 100); 

    if (numSquares) {
        boxRow = numSquares; // Update the grid size
        createGrid(boxRow); // Recreate the grid with the new size
    }
});
