import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CardShuffle from '/Users/student/Desktop/cs320/tarot-app/src/tarot-frontend/tarot/src/CardShuffle';


function Love(props: any){

let navigate = useNavigate();

return (
    <div className="LovePage text-center">
    <CardShuffle />
    </div>
)
}
export default Love;