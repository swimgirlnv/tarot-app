import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Daily/Daily.css';


function Daily(props: any){

let navigate = useNavigate();

const handleLinearDay = () => {
    navigate("/LinearDay");
}

return (
    <div className="DailyPage text-center">
      <h1 className="dp-h1">Daily Tarot Spreads</h1>

      <button className="LinearDay" onClick={handleLinearDay}> Linear Day </button>

    </div>
)
}
export default Daily;