import React from 'react';
import './Navbar.css'; 
import end from '../../Assests/new.png'; 

const Ending = () => {
  return (
    <div className='Ending'>
      <div className="left-section">
        <div className="contact-info">
        <img src={end} alt="Sipalaya InfoTech" className='logo'/>
        <p>
          At <b>Sipalaya</b>, We're here to help you thrive.<br/> Learn in-demand skills, get hired, and advance your career with us.<br/> Join today and start your journey to success.<br/>
            <b>WhatsApp / Phone:</b> 9851344071 | 9806393939<br />
            <b>Gmail:</b> infotech@sipalaya.com
          </p>
        </div>
      </div>
      <div className="center-section">
        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>Dashboard</li><br/>
            <li>Courses</li><br/>
            <li>Certificate Verification</li><br/>
            <li>Contact US</li><br/>
            <li>Refund & Cancellation Policy</li><br/>
          </ul>
        </div>
      </div>
      <div className="left-section">
        <div className="courses">
          <h2>Explore Our Courses</h2>
          <ul>
            <li>Python With Data Science | 3 Months</li><br/>
            <li>MERN Stack | 3 Months</li><br/>
            <li>Full Stack Web Development in Python With Django | 3 Months</li><br/>
          </ul>
        </div>
      </div>

     
    </div>
  );
}

export default Ending;
