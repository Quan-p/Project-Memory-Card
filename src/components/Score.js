import React, { useState } from 'react';
import Container from './Card';

const Score = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedCard, setClickedCard] = useState([]);
    //everytime card is clicked add its id or something to array

    const handleScore = (cardName) => {
        if (clickedCard.includes(cardName)) {
            resetScore();
        } else {
            const score = currentScore + 1;
            if (score > highScore) setHighScore(score);
            setCurrentScore(score);
        }
    }
    
    const handleCard = (cardName) => {
        setClickedCard((prevArr) => [...prevArr, cardName]);
    }

    const resetScore = () => {
        setClickedCard([]);
        setCurrentScore(0);
    }
    return (
        <div>
            <div>Score = {currentScore} High Score = {highScore}</div>
            <Container
                handleScore={handleScore} 
            />
        </div>
    )

}

export default Score;