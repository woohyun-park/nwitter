import React, { useState } from "react";
import AppRouter from "./Router";
import { BrowserRouter } from "react-router-dom";
import authService from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <BrowserRouter>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
