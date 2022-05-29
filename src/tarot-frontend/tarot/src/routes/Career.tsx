import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Career(props: any){

let navigate = useNavigate();

const handleShootingForward = () => {
    navigate("/ShootingForward");
}

return (
    <div className="CareerPage text-center">
      <h1 className="display-4">Career Spreads</h1>

      <button className="ShootingForward" onClick={handleShootingForward}> Shooting Forward </button>

    </div>
)
}
export default Career;