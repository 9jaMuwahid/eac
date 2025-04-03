const container = document.querySelector('.container');
const sides = document.querySelector('.sides');

let boxRow = 16; // Default grid size

// Function to create boxes based on grid size input
function createGrid(rows) {
    container.innerHTML = ''; // Clear all of the existing boxes

    // Set grid-template-columns and grid-template-rows to be able to change
    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`; 
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 

    // Create boxes
    for (let i = 0; i < rows * rows; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }

    // Add event listener for mouseover to change box colour
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

    // Number betwwn 1 and 100
    numSquares = Math.min(Math.max(Number(numSquares), 1), 100); 

    if (numSquares) {
        boxRow = numSquares; // Update the grid size
        createGrid(boxRow); // Recreate the grid with the new size
    }
});
