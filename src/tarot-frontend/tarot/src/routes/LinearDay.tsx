import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import './LinearDay.css';
import Daily from './Daily';

function LinearDay(props: any){
  const [loaded, setLoaded] = useState(false);


const [cardIDOne, setCardIDOne] = useState("22")
  const [cardIDTwo, setCardIDTwo] = useState("22")
  const [cardIDThree, setCardIDThree] = useState("22")

  const [cardNameOne, setCardNameOne] = useState("")
    const [cardNameTwo, setCardNameTwo] = useState("")
    const [cardNameThree, setCardNameThree] = useState("")

  const [cardUprightOne, setCardUprightOne] = useState("?")
  const [cardUprightTwo, setCardUprightTwo] = useState("?")
  const [cardUprightThree, setCardUprightThree] = useState("?")

  const [cardReverseOne, setCardReverseOne] = useState("?")
  const [cardReverseTwo, setCardReverseTwo] = useState("?")
  const [cardReverseThree, setCardReverseThree] = useState("?")

  const [cardImageOne, setCardImageOne] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageTwo, setCardImageTwo] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageThree, setCardImageThree] = useState("https://i.imgur.com/MyvuLmb.png")

  const [reading, setReading] = useState("")

  useEffect(() => { setLoaded(true) })

  useEffect(() => {
    if (loaded) {
        axios.get("/getCards/3")
                // @ts-ignore
                .then(response => {
                  console.log("this is response.data for getCards: " + response.data);
                  console.log(response.data[0]);
                  console.log(response.data[1]);
                  console.log(response.data[2]);

                  setCardIDOne(response.data[0]);
                  setCardIDTwo(response.data[1]);
                  setCardIDThree(response.data[2]);

                  console.log(cardIDOne);
                })
                // @ts-ignore
                .catch(error => {
                  console.log(error);
                });
    }
  }, [loaded]);


const handleCard1 = () => {

axios.get("/getCardName/" + cardIDOne)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCardName: " + response.data);
          setCardNameOne(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });


axios.get("/getCardImage/" + cardIDOne)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageOne(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardUpright/" + cardIDOne)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightOne(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardReverse/" + cardIDOne)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverseOne(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });
}

const handleCard2 = () => {

axios.get("/getCardName/" + cardIDTwo)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardNameTwo(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("/getCardImage/" + cardIDTwo)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageTwo(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardUpright/" + cardIDTwo)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightTwo(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardReverse/" + cardIDTwo)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverseTwo(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });
}

const handleCard3 = () => {

axios.get("/getCardName/" + cardIDThree)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardNameThree(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("/getCardImage/" + cardIDThree)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageThree(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardUpright/" + cardIDThree)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightThree(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardReverse/" + cardIDThree)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverseThree(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

}

const handleReading = () => {

axios.get("/getReadingLinearDay/" + cardNameOne + "/" + cardNameTwo + "/" + cardNameThree)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getReading: " + response.data);
          setReading(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });
}

const [disable1, setDisable1] = React.useState(false);
const [disable2, setDisable2] = React.useState(false);
const [disable3, setDisable3] = React.useState(false);

return (
    <div className="LinearDayPage">
      <h1 className="dp-h1"> Linear Day </h1>

    <div className="content-box">

      <div className="card">
        <h2> Morning </h2>
        <img src={cardImageOne} onClick={handleCard1} width="175" height="250" />
        <p>Upright: {cardUprightOne} </p>
        <p>Reverse: {cardReverseOne} </p>
      </div>
    
      <div className="card">
        <h2> Afternoon </h2>
        <img src={cardImageTwo} onClick={handleCard2} width="175" height="250" />
        <p>Upright: {cardUprightTwo} </p>
        <p>Reverse: {cardReverseTwo} </p>
      </div>
    
      <div className="card">
        <h2> Evening </h2>
        <img src={cardImageThree} onClick={handleCard3} width="175" height="250" />
        <p>Upright: {cardUprightThree} </p>
        <p>Reverse: {cardReverseThree} </p>
      </div>
    </div>
<button className="CotD" onClick={handleReading}> Get your reading! </button>
<div className="Reading"> {reading} </div>
</div>
)
}

export default LinearDay;