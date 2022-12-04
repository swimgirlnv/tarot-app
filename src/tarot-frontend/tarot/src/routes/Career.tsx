import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Career/Career.css';

function Career(props: any){

let navigate = useNavigate();

const handleShootingForward = () => {
    navigate("/ShootingForward");
}


return (
    <div className="CareerPage">
      <h1 className="cp-h1">Career Tarot Spreads</h1>
      <table className="career-table">
        <tr>
          <td><button className="ShootingForward" onClick={handleShootingForward}> Shooting Forward </button></td>
          <td>Looking for the way toward achieving what you want?
      This tarot spread can help clarify how you might attain your goals.</td>
        </tr>
        <tr>
          <td><button className="ShootingForward2"> Self Reflection </button></td>
          <td>If you are interested in finding your true self and your strengths, this spread will help you
            with personal growth and nurturing.</td>
        </tr>
      </table>

    </div>
)
}
export default Career;