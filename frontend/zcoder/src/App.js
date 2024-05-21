import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate,
} from 'react-router-dom';

import Zcoderr from './components/Zcoderr';

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
  );
}

export default App;

