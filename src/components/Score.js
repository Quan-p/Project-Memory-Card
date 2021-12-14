import React, { useState } from 'react';
import Container from './Card';

const Score = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <div>
            <div>Score = {currentScore} High Score = {highScore}</div>
        </div>
    )

}

export default Score;