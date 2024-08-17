import React from "react"
import ReactDOM from "react-dom/client"
import Router from "./Router"

// Affiche le contenu de l'application dans le DOM vers la div "root".
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
