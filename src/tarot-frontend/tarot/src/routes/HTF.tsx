import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import './HTF.css';

function HTF(props: any){
  const [loaded, setLoaded] = useState(false);

  const [cardIDOne, setCardIDOne] = useState("22")
  const [cardIDTwo, setCardIDTwo] = useState("22")
  const [cardIDThree, setCardIDThree] = useState("22")
  const [cardIDFour, setCardIDFour] = useState("22")


  const [cardNameOne, setCardNameOne] = useState("")
    const [cardNameTwo, setCardNameTwo] = useState("")
    const [cardNameThree, setCardNameThree] = useState("")
    const [cardNameFour, setCardNameFour] = useState("")

  const [cardUprightOne, setCardUprightOne] = useState("?")
  const [cardUprightTwo, setCardUprightTwo] = useState("?")
  const [cardUprightThree, setCardUprightThree] = useState("?")
  const [cardUprightFour, setCardUprightFour] = useState("?")

  const [cardReverseOne, setCardReverseOne] = useState("?")
  const [cardReverseTwo, setCardReverseTwo] = useState("?")
  const [cardReverseThree, setCardReverseThree] = useState("?")
  const [cardReverseFour, setCardReverseFour] = useState("?")

  const [cardImageOne, setCardImageOne] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageTwo, setCardImageTwo] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageThree, setCardImageThree] = useState("https://i.imgur.com/MyvuLmb.png")
  const [cardImageFour, setCardImageFour] = useState("https://i.imgur.com/MyvuLmb.png")

  const [reading, setReading] = useState("")

  useEffect(() => { setLoaded(true) })

  useEffect(() => {
    if (loaded) {
        axios.get("/getCards/4")
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


const handleReading = () => {

axios.get("/getReadingHTF/" + cardNameOne + "/" + cardNameTwo + "/"
+ cardNameThree + "/" + cardNameFour)
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
const [disableReading, setDisableReading] = React.useState(false);

return (
    <div className="HTFPage">

    <h1 className="lp-h1"> How they feel </h1>

    <div className="content-box-htf">
          <div className="card">
            <h2> How they feel about you </h2>
            <img src={cardImageOne} onClick={handleCard1} width="175" height="250" />
            <p>Upright: {cardUprightOne} </p>
            <p>Reverse: {cardReverseOne} </p>
          </div>

          <div className="card">
            <h2> How they feel about the relationship </h2>
            <img src={cardImageTwo} onClick={handleCard2} width="175" height="250" />
            <p>Upright: {cardUprightTwo} </p>
            <p>Reverse: {cardReverseTwo} </p>
          </div>

          <div className="card">
            <h2> What are their challenges? </h2>
            <img src={cardImageThree} onClick={handleCard3} width="175" height="250" />
            <p>Upright: {cardUprightThree} </p>
            <p>Reverse: {cardReverseThree} </p>
          </div>

          <div className="card">
            <h2> Where is this relationship heading? </h2>
            <img src={cardImageFour} onClick={handleCard4} width="175" height="250" />
            <p>Upright: {cardUprightFour} </p>
            <p>Reverse: {cardReverseFour} </p>
          </div>
    </div>
<button className="CotD" disabled={disableReading} onClick={handleReading}> Get your reading! </button>
<div className="Reading"> {reading} </div>
</div>
)
}

export default HTF;
