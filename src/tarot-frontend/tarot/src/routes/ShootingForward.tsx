import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import './ShootingForward.css';

function ShootingForward(props: any){
  const [loaded, setLoaded] = useState(false);

  const [cardIDOne, setCardIDOne] = useState("22")
  const [cardIDTwo, setCardIDTwo] = useState("22")
  const [cardIDThree, setCardIDThree] = useState("22")
  const [cardIDFour, setCardIDFour] = useState("22")
  const [cardIDFive, setCardIDFive] = useState("22")


  const [cardNameOne, setCardNameOne] = useState("")
    const [cardNameTwo, setCardNameTwo] = useState("")
    const [cardNameThree, setCardNameThree] = useState("")
    const [cardNameFour, setCardNameFour] = useState("")
    const [cardNameFive, setCardNameFive] = useState("")

  const [cardUprightOne, setCardUprightOne] = useState("?")
  const [cardUprightTwo, setCardUprightTwo] = useState("?")
  const [cardUprightThree, setCardUprightThree] = useState("?")
  const [cardUprightFour, setCardUprightFour] = useState("?")
  const [cardUprightFive, setCardUprightFive] = useState("?")

  const [cardReverseOne, setCardReverseOne] = useState("?")
  const [cardReverseTwo, setCardReverseTwo] = useState("?")
  const [cardReverseThree, setCardReverseThree] = useState("?")
  const [cardReverseFour, setCardReverseFour] = useState("?")
  const [cardReverseFive, setCardReverseFive] = useState("?")

  const [cardImageOne, setCardImageOne] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageTwo, setCardImageTwo] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageThree, setCardImageThree] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageFour, setCardImageFour] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageFive, setCardImageFive] = useState("https://i.imgur.com/MyvuLmb.png")

  const [reading, setReading] = useState("")

  useEffect(() => { setLoaded(true) })

  useEffect(() => {
    if (loaded) {
        axios.get("/getCards/5")
                // @ts-ignore
                .then(response => {
                  console.log("this is response.data for getCards: " + response.data);
                  console.log(response.data[0]);
                  console.log(response.data[1]);
                  console.log(response.data[2]);

                  setCardIDOne(response.data[0]);
                  setCardIDTwo(response.data[1]);
                  setCardIDThree(response.data[2]);
                  setCardIDFour(response.data[3]);
                  setCardIDFive(response.data[4]);

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

              return (
                <div>
                  <p>Upright: {cardUprightOne} </p>
                  <p>Reverse: {cardReverseOne} </p>
                </div>
              )
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

const handleCard4 = () => {

axios.get("/getCardName/" + cardIDFour)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardNameFour(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("/getCardImage/" + cardIDFour)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageFour(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardUpright/" + cardIDFour)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightFour(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardReverse/" + cardIDFour)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverseFour(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

}

const handleCard5 = () => {

axios.get("/getCardName/" + cardIDFive)
        // @ts-ignore
        .then(response => {
          console.log("this is response.data for getCard: " + response.data);
          setCardNameFive(response.data);
        })
        // @ts-ignore
        .catch(error => {
          console.log(error);
        });

axios.get("/getCardImage/" + cardIDFive)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardImage: " + response.data);
              setCardImageFive(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardUpright/" + cardIDFive)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardUpright: " + response.data);
              setCardUprightFive(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

axios.get("/getCardReverse/" + cardIDFive)
              // @ts-ignore
              .then(response => {
              console.log("this is response.data for getCardReverse: " + response.data);
              setCardReverseFive(response.data);
              })
              //@ts-ignore
              .catch(error => {
              console.log(error);
              });

}

const handleReading = () => {

axios.get("/getReadingShootingForward/" + cardNameOne + "/" + cardNameTwo + "/"
+ cardNameThree + "/" + cardNameFour + "/" + cardNameFive)
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
const [disable4, setDisable4] = React.useState(false);
const [disable5, setDisable5] = React.useState(false);
const [disableReading, setDisableReading] = React.useState(false);


return (
    <div className="ShootingForwardPage">
    <h1 className="cp-h1"> Shooting Forward </h1>

    <div className="content-box-sf">
      <div className="card">
        <h2> Dream Job </h2>
        <img src={cardImageOne} onClick={handleCard1} width="175" height="250" />
        <p>Upright: {cardUprightOne} </p>
        <p>Reverse: {cardReverseOne} </p>
      </div>
    
      <div className="card">
        <h2> How to get there </h2>
        <img src={cardImageTwo} onClick={handleCard2} width="175" height="250" />
        <p>Upright: {cardUprightTwo} </p>
        <p>Reverse: {cardReverseTwo} </p>
      </div>
    
      <div className="card">
        <h2> Qualities you bring </h2>
        <img src={cardImageThree} onClick={handleCard3} width="175" height="250" />
        <p>Upright: {cardUprightThree} </p>
        <p>Reverse: {cardReverseThree} </p>
      </div>

      <div className="card">
        <h2> Where to find help </h2>
        <img src={cardImageFour} onClick={handleCard4} width="175" height="250" />
        <p>Upright: {cardUprightFour} </p>
        <p>Reverse: {cardReverseFour} </p>
      </div>
    
      <div className="card">
        <h2> What needs attention </h2>
        <img src={cardImageFive} onClick={handleCard5} width="175" height="250" />
        <p>Upright: {cardUprightFive} </p>
        <p>Reverse: {cardReverseFive} </p>
      </div>

    </div>

    <div className="reading-content">
      <button className="CotD" disabled={disableReading} onClick={handleReading}> Get your reading! </button>
      <div className="Reading"> {reading} </div>
    </div>

</div>
)
}

export default ShootingForward;
