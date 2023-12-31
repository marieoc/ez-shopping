import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();

  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=6");
    const data = await response.json();

    dispatch({ type: "STORE_ITEMS", payload: data });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
