import classes from "./MealItemForm.module.css"
import Input from "../UI/Input"
import { useContext } from "react";
import cartContext from "../../store/cartContext";

const MealItemForm = (props) => {
  const cartCtx = useContext(cartContext)

  const addCartItem = (event) => {
    event.preventDefault();
    const quantity = document.getElementById(`amount_${props.id}`).value;
    if(quantity<1)return;
    cartCtx.addItem({ ...props.item, amount: Number(quantity) })
  }


  return <>
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addCartItem} >+</button>
    </form>
  </>
}


export default MealItemForm;