import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Love/Love.css';
import axios from "axios";
import { Card, CardHeader, CardBody, CardFooter, Button , Image , Text} from '@chakra-ui/react'

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

      <div className="page-container">
        <div className="cards">
          <Card maxW="sm">
            <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="HTF" 
            onClick={handleHTF} bgColor="#c98669" borderRadius='0'>
              <Text>How They Feel</Text></CardHeader>
            <CardBody>Curious about how someone feels about you romantically? This spread explores how that person feels and
      where your relationship may lead.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="HTF" 
            onClick={handleWTC} bgColor="#c98669" borderRadius='0'>
              <Text>Will they call?</Text></CardHeader>
            <CardBody>If you are wondering if a certain someone will reach out, or why they might not have called, this spread
      may offer some clarity.</CardBody>
          </Card>
        </div>
        <div className="cards">
        <Card maxW="sm">
            <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="HTF" 
             onClick={handleFNL} bgColor="#c98669" borderRadius='0'>
              <Text>Finding new love</Text></CardHeader>
            <CardBody>If you are looking for new love, this spread explores what might help in your search.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="HTF" 
             onClick={handleMSN} bgColor="#c98669" borderRadius='0'>
              <Text>Just Met Someone New?</Text></CardHeader>
            <CardBody>This spread will help interpreting the intentions of the person you've just met.</CardBody>
          </Card>
        </div>
      </div>

    </div>
)
}
export default Love;