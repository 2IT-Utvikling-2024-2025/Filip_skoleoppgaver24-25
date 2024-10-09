import './countries.css';
import { useState } from 'react';
export default function Svergie() {
  const [nok, setNok] = useState([]);
  const convert = nok * 0.97;
  let temp = Math.floor(Math.random() * 60);
  const weatherStatus = ['sol', 'regn', 'overskyet'];
  const RandomWeatherStatus =
    weatherStatus[Math.floor(Math.random() * weatherStatus.length)];

  function handleClick(e) {
    e.preventDefault();
    setNok(convert);
  }
  return (
    <>
      <div className="svergie">
        <div className="header">
          <h2>Sverige</h2>
        </div>
        <div className="information">
          <div className="about">
            <p>
              Sverige er reisemålet som passer perfekt for ferie med barn.
              Ferielandet ungene elsker ligger ikke lenger unna enn en liten
              kjøretur, og det er enkelt og trygt å reise med familien på ferie
              over grensen.
            </p>
          </div>
          <div className="weather">
            {temp}°<p>{RandomWeatherStatus}</p>
          </div>
        </div>
        <div className="converter">
          <form>
            <input
              type="number"
              value={nok}
              placeholder="Input value in NOK to convert to SKK"
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
    </>
  );
}
