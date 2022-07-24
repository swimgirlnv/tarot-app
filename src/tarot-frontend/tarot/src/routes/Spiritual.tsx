import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Spiritual/Spiritual.css';

function Spiritual(props: any){

let navigate = useNavigate();

const handleDM = () => {
    navigate("/DreamMessages");
}


return (
    <div className="SpiritualPage text-center">

      <h1 className="sp-h1">Spiritual Tarot Readings</h1>
      <div className="buttonNdescription">
      <button className="DreamMessages" onClick={handleDM}> Dream Messages </button>
      <p> Looking for insight on your dreams? This spread will help interpret the message your dream conveys.</p>
      </div>

      <div className="buttonNdescription">
            <button className="DreamMessages2"> Trust your Gut </button>
            <p>If faced with a difficult situation or problem, this spread will help you trust your instincts.</p>
            </div>
    </div>
)
}
export default Spiritual;