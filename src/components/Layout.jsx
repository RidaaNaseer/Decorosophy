import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Testimonials from "./Testimonials";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Header isHomePage={isHomePage} />
      <main style={{ paddingTop: isHomePage ? "0" : "80px" }}>
        <Outlet />
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Layout;
