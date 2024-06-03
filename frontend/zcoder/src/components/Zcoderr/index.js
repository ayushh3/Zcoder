import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";

function Index() {
  return (
    <div className="zcoder-index">
      <div className="zcoder-index-content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Index;