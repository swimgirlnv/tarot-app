import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { useNavigate } from "react-router-dom";
import useToken from './useToken';
import { useJwt } from 'react-jwt';
import CardOfTheDay from './CardOfTheDay';

function Home() {
  const {token, setToken} = useToken();
  const {decodedToken, isExpired}: {decodedToken: any, isExpired: boolean} = useJwt(token);

  return (
      <div className="App text-center">

        <h1 className="a-h1">Hello, {decodedToken?.given_name}! Welcome to AI Tarot Readings!</h1>
        <div className="grid-container">
          <div className="item1">
            <div className="img-container1">
              <a href="/Career">
              <img className="background-card" 
              src="https://i.imgur.com/KvND6OK.png" 
              width="300px" 
              height="500px"
              ></img>
              </a>
            </div>

          
            <div className="img-container2">
              <a href="/Daily">
              <img className="background-card" 
              src="https://i.imgur.com/2wMCZSF.png"
               width="300px" height="500px"></img>
               </a>
            </div>
          
          
            <div className="img-container3">
              <a href="/Love">
              <img className="background-card" 
              src="https://i.imgur.com/zcHaarG.png" 
              width="300px" height="500px"></img>
              </a>
            </div>
            
          </div>

          <div className="item2">
            <p>made with love in Incline Village</p>
          </div>

        </div>
        

      </div>
  )
}

export default Home;
