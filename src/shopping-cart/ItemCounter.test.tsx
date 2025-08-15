import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
    test('should render with default values', () => {
        const testItemText = 'Test item';

        render(<ItemCounter itemName={testItemText} />)
        screen.debug();

        expect(screen.getByText(testItemText)).toBeDefined();

    });

    test('should render with custom quantity', () => {
        const testItemText = 'Test item';
        const customQty = 10;

        render(<ItemCounter itemName={testItemText} quantity={customQty} />)
        screen.debug();

        expect(screen.getByText(customQty)).toBeDefined();

    });
});