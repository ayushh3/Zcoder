import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate,
} from 'react-router-dom';

import Zcoderr from './components/Zcoderr';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Zcoderr />} />
        </Routes>
      </Router>
    </div>
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



