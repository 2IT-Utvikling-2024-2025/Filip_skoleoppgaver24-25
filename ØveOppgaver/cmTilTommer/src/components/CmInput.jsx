import { useState } from 'react';

let nextId = 0;

export default function CmInput() {
  const [cm, setCm] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setList([...list, { id: nextId++, name: cm / 2.54 }]);
        }}
      >
        <label>
          <h1>Enter Item here</h1>
          <br />
          <input
            className="textInput"
            type="number"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
          />
        </label>
        <input
          type="submit"
          className="submit"
        />
      </form>
      <ul>
        {list.map((lists) => (
          <li key={lists.id}>
            {lists.name}
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => setList(list.filter((l) => l.id !== lists.id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
