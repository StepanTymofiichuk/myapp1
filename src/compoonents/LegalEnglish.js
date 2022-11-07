import { useEffect, useState } from 'react';
import './App.css';

function LegalEnglish(props) {
  const [vocabulary, setVocabulary] = useState([]);
  const [nextWord, setNextWord] = useState(Math.floor(Math.random() * 200));
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState("");
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [checkBtnDisabled, setCheckBtnDisabled] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [btnVisible, setBtnVisible] = useState(false);
  useEffect(() => {
    setVocabulary(props.legalVocabulary.legal_english);
  }, [])
  //console.log(vocabulary[0])
  const check = (event) => {
    event.preventDefault();
    if (input) {
      setCheckBtnDisabled(true);
      if (input === vocabulary[nextWord].english_word) {
        setScore(score + 1);
        setFinalScore((score + 1) / 20 * 100)
      } else {
        setScore(score - 1);
        setFinalScore((score - 1) / 20 * 100)
      }
      setInput('');
    } else {
      alert("Please enter translation")
    }
    if (count >= 19) {
      setBtnVisible(true)
    }
  }
  const next = (event) => {
    event.preventDefault();
    if (count <= 19) {
      setNextWord(nextWord + 1);
      setCount(count + 1);
      setTranslation("");
      setCheckBtnDisabled(false);
    } else {
      setNextBtnDisabled(true);

    }
    setInput('');
  }
  const previous = (event) => {
    event.preventDefault();
    if (count > 1) {
      setNextWord(nextWord + 1);
      setCount(count - 1);
      setTranslation("");
    } else {
      setPrevBtnDisabled(true);
      setBtnVisible(true)
    }
  }
  const translate = (event) => {
    event.preventDefault();
    setTranslation(vocabulary[nextWord].english_word);
    setCheckBtnDisabled(true);
  }
  const StartAgain = () => {
    return (
      <div className='btn-center'>
        <button type="button" className='btn btn-warning' onClick={() => window.location.reload(false)}>Start again</button>
      </div>
    )
  }
  return (
    <>
      <div className="center">
        <div className="card-test">
          <p>Legal English Vocabulary - Test Mode</p>
          <div className="card-header">
            <p className='en-word'>{props.legalVocabulary.legal_english[nextWord].translation}</p>
            <p>{translation}</p>
          </div>
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              placeholder="Translation"
              value={input}
              style={{ color: input === props.legalVocabulary.legal_english[nextWord].english_word ? "green" : "" }}
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
                <button type="button" className="btn btn-info" onClick={next} disabled={nextBtnDisabled}>Next</button>
              </div>
            </div>
          </div>
          <div className='stats'>
            <p>Word: {count}</p>
            <p>Score: {score}</p>
          </div>
          <div className="progress" style={{ height: 2, marginBottom: 10 }}>
            <div className="progress-bar" role="progressbar" style={{ width: count / 20 * 100 + "%" }} aria-valuenow={count / 20 * 100} aria-valuemin="0" aria-valuemax="20"></div>
          </div>
        </div>
      </div>
      <h2 className='final-score'>Your result: {finalScore.toFixed(1)} %</h2>
      {btnVisible ? <StartAgain /> : null}
    </>
  );
}

export default LegalEnglish;