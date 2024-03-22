import "./App.css";
import Home from "./pages/Home/Home";
import SuccessMessage from "./components/SuccessMessage/SuccessMessage";
import SelectMealRice from "./pages/SelectMealRice/SelectMealRice";
import MyCart from "./pages/MyCart/MyCart";
import MyOrder from "./pages/MyOrder/MyOrder";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/successmessage" element={<SuccessMessage />} />
          <Route exact path="/SelectMealRice" element={<SelectMealRice />} />
          <Route exact path="/MyCart" element={<MyCart />} />
          <Route exact path="/MyOrder" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
