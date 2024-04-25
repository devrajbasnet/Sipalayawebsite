import React from 'react'
import './Navbar.css'
import logo from '../../Assests/new1.png'
import logoes from '../../Assests/search-w.png'
import cart from '../../Assests/c.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>All Courses</li>
            <li>Verify Certificates</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className='search-box'>
            <input type="text" placeholder='search'/>
            <imgs src={logoes} alt="" />
        </div>
        <img src={cart} alt="" className='cart'/>
        <div className="background-tect">
          <p>(0)</p>
        </div>
    </div>

  
    
  )
}

export default Navbar