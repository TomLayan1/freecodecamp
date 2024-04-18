import React, {useState} from 'react'

const Form = () => {
  // Use state to hold any data typed in any input to maintain up to date state for every change that happens in any field in our form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  console.log(formData);

  const handleChange = (event) => {
    // pass a parameter to refers to the previous value of the state object
    // so you can get access to the current or previous value of the object
    setFormData((prevFormData) => {
      // return an object that returns the previous value of the state object and the changes made to specific properties
      return {...prevFormData, [event.target.name]: event.target.value}
    })
  }

  return (
    <div>
      <form action='' method='' id=''>
        <input type='text' name='firstName' placeholder='First Name' onChange={handleChange}/>
        <input type='text' name='lastName' placeholder='Last Name' onChange={handleChange}/>
        <input type='email' name='email' placeholder='Enter Email Here' onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Form