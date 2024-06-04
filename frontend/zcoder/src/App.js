import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate,
} from 'react-router-dom';

import Question from './components/Add-Question/Question'
import ViewQuestion from './components/ViewQuestion'

import Zcoderr from './components/Zcoderr';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/add-question" element={<Question />} />
          <Route path="/question" element={<ViewQuestion />} />
          <Route path="/" element={<Zcoderr />} />
          <Route path="/chat" element={<ChatRoom />} />
          {/* Redirect to home if no match */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


