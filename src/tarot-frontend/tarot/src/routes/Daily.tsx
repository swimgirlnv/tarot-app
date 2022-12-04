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

const handleDM = () => {
    navigate("/DreamMessages");
}



return (
    <div className="DailyPage text-center">

      <h1 className="dp-h1">Daily Tarot Spreads</h1>

      <table className="daily-table">
        <tr>
          <td><button className="LinearDay" onClick={handleLinearDay}> Linear Day </button></td>
          <td>A simple three card spread that will help guide you through each part of the day.</td>
        </tr>

        <tr>
          <td><button className="LinearDay" onClick={handleDM}> Dream Messages </button></td>
          <td>Looking for insight on your dreams? This spread will help interpret the message your dream conveys.</td>
        </tr>

        <tr>
          <td><button className="LinearDay2"> Trust your Gut </button></td>
          <td>If faced with a difficult situation or problem, this spread will help you trust your instincts.</td>
        </tr>

        <tr>
          <td><button className="LinearDay2"> Need Advice? </button></td>
          <td>A more in depth exploration of advice from your spiritual computer.</td>
        </tr>
      </table>

    </div>
)
}
export default Daily;