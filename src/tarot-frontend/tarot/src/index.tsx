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

 import ShootingForward from './routes/ShootingForward';
 import LinearDay from './routes/LinearDay';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
<React.StrictMode>
     <Router>
         <Routes>
           <Route path="/" element={<App />} />
           <Route path="love" element={<Love />} />
           <Route path="career" element={<Career /> } />
                      <Route path="shootingForward" element={<ShootingForward /> } />
           <Route path="spiritual" element={<Spiritual />} />
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
