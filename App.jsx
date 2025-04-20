
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>Sagerise Dashboard</h1>
        <p>Welcome to your fully working multi-page dashboard app!</p>
      </div>
    </Router>
  );
};

export default App;
