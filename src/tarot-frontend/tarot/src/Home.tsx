import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import useToken from './useToken';
import { useJwt } from 'react-jwt';
import { Card, CardHeader, CardBody, CardFooter, AlertIcon, Alert, Image, Button } from '@chakra-ui/react'

function Home() {
  const {token, setToken} = useToken();
  const {decodedToken, isExpired}: {decodedToken: any, isExpired: boolean} = useJwt(token);

  let navigate = useNavigate();

  const handleCareer = () => {
    navigate("/Career");
  }

  const handleDaily = () => {
    navigate("/Daily");
  }

  const handleLove = () => {
      navigate("/Love");
  }

  return (
      <div className="App text-center">

        <h1 className="a-h1">Hello, {decodedToken?.given_name}! Welcome to AI Tarot Readings!</h1>
        
        <div className="grid-container">
          <div>
            <Card>
              <CardBody 
              as={Button} 
              onClick={handleCareer}
              padding="0px"
              width="300px"
              height="610px">
                <Image 
                alt="career card"
                className="background-card" 
                src="https://i.imgur.com/KvND6OK.png" 
                width="300px" 
                height="610px"    
                />
              </CardBody>
            </Card>
          </div>
        
          <div>
            <Card>
              <CardBody
              as={Button} 
              onClick={handleDaily}
              padding="0px"
              width="300px"
              height="610px">
              <Image 
              alt="daily card"
              className="background-card" 
              src="https://i.imgur.com/2wMCZSF.png"
               width="300px" height="610px"></Image>
               </CardBody>
            </Card>
          </div>
          
          
          <div>
            <Card>
              <CardBody
              as={Button} 
              onClick={handleLove}
              padding="0px"
              width="300px"
              height="610px">
              <img 
              alt="love card"
              className="background-card" 
              src="https://i.imgur.com/zcHaarG.png" 
              width="300px" height="610px"></img>
              </CardBody>
            </Card>
          </div>
            
        </div>

        </div>
  )
}

export default Home;
