import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

// import './index.css'

// this will remove default css
import { BrowserRouter } from "react-router-dom";
import "../node_modules/normalize.css/normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/> 
      
    </BrowserRouter>
  </React.StrictMode>
);
