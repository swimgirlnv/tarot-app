import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './About.css';
import axios from "axios";


function About(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

return (
    <div className="AboutPage">
      <section className="section">
        <h2>Who We Are</h2>
        <p>MajorArcana was founded in 2022 with a mission to provide quality tarot readings to people around the world.</p>
        <p>Through the power of AI, we hope to make readings quick, easy, accessible, and fun for users of all levels.</p>
      </section>
      <section className="section">
        <h2>Why Tarot</h2>
        <p></p>
        <p></p>
      </section>
    </div>
)
}
export default About;