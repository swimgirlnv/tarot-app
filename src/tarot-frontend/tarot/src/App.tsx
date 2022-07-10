import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import CardOfTheDay from './CardOfTheDay';
import SignIn from './SignIn';

function App() {
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

  const handleSpiritual = () => {
      navigate("/Spiritual");
  }

  return (
      <div className="App text-center">
        <h1 className="a-h1">Welcome to AI Tarot Readings!</h1>

        <SignIn />

        <CardOfTheDay />

        <button className="Career" onClick={handleCareer}> Career </button>

        <button className="Daily" onClick={handleDaily}> Daily </button>

        <button className="Love" onClick={handleLove}> Love </button>

        <button className="Spiritual" onClick={handleSpiritual}> Spiritual </button>

      </div>
  )
}

export default App;
