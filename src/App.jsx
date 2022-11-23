import React from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'

const Hello = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Hello</p>
      <button onClick={() => navigate("/news")}>News</button>
      <button onClick={() => navigate("/about")}>About</button>
    </>
  );
};

const News = () => {
  return <h1>News</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}

export default App

