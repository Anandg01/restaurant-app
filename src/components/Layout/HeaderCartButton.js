import classes from "./Header.module.css"
import { useContext} from "react"
import cartContext from "../../store/cartContext"

const HeaderCartButton = (props) => {

    const cartCtx=useContext(cartContext)
    
     const numbrOfCartItem=cartCtx.items.reduce((curNumber,item)=>{
  return curNumber+item.amount;
     },0)

    return <button onClick={props.buttonClickHandler} className={classes.button}>
        <span></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numbrOfCartItem}</span>
    </button>
}

export default HeaderCartButton