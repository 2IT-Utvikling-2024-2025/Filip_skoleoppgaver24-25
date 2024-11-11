import { useState } from 'react';
import Student from './Student.jsx';

export default function ClassList() {
  const [elev, setElev] = useState('Filip');
  const [ClassList, setClassList] = useState([
    { id: 1, name: 'Tobias' },
    { id: 2, name: 'Lasse' },
    { id: 3, name: 'Tor' },
    { id: 4, name: 'Hanna' },
    { id: 5, name: 'Siri' },
    { id: 6, name: 'Hanna' },
    { id: 7, name: 'Siri' },
  ]);

  return (
    <>
      <h1>ClassList</h1>
      <Student
        name={elev}
        age={17}
      />
      {ClassList.map((student) => (
        <Student
          key={student.id}
          name={student.name}
        />
      ))}
    </>
  );
}
