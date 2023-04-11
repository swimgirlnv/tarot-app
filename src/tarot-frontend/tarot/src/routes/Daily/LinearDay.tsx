import React, { useState, useEffect } from 'react';
// @ts-ignore
import axios from "axios";
import '../spread.css';

import { Card, CardHeader, CardBody, Button , Image, CardFooter } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import FlipCardPrompt from '../../SiteComponents/FlipCardPrompt';
import { Navigate, useNavigate } from 'react-router-dom';

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

      setIsFlipped1(!isFlipped1);
      
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

              setIsFlipped2(!isFlipped2);
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

              setIsFlipped3(!isFlipped3);

}

const handleReading = () => {
  setReading("Waiting on the spirits...")
  setDisabled(true);
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

const [disabled, setDisabled] = useState(false);


const [isFlipped1, setIsFlipped1] = useState(false);
const [isFlipped2, setIsFlipped2] = useState(false);
const [isFlipped3, setIsFlipped3] = useState(false);

let navigate = useNavigate();

return (
    <div className="LinearDayPage">
      <div className='hero-container'>
        <div className='daily-hero'>
          <h1>
            <Button onClick={() => navigate('/Daily')} background="transparent" size="m" _hover={{backgroundColor: 'transparent'}}><ArrowBackIcon /></Button>
            Linear Day
          </h1>
          <p>Whether you're looking to stay on top of your to-do list or need guidance on how to navigate 
            challenging situations, our linear day tarot reading can help you stay grounded and focused throughout your day.
          </p>
          <FlipCardPrompt />
        </div>
      </div>
      
    <div className="content-box">
      <div>
        <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>Morning</CardHeader>
          <div
          className={`card ${isFlipped1 ? "flip" : ""}`}
          onClick={handleCard1}>
            <div className="front">
              <Image className="clickable" alt="morning card front" src="https://i.imgur.com/MyvuLmb.png"></Image>
            </div>
            <div className="back">
              <Image className="clickable" alt="morning card back" src={cardImageOne}></Image>
            </div>
          </div>
          <CardBody>
            <p>Upright: {cardUprightOne} </p>
            <p>Reverse: {cardReverseOne} </p>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>Afternoon</CardHeader>
          <div
          className={`card ${isFlipped2 ? "flip" : ""}`}
          onClick={handleCard2}>
            <div className="front">
              <Image className="clickable" alt="morning card front" src="https://i.imgur.com/MyvuLmb.png"></Image>
            </div>
            <div className="back">
              <Image className="clickable" alt="morning card back" src={cardImageTwo}></Image>
            </div>
          </div>
          <CardBody>
            <p>Upright: {cardUprightTwo} </p>
            <p>Reverse: {cardReverseTwo} </p>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>Evening</CardHeader>
          <div
          className={`card ${isFlipped3 ? "flip" : ""}`}
          onClick={handleCard3}>
            <div className="front">
              <Image className="clickable" alt="morning card front" src="https://i.imgur.com/MyvuLmb.png"></Image>
            </div>
            <div className="back">
              <Image className="clickable" alt="morning card back" src={cardImageThree}></Image>
            </div>
          </div>
          <CardBody>
            <p>Upright: {cardUprightThree} </p>
            <p>Reverse: {cardReverseThree} </p>
          </CardBody>
        </Card>
      </div>

     
    </div>
    <div className="reading">
      <Card maxW='lg' minW='lg' boxShadow='none'>
        <CardHeader as={Button} 
        className="CotD" 
        onClick={handleReading} 
        disabled={disabled}
        style={{cursor: disabled ? 'not-allowed' : 'pointer'}}> Get your reading! </CardHeader>
        <CardBody>{reading}</CardBody>
      </Card>
    </div>

</div>
)
}

export default LinearDay;