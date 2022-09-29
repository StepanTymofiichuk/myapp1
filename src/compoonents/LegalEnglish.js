import { useState } from 'react';
import './App.css';

function LegalEnglish(props) {
  const [input, setInput] = useState('');
  const check = (event) => {
    event.preventDefault();
    if (input) {
      alert(input)
    } else {
      alert('Please enter a translation!');
    }
    setInput('')
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p>{props.legalVocabulary[0].translation}</p>
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
              <button type="button" className="btn btn-info" disabled>Previous</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-secondary" onClick={check} disabled
                >Check</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-success" disabled
                >Translate</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn btn-info" disabled>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalEnglish;