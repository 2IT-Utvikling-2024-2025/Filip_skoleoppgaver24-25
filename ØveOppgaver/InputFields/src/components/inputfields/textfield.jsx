import { useState } from 'react';
import './inputfields.css';

export default function Textfield() {
  const [inputContent, setInputContent] = useState('');
  function handleChange(e) {
    console.log(e);
    setInputContent(e.target.value);
  }

  return (
    <>
      {' '}
      <div className="container">
        <div className="section">
          <div className="question">
            <h1>Hva er adressen til Drømtorp VGS?</h1>
          </div>

          <div className="answer">
            <label htmlFor="">
              Text input:
              <input
                onChange={handleChange}
                className="myInput"
                type="text"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
