import { useState, useEffect } from 'react';
import './App.css';

function LegalEnglish(props) {
  const [vocabulary, setVocabulary] = useState();
  const [nextWord, setNextWord] = useState(props.wordCount - 1);
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [checkBtnDisabled, setCheckBtnDisabled] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  useEffect(() => {
    setVocabulary(props.vocabulary);
  }, [])
  const check = (event) => {
    event.preventDefault();
    if(input) {
      setCheckBtnDisabled(true);
      if (input == vocabulary[nextWord].english_word) {
        setIsCorrect("true");
        setScore(score + 1);
        setFinalScore((score + 1) / vocabulary.length * 100)
      } else {
        setIsCorrect("false");
        setScore(score - 1);
        setFinalScore((score - 1) / vocabulary.length * 100)
      }
      setInput('');
    } else {
      alert("Please enter translation")
    }
  }
  const next = (event) => {
    event.preventDefault();
    if(count < vocabulary.length) {
      setNextWord(nextWord  - 1);
      setCount(count + 1);
      setTranslation("");
      setIsCorrect("");
      setCheckBtnDisabled(false);
    } else {
      setNextBtnDisabled(true);
    }
  }
  const previous = (event) => {
    event.preventDefault();
    if(count > 1) {
      setNextWord(nextWord  + 1);
      setCount(count - 1);
      setTranslation("");
      setIsCorrect("");
    } else {
      setPrevBtnDisabled(true);
    }
  }
  const translate = (event) => {
    event.preventDefault();
    setTranslation(vocabulary[nextWord].english_word);
    setCheckBtnDisabled(true);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p>{props.vocabulary[nextWord].translation}</p>
          <p>{translation}</p>
        </div>
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Translation"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }} />
        </div>
        <div className="card-footer">
          <div className="d-flex">
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-info" onClick={previous} disabled>Pevious</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-secondary" onClick={check} disabled={checkBtnDisabled}
                >Check</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-success" onClick={translate}
                >Translate</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-info" onClick={next}  disabled={nextBtnDisabled}>Next</button>
            </div>
          </div>
        </div>
        <div className='stats'>
          <p>Word: {count}</p>
          <p>Score: {score}</p>
        </div>
        <p>{isCorrect}</p>
      </div>
      <h2 className='final-score'>Your result: {finalScore.toFixed(1)} %</h2>
    </div>
  );
}

export default LegalEnglish;