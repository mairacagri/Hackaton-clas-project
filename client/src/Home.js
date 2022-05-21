import React from "react";
import  image from "./images/lnd8.jpg"

const Home = () => {
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={image} alt="lnd8" />
        <div className="text">
         <h1> Welcome to London Class 8</h1>
        </div>
      </div>
      <h2>Who WE ARE</h2>
      <p>
        We are a group of very creative minded people, working towards changing
        the face of the Tech industry.
      </p>
      <p>
        London class 8 is very unique! This is a class of very talented people
        from different parts of the world.
      </p>
      <p>
        Here, we work together as a team. We help each other so no one is left
        behind and we encourage each other to be the best version of themselves.
      </p>
      <p>
        We are a class of forty-seven purpose driven individuals who are ready
        to change the future of tech.
      </p>
      <p>
        We didn't just learn how to code. We learnt how to:
        <ul>
          <li>Help each other</li>
          <li>Ask for help when we are stuck</li>
          <li>Work as a team</li>
          <li>Manage our time very well</li>
          <li>Give and receive constructive feedback</li>
          <li>Have fun</li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
