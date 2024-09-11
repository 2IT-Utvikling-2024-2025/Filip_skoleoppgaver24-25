import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './css/App.css';
import Profil from './Profil.jsx';
import MyHobbies from './MyHobbies.jsx';
import MyList from './MyList.jsx';
import ClassTable from './ClassTable.jsx';

function App() {
  return (
    <>
      <ClassTable />
      {/* <MyList /> */}
      {/*  <MyHobbies /> */}
      {/* <Profil /> */}
    </>
  );
}

export default App;
