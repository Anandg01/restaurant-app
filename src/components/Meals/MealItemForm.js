import classes from "./MealItemForm.module.css"
import Input from "../UI/Input"
import { useContext } from "react";
import cartContext from "../../store/cartContext";

const MealItemForm = (props) => {
  const cartCtx = useContext(cartContext)
  console.log(cartCtx)

  const addCartItem = (event) => {
    event.preventDefault();
    const quantity=document.getElementById(`amount_${props.id}`).value;
    cartCtx.addItem({...props.item,amount:quantity})
    console.log(event.target)
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
    <p>{cartCtx.message}</p>
  </>
}


export default MealItemForm;