import React from 'react';

//When ready for full game mode switch from BrowserRouter -> MemoryRouter
import { BrowserRouter as Router,
 Routes,
 Route,
 Link,
 Navigate
} from 'react-router-dom';


import Home from './Home';
import TopBar from './TopBar';
import Love from './routes/Love';
import Career from './routes/Career';
import Spiritual from './routes/Spiritual';
import Daily from './routes/Daily';

import ShootingForward from './routes/ShootingForward';
import LinearDay from './routes/LinearDay';
import DreamMessages from './routes/DreamMessages';
import HTF from './routes/HTF';


import useToken from './useToken';
import { useJwt } from 'react-jwt';
import Login from './Login';
import axios from 'axios';
import * as Constants from './Constants';

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
    <>
     <Router>
          <TopBar onLogout={() => setToken("")} userName={decodedToken?.name} pictureURL={decodedToken?.picture} />

         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="love" element={<Love />} />
                      <Route path="htf" element={<HTF />} />
           <Route path="career" element={<Career /> } />
                      <Route path="shootingForward" element={<ShootingForward /> } />
           <Route path="spiritual" element={<Spiritual />} />
                      <Route path="dreamMessages" element={<DreamMessages /> } />
           <Route path="daily" element={<Daily />} />
                      <Route path="linearDay" element={<LinearDay />} />
         </Routes>
     </Router>
     </>
    );
}

export default App;