import { useState } from 'react';

let nextId = 0;

export default function TodoInput() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setList([...list, { id: nextId++, name: item, done: false }]);
        }}
      >
        <label>
          Enter Item here
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ul>
        {list.map((lists) => (
          <li key={lists.id}>
            {lists.name}
            <input
              type="checkbox"
              onClick={() => setList(list.filter((l) => l.id !== lists.id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
