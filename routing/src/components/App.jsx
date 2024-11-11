import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Layout from './Layout.jsx';
import NoPage from './NoPage.jsx';
import ClassList from './ClassList.jsx';
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
            path="ClassList"
            element={<ClassList />}
          ></Route>
          <Route
            path="*"
            element={<NoPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
