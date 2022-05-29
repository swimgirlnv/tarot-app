import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Love(props: any){

let navigate = useNavigate();

const handleCareer = () => {
    navigate("/Career");
}

const handleDaily = () => {
    navigate("/Daily");
}

const handleLove = () => {
    navigate("/Love");
}

const handleSpiritual = () => {
    navigate("/Spiritual");
}

return (
    <div className="LovePage text-center">
      <h1 className="display-4">Welcome to AI Tarot Readings!</h1>

      <button className="Career" onClick={handleCareer}> Career </button>

      <button className="Daily" onClick={handleDaily}> Daily </button>

      <button className="Love" onClick={handleLove}> Love </button>

      <button className="Spiritual" onClick={handleSpiritual}> Spiritual </button>

    </div>
)
}
export default Love;