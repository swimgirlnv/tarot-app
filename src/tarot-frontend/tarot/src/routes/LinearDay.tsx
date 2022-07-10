import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import './LinearDay.css';

function LinearDay(props: any){

  const [cardIDOne, setCardIDOne] = useState("")
  const [cardIDTwo, setCardIDTwo] = useState("")
  const [cardIDThree, setCardIDThree] = useState("")

  const [cardNameOne, setCardNameOne] = useState("")
    const [cardNameTwo, setCardNameTwo] = useState("")
    const [cardNameThree, setCardNameThree] = useState("")

  const [cardUprightOne, setCardUprightOne] = useState("?")
  const [cardUprightTwo, setCardUprightTwo] = useState("?")
  const [cardUprightThree, setCardUprightThree] = useState("?")

  const [cardReverseOne, setCardReverseOne] = useState("?")
  const [cardReverseTwo, setCardReverseTwo] = useState("?")
  const [cardReverseThree, setCardReverseThree] = useState("?")

  const [cardImageOne, setCardImageOne] = useState("https://i.imgur.com/WeMKa8I.png")
  const [cardImageTwo, setCardImageTwo] = useState("https://i.imgur.com/WeMKa8I.png")
  const [cardImageThree, setCardImageThree] = useState("https://i.imgur.com/WeMKa8I.png")

  const [reading, setReading] = useState("")

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };


const handleCard1 = () => {

axios.get("http://localhost:4567/getCard", config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardIDOne(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("http://localhost:4567/getCardName/" + cardIDOne, config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCardName: " + response.data);
          setCardNameOne(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });


axios.get("http://localhost:4567/getCardImage/" + cardIDOne, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageOne(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardUpright/" + cardIDOne, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightOne(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardReverse/" + cardIDOne, config)
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

axios.get("http://localhost:4567/getCard", config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardIDTwo(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("http://localhost:4567/getCardName/" + cardIDTwo, config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardNameTwo(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("http://localhost:4567/getCardImage/" + cardIDTwo, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageTwo(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardUpright/" + cardIDTwo, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightTwo(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardReverse/" + cardIDTwo, config)
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

axios.get("http://localhost:4567/getCard", config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardIDThree(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("http://localhost:4567/getCardName/" + cardIDThree, config)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardNameThree(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("http://localhost:4567/getCardImage/" + cardIDThree, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageThree(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardUpright/" + cardIDThree, config)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightThree(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("http://localhost:4567/getCardReverse/" + cardIDThree, config)
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

axios.get("http://localhost:4567/getReading/" + cardNameOne + "/" + cardNameTwo + "/" + cardNameThree, config)
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


return (
    <div className="LinearDayPage">

    <p className="content-box">
    <h1> Morning </h1>
    <h3 className="cardOne">
      <img src={cardImageOne} width="350" height="500" />
                <p />
                <p>Upright: {cardUprightOne} </p>
                <p>Reverse: {cardReverseOne} </p>
                <button className="CotD" onClick={handleCard1}> Card 1 </button>
                <p />
    </h3>

    <h1> Afternoon </h1>
    <h3 className="cardTwo">
          <img src={cardImageTwo} width="350" height="500" />
                    <p />
                    <p>Upright: {cardUprightTwo} </p>
                    <p>Reverse: {cardReverseTwo} </p>
                    <button className="CotD" onClick={handleCard2}> Card 2 </button>
                    <p />
    </h3>

    <h1> Evening </h1>
    <h3 className="cardThree">
              <img src={cardImageThree} width="350" height="500" />
                        <p />
                        <p>Upright: {cardUprightThree} </p>
                        <p>Reverse: {cardReverseThree} </p>
                        <button className="CotD" onClick={handleCard3}> Card 3 </button>
                        <p />
    </h3>
    </p>
<button className="Reading" onClick={handleReading}> Get your reading! </button>
<div className="The Reading"> {reading} </div>
</div>
)
}

export default LinearDay;