import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';
import './css/App.css';
import MyButton from './button.jsx';
import Profile from './profile.jsx';

function App() {
  return (
    <>
      <MyButton />
      <Profile />
    </>
  );
}

export default App;
