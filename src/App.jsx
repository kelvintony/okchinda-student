import "./App.css";
import Login from "./pages/Login/Login";
import SelectMealSoup from "./pages/SelectMealSoup/SelectMealSoup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/select-meal-soup" element={<SelectMealSoup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
