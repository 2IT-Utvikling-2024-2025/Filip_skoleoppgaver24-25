import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import './css/App.css';
import MyButton from './button.jsx';
import Profile from './profile.jsx';

function App() {
  let user = {
    name: 'Filip',
    age: 17,
    adress: 'Ettsted 123',
  };

  let content;
  let isLoggedIn = true;

  let time = new Date().toLocaleTimeString();
  return (
    <>
      <p>
        {user.name}, {user.age} og bor i {user.adress}
      </p>
      <div>{isLoggedIn ? <MyButton /> : <Profile />}</div>
      {time}
    </>
  );
}

export default App;
