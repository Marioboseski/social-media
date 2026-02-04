import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BookmarksProvider from "./context/BookmarksContext.jsx";
import UserProvider from "./context/ProfileContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookmarksProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </BookmarksProvider>
    </BrowserRouter>
  </React.StrictMode>
);