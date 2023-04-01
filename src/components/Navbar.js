import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export const Navbar = () => {

const auth = useAuth();

 const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold': 'normal',
            textDecoration: isActive ? 'none': 'underline'
        }
    }

  return (
    <nav>
        <NavLink styles={navLinkStyles} to='/'>Home</NavLink>
        <NavLink styles={navLinkStyles} to='/about'>About</NavLink>
        <NavLink styles={navLinkStyles} to='/lazy-content'>Lazy Content</NavLink>
        <NavLink styles={navLinkStyles} to='/products'>Products</NavLink>
        <NavLink styles={navLinkStyles} to='/profile'>Profile</NavLink>
        {
          !auth.user && (
            <NavLink styles={navLinkStyles} to='/login'>Login</NavLink>
            )
        }
    </nav>
  )
}
