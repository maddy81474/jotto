import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if(props.guessedWords.length === 0){
        contents = (
            <span data-test='guess-instructions'>Try To guess the secret word</span>
        )
    } else {
        let guessedWordsRows = props.guessedWords.map((guessedWord , index) => {
            return (
                <tr data-test="guessed-word" key={index}>
                    <td>{guessedWord.guessedWord}</td>
                    <td>{guessedWord.letterMatchCount}</td>
                </tr>
            )
        });
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;
