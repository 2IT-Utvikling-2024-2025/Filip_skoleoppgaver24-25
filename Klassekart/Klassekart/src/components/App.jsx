import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassList from './ClassList';
import './App.css';
import StudentPage from './StudentPage';
import Home from './Home.jsx';
import About from './About.jsx';
import Layout from './Layout.jsx';
import No from './No.jsx';
import StudentCreate from './StudentCreate.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />

        <Routes>
          <Route path="/" />
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="classlist"
            element={<ClassList />}
          />
          <Route
            path="studentpage/:name"
            element={<StudentPage />}
          />
          <Route
            path="StudentCreate"
            element={<StudentCreate />}
          />
          <Route
            path="*"
            element={<No />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
