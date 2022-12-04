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


return (
    <div className="LovePage text-center">

      <h1 className="lp-h1">Love and Relationship Tarot Spreads</h1>


      <table className="love-table">
        <tr>
          <td><button className="HTF" onClick={handleHTF}> How they feel </button></td>
          <td>Curious about how someone feels about you romantically? This spread explores how that person feels and
      where your relationship may lead.</td>
        </tr>

        <tr>
          <td><button className="HTF2" onClick={handleWTC}> Will they call? </button></td>
          <td>If you are wondering if a certain someone will reach out, or why they might not have called, this spread
      may offer some clarity.</td>
        </tr>

        <tr>
          <td><button className="HTF2" onClick={handleFNL}> Finding new love </button></td>
          <td>If you are looking for new love, this spread explores what might help in your search.</td>
        </tr>

        <tr>
          <td><button className="HTF2" onClick={handleMSN}> Met someone new </button></td>
          <td>This spread will help interpreting the intentions of the person you've just met.</td>
        </tr>
      </table>

    </div>
)
}
export default Love;