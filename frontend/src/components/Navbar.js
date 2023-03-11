import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoImg from "../images/logo.png";
import { NavLink } from "react-router-dom"
import img1 from "../images/logo.png"
import "../App.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function Navbar() {
  
  return (
    <>
      <nav>
        <div className="navbar-logo">
          <a href="#"><img src={img1} alt="Logo"></img></a>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Accuiel</a></li>
          <li><NavLink to={"/books1"}>Livres</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/users"}>Connexion</NavLink></li>
        </ul>
        <div className="navbar-auth">
        <Link to="/admine">Admine</Link>
        </div>

      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;
