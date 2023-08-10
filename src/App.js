import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleProduct from "./Components/SingleProduct";

import Footer from "./Components/Footer";







const App = () => {
  const [print, setPrint] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [warning, setWarning] = useState(false);



 

  const fetchData = async () => {
    try {
      const response = await axios.request("https://fakestoreapi.com/products");
      setPrint(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
 
  const handlClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 6000);
      return;
    }

    setCart([...cart, item]);
    toast("Item is already added to your cart");
  };
  

const handleSearch = async () =>{
  // try {
  //   const response = await axios.request(`https://fakestoreapi.com/products/category`);
  // setSearch(response.data)
  // } catch (error) {
  //   console.log(error);
  // }
}


useEffect(() => {
  fetchData();
  handleSearch();
}, []);



  return (
    <>
      <div>
        <BrowserRouter>
          <Header size={cart.length} />
          {warning && (
            <>
              <ToastContainer />
            </>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  print={print}
                  handlClick={handlClick}
                  isLoading={isLoading}
                  
                />
              }
            />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
           <Route path="/singleProduct/:id" element={<SingleProduct  handlClick={handlClick}/>}/>
  
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    
    </>
  );
};

export default App;
