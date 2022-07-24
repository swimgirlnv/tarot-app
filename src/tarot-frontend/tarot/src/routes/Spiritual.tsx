import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Spiritual/Spiritual.css';

function Spiritual(props: any){

let navigate = useNavigate();

const handleDM = () => {
    navigate("/DreamMessages");
}

const back = () => {
navigate("/");
}

return (
    <div className="SpiritualPage text-center">
      <button className="back" onClick={back}> Back </button>

      <h1 className="sp-h1">Spiritual Tarot Readings</h1>
      <button className="DreamMessages" onClick={handleDM}> Dream Messages </button>
      <p> Looking for insight on your dreams? This spread will help interpret the message your dream conveys.</p>

    </div>
)
}
export default Spiritual;