import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Love/Love.css';
import axios from "axios";

import HTF from './HTF';


function Love(props: any){

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

const handleHTF = () => {
    navigate("/HTF");
}

const handleWTC = () => {
}
const handleMSN = () => {
}
const handleFNL = () => {
}

const back = () => {
navigate("/");
}

return (
    <div className="LovePage text-center">
      <button className="back" onClick={back}> Back </button>

      <h1 className="lp-h1">Love and Relationship Tarot Spreads</h1>

      <button className="HTF" onClick={handleHTF}> How they feel </button>

      <button className="HTF" onClick={handleWTC}> Will they call? </button>
      <button className="HTF" onClick={handleFNL}> Finding new love </button>
      <button className="HTF" onClick={handleMSN}> Met someone new... </button>

    </div>
)
}
export default Love;