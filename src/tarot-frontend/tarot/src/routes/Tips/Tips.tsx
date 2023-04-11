import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Tips.css';
import axios from "axios";


function Tips(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

return (
    <div className="TarotTips text-center">
      <h1 className="jp-h1">Tarot Tips</h1>
      <br />
      <h3> Feature coming soon! </h3>

    </div>
)
}
export default Tips;