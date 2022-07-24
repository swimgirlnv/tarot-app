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

      <div className="buttonNdescription">
      <button className="HTF" onClick={handleHTF}> How they feel </button>
      <p>Curious about how someone feels about you romantically? This spread explores how that person feels and
      where your relationship may lead.
      </p>
      </div>
      <div className="buttonNdescription">
      <button className="HTF2" onClick={handleWTC}> Will they call? </button>
      <p>If you are wondering if a certain someone will reach out, or why they might not have called, this spread
      may offer some clarity.
            </p>
      </div>
      <div className="buttonNdescription">
      <button className="HTF2" onClick={handleFNL}> Finding new love </button>
      <p>If you are looking for new love, this spread explores what might help in your search.
            </p>
      </div>
      <div className="buttonNdescription">
      <button className="HTF2" onClick={handleMSN}> Met someone new... </button>
      <p>This spread will help interpreting the intentions of the person you've just met.
            </p>
      </div>
    </div>
)
}
export default Love;