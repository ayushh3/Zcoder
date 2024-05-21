import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import PublicIcon from '@mui/icons-material/Public';
import Star from "@mui/icons-material/Star";
import { NavLink } from "react-router-dom";
import "./css/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <NavLink>Home</NavLink>
          </div>
          <div className="sidebar-option">
            <a>PUBLIC</a>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <NavLink>Question</NavLink>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <Star />
                <NavLink>Explore Collectives</NavLink>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>Find A Job</p>
            <div className="link">
              <div className="link-tag">
                <NavLink>Question</NavLink>
              </div>
            </div>
              </div>
              <div className="sidebar-option">
                <p>TEAMS</p>
                        <div className="link-tag">
                            <WorkIcon />
                <NavLink>Companies</NavLink>
              </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;