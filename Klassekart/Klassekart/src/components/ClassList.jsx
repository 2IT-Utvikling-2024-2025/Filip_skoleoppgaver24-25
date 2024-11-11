import { useState } from 'react';
import Students from './Students.jsx';
export default function ClassList() {
  const [ClassList, setClassList] = useState([
    { id: 1, age: 17, name: 'Filip' },
    { id: 2, age: 17, name: 'Nahuel' },
    { id: 3, age: 17, name: 'Andreas' },
    { id: 4, age: 19, name: 'Jørgen' },
    { id: 5, age: 16, name: 'Felix' },
    { id: 6, age: 17, name: 'Svein' },
    { id: 7, age: 17, name: 'Noah' },
  ]);

  return (
    <>
      <h1>ClassList</h1>
      {ClassList.map((student) => (
        <Students
          key={student.id}
          name={student.name}
          age={student.age}
        />
      ))}
    </>
  );
}
