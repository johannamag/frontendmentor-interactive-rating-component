import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ratingItems = [1,2,3,4,5]

const Ca = styled(motion.div)`
  perspective: 1000px;
  width: 400px;
  height: 400px;
`;

const InnerCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center center;
`;

const Face = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 20px;
  background: var(--dark-blue);
  padding: 30px;
`;

const Front = styled(Face)``;

const CircleIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--dark-blue-low);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StarIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const Headline = styled.h1`
  color: var(--white);
  font-size: 24px;
`;

const Desc = styled.p`
  color: var(--light-grey);
  font-weight: 400;
`;

const RatingCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const ItemCon = styled(CircleIcon)`
    cursor: pointer;
    padding-top: 3px;
    font-size: 18px;
    color: var(--white);

    &:hover {
        background: var(--medium-grey);
    }
`

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  background: var(--orange);
  color: var(--white);
  border: none;
  border-radius: 30px;
  padding: 10px;

  &:hover {
    background: var(--white);
    color: var(--orange);
  }
`;

const Back = styled(Face)`
  transform: rotateY(180deg);
  align-items: center;
  text-align: center;
`;

const Img = styled.img`
  width: 150px;
`

const Sel = styled(Button)`
  cursor: none;
  background-color: var(--dark-blue-low);
  color: var(--orange);
  text-transform: unset;
  width: unset;
  padding: 10px 20px;
  font-weight: 400;
`

const ButtonClose = styled(Button)`
  width: unset;
  background: none;
  color: var(--medium-grey);
  padding: 0;

  &:hover {
    background: none;
    color: var(--orange);
  }
`

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Ca>
      <InnerCard
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Front>
          <CircleIcon>
            <StarIcon src={"/images/icon-star.svg"} />
          </CircleIcon>
          <Headline>How did we do?</Headline>
          <Desc>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Desc>
          <RatingCon>
            {ratingItems.map((item) => (
                <ItemCon key={item}>{item}</ItemCon>
            ))}
          </RatingCon>
          <Button onClick={() => setIsFlipped(true)}>Send</Button>
        </Front>
        <Back>
            <Img src={"/images/illustration-thank-you.svg"} />
            <Sel>You selected 4 out of 5</Sel>
          <Headline>Thank you</Headline>
          <Desc>
            We appriciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </Desc>
          <ButtonClose onClick={() => setIsFlipped(false)}>Close</ButtonClose>
        </Back>
      </InnerCard>
    </Ca>
  );
}

export default Card;
