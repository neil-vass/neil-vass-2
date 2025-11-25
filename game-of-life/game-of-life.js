
const gridWidth = 10

for (const playarea of document.getElementsByClassName("playarea")) {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridWidth; y++) {
            const cell = document.createElement("div")
            cell.className = "cell"
            cell.id = JSON.stringify({x,y})
            cell.onclick = () => cell.classList.toggle("selected")
            playarea.appendChild(cell)
        }
    }
}

const runBtn = document.getElementById("run")
const stopBtn = document.getElementById("stop")

runBtn.onclick = () => {
    intervalId = setInterval(runSimulation, 200)
    runBtn.disabled = true
    stopBtn.onclick = () => {
        clearInterval(intervalId)
        runBtn.disabled = false
    }
}



curX = 0
curY = 0
function runSimulation() {
    cellId = JSON.stringify({x: curX, y: curY})
    document.getElementById(cellId).classList.toggle("selected")
    curY++
    if (curY == gridWidth) {
        curX++
        curY = 0
    }
    if (curX == gridWidth) {
        curX = 0
    }
}