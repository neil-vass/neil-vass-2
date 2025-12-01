import { parseInput, Field } from "./model/elf-game-model.mjs"

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



const loadBtn = document.getElementById("load")
const runBtn = document.getElementById("run")
const stopBtn = document.getElementById("stop")
const framerateSlider = document.getElementById("framerateSlider")
const clearBtn = document.getElementById("clear")
let framerate = 5

loadBtn.onclick = () => {
    const text = document.getElementById("starter").value
    const lines = text.match(/.+/g)
    console.log(lines)
    for (const pos of parseInput(lines)) {
        document.getElementById(pos).classList.add("selected")
    }
}

runBtn.onclick = () => {
    init()
    const intervalId = setInterval(runSimulation, 1000/framerate)
    runBtn.disabled = true
    framerateSlider.disabled = true
    stopBtn.onclick = () => {
        clearInterval(intervalId)
        runBtn.disabled = false
        framerateSlider.disabled = false
    }
}

framerateSlider.value = framerate
framerateSlider.oninput = () => {
    framerate = framerateSlider.value
}

clearBtn.onclick = () => {
    stopBtn.click()
    for (const cell of document.querySelectorAll(".selected")) {
        cell.classList.remove("selected")
    }
}


let model
let rounds

function init() {
    const initialPositions = [...document.getElementsByClassName("selected")].map(cell => cell.id)
    model = new Field(initialPositions)
    rounds = 0
}

function runSimulation() {
    const changes = model.playRound()
    rounds++
    if (changes.added.size === 0 && changes.removed.size === 0) {
        alert("First round where no elf moved: " + rounds)
        stopBtn.click()
        return
    }

    for (const a of changes.added) {
        const cell = document.getElementById(a)
        if (cell !== null) cell.classList.add("selected")
    }
    for (const r of changes.removed) {
        const cell = document.getElementById(r)
        if (cell !== null) cell.classList.remove("selected")
    }
}