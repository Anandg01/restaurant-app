import React,{useState} from "react";
import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsItems from "./components/Meals/MealsItems";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartShow,setCartShow]=useState(false)

  const hideCartHandler=()=>{
    setCartShow(false)
  };
  const showCartHandler=()=>{
    setCartShow(true)
  }

  return (
    <CartProvider>
      <Header openCartHandler={showCartHandler} />
      {cartShow&&<Cart closeButtonHandeler={hideCartHandler}/>}
      <MealsSummary />
      <MealsItems />
    </CartProvider>
  );
}

export default App;
