import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
    test('should render with default values', () => {
        const testItemText = 'Test item';

        render(<ItemCounter itemName={testItemText} />)
        //screen.debug();

        expect(screen.getByText(testItemText)).toBeDefined();

    });

    test('should render with custom quantity', () => {
        const testItemText = 'Test item';
        const customQty = 10;

        render(<ItemCounter itemName={testItemText} quantity={customQty} />)
        //screen.debug();

        expect(screen.getByText(customQty)).toBeDefined();

    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter itemName={"TestItem"} quantity={1} />)
        //screen.debug();

        const [buttonAdd] = screen.getAllByRole('button');
        fireEvent.click(buttonAdd)

        expect(screen.getByText("2").innerHTML).toBe("2")
    });

    test('should decrease count when -1 button is pressed', () => {
        const customQty = 5;
        render(<ItemCounter itemName={"TestItem"} quantity={customQty} />)
        //screen.debug();

        const [,buttonDecrease] = screen.getAllByRole('button');
        fireEvent.click(buttonDecrease)

        expect(Number(screen.getByText(customQty-1).innerHTML)).toBe(customQty-1)
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        render(<ItemCounter itemName={"TestItem"} quantity={1} />)

        const [,buttonDecrease] = screen.getAllByRole('button');
        fireEvent.click(buttonDecrease)

        expect(screen.getByText("1").innerHTML).toBe("1")
    });

});
