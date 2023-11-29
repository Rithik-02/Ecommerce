import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductPage from "./components/Product/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/Product Details/ProductDetails";
import Cart from "./components/Cart";
import Address from "./components/Address";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/pay" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
