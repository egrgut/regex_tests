import {describe, expect, test} from "@jest/globals";
import {checkPhoneNumber} from "../validations/checkPhoneNumber.js";



describe("checkPhoneNumber",
    () => {
        test.each(
            [
                ["+12(34)1234-5678", true],
                ["12(34)1234-5678", false],
                ["+1(34)1234-5678", false],
                ["+12341234-5678", false],
                ["+12(34)1234-5678000", false],
                ["+12A(34)1234-5678", false],
                ["letter", false],
            ]
        )("%s", (value, expected) => {
            expect(checkPhoneNumber(value)).toBe(expected)
        })
    })