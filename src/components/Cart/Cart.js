import classes from './Cart.module.css'
import Model from '../UI/Model';
import { useContext } from 'react';
import cartContex from '../../store/cartContext'

const Cart = ({ closeButtonHandeler }) => {

  const cartCtx = useContext(cartContex)
  const items = cartCtx.items;

  const removeItemHandler = (event) => {
  console.log(event.target.id)
   cartCtx.removeItem(event.target.id)
  }
  const addItemHandler = (event) => {
   cartCtx.updateItem(event.target.id)
  }
  const liElement = items.map(item => {
    return <tr
      key={item.id}
    >
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.amount}</td>
      <td>
        <button id={item.id} onClick={removeItemHandler}>-</button>
        <button id={item.id} onClick={addItemHandler}>+</button>
      </td>
    </tr>
  })
  return <Model>
    <table className={classes.tabel_container}>
      <thead>
        <tr key={'id'}>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {liElement}
      </tbody>
    </table>
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{cartCtx.totalAmount.toFixed(2)}</span>
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