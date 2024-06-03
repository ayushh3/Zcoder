import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/chatRoom" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


