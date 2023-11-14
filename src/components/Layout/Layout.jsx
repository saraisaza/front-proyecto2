import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {<Header />}
      {children}
      {<Footer />}
    </div>
  );
};

export default Layout;
