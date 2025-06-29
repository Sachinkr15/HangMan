export function getAllCharacters(word, usedletters){
    //this function will return a string with all the characters of the word that have been guessed
    usedletters = usedletters.map(letter => letter.toUpperCase());
    const guessedLetters = new Set(usedletters);

    const characters = word.toUpperCase().split('').map(char => {
        if(guessedLetters.has(char)){
            return char;
        }else{
            return '_';
        }
    });
    return characters.join('');
}
