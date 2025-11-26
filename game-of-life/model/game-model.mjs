

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

// Equivalent of Python's Counter: 
// https://docs.python.org/3/library/collections.html#collections.Counter
export function counter(items) {
  const counts = new Map()
  for (const val of items) {
    const soFar = counts.get(val) || 0
    counts.set(val, soFar+1)
  }
  return counts
}

export class Elf {
    static directionOrder = 'NSWE'

    static directionChecks = {
        'N': new Set(['N', 'NE', 'NW']),
        'S': new Set(['S', 'SE', 'SW']),
        'W': new Set(['W', 'NW', 'SW']),
        'E': new Set(['E', 'NE', 'SE']),
    }

    constructor(pos) {
        const {x,y} = JSON.parse(pos)
        this.setPosition(x, y)
        this.neighbours = new Set()
    }

    setPosition(x, y) {
        this.pos = JSON.stringify({x,y})
        this.adjacentPositions = new Map([
            ['N',   JSON.stringify({x: x-1, y: y})],
            ['NE',  JSON.stringify({x: x-1, y: y+1})],
            ['E',   JSON.stringify({x: x,   y: y+1})],
            ['SE',  JSON.stringify({x: x+1, y: y+1})],
            ['S',   JSON.stringify({x: x+1, y: y})],
            ['SW',  JSON.stringify({x: x+1, y: y-1})],
            ['W',   JSON.stringify({x: x,   y: y-1})],
            ['NW',  JSON.stringify({x: x-1, y: y-1})],
        ])
        this.adjacentDirections = new Map(
            this.adjacentPositions.entries().map(([k,v]) => [v, k])
        )
    }

    addNeighbour(elf) {
        const dir = this.adjacentDirections.get(elf.pos)
        this.neighbours.add(dir)
    }

    removeNeighbour(elf) {
        const dir = this.adjacentDirections.get(elf.pos)
        this.neighbours.delete(dir)
    }

    proposeMove(directionIdx) {
        if (this.neighbours.size > 0) {
            for (const _ of Elf.directionOrder) {
                const dir = Elf.directionOrder[directionIdx]
                if (this.neighbours.isDisjointFrom(Elf.directionChecks[dir])) {
                    return this.adjacentPositions.get(dir)
                }
                directionIdx = (directionIdx+1) % Elf.directionOrder.length
            }
        }
        return null
    }
}

export class Field {
    constructor(elfPositions) {
        this.firstDirection = 0
        this.elves = new Map(
            elfPositions.map(pos => [pos, new Elf(pos)])
        )
        this.elvesWithNeighbours = new Set()
        for (const elf of this.elves.values()) {
            for (const adj of elf.adjacentPositions.values()) {
                const adjacentElf = this.elves.get(adj)
                if (adjacentElf !== undefined) {
                    elf.addNeighbour(adjacentElf)
                    this.elvesWithNeighbours.add(elf)
                }
            }
        }
    }

    // Play until elves stop moving, or until maxRounds is reached, whichever comes first.
    play(maxRounds=null) {
        let rounds = 0
        while (true) {
            rounds++
            const changes = this.playRound()
            if (changes.added.size === 0 && changes.removed.size === 0) break
            if (rounds === maxRounds) break
        }

        return rounds
    }

    playRound() {
        const changes = { added: new Set(), removed: new Set() }

        const proposals = [...this.elvesWithNeighbours].map(elf => [elf, elf.proposeMove(this.firstDirection)])
        const elvesProposing = counter(proposals.map(([elf, dest]) => dest))
        const moves = proposals.filter(([elf, dest]) => dest !== null && elvesProposing.get(dest) === 1)

        // Delete each elf and re-add it in the right position
        for (const [elf, dest] of moves) {
            for (const dir of elf.neighbours) {
                const neighbourElf = this.elves.get(elf.adjacentPositions.get(dir))
                neighbourElf.removeNeighbour(elf)
                if (neighbourElf.neighbours.length === 0) {
                    this.elvesWithNeighbours.delete(neighbourElf)
                }
            }
            this.elves.delete(elf.pos)
            this.elvesWithNeighbours.delete(elf)
            changes.removed.add(elf.pos)

            this.elves.set(dest, new Elf(dest))
            changes.added.add(dest)
        }

        // Set neighbours for the moved elves!
        for (const [_, dest] of moves) {
            const movedElf = this.elves.get(dest)
            for (const adj of movedElf.adjacentPositions.values()) {
                const adjacentElf = this.elves.get(adj)
                if (adjacentElf !== undefined) {
                    movedElf.addNeighbour(adjacentElf)
                    adjacentElf.addNeighbour(movedElf)
                    this.elvesWithNeighbours.add(movedElf)
                    this.elvesWithNeighbours.add(adjacentElf)
                }
            }
        }

        this.firstDirection = (this.firstDirection+1) % Elf.directionOrder.length
        return changes
    }

    emptyGround() {
        let xMin, xMax, yMin, yMax
        for (const pos of this.elves.keys()) {
            const {x,y} = JSON.parse(pos)
            if (xMin === undefined) {
                xMin = xMax = x
                yMin = yMax = y
                continue
            } 
            if (x < xMin) xMin = x
            if (x > xMax) xMax = x
            if (y < yMin) yMin = y
            if (y > yMax) yMax = y
        }

        const area = (xMax - xMin + 1) * (yMax - yMin + 1)
        return area - this.elves.size
    }
}