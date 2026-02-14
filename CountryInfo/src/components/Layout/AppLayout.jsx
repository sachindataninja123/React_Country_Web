import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
