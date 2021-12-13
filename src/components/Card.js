import React, { useState, useEffect } from 'react';
import { characters } from './characters';

const Container = (props) => {
    const { score, highScore } = props;
    
    const shuffleCards = (newArr) => {
        for (let i = newArr.length - 1; i > 0; i--) {
            let randomId = Math.floor(Math.random() * i);
            [newArr[randomId], newArr[i]] = [newArr[i], newArr[randomId]];
        }
    }

    const [cards, setNewCards] = useState(characters)

    const handleCardClick = (e) => {
        const cardName = e.target.parentNode.lastChild.textContent;
        console.log(cardName);
    }

    useEffect(() => {
        const newArr = [...characters];
        shuffleCards(newArr);
        setNewCards(newArr);
    }, [score, highScore]);
// optimization, shuffle if score changes
    return (
        <div className={ 'wrapper' }>
            {characters.map((card) => (
                <div className={ 'img-container' } onClick={handleCardClick}>
                    <img src={card.src} alt={card.title}/>
                    <div className={ 'title'}>
                        {card.title}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Container;