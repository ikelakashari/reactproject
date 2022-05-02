import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/image9.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Kindergarden </h1>
        <h1>"NEO Education"</h1>       
        <Link to="/menu">
          <button> Descover your prizze </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;


