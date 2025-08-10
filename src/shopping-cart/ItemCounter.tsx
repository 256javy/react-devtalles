import type { CSSProperties } from "react";

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

export const ItemCounter = ({ itemName, quantity }: MyProps) => {
    return (
        <section style={styles}>
            <span>{itemName}</span>
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}
