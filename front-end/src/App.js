import React from 'react';
import { Routes, Route } from "react-router";
import {Homepage, Dashboard, Profile, Facilities} from "./Pages/index";

import './App.css';
import { useGlobalContext } from './Context/appContext';

function App() {

   return (
   
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/profile" element={<Profile />} />
      <Route path="dashboard/facilities" element={<Facilities />} />
    </Routes>
  );
}

export default App;