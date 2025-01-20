import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct module for React 18+
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

// Create the root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Render the application using `createRoot`
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
