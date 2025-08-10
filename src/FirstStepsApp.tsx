import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 2 },
    { productName: "Pro Controller", quantity: 2 },
    { productName: "Mario Kart", quantity: 2 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping Cart</h1>
            {itemsInCart.map( ({productName, quantity}) => (
                <ItemCounter key={productName} itemName={productName} quantity={quantity} />
            ))}

        </>
    )
}
