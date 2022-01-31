import React, { useState, useEffect } from "react";

import Nav from "../components/NavBar";
import LandingPage from "../components/section/LandingPage";
import NavMenu from "../components/NavMenu";

const Preview = () => {
  const [menu, setMenu] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  const changeNavBg = () =>
    window.scrollY >= 70 ? setNavBg(true) : setNavBg(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => window.removeEventListener("scroll", changeNavBg);
  }, []);

  return (
    <>
      <Nav toggleMenu={toggleMenu} menu={menu} navBg={navBg} />
      <LandingPage toggleMenu={toggleMenu} />
      <NavMenu toggleMenu={toggleMenu} menu={menu} />
    </>
  );
};

export default Preview;
