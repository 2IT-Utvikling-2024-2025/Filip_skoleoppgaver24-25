import { useState } from 'react';
import './css/profil.css';

const ferdigheter = [
  { title: 'Programmering', upVote: 0, id: 1 },
  { title: 'IT', upVote: 0, id: 2 },
];

export default function Profil() {
  const listItems = ferdigheter.map((ferdighet) => (
    <li key={ferdighet.id}>
      {ferdighet.title}
      <VoteButton></VoteButton>
    </li>
  ));
  return (
    <>
      <div className="profil">
        <div className="profilbilde">
          <img
            className="logo"
            src="/public/profilbilde.jpg"
            alt="Bilde av meg"
          />
          <h1 className="header">Filip Tøgard</h1>
        </div>
        <p className="info">
          Hei! Jeg er interesseret i å programmere og IT i generelt. Jeg er
          alltid på jakt etter nye utfordringer og læringsmål. Vil du ha mer
          informasjon om hva jeg kan gjøre for å hjelpe deg?
        </p>
      </div>
      <br />
      <ul>{listItems}</ul>
    </>
  );
}

function VoteButton() {
  const [vote, setVote] = useState(0);

  function handleClick() {
    setVote(vote + 1);
  }

  return (
    <button
      className="button"
      onClick={handleClick}
    >
      Vote {vote} times
    </button>
  );
}
