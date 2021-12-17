import React, { useState, useEffect } from 'react';
import { characters } from './characters';

const Game = () => {    
    const [clickedCard, setClickedCard] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleCardClick = (e) => {
        const cardName = e.target.parentNode.lastChild.textContent;
        gameLogic(cardName);
    }

    // fisher yates shuffle
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const gameLogic = (cardName) => {
        if (clickedCard.includes(cardName)) {
           resetScore() 
        } else {
            const newScore = currentScore + 1;
            if (newScore > highScore) setHighScore(newScore);
            setCurrentScore(newScore)
            setClickedCard((prevState) => [...prevState, cardName])
            //shuffle(characters);
        }    
    }

    const resetScore = () => {
        setClickedCard([]);
        setCurrentScore(0);
    }

    useEffect(() => {
        shuffle(characters);
    });

    return (
        <div className={ 'main' }>
            <div className={ 'score-wrapper' }>
                <div className={ 'current-score' }>
                    Score = {currentScore}
                </div>
                <div className={ 'high-score' }>
                    High Score = {highScore}
                </div>
            </div>
            <div className={ 'wrapper' }>
                {characters.map((card) => (
                    <div className={ 'img-container' } onClick={handleCardClick}>
                        <img src={card.src} alt={card.title}/>
                        <p className={ 'title' }>
                            {card.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Game;