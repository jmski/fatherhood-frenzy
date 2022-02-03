import React from "react";
import Nav from "./blog/Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  if (children.type.name === "Preview") {
    return <>{children}</>;
  }
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
