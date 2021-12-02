import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";

function App() {
  const [{}, dispatch] = useStateValue();

   useEffect(() => {
     // will only run once when the app component loads...

     auth.onAuthStateChanged((authUser) => {
       console.log("THE USER IS >>> ", authUser);

       if (authUser) {
         // the user just logged in / the user was logged in

         dispatch({
           type: "SET_USER",
           user: authUser,
         });
       } else {
         // the user is logged out
         dispatch({
           type: "SET_USER",
           user: null,
         });
       }
     });
   }, []);
  
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
