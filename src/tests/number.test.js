import {describe, expect, test} from "@jest/globals";
import {checkNumber} from "../validations/checkNumber.js";


describe("checkNumber",
    () => {
        test.each(
            [
                ["0", true],
                ["9", true],
                ["99", true],
                ["100", true],
                ["199", true],
                ["200", true],
                ["249", true],
                ["250", true],
                ["255", true],
                ["256", false],
                ["-1", false],
                ["2a5", false],
                ["", false],
                ["09", true],
                ["009", false],
            ]
        )("%s", (value, expected) => {
            expect(checkNumber(value)).toBe(expected)
        })
    })