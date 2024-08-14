import React from "react"
import { NavLink } from "react-router-dom";
import "../styles/styles.scss"
import logo from "../assets/logoKasa.png"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <h1>
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src={logo} alt="Logo de Kasa" />
      </NavLink>
      </h1>
      <Nav />
    </header>
  )
}

export default Header
