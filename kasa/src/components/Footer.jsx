import logo from "../assets/logoKasaFooter.png"
import "../styles/styles.scss"
import React from "react"


const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
