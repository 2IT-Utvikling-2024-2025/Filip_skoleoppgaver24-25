import { useEffect, useState } from 'react';
import './InputTypes.css';

export default function InputTypes() {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [fag, setFag] = useState('');
  const [fav, setFav] = useState('');
  const [color, setColor] = useState();
  return (
    <>
      <div className="container">
        <form>
          <label>
            <h3>Hva er navnet ditt?</h3>
            <input
              className="myInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <h3>Hvor gammel er du?</h3>
            <input
              className="myInput"
              type="number"
              value={age}
            />
          </label>

          <label>
            <h3>Hvilket programmfag liker du best?</h3>
          </label>

          <form onChange={(e) => setFag(e.target.value)}>
            <label>
              <input
                type="radio"
                name="Favoritt fag"
                value="Utvikling"
                defaultChecked
              ></input>
              Utvikling
            </label>
            <label>
              <input
                type="radio"
                name="Favoritt fag"
                value="Driftsstøtte"
              ></input>
              Driftsstøtte
            </label>
            <label>
              <input
                type="radio"
                name="Favoritt fag"
                value="Brukerstøtte"
              ></input>
              Brukerstøtte
            </label>
          </form>

          <label>
            <h3>Hvorfor er {fag} favoritten din?</h3>
            <textarea></textarea>
          </label>

          <label>
            <h3>Hva er favoritt fargen din?</h3>
            <input
              type="color"
              value={color}
            />
          </label>

          <label>
            <h3>Hva er din epost?</h3>
            <input
              className="myInput"
              type="email"
            />
          </label>

          <label>
            <h3>Har du et kjæledyr</h3>

            <input
              className="myInput"
              type="checkbox"
            />
          </label>

          <label>
            <h3>Når er du født?</h3>
            <input
              className="myInput"
              type="date"
            />
          </label>

          <label>
            <h3>Hva er favoritt måneden din?</h3>
            <input
              className="myInput"
              type="month"
            />
          </label>

          <label>
            <h3>Vil du resete alle spørsmålene for undersøkelsen?</h3>
          </label>
          <input
            type="reset"
            value="Reset"
          ></input>
        </form>
      </div>
    </>
  );
}
