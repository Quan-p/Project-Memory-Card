import React, { useState } from 'react';

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

    const resetScore = () => {
        setClickedCard([]);
        setCurrentScore(0);
    }
    return (
        <div>
            <div>currentScore = {currentScore} highScore = {highScore}</div>
        </div>
    )

}