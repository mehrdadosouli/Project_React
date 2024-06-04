import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset.css";
import "./styles/defaults.css";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>  
  </BrowserRouter>
);
