import classes from './Cart.module.css'
import Model from '../UI/Model';
const Cart = ({ closeButtonHandeler }) => {


  return <Model>
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button
        className={classes['button--alt']}
        onClick={closeButtonHandeler}
      >
        Close
      </button>
      <button
        className={classes.button}
      >
        Order
      </button>
    </div>
  </Model>
}

export default Cart;