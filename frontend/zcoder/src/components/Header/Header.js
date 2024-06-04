import React from "react";
import "./css/index.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          
          <Link to="/">
            <img
              src="https://thumbs.dreamstime.com/b/zc-logo-design-template-vector-illustration-zc-logo-design-template-vector-231538616.jpg"
              alt="logo"
            />
          </Link>
          {/* <a href="/">
            
          </a> */}

          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            {window.innerWidth < 768 && <SearchIcon />}

            <Avatar
              style={{
                cursor: "pointer",
              }}
            />
            <InboxIcon />
            <HelpIcon />
            <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
            <img
              src="https://thumbs.dreamstime.com/b/zc-logo-design-template-vector-illustration-zc-logo-design-template-vector-231538616.jpg"
              alt="zcoder"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;