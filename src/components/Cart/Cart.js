import classes from './Cart.module.css'
import Model from '../UI/Model';
const Cart = () => {
    return <Model>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

        <button>Close</button>
        <button>Order</button>
    </Model>
}

export default Cart;