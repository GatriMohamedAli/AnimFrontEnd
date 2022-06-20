import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../Components/Navbar";
import ListEmp from "../Components/ListEmp";
import Bar from "../Components/Bar";
import { Router } from "react-router";
const Home = () => {
  return (
    <>
      <Navbar />
      <ListEmp />
    </>
  );
};

export default Home;
