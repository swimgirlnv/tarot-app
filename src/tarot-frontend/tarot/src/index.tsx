import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//When ready for full game mode switch from BrowserRouter -> MemoryRouter
import { BrowserRouter as Router,
 Routes,
 Route,
 Link,
 Navigate
 } from 'react-router-dom';

 import Love from './routes/Love';
 import Career from './routes/Career';
 import Spiritual from './routes/Spiritual';
 import Daily from './routes/Daily';
 import Login from './routes/Login'
 import SignUp from './routes/SignUp'

 import ShootingForward from './routes/ShootingForward';
 import LinearDay from './routes/LinearDay';
 import DreamMessages from './routes/DreamMessages';
 import HTF from './routes/HTF';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
<React.StrictMode>
     <Router>
         <Routes>
           <Route path="/" element={<App />} />
           <Route path="Login" element={<Login />} />
           <Route path="SignUp" element={<SignUp />} />
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
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
