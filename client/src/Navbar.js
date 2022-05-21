import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/client/quiz">Quiz</Link>
      <Link to="/client/stories">Stories</Link>
      <Link to="/client/photos">Photos</Link>
    </div>
  );
};

export default NavBar;
