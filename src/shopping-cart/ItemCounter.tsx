import { useState } from "react";

import styles from './ItemCounter.module.css'

interface MyProps {
    itemName: string;
    quantity?: number;
};


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
        <section
            className={styles.itemRow} >
            <span
                className={styles["item-text"]}
                style={{

                    color: count === 1 ? 'red' : 'black'
                }}
            >{itemName}</span>
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
