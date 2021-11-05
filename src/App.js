import './App.css';
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
