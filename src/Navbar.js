import React from "react";
import "./Navbar.css"
import title from "./img/title.png"
export default function Navbar() {
  return (
    <>
      <div className="navbar">
          <div className="navtitle">
              <img src={title} alt="titleimg" />
              Currency Converter
          </div>
      </div>
    </>
  );
}
