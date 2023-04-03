import React, { Fragment } from "react";
import "../App.css";
import "./About.css"

export default function About() {
  return (
    <div className="about">
      <video src="/videos/about.mp4" autoPlay loop />
      <h1 style={{ fontFamily: "'Eczar', serif" }}>NI SISI</h1>
      <p>We connect Local Vendors near you to You.</p>
    </div>
  );
}
