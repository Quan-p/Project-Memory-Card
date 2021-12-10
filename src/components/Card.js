import Reach, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const newArr = [...cards];
        shuffleCards(newArr);
        setNewCards(newArr);
    }, [score, highScore]);
// optimization, shuffle if score changes
    return (
        <div className={ 'wrapper' }>
            {characters.map((card) => (
                <img src={card.src} alt={card.title}/>
            ))}
        </div>
    )
}

export default Container;