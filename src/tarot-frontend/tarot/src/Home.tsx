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

        <CardOfTheDay />


      </div>
  )
}

export default Home;
