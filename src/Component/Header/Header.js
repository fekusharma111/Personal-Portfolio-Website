import React from "react";
import "./Header.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

const Header = () => {
  const nav_component = [
    { id: "#home", name: "Home" },
    { id: "#about", name: "About" },
    { id: "#whatido", name: "What I Do" },
    { id: "#resume", name: "Resume" },
    { id: "#portfolio", name: "Portfolio" },
    { id: "#client", name: "Client" },
    { id: "#contact", name: "Contact" },
  ];
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="logo_nav">Logo</div>
        <div className="header_nav">
          {nav_component.map((n) => (
            <div key={n.id}>
              <a href={n.id}>{n.name}</a>
            </div>
          ))}
        </div>
        <div className="header_nav">
          <div className="social_media_icon">
            <AiOutlineTwitter />
          </div>
          <div className="social_media_icon">
            <FiFacebook />
          </div>
          <div className="social_media_icon">
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
