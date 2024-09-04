import './css/button.css';

export default function MyButton() {
  let navn = 'Filip';

  function handleClick() {
    navn = document.getElementById('nyttNavn').value;
    console.log(navn);
  }

  return (
    <>
      <button
        className="buttonstyle"
        onClick={handleClick}
      >
        Im a button
      </button>
      <h1>{navn}</h1>
    </>
  );
}
