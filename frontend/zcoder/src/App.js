import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
// import {
//   BrowserRouter as Router, 
//   Routes, 
//   Route,
//   Navigate,
// } from 'react-router-dom';

import Question from './components/Add-Question/Question'
import ViewQuestion from './components/ViewQuestion'

import Zcoderr from './components/Zcoderr';
import ChatRoom from './components/ChatRoom';
import Auth from './components/auth';
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from 'react';
import {selectUser,login,logout} from "./feature/userSlice";
import {auth} from './firebase';

function App() {
  const user=useSelector(selectUser);
    const dispatch=useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            dispatch(
              login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                displayName: authUser.displayName,
                email: authUser.email,
              })
            );
          } else {
            dispatch(logout());
          }
        });
    
        return () => unsubscribe(); // Cleanup subscription on unmount
      }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Zcoderr />} />
          <Route path="/add-question" element={<Question />} />
          <Route path="/question" element={<ViewQuestion />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/auth" element={<Auth/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


