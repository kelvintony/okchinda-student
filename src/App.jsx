import "./App.css";
import Home from "./pages/Home/Home";
import SuccessMessage from "./components/SuccessMessage/SuccessMessage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/successmessage" element={<SuccessMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
