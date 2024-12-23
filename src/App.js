import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

import Footer from "./Components/Footer/Footer";
import nf_banner from "./Components/Assets/BANNER1.png";
import f_banner from "./Components/Assets/BANNER2.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/non fiction"
            element={<ShopCategory banner={nf_banner} category="non fiction" />}
          />
          <Route
            path="/fiction"
            element={<ShopCategory banner={f_banner} category="fiction" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
