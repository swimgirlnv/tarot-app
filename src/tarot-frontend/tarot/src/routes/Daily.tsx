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

const back = () => {
navigate("/");
}

return (
    <div className="DailyPage text-center">
      <button className="back" onClick={back}> Back </button>

      <h1 className="dp-h1">Daily Tarot Spreads</h1>

      <button className="LinearDay" onClick={handleLinearDay}> Linear Day </button>

    </div>
)
}
export default Daily;