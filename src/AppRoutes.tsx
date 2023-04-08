import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import FloppaTv from "./FloppaTv";
import IconicFloppa from "./IconicFloppa";
import FloppaQuiz from './FloppaQuiz';
import Results from "./Results";

const AppRoutes = () => {
  return ( //this function will return all the routes and export it so they can be placed on the Browser Router on the main file
    <Routes> 
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/floppatv" element={<FloppaTv></FloppaTv>}></Route>
    <Route path="/iconicfloppa" element={<IconicFloppa></IconicFloppa>}></Route>
    <Route path="/floppaquiz" element={<FloppaQuiz></FloppaQuiz>}></Route>
    <Route path="/results" element={<Results></Results>}></Route>

    </Routes>
  );
};

export default AppRoutes;