import './countries.css';
import { useState } from 'react';
export default function Danmark() {
  let temp = Math.floor(Math.random() * 60);
  const [nok, setNok] = useState([]);
  const convert = nok * 0.63;
  const weatherStatus = ['sol', 'regn', 'overskyet'];
  const RandomWeatherStatus =
    weatherStatus[Math.floor(Math.random() * weatherStatus.length)];
  function handleClick(e) {
    e.preventDefault();
    setNok(convert);
  }

  return (
    <>
      <div className="danmark">
        <div className="header">
          <h2>Danmark</h2>
        </div>
        <div className="information">
          <div className="about">
            <p>
              Danmark er full av opplevelser for hele familien, men det er
              særlig to danske attraksjoner som alle kjenner og elsker: Tivoli i
              København og Legoland Billund.
            </p>
          </div>
          <div className="weather">
            {temp}°<p>{RandomWeatherStatus}</p>
          </div>
          <div className="converter">
            <form>
              <input
                type="number"
                value={nok}
                placeholder="Input value in NOK to convert to DKK"
                onChange={(e) => setNok(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleClick}
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
