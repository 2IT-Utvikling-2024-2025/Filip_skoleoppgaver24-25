import './countries.css';
import { useState } from 'react';

export default function Finland() {
  const [nok, setNok] = useState([]);
  const convert = nok * 0.085517;
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
      <div className="finland">
        <div className="header">
          <h2>Finland</h2>
        </div>
        <div className="information">
          <div className="about">
            <p>
              Landet er kjent for sin rike saunakultur, tusenvis av innsjøer og
              uendelige skoger. Finsk Lappland tilbyr uberørt villmark og
              fantastiske naturopplevelser. Vinteren lokker med nordlys og
              snøaktiviteter, mens sommeren byr på midnattssol, vakker natur, og
              kulturell blomstring. Landet er rikt på opplevelser året rundt.
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
              placeholder="Input value in NOK to convert to EUR"
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
