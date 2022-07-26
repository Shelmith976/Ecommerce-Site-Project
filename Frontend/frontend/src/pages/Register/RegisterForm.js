import React from 'react';
import './Register.css';
import {Container} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import useForm from './useForm';
import validateInfo from './validateInfo'
const RegisterForm = ({submitForm}) => {
  const {handleChange,values,handleSubmit,errors,isSubmitting} = useForm(submitForm,validateInfo);
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form className="form-inputs text-center h-100" id="sign-in-form" onSubmit={handleSubmit}>
        <img className="mb-3 fast-service-logo" src="https://i.pinimg.com/564x/d4/0c/2a/d40c2a4b7250497223673f592349ac05.jpg" alt="Fast Service logo"/>
        <h1 className="mb-3 fs-3 fw-normal">Register</h1>
      
        <Form.Group className="mb-3">
          <Form.Control className="position-relative" type="text" size="lg"
          placeholder="Username" id="username" name="username" value={values.username}
          onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="position-relative" type="email" size="lg"
          placeholder="Email Address" id="email" name="email" value={values.email}
          onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control className="position-relative" type="password" size="lg"
          placeholder="Password" id="password" name="password" value={values.password}
          onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </Form.Group>
        <div className="d-grid">
          <Button disabled={isSubmitting} className="form-input-btn" variant="primary" type="submit" size="lg">
            {isSubmitting?"Loading...":"Create account"}
            </Button>
            <span>Already have an account?<a href="Login">Login</a></span>
        </div>
        </Form>
    </Container>
  )
}

export default RegisterForm
