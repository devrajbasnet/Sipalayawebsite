import React, { useState } from 'react';
import './Navbar.css';
const FormRegister = () => {
  const [fullName, setFullName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [college, setCollege] = useState('');
  const [qualification, setQualification] = useState('');
  const [interest, setInterest] = useState('');
  const [programmingSkills, setProgrammingSkills] = useState('');
  const [schedule, setSchedule] = useState('');
  const [classs, setClass]=useState('');
  const [classType, setClassType] = useState('');
  const [requireInternship, setRequireInternship] = useState('');

  const handleFullNameChange = (event) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/[^a-zA-Z\s]/g, '');
    setFullName(sanitizedInput);
  };

  const handleMobileNumberChange = (event) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/\D/g, '');
    setMobileNumber(sanitizedInput);
  };
  

  const handleQualificationChange = (event) => {
    setQualification(event.target.value);
  };

  const handleInterestChange = (event) => {
    const input = event.target.value;
   
    const sanitizedInput = input.replace(/[^a-zA-Z\s]/g, '');
    setInterest(sanitizedInput);
  };
  const handleProgrammingSkillsChange = (event) => {
    setProgrammingSkills(event.target.value);
  };
  
  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };
  const handleClassTypeChange = (event) => {
    setClassType(event.target.value);
  };
  const handleRequireInternshipChange = (event) => {
    setRequireInternship(event.target.value);
  };



  return (
    <div className="form">
      <p>Fields marked with an * are required</p>
      
      <form>
        <div className="form-field">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" placeholder="Full Name"  value={fullName} 
            onChange={handleFullNameChange}/>
          <p className="character-count">3 of 3 Character(s) left</p>
        </div>
        
        <div className="form-field">
          <label htmlFor="mobileNumber">Mobile Number *</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" value={MobileNumber} 
            onChange={handleMobileNumberChange}/>
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
        <select>
            <input type="text" id="qualification" name="qualification"  value={qualification} 
            onChange={handleQualificationChange}/>
             
            <option value="">Select Qualification</option>
            <option value="SEE">SEE</option>
            <option value="+2">+2</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
        </div>
         <div className="form-field">
         <label htmlFor="Address">Address *</label>
            <input type="text" id="Address" name="address" placeholder="Address"/>
         </div>
         <div className="form-field">
  <label>Your Programming Skills? *</label>
  <div className="radio-options">
    <input type="radio" id="none" name="programmingSkills" value="None" 
    checked={programmingSkills === 'Basic'} 
   onChange={handleProgrammingSkillsChange}  />
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
         <select>
            <input type="text" id="interest" name="interset"value={interest} 
            onChange={handleInterestChange}/>
              
              <option value="">Select Qualification</option>
            <option value="Python and Django">Python and Django</option>
            <option value="MERN">MERN</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="Flutter">Flutter</option>
            <option value="Other">Other</option>
          </select>
            
         </div>
         <div className="form-field">
          <label>Your Scheduule *</label>
          <div className="radio-options">
            <input type="radio" id="Day" name="schedule" value="Day"checked={schedule === 'Day'} 
              onChange={handleScheduleChange} />
            <label htmlFor="Day">Day</label> 
            <input type="radio" id="Morning" name="schedule" value="Morning" checked={schedule === 'Morning'} 
              onChange={handleScheduleChange} />
            <label htmlFor="Morning">Morning</label> 
            <input type="radio" id="Evening" name="schedule" value="Evening"checked={schedule === 'Evening'} 
              onChange={handleScheduleChange} />
            <label htmlFor="Evening">Evening</label> <br/>
          </div>
         </div>
         <div className="form-field">
          <label>Physical class(Koteshwor,ktm)or OnlineClass *</label>
          <div className="radio-options">
            <input type="radio" id="online" name="classType" value="Online"  checked={classType === 'Online'} 
              onChange={handleClassTypeChange} />
            <label htmlFor="Online">Online</label> 
            <input type="radio" id="physical" name="classType" value="Physical"  checked={classType === 'Physical'} 
              onChange={handleClassTypeChange} />
            <label htmlFor="Physical">Physical</label> 
            </div>
            </div>
            <div className="form-field">
          <label>Do you require internship after training? *</label>
          <div className="radio-options">
            <input type="radio" id="yes" name="requireInternship" value="Yes" checked={requireInternship === 'Yes'} 
              onChange={handleRequireInternshipChange}/>
            <label htmlFor="yes">Yes</label> 
            <input type="radio" id="no" name="requireInternship" value="No" checked={requireInternship === 'No'} 
              onChange={handleRequireInternshipChange} />
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
