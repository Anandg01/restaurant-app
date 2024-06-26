import "./Header.css"
import React from "react"
import mealsImage from "../../../assets/meals.jpg"
import HeaderCartButton from "../HeaderCartButton"
const Header = ({openCartHandler}) => {
    return (
        <>
            <div className="header">
                <h1>
                    Meals
                </h1>
                <HeaderCartButton buttonClickHandler={openCartHandler} />

            </div>
            <div className="mealsImage">
                <img src={mealsImage } alt="header" />
            </div>
        </>
    )
}


export default Header;