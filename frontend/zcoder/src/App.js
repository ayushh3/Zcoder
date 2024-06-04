import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/add-question" element={<Question />} />
          <Route path="/question" element={<ViewQuestion />} />
          <Route path="/" element={<Zcoderr />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

