import React from "react";
import "./main-header.css";
import { Link } from "react-router-dom";
function Mainheader() {
  return (
    <header className="main-header">
      <Link to="/">GBM</Link>
    </header>
  );
}
export default Mainheader;
