import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
  return (
    <div>
          <h1>Page invalides</h1>
          <NavLink exact to ='/'>
              Retour a l'accueil
          </NavLink>
    </div>
  )
}

export default Notfound
