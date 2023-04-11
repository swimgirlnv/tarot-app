import React from 'react';

//When ready for full game mode switch from BrowserRouter -> MemoryRouter
import { BrowserRouter as Router,
 Routes,
 Route,
 Link,
 Navigate
} from 'react-router-dom';


import Home from './Home';
import TopBar from './SiteComponents/TopBar';
import Love from './routes/Love/Love';
import Career from './routes/Career/Career';
import Daily from './routes/Daily/Daily';
import Journal from './routes/Journal/Journal';
import About from './routes/About/About';

import ShootingForward from './routes/Career/ShootingForward';
import LinearDay from './routes/Daily/LinearDay';
import DreamMessages from './routes/Daily/DreamMessages';
import HTF from './routes/Love/HTF';


import useToken from './useToken';
import { useJwt } from 'react-jwt';
import Login from './Login';
import axios from 'axios';
import * as Constants from './Constants';
import { Alert, AlertIcon } from '@chakra-ui/react';
import './Home.css';
import Footer from './SiteComponents/Footer';
import Tips from './routes/Tips/Tips';

function App() {
  const {token, setToken} = useToken();
  const {decodedToken, isExpired}: {decodedToken: any, isExpired: boolean} = useJwt(token);
  if (!token || isExpired) {
    return <Login setToken={setToken} />
  }

  axios.defaults.baseURL = Constants.SERVER_URL;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.headers.common['Content-Type'] = "application/json";

    return (
    
     <Router>
      <div className='page-content'>
        <Alert status='warning'>
          <AlertIcon />
          Please be aware: Website is under construction! Some features not yet available.
        </Alert>
        <div id="top-of-page">
          <TopBar onLogout={() => setToken("")} userName={decodedToken?.name} pictureURL={decodedToken?.picture} />
        </div>
        <div className="meat-of-page">
        <Routes>
           <Route path="/" element={<Home onLogout={() => setToken("")} userName={decodedToken?.name} pictureURL={decodedToken?.picture} />} />
           <Route path="journal" element={<Journal />} />
           <Route path="tips" element={<Tips />} />
           <Route path="about" element={<About />} />
           <Route path="love" element={<Love />} />
                      <Route path="htf" element={<HTF />} />
           <Route path="career" element={<Career /> } />
                      <Route path="shootingForward" element={<ShootingForward /> } />
                      <Route path="dreamMessages" element={<DreamMessages /> } />
           <Route path="daily" element={<Daily />} />
                      <Route path="linearDay" element={<LinearDay />} />
         </Routes>
        </div>
        <div id="bottom-of-page">
          <Footer />
        </div>
        </div>
     </Router>
     
    );
}

export default App;