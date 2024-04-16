import React from "react";
import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsItems from "./components/Meals/MealsItems";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div>
      <Header />
      <Cart/>
      <MealsSummary />
      <MealsItems />
    </div>
  );
}

export default App;
