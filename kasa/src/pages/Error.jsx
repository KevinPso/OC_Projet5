import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"

const Error = () => {
  return (
    <>
      <Header />
      <div className="error">
        <h1 className="error-title">404</h1>
        <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
        <Link className='error-goBack' to='/'>Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  )
}

export default Error
