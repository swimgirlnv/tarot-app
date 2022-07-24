// @ts-ignore
import React, {createContext, useEffect, useState} from 'react';
// @ts-ignore
import axios from "axios";
import './CardOfTheDay.css';

// @ts-ignore
export const AppContext = createContext();


function CardOfTheDay() {
  const [loaded, setLoaded] = useState(false)
  const [cardID, setCardID] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardUpright, setCardUpright] = useState("?")
  const [cardReverse, setCardReverse] = useState("?")
  const [cardImage, setCardImage] = useState("https://i.imgur.com/WeMKa8I.png")

  useEffect(() => {
    setLoaded(true);
  });
            
  useEffect(() => {
    if (loaded) {
      axios.get("/getCard")
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardID(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });
    }
  }, [loaded]);




const handleCotD = () => {

axios.get("/getCardImage/" + cardID)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImage(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardUpright/" + cardID)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUpright(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardReverse/" + cardID)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverse(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });
}
  return (
    <div className="CardOfTheDay">
          <img src={cardImage} width="350" height="500" />
          <p />
          <p>Upright: {cardUpright} </p>
          <p>Reverse: {cardReverse} </p>
          <button className="CotD" onClick={handleCotD}> Card of the Day </button>
          <p />
    </div>
  );
}

export default CardOfTheDay;
