import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Common from './pages/Common';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="animated-background"></div>
      <Routes>
        <Route path="/" element={<Common />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </Router>
  );
}

export default App;