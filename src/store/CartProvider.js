import CartContext from "./cartContext"
import { useReducer } from "react"

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'add') {
        const matchedIndex = state.items.findIndex(item => item.id === action.item.id);

        if (matchedIndex !== -1) {
            state.items[matchedIndex].amount += action.item.amount;
        }
        else state.items.push(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: state.items,
            totalAmount: updateTotalAmount
        }
    }
    else if (action.type === 'remove') {

        const matchedIndex = state.items.findIndex(item => item.id === action.id);
        if (matchedIndex!== -1) {
            let Quantity = state.items[matchedIndex].amount > 1 ?
                (state.items[matchedIndex].amount -= 1) :
                (state.items[matchedIndex].amount = 0);

            const updateItem = Quantity !== 0 ?
                state.items :
                state.items.filter(item => item.id !== action.id)

            const price = state.items[matchedIndex].price;
            const updateTotalAmount = state.totalAmount - price;
            return {
                items: updateItem,
                totalAmount: updateTotalAmount
            }
        }
    }
    else if(action.type==='update'){
        const matchedIndex = state.items.findIndex(item => item.id === action.id);
        if(matchedIndex!==-1){
        state.items[matchedIndex].amount+=1;
        const price=state.items[matchedIndex].price;
        const updateTotalAmount=state.totalAmount+price;
        return {
            items:state.items,
            totalAmount:updateTotalAmount
        }
        }
    }
    return initialCartState;
}


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'remove', id: id })
    }

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "add", item: item });
    }
    const updateItemHandler=(id)=>{
        dispatchCartAction({type:"update",id:id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateItem:updateItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;