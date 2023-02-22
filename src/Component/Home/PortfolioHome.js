import React from "react";
import About from "../About/About";
import Contactus from "../Contact/Contactus";
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import Service from "../Services/Service";
import Testimonial from "../Testimonial/Testimonial";
import Work from "../Work/Work";
import "./Portfolioapp.css";

const PortfolioHome = () => {
  return (
    <div>
      <div className="portfolioapp">
        <div className="hero_wrapper"></div>
      </div>
      <div style={{ zIndex: 2, position: "absolute", top: 0 }}>
        <Header />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section" style={{ background: "#343a40" }}>
        <Service />
      </div>
      <div className="section">
        <Resume />
      </div>
      <div className="section" style={{ background: "#343a40" }}>
        <Work />
      </div>
      <div className="section">
        <Testimonial />
      </div>
      <div className="section" style={{ background: "#343a40" }}>
        <Contactus />
      </div>
    </div>
  );
};

export default PortfolioHome;
