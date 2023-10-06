import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
                <Link to="/Info" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
                <Link to="/Events" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
                <Link to="/Wishlist" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
                <Link to="/Services" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
                <Link to="/Gallery" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
                <Link to="/ContactUs" style={{ textDecoration: 'none', color: 'white', fontSize: '5', padding: '4', textAlign: 'center' }}></Link>
     
            </ul>
        </nav>
    )
}

export default Nav