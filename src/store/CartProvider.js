import CartContext from "./cartContext"
import { useReducer } from "react"

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'add') {
        const updateItems = state.items.concat(action.item)
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }
    return initialCartState;
}


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)

    const removeItemFromCartHandler = (id) => { }
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "add", item: item });
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message:"jay Shree Ram"
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;