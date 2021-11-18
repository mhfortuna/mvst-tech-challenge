import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <div className="App">
      <Home />
      <ToastContainer draggable theme="colored" />
    </div>
  );
}

export default App;
