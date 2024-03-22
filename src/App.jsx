import "./App.css";
import Login from "./pages/Login/Login";
import SelectMealSoup from "./pages/SelectMealSoup/SelectMealSoup";
import EmptyCart from "./pages/EmptyCart/EmptyCart";
import CartWithOrder from "./pages/CartWithOrder/CartWithOrder";

import MealPreferenceRice from "./pages/MealPreferenceRice/MealPreferenceRice";
import AdminDebby from "./pages/AdminDebby/AdminDebby";
import AdminProcessing from "./pages/AdminProcessing/AdminProcessing";

import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/successmessage" element={<SuccessMessage />} />
          <Route exact path="/SelectMealRice" element={<SelectMealRice />} />

          <Route exact path="/cart" element={<MyCart />} />
          <Route exact path="/order" element={<MyOrder />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/select-meal-soup" element={<SelectMealSoup />} />

          <Route exact path="/empty-cart" element={<EmptyCart />} />

          <Route exact path="/cart-with-order" element={<CartWithOrder />} />

          <Route exact path="/admin-debby" element={<AdminDebby />} />

          <Route exact path="/admin-processing" element={<AdminProcessing />} />

          <Route
            exact
            path="/meal-preference"
            element={<MealPreferenceRice />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
