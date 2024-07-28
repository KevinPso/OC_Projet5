import React from "react"
import logo from "../assets/logoKasa.png"

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="Logo de Kasa" />
      </h1>
    </header>
  )
}

export default Header
