import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./css/AllQuestions.css";
import {NavLink} from "react-router-dom";
function AllQuestions() {
  // console.log();
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <NavLink to = '/question'>Whats up how you doing?</NavLink>
              <div
            style={{
              width: "90%",
            }}>
            <div>We have to consider the fact that we are all human being afterall.</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
          </div>
          <div className="author">
            <small></small>
            <div className="auth-details">
              <Avatar />
              <p>
                username
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;