import "./App.css";
import Login from "./pages/Login/Login";
import SelectMealSoup from "./pages/SelectMealSoup/SelectMealSoup";
import EmptyCart from "./pages/EmptyCart/EmptyCart";
import CartWithOrder from "./pages/CartWithOrder/CartWithOrder";
import MealPreferenceRice from "./pages/MealPreferenceRice/MealPreferenceRice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/select-meal-soup" element={<SelectMealSoup />} />

          <Route exact path="/empty-cart" element={<EmptyCart />} />

          <Route exact path="/cart-with-order" element={<CartWithOrder />} />

          <Route
            exact
            path="/meal-preference-rice"
            element={<MealPreferenceRice />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
