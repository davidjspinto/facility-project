import React from 'react';
import { Routes, Route } from "react-router";
import {Homepage, Dashboard, Profile, Facilities, SingleFacility} from "./Pages/index";

import './App.css';
import { useGlobalContext } from './Context/appContext';

function App() {

   return (
   
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/profile" element={<Profile />} />
      <Route path="dashboard/facilities" element={<Facilities />} /> 
      <Route path="dashboard/facility/:facilityName" element={<SingleFacility />} />
    </Routes> 
  );
}

export default App;