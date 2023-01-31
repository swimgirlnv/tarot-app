import './TopBar.css';
import { useNavigate } from "react-router-dom";
import TarotSpreads from './TarotSpreads';

type Props = {
  userName?: string,
  pictureURL?: string,
  onLogout: () => void
}

function TopBar(props: Props) {

 let navigate = useNavigate();

  const handleJournal = () => {
        navigate("/Journal");
    }

  return (
        <div className="top-bar">
        <a className="site-title" href="/"><img src="https://i.imgur.com/9fTXRNl.png" width="80" height="80"/></a>
        <TarotSpreads />
        <div className="dropdown">
            <button className="dropbtn" onClick={handleJournal}>Journal</button>
        </div>
        <div className="user">
        You are communing with the spirits as <b>{props.userName}</b>.
        <button className="logout-button" onClick={props.onLogout}>Log Out</button>
        </div>
        </div>
  );
}

export default TopBar;