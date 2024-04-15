import React from "react";

import classes from "./MealList.module.css"
import MealItemForm from "./MealItemForm";

const MealListItem =props=>{
    return <li className={classes.meal}>
        <div>
         <h2>{props.name}</h2>
         <div className={classes.description} >{props.description}</div>
         <div className={classes.price}>{props.price}</div>
        </div>
        <div><MealItemForm id={props.id}/></div>
    </li>
}

export default MealListItem;