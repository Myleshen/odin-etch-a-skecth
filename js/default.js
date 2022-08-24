let squaresContainer = document.getElementById("squaresContainer");

const pixelation = (e) => {
    e.target.style.backgroundColor = randomColorGenerator();
}

const randomColorGenerator = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function createGrid() {
    let gridSizeValueParaTag = document.getElementById("gridSizeValue");
    let gridSizeValue = document.getElementById("gridSizeInput").value
    gridSizeValueParaTag.textContent = gridSizeValue;
    let noOfSquares = gridSizeValue * gridSizeValue;

    squaresContainer.innerHTML = "";
    
    for(let i = 0; i < noOfSquares; i++) {
        let square = document.createElement('div');
        switch (gridSizeValue) {
            case "32":
                square.classList.add("square32");
            break;
            case "48":
                square.classList.add("square48");
            break;
            case "64":
                square.classList.add("square64");
            break;
            default:
                square.classList.add("square16");
            break;
        }
        
        square.onmouseover = pixelation;
        squaresContainer.appendChild(square);
    }
}

document.getElementById("gridSizeInput").addEventListener("change", function () {
    createGrid();
})

createGrid()