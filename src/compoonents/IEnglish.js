import { useEffect, useState } from 'react';
import './App.css';

function ItEnglish(props) {
  const [ ITVocabulary, setITVocabulary] = useState();
  const [nextWord, setNextWord] = useState(1);
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  useEffect(() => {
    setITVocabulary(props.ITVocabulary);
  }, [])
  const check = (event) => {
    event.preventDefault();
      if (input == ITVocabulary[nextWord].englishWord) {
        setIsCorrect("true");
        setScore(score + 1);
      } else {
        setIsCorrect("false");
        setScore(score - 1);
      }
    setInput('')
  }
  const next = (event) => {
    event.preventDefault();
    if(count < 2) {
      setNextWord(nextWord  - 1);
      setCount(count + 1);
      setTranslation("");
      setIsCorrect("");
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
    setTranslation(ITVocabulary[nextWord].englishWord);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p>{props.ITVocabulary[nextWord].translation}</p>
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
              <button type="button" className="btn btn-secondary" onClick={check}
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
    </div>
  );
}

export default ItEnglish;