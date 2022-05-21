import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="quiz">Quiz</Link>
      <Link to="stories">Stories</Link>
      <Link to="photos">Photos</Link>
    </div>
  );
};

export default NavBar;
