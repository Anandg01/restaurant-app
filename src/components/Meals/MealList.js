import React from "react";

import classes from "./MealList.module.css"

const MealListItem =props=>{
    return <li className={classes.meal}>
        <div>
         <h2>{props.name}</h2>
         <div className={classes.description} >{props.description}</div>
         <div className={classes.price}>{props.price}</div>
        </div>
    </li>
}

export default MealListItem;