import React, { useState, useEffect } from 'react';
import { characters } from './characters';

const Container = (props) => {    
    // const shuffleCards = (newArr) => {
    //     for (let i = newArr.length - 1; i > 0; i--) {
    //         let randomId = Math.floor(Math.random() * i);
    //         [newArr[randomId], newArr[i]] = [newArr[i], newArr[randomId]];
    //     }
    // }

    const [clickedCard, setClickedCard] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const handleCardClick = (e) => {
        const cardName = e.target.parentNode.lastChild.textContent;
        gameLogic(cardName);
        console.log(cardName);
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
            shuffle(characters);
        }    
    }
    //everytime card is clicked add its id or something to array

    const resetScore = () => {
        setClickedCard([]);
        setCurrentScore(0);
    }

    return (
        <div>
            <div>Score = {currentScore} High Score = {highScore}</div>
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

export default Container;