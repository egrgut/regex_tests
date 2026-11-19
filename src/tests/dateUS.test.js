import {describe, expect, test} from "@jest/globals";
import {checkDateFormatEU} from "../validations/checkDateFormatUS.js";


describe("checkDateFormatUS",
    () => {
        test.each(
            [
                ["2026-11-19", true],
                ["11-19-2026", false],
                ["2026/11/19", false],
                ["2026-15-19", false],
                ["2026-11-32", false],
                ["26-11-19", false],
                ["2024-02-31", true],
                ["empty", false],
                ["letter", false],
            ]
        )("%s", (value, expected) => {
            expect(checkDateFormatEU(value)).toBe(expected)
        })
    })