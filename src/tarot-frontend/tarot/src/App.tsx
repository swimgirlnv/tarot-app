import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import CardOfTheDay from './CardOfTheDay';
import useToken from './useToken';
import { useJwt } from 'react-jwt';
import Login from './Login';
import axios from 'axios';
import * as Constants from './Constants';

function App() {
  let navigate = useNavigate();
  const {token, setToken} = useToken();
  const {decodedToken, isExpired}: {decodedToken: any, isExpired: boolean} = useJwt(token);
  if (!token || isExpired) {
    return <Login setToken={setToken} />
  }

  axios.defaults.baseURL = Constants.SERVER_URL;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.common['Content-Type'] = "application/json";

  const handleCareer = () => {
      navigate("/Career");
  }

  const handleDaily = () => {
      navigate("/Daily");
  }

  const handleLove = () => {
      navigate("/Love");
  }

  const handleSpiritual = () => {
      navigate("/Spiritual");
  }

  return (
      <div className="App text-center">

        <h1 className="a-h1">Hello, {decodedToken?.given_name}! Welcome to AI Tarot Readings!</h1>

        <CardOfTheDay />

        <button className="Career" onClick={handleCareer}> Career </button>

        <button className="Daily" onClick={handleDaily}> Daily </button>

        <button className="Love" onClick={handleLove}> Love </button>

        <button className="Spiritual" onClick={handleSpiritual}> Spiritual </button>

        <div>
          You are communing with the spirits as {decodedToken?.name}.
          <button className="Logout" onClick={() => setToken("")}>Log Out</button>
        </div>
      </div>
  )
}

export default App;
