import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe('add', () => {
    test("should add  two positive numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;

    // 2. Act
    const result = add(a, b);
    
    // 3. Assert
    expect(result).toBe(3);
    })

    test("should add 2 negative numbers", () => {
        const a = -1;
        const b = -2;

        const result = add(a, b)

        expect(result).toBe(a + b)
    });

})

describe('subtract', () => {
    test("should subtract 2 positive numbers", () => {
        const a = 1;
        const b = 2;

        const result = subtract(a, b)

        expect(result).toBe(a - b)
    });

    test("should subtract two negative numbers", () => {
        const a = -1;
        const b = -2;

        const result = subtract(a, b)

        expect(result).toBe(a - b)
    })
})

describe('multiply', () => {
    test("should multiply 2 positive numbers", () => {
        const a = 1;
        const b = 2;

        const result = multiply(a, b)

        expect(result).toBe(a * b)
    });

    test("should multiply two negative numbers", () => {
        const a = -1;
        const b = -2;

        const result = multiply(a, b)

        expect(result).toBe(a * b)
    })
})
