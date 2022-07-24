import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Daily/Daily.css';
import axios from "axios";

import LinearDay from './LinearDay';


function Daily(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

let navigate = useNavigate();

   const [cardIDOne, setCardIDOne] = useState("")
   const [cardIDTwo, setCardIDTwo] = useState("")
   const [cardIDThree, setCardIDThree] = useState("")

const handleLinearDay = () => {
    navigate("/LinearDay");
}


return (
    <div className="DailyPage text-center">

      <h1 className="dp-h1">Daily Tarot Spreads</h1>

      <div className="buttonNdescription">
      <button className="LinearDay" onClick={handleLinearDay}> Linear Day </button>
      <p>A simple three card spread that will help guide you through each part of the day.</p>
      </div>

      <div className="buttonNdescription">
            <button className="LinearDay2"> Need Advice? </button>
            <p>A more in depth exploration of advice from your spiritual computer.</p>
      </div>

    </div>
)
}
export default Daily;