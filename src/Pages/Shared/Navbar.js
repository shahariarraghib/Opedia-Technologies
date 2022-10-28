import React from "react";
import "./navBar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div class="hero">
          <img src="https://i.ibb.co/vh2s0gn/Capture1.png" alt="" srcset="" />
        </div>
      </header>
      <nav class="main_nav">
        <div class="main_nav_wrap me_sticky">
          <ul class="menu">
            <li>
              <a href="#">e-commerce</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
