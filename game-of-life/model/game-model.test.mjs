import {expect, describe, it} from "vitest";
import {parseInput} from "./game-model.mjs"

describe("Initial setup", () => {
    it("Reads format", () => {
        const input = [
            ".....",
            "..##.",
            "..#..",
            ".....",
            "..##.",
            "....."]

        const elves = parseInput(input)
        expect(elves.length).toBe(5)
        expect(elves[0]).toBe(JSON.stringify({x: 1, y: 2}))
    })
})