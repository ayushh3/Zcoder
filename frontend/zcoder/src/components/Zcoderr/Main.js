import React from "react";
import { NavLink } from "react-router-dom";
// import {FilterList} from 'react-admin';
import AllQuestions from "./AllQuestions";
import FilterListIcon from '@mui/icons-material/FilterList';
import './css/Main.css'
function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <NavLink to = "/add-question">
            <button>Ask Question</button>
          </NavLink>
        </div>
        <div className="main-dec">
          <p>All Question Stat</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <NavLink>Newest</NavLink>
              </div>
              <div className="main-tab">
                <NavLink>Active</NavLink>
              </div>
              <div className="main-tab">
                <NavLink>Older</NavLink>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
            </div>
            <div className="Questions">
                <div className="Question">
                    <AllQuestions />
                    <AllQuestions />
                    <AllQuestions /> 
                </div>
            </div>
      </div>
    </div>
  );
}

export default Main;