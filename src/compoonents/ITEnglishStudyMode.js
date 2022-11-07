import { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItEnglishStudyMode(props) {
  const [nextWord, setNextWord] = useState(0);
  const [count, setCount] = useState(1);
  //console.log(vocabulary[0])
  const next = (event) => {
    event.preventDefault();
    if(count <= props.ITVocabulary.it_english.length) {
      setNextWord(nextWord  + 1);
      setCount(count + 1);
    }
  }
  const previous = (event) => {
    event.preventDefault();
    if(count > 1) {
      setNextWord(nextWord  - 1);
    } else {
    }
  }
  return (
    <>
    <div className="center">
      <div className="card-test">
      <p>IT English vocabulary - Study Mode</p>
        <div className="card-header">
          <p className='en-word'>{props.ITVocabulary.it_english[nextWord].english_word}</p>
        </div>
        <div className="card-body">
        <p>{props.ITVocabulary.it_english[nextWord].translation}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex">
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-info" onClick={previous} >Pevious</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-info" onClick={next}  >Next</button>
            </div>
          </div>
        </div>
        <div>
          <p>Word: {count} / {props.ITVocabulary.it_english.length}</p>
        </div>
      </div>
    </div>
    <div className="center">
      <small><Link to="/it">Test Mode</Link></small>
    </div>
    </>
  );
}

export default ItEnglishStudyMode;