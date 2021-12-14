import React, { useState, useEffect } from 'react';
import { characters } from './characters';

const Container = (props) => {    
    const shuffleCards = (newArr) => {
        for (let i = newArr.length - 1; i > 0; i--) {
            let randomId = Math.floor(Math.random() * i);
            [newArr[randomId], newArr[i]] = [newArr[i], newArr[randomId]];
        }
    }

    const [clickedCard, setClickedCard] = useState([]);

    const [cards, setNewCards] = useState(characters)

    const handleCardClick = (e) => {
        const cardName = e.target.parentNode.lastChild.textContent;
        gameLogic(cardName);
        console.log(cardName);
    }

    const gameLogic = (cardName) => {

    }

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
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
    )
}

export default Container;