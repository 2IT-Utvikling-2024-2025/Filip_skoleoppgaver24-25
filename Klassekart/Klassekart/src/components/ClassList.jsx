/* import { useState } from 'react';
import { Link } from 'react-router-dom';
import Students from './Students.jsx';
import jsonList from './Section.json';
export default function ClassList() {
  return (
    <div className="Section-parent">
      {Object.entries(jsonList).map(([sectionName, sectionItems]) => (
        <div
          key={sectionName}
          className="Section"
        >
          {sectionItems.map((item) => (
            <Link
              to={'http://localhost:5173/studentpage/' + item.name}
              key={item.id}
            >
              <Students
                key={item.id}
                name={item.name}
                age={item.age}
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ClassList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student) => (
        <Link
          to={'http://localhost:5173/studentpage/' + student.name}
          key={student.id}
        >
          <div key={student.id}>
            <p>{student.name}</p>
            <p>{student.age}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
