import './Students.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Students(props) {
  return (
    <div className="student">
      <div className="name">{props.name}</div>
      <div className="age">{props.age}</div>
    </div>
  );
}
