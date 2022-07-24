import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Career/Career.css';

function Career(props: any){

let navigate = useNavigate();

const handleShootingForward = () => {
    navigate("/ShootingForward");
}


return (
    <div className="CareerPage">
      <h1 className="cp-h1">Career Tarot Spreads</h1>
      <div className="buttonNdescription">
      <button className="ShootingForward" onClick={handleShootingForward}> Shooting Forward </button>
      <p> Looking for the way toward achieving what you want?
      This tarot spread can help clarify your path and how to attain your goals.
      </p>
</div>
      <div className="buttonNdescription">
            <button className="ShootingForward2"> Self Reflection </button>
            <p>If you are interested in finding your true self and your strengths, this spread will help you
            with personal growth and nurturing.
            </p>
      </div>

    </div>
)
}
export default Career;