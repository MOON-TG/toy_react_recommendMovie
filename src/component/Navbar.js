import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { SiNetflix } from "react-icons/si";
import { SiAppletv } from "react-icons/si";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="overflow-visible header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div className="flex items-center -mt-5">
            <div id="navIcons" className="flex items-center justify-center">
              <SiNetflix id="netflix" className="text-red-700 text-8xl" />
              <SiAppletv id="appletv" className="text-gray-200 text-9xl" />
            </div>
          </div>

          <div className="ml-10 ">
            <p id="navTitle" className="font-bold text-white text-3xlg">
              내가 본 영화 추천
            </p>
            <div id="navButtons" className="flex mt-3">
              <li className="nav-item">
                <LinkScroll
                  to="action"
                  spy={true}
                  smooth={false}
                  offset={-90}
                  duration={500}
                  onClick={closeMenu}
                >
                  액션
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  to="comic"
                  spy={true}
                  smooth={false}
                  offset={-90}
                  duration={500}
                  onClick={closeMenu}
                >
                  코믹
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  to="melo"
                  spy={true}
                  smooth={false}
                  offset={-90}
                  duration={500}
                  onClick={closeMenu}
                >
                  멜로
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  to="thriller"
                  spy={true}
                  smooth={false}
                  offset={-90}
                  duration={500}
                  onClick={closeMenu}
                >
                  스릴러
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  to="ani"
                  spy={true}
                  smooth={false}
                  offset={-90}
                  duration={500}
                  onClick={closeMenu}
                >
                  애니메이션
                </LinkScroll>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

window.addEventListener("scroll", () => {
  const test = document.querySelector(".header");
  if (window.scrollY > 100) {
    test.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    test.style.backgroundColor = "#00ff0000";
  }
});

export default Navbar;
