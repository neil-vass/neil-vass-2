
export function parseInput(input) {
    const elves = []
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length; y++) {
            if (input[x][y] === "#") {
                elves.push(JSON.stringify({x,y}))
            }
        }
    }
    return elves
}