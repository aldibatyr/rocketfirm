import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Categories from "../Categories/Categories";

import "./Header.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Header = () => {
  const [minified, setMinified] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      setMinified(true);
      // gsap.to(".App-header", { height: 80, duration: 0.3 });
      // gsap.to(".header-content", { paddingTop: 25, duration: 0.3 });
    } else if (scrollTop < 50) {
      setMinified(false);
      // gsap.to(".App-header", { height: 400, duration: 0.3 });
      // gsap.to(".header-content", { paddingTop: 50, duration: 0.3 });
    }
    console.log(scrollTop);
  };

  const handleMinified = () => {
    setMinified(false);
  };
  return (
    <header className={minified ? "App-header scrolled" : "App-header"}>
      <div className="header-content">
        <Navigation minified={minified} handleMinified={handleMinified} />
        <div className="searchBarContainer">
          <SearchBar />
        </div>
        <div className="categoriesContainer">
          <Categories />
        </div>
      </div>
    </header>
  );
};

export default Header;
