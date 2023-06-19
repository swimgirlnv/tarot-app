import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import axios from "axios";
import '../spread.css';
import FlipCardPrompt from '../../SiteComponents/FlipCardPrompt';
import { Button, Card, CardBody, CardHeader , Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function SelfReflection(props: any){
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
  let navigate = useNavigate();

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);


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
              setIsFlipped4(!isFlipped4);
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
              setIsFlipped5(!isFlipped5);
}

const handleReading = () => {
  setReading("Waiting on the spirits...")
  setDisabled(true)
axios.get("/getReadingSelfReflection/" + cardNameOne + "/" + cardNameTwo + "/"
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
const [disabled, setDisabled] = useState(false);

return (
    <div className="ShootingForwardPage">
      <div className='hero-container'>
        <div className='career-hero'>
        <h1>
            <Button onClick={() => navigate('/Career')} background="transparent" size="m" _hover={{backgroundColor: 'transparent'}}><ArrowBackIcon /></Button>
            Self Reflection
          </h1>
          <p>This spread can help you gain insight about how self-talk may be holding you back.
          </p>
          {/* https://davyandtracy.com/spirituality/self-reflection-tarot-spread/ */}
          <FlipCardPrompt />
        </div>
      </div>
      
    <div className="content-box">
    <div>
        <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>How is my self-talk affecting my ability to be true to myself?</CardHeader>
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
          <CardHeader>What am I hiding from myself out of shame or fear?</CardHeader>
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
          <CardHeader>What is a healing aspect/influence that I can access right now to help me overcome this?</CardHeader>
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
      <div>
        <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>What do I need to let go of?</CardHeader>
          <div
          className={`card ${isFlipped4 ? "flip" : ""}`}
          onClick={handleCard4}>
            <div className="front">
              <Image className="clickable" alt="morning card front" src="https://i.imgur.com/MyvuLmb.png"></Image>
            </div>
            <div className="back">
              <Image className="clickable" alt="morning card back" src={cardImageFour}></Image>
            </div>
          </div>
          <CardBody>
            <p>Upright: {cardUprightFour} </p>
            <p>Reverse: {cardReverseFour} </p>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card maxW="sm" maxH="lg" justifyContent='center' alignItems='center' maxWidth='301' minWidth="300">
          <CardHeader>What do I need to embrace and nurture right now?</CardHeader>
          <div
          className={`card ${isFlipped5 ? "flip" : ""}`}
          onClick={handleCard5}>
            <div className="front">
              <Image className="clickable" alt="morning card front" src="https://i.imgur.com/MyvuLmb.png"></Image>
            </div>
            <div className="back">
              <Image className="clickable" alt="morning card back" src={cardImageFive}></Image>
            </div>
          </div>
          <CardBody>
            <p>Upright: {cardUprightFive} </p>
            <p>Reverse: {cardReverseFive} </p>
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
        <CardBody placeholder='Waiting on the spirits...'>{reading}</CardBody>
      </Card>
    </div>

</div>
)
}

export default SelfReflection;
