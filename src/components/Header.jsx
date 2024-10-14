import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
return (
<div className='header_container'>
    {/* Logo */}
    <div>
        <h1>Natural Farms</h1>
    </div>

    {/* Search Bar */}
    <div class="header_search">
        <div class="search_bar">
            <input type="text" placeholder="Search here..."></input>
            <button className='search_button'>
                Search
            </button>
        </div>
    </div>

    {/* Navigation Links */}
    <div>
    <Link to='/' className='header_button'>Home</Link>&nbsp;
    <Link to='/signin' className='header_button'>Singin</Link>&nbsp;
    <Link to='/signup' className='header_button'>Signup</Link>&nbsp;
    <Link to='/products' className='header_button'>Products</Link>&nbsp;
    <Link to='/contactus' className='header_button'>Contact Us</Link>&nbsp;
    <Link to='/footer' className='header_button'>Footer</Link>
    </div>
</div>
)
}

export default Header
