import { useState } from 'react';
import './css/MyHobbies.css';

const hobbies = [
  { title: 'Gaming', isFavorite: true, upVote: 0, id: 1 },
  { title: 'Lydbøker', isFavorite: false, upVote: 0, id: 2 },
];

export default function MyHobbies() {
  const listItems = hobbies.map((hobby) => (
    <li
      key={hobby.id}
      style={{ color: hobby.isFavorite ? 'magenta' : 'white' }}
    >
      {hobby.title}
      <VoteButton></VoteButton>
    </li>
  ));
  return (
    <>
      <h1 className="header">Filip Tøgard</h1>

      <ul>{listItems.sort((b, a) => b.upVote + a.upVote)}</ul>
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
