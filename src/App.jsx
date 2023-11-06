import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();

  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=4");
    const data = await response.json();
    console.log(data);

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
          <Route path="users" element={<UsersPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
