import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import HomePage from "./pages/homePage/homePage.jsx";
import Information from "./pages/information/information.jsx";
import Products from "./pages/products/products.jsx";
import Footer from "./components/footer/footer.jsx";
import { CartProvider } from "./context/cartContext.js";
import { ProductsProvider } from "./context/apiContext";
import { ProductsProvider2 } from "./context/apiContext2.js";
import { FlagProvider } from "./context/flagContext.js";
import { IoLogoWhatsapp } from "react-icons/io5";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductsProvider>
          <ProductsProvider2>
            <CartProvider>
              <FlagProvider>
                <Link to="/" className="stickyBtn">
                  <IoLogoWhatsapp />
                </Link>
                <div className="discount">با عضویت در کاراگراف، اولین سفارش خود را ” رایگان” تحویل بگیرید. </div>
                <Header/>
                <Navbar/>
                <Routes >
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/information" element={<Information />} />
                </Routes>
                <Footer />
              </FlagProvider>
            </CartProvider>
          </ProductsProvider2>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
