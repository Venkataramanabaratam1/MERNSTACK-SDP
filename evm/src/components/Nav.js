import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/Login" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Login</Link>
                <Link to="/Signup" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}>Sign Up</Link>
            </ul>
        </nav>
    )
}

export default Nav