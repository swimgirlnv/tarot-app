import './TopBar.css';
import { useNavigate } from "react-router-dom";

type Props = {
  userName?: string,
  pictureURL?: string,
  onLogout: () => void
}

function TopBar(props: Props) {

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

  const handleJournal = () => {
        navigate("/Journal");
    }

  return (
        <div className="top-bar">
        <a className="site-title" href="/"><img src="https://i.imgur.com/9fTXRNl.png" width="80" height="80"/></a>
        <div className="dropdown">
        <button className="dropbtn">Tarot Spreads</button>
          <div className="dropdown-content">
            <button className="Career" onClick={handleCareer}> Career </button>

              <button className="Daily" onClick={handleDaily}> Daily </button>

              <button className="Love" onClick={handleLove}> Love </button>

          </div>
        </div>
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