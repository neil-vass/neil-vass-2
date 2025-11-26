import { Field } from "./model/game-model.mjs"

const cellsPerRow = getComputedStyle(document.documentElement).getPropertyValue("--cells-per-row")

const playarea = document.getElementsByClassName("playarea")[0]

for (let x = 0; x < cellsPerRow; x++) {
    for (let y = 0; y < cellsPerRow; y++) {
        const cell = document.createElement("div")
        cell.className = "cell"
        cell.id = JSON.stringify({x,y})
        cell.onclick = () => cell.classList.toggle("selected")
        playarea.appendChild(cell)
    }
}




const runBtn = document.getElementById("run")
const stopBtn = document.getElementById("stop")

runBtn.onclick = () => {
    init()
    const intervalId = setInterval(runSimulation, 200)
    runBtn.disabled = true
    stopBtn.onclick = () => {
        clearInterval(intervalId)
        runBtn.disabled = false
    }
}

let model

function init() {
    const initialPositions = [...document.getElementsByClassName("selected")].map(cell => cell.id)
    model = new Field(initialPositions)
}

function runSimulation() {
    const changes = model.playRound()
    if (changes.added.size === 0 && changes.removed.size === 0) {
        alert("Finished!")
        stopBtn.click()
        return
    }

    for (const a of changes.added) {
        document.getElementById(a).classList.add("selected")
    }
    for (const r of changes.removed) {
        document.getElementById(r).classList.remove("selected")
    }
}