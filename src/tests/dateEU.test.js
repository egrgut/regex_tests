import {describe, expect, test} from "@jest/globals";
import {checkDateFormatEU} from "../validations/checkDateFormatEU.js";


describe("checkDateFormatEU",
    () => {
        test.each(
            [
                ["19.11.2026", true],
                ["19/11/2026", false],
                ["32/12/2026", false],
                ["32.12/2026", false],
                ["32/12.2026", false],
                ["19/15/2026", false],
                ["19/15/26", false],
                ["2026/11/19", false],
                ["31.02.2024", true],
                ["empty", false],
                ["letter", false],
            ]
        )("%s", ( value, expected) => {
            expect(checkDateFormatEU(value)).toBe(expected)
        })
    })