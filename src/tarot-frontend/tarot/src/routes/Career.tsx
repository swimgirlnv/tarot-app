import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Career/Career.css';

import { Card, CardHeader, CardBody, CardFooter, Button , Image , Text} from '@chakra-ui/react'

function Career(props: any){

let navigate = useNavigate();

const handleShootingForward = () => {
    navigate("/ShootingForward");
}


return (
    <div className="CareerPage">
      <h1 className="cp-h1">Career Tarot Spreads</h1>
      <div className="page-container">
        <div className="cards">
          <Card maxW="sm">
            <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="ShootingForward" 
            onClick={handleShootingForward} bgColor="#30968c" borderRadius='0'>
              <Text>Shooting Forward</Text></CardHeader>
            <CardBody>Looking for the way toward achieving what you want?
            This tarot spread can help clarify how you might attain your goals.</CardBody>
          </Card>
        </div>
        <div className="cards">
          <Card maxW="sm">
          <Image src="https://i.imgur.com/FPnoXqE.png" alt="arcana card stack" className="cards-image" borderTopRadius='10'></Image>
            <CardHeader as={Button} className="ShootingForward" 
            onClick={handleShootingForward} bgColor="#30968c" borderRadius='0'>
              <Text>Self Reflection</Text></CardHeader>
            <CardBody>If you are interested in finding your true self and your strengths, this spread will help you
              with personal growth and nurturing.</CardBody>
          </Card>
        </div>
      </div>
    </div>
)
}
export default Career;