import React, { useState, useRef, useEffect } from "react";
import { VscThreeBars, FaTwitter } from "react-icons/vsc";
import { links, social } from "./data";

const Navbar = () => {
  const [showitem, setShowItem] = useState(0);
  const linksRef = useRef(null);
  const socialRef = useRef(null);
  const containerRef = useRef(null);

  const clickHandler = () => {
    setShowItem(!showitem);
  };

  useEffect(() => {
    const itemHeight = linksRef.current.getBoundingClientRect().height;
    if (showitem) {
      containerRef.current.style.height = `${itemHeight}px`;
    } else {
      containerRef.current.style.height = "0px";
    }
  }, [showitem]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>Personal Page</h2>
          <button className="nav-toggle" onClick={() => clickHandler()}>
            <VscThreeBars />
          </button>
        </div>
        <div className="links-container" ref={containerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="social-icons" ref={socialRef}>
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
