import { useState, type CSSProperties } from "react";

interface MyProps {
    itemName: string;
    quantity?: number;
};

const styles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
}

export const ItemCounter = ({ itemName, quantity = 1 }: MyProps) => {
    const [count, setCount] = useState(quantity)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1)
    }

    return (
        <section style={styles}>
            <span>{itemName}</span>
            <button
                onClick={handleAdd}
            >+1</button>
            <span>{count}</span>
            <button
                onClick={handleSubtract}
            >-1</button>
        </section>
    )
}
