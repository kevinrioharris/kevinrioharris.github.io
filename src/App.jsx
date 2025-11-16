import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;