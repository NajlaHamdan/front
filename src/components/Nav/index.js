import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <Link to="/">login</Link>
            <Link to="/Home">home</Link>
            <Link to="/Meals">meal</Link>
            <Link to="/register">register</Link>
            <Link to="/profile">profile</Link>
        </div>
    )
}

export default Nav
