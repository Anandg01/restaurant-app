import classes from "./Header.module.css"
const HeaderCartButton = (props) => {
    return <button className={classes.button}>
        <span></span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
}

export default HeaderCartButton