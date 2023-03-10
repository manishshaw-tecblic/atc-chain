import React from "react";
import FooterSection from "../Footer/FooterSection";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="  w-full ">
      <div className=" bg-gridLine overflow-x-hidden">
        <NavBar />
        {children}
        <FooterSection />
      </div>
    </div>
  );
};

export default Layout;
