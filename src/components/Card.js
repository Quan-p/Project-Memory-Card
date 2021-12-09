import Reach, { useState, useEffect } from 'react';
import { characters } from './characters';

const Container = (props) => {
    const { score, highscore } = props;

    return (
        <div>
           {characters.map((card) => (
               <img src={card.src} alt={card.title}/>
           ))}
        </div>
    )
}

export default Container;