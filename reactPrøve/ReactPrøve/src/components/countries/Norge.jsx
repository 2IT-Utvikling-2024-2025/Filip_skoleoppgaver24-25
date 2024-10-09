import './countries.css';
export default function Norge() {
  let temp = Math.floor(Math.random() * 60);
  const weatherStatus = ['sol', 'regn', 'overskyet'];
  const RandomWeatherStatus =
    weatherStatus[Math.floor(Math.random() * weatherStatus.length)];
  return (
    <>
      <div className="norge">
        <div className="header">
          <h2>Norge</h2>
        </div>
        <div className="information">
          <div className="about">
            <p>
              Kjent som landet med midnattssol, er Norge et land som tilbyr
              enestående opplevelser året rundt. Kultur og kosmopolitiske byer
              sitter side om side med av noen av det vakreste landskapet i
              verden, noe som skaper et land som er helt unikt. Noen av de mest
              unike bygningene vi har i Norge er stavkirker.
            </p>
          </div>
          <div className="weather">
            {temp}°<p>{RandomWeatherStatus}</p>
          </div>
        </div>
      </div>
    </>
  );
}
