import React,{useState} from 'react'
import RegisterForm from './RegisterForm.js';
import RegisterSuccess from './RegisterSuccess.js';
const Register = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);
    function submitForm()  {
        setIsSubmitted(true);
    }
  return (
    <>
      <div className="container">
        {!isSubmitted ? <RegisterForm submitForm={submitForm} /> : <RegisterSuccess />}
      </div>
    </>
  )
}

export default Register
