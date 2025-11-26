import {expect, describe, it} from "vitest";
import {parseInput, counter, Field} from "./game-model.mjs"


const smallExample = [
    ".....",
    "..##.",
    "..#..",
    ".....",
    "..##.",
    ".....",
]

const largeExample = [
    "....#..",
    "..###.#",
    "#...#.#",
    ".#...##",
    "#.###..",
    "##.#.##",
    ".#..#..",
]


describe("parseInput", () => {
    it("Reads format", () => {
        const elfPositions = parseInput(smallExample)
        expect(elfPositions.length).toBe(5)
        expect(elfPositions[0]).toBe(JSON.stringify({x: 1, y: 2}))
    })
})

describe("counter", () => {
    it("Counts occurrences", () => {
        const actual = counter(['a', 'a', 'b', 'c', 'a', 'a', 'c'])
        const expected = new Map([
            ['a', 4],
            ['b', 1],
            ['c', 2],
        ])
        expect(actual).toEqual(expected)
    })
})

describe("Field and Elf handle gameplay", () => {
    it("Plays 1 round", () => {
        const elfPositions = parseInput(smallExample)
        const field = new Field(elfPositions)
        field.play(1)
        const actual = [...field.elves.keys()].sort()
        const expected = [{x: 0, y: 2}, {x: 0, y: 3}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 2}].map(p => JSON.stringify(p)).sort()
        expect(actual).toEqual(expected)
    })

    it("Plays 2 rounds considers new direction", () => {
        const elfPositions = parseInput(smallExample)
        const field = new Field(elfPositions)
        field.play(2)
        const actual = [...field.elves.keys()].sort()
        const expected = [{x: 1, y: 2}, {x: 1, y: 3}, {x: 2, y: 1}, {x: 3, y: 4}, {x: 5, y: 2}].map(p => JSON.stringify(p)).sort()
        expect(actual).toEqual(expected)
    })

    it("Plays 10 rounds with large example", () => {
        const elfPositions = parseInput(largeExample)
        const field = new Field(elfPositions)
        field.play(10)
        expect(field.elves.size).toBe(22)
        expect(field.emptyGround()).toBe(110)
    })

    it("Plays to end with large example", () => {
        const elfPositions = parseInput(largeExample)
        const field = new Field(elfPositions)
        const rounds = field.play()
        expect(rounds).toBe(20)
    })
})
