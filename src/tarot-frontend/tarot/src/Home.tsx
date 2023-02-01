import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import useToken from './useToken';
import { useJwt } from 'react-jwt';
import CardOfTheDay from './CardOfTheDay';
import { Card, CardHeader, CardBody, CardFooter, AlertIcon, Alert, Image } from '@chakra-ui/react'

function Home() {
  const {token, setToken} = useToken();
  const {decodedToken, isExpired}: {decodedToken: any, isExpired: boolean} = useJwt(token);

  return (
      <div className="App text-center">

        <h1 className="a-h1">Hello, {decodedToken?.given_name}! Welcome to AI Tarot Readings!</h1>
        
        <div className="grid-container">
          <div>
            <Card maxW="sm">
              <a href="/Career">
              <img 
              alt="career card"
              className="background-card" 
              src="https://i.imgur.com/KvND6OK.png" 
              width="300px" 
              height="500px"
              /></a>
              </Card>
          </div>
        
          <div>
            <Card maxW="sm">
              <a href="/Daily">
              <img 
              alt="daily card"
              className="background-card" 
              src="https://i.imgur.com/2wMCZSF.png"
               width="300px" height="500px"></img>
               </a>
            </Card>
          </div>
          
          
          <div>
            <Card maxW="sm">
              <a href="/Love">
              <img 
              alt="love card"
              className="background-card" 
              src="https://i.imgur.com/zcHaarG.png" 
              width="300px" height="500px"></img>
              </a>
            </Card>
          </div>
            
        </div>

        <div className="item2">
          <p>made with love in Incline Village</p>
        </div>

        </div>
  )
}

export default Home;
