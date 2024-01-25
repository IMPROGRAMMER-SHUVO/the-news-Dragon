import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form, FormText } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authprovider/AuthProviders';

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const location=useLocation()
  console.log('login page location',location)
  const from=location.state?.from?.pathname||'/catagory/0'

  const navifate=useNavigate()
  const handleLogin=event=>{
    event.preventDefault();
const form=event.target;
const email=form.email.value;
const password=form.password.value;
console.log(email,password);
 signIn(email,password)
 .then(result=>{
  const loggedUser=result.user;
  console.log(loggedUser)
 //navifate('/catagory/0')
 navifate(from,{replace:true})
 })
 .catch(error=>{
  console.log(error)
 })

  }
    return (
        <Container className='w-25 mx-auto'>
            <h3> Plese Login</h3>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
       </Form.Group>
      
      
     
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br></br>
<Form.Text className='text-secondary'>
Don't have an Account?<Link to='/register'>Register</Link>
</Form.Text>

      <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;