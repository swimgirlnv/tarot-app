import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Career/Career.css';

function Career(props: any){

let navigate = useNavigate();

const handleShootingForward = () => {
    navigate("/ShootingForward");
}

return (
    <div className="CareerPage text-center">
      <h1 className="cp-h1">Career Tarot Spreads</h1>

      <button className="ShootingForward" onClick={handleShootingForward}> Shooting Forward </button>

    </div>
)
}
export default Career;