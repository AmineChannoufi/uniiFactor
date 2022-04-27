import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Adherent from "./pages/Adherent";
import Pres from "./pages/Presentation";
import Login from "./pages/Login";
import Admin from "./dashboard/Admin";
import Normal from "./dashboard/Normal";
import Contact from "./pages/Contact";
import SuivieDemande from "./dashboard/SuivieDemande";
import Presentation from "./pages/Presentation";
import Details from "./dashboard/Details";
// import AddEdiT from "./dashboard/AddEdiT";
import View from "./dashboard/View";
import UpdateUser from "./dashboard/Adherent/UpdateUser";


function App() {
  return (
    <Routes>
            <Route path="/register" element={<Registration />} />
            <Route path="/Normal" element={<Normal />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/" element={<Home/>} />
            <Route path="/Presentation" element={<Presentation/>} />
            <Route path="/Adherent" element={<Adherent/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Normal/:id" element={<Normal/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/SuivieDemande" element={<SuivieDemande/>} />
            <Route path="/update/:id" element={<Details />} />
            {/* <Route path="/addContact" element={<AddEdiT/>} /> */}
            <Route path="/View/:id" element={<View />} />
            <Route path="/update/:id" element={<Details />} />
            <Route path="/update/:id" element={<UpdateUser />} />









    </Routes>
  );
}

export default App;
