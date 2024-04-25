import React from 'react';
import './Navbar.css';
const FormRegister = () => {
  return (
    <div className="form">
      <p>Fields marked with an * are required</p>
      
      <form>
        <div className="form-field">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
          <p className="character-count">3 of 3 Character(s) left</p>
        </div>
        
        <div className="form-field">
          <label htmlFor="mobileNumber">Mobile Number *</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" />
          <p className="character-count">10 of 10 Character(s) left</p>
        </div>
        
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        
        <div className="form-field">
            <label htmlFor="college">Your College/ Institution Name *</label>
            <input type="text" id="You College/Institution Name" name="You College/Institution Name" placeholder="You College/Institution Name"/>
        </div>
        <div className="form-field">
        <label htmlFor="Qualification">Qualification *</label>
            <input type="text" id="qualification" name="qualification" placeholder="Qualification"/>
        </div>
         <div className="form-field">
         <label htmlFor="Address">Address *</label>
            <input type="text" id="Address" name="address" placeholder="Address"/>
         </div>
         <div className="form-field">
  <label>Your Programming Skills? *</label>
  <div className="radio-options">
    <input type="radio" id="none" name="programmingSkills" value="None" />
    <label htmlFor="none">None</label>
    <input type="radio" id="basic" name="programmingSkills" value="Basic" />
    <label htmlFor="basic">Basic</label>

    <input type="radio" id="intermediate" name="programmingSkills" value="Intermediate" />
    <label htmlFor="intermediate">Intermediate</label>

    <input type="radio" id="other" name="programmingSkills" value="Other" />
    <label htmlFor="other">Other</label>
  </div>
</div>
<div className="form-field">
         <label htmlFor="interest">I am Interest in *</label>
            <input type="text" id="interest" name="Interset" placeholder="Python"/>
         </div>
         <div className="form-field">
          <label>Your Scheduule *</label>
          <div className="radio-options">
            <input type="radio" id="none" name="Morning" value="Morning"/>
            <label htmlFor="Morning">Morning</label> 
            <input type="radio" id="none" name="Day" value="Day"/>
            <label htmlFor="Day">Day</label> 
            <input type="radio" id="none" name="Evening" value="Evening"/>
            <label htmlFor="Evening">Evening</label> <br/>
          </div>
         </div>
         <div className="form-field">
          <label>Physical class(Koteshwor,ktm)or OnlineClass *</label>
          <div className="radio-options">
            <input type="radio" id="none" name="Online" value="Online"/>
            <label htmlFor="Online">Online</label> 
            <input type="radio" id="none" name="Physical" value="Physical"/>
            <label htmlFor="Physical">Physical</label> 
            </div>
            </div>
            <div className="form-field">
          <label>Do you require internship after training? *</label>
          <div className="radio-options">
            <input type="radio" id="none" name="Yes" value="Yes"/>
            <label htmlFor="yes">Yes</label> 
            <input type="radio" id="none" name="No" value="No"/>
            <label htmlFor="No">No</label> 
            </div>
            </div>
        <div className="form-field">
          <label htmlFor="queries">Any Queries?</label>
          <textarea id="queries" name="queries" placeholder="Any Queries?" rows="4" />
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormRegister;
