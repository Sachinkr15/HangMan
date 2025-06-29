import React from 'react';
import { getAllCharacters } from './MaskedTextUtility';
/**
 * 
 * @param {text} the text to be guessed
 * @param {usedLetters} the letters that have been guessed so far 
 * @returns 
 */

function MaskedTest ({text , usedLetters }) {
 const letters = getAllCharacters(text , usedLetters).split('');
    return(

        <> 
        {letters.map((letter,index) => {
            return (
                <span key={index} className="text-2xl mx-1 font-semibold">
                    {letter}
                </span>
            )
        })}
         </>
    )
}


export default MaskedTest;