import React from "react";
import Header from "./components/Layout/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealsItems from "./components/Meals/MealsItems";
function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <MealsItems />
    </div>
  );
}

export default App;
