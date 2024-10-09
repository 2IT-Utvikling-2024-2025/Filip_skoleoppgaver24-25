import './App.css';

import Norge from './countries/Norge.jsx';
import Danmark from './countries/Danmark.jsx';
import Svergie from './countries/Svergie.jsx';
import Finland from './countries/Finland.jsx';

export default function App() {
  return (
    <>
      <h1>Turistnettside</h1>
      <div className="countries">
        <Norge />
        <Danmark />
        <Finland />
        <Svergie />
      </div>
    </>
  );
}
