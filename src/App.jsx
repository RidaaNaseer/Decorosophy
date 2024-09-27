import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import ExploreCollection from "./pages/ExploreCollection";
import Layout from "./components/Layout";
import ProductDetails from "./pages/ProductDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartPage from "./components/CartPage";
import Furniture from "./components/Furniture";
import Candles from "./components/Candles";
import Vases from "./components/Vases";
import Art from "./components/Art";
import Lighting from "./components/Lighting";

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.2,
          x: e.clientX,
          y: e.clientY,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "10px",
          width: "10px",
          backgroundColor: "black",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1000,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore-collection" element={<ExploreCollection />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/candles" element={<Candles />} />
            <Route path="/vases" element={<Vases />} />
            <Route path="/art" element={<Art />} />
            <Route path="/lighting" element={<Lighting />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
