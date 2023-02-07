import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Daily/Daily.css';
import axios from "axios";

import { Card, CardHeader, CardBody, CardFooter, Button , Image , Text} from '@chakra-ui/react'


function Daily(props: any){

const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

let navigate = useNavigate();

const handleLinearDay = () => {
    navigate("/LinearDay");
}

const handleDM = () => {
    navigate("/DreamMessages");
}

return (
    <div className="DailyPage text-center">

      <h1 className="dp-h1">Daily Tarot Spreads</h1>

      <div className="page-container">
        <div className="cards">
          <Card maxW="sm">
            <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="LinearDay" 
            onClick={handleLinearDay} bgColor="#b07721" borderRadius='0'>
              <Text>Linear Day</Text></CardHeader>
            <CardBody>A simple three card spread that will help guide you through each part of the day.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="LinearDay" 
            onClick={handleDM} bgColor="#b07721" borderRadius='0'>
              <Text>Dream Messages</Text></CardHeader>
            <CardBody>Looking for insight on your dreams? This spread will help interpret the message your dream conveys.</CardBody>
          </Card>
        </div>
        <div className="cards">
        <Card maxW="sm">
            <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="LinearDay" 
             bgColor="#b07721" borderRadius='0'>
              <Text>Trust Your Gut</Text></CardHeader>
            <CardBody>If faced with a difficult situation or problem, this spread will help you trust your instincts.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="LinearDay" 
             bgColor="#b07721" borderRadius='0'>
              <Text>Need Advice?</Text></CardHeader>
            <CardBody>A more in depth exploration of advice from your spiritual computer.</CardBody>
          </Card>
        </div>
      </div>

    </div>
)
}
export default Daily;