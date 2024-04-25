import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import RegisterForm from './Components/Navbar/RegisterForm'
import FormRegister from './Components/Navbar/FormRegister'
import Ending from './Components/Navbar/Ending'


const App = () => {
  return (
    <div className='container'>
    <Navbar/>
    <RegisterForm/>
    <FormRegister/>
    <Ending/>
    </div>
  )
}

export default App