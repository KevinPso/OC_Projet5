import React from "react"
import "../styles/styles.scss"
import logo from "../assets/logoKasa.png"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="Logo de Kasa" />
      </h1>
      <Nav />
    </header>
  )
}

export default Header
