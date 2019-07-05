import React from "react";

// import { Container } from './styles';
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <p>Home</p>
    <Link to="/about">About</Link>
  </div>
);

export default Home;
