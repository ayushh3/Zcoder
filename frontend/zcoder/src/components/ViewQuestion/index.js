import React, { useEffect, useState } from "react";
import Sidebar from "../Zcoderr/Sidebar";
import "../Zcoderr/css/index.css";
import MainQuestion from "./MainQuestion";

function Index() {
  return (
    <div className="zcoder-index">
      <div className="zcoder-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default Index;