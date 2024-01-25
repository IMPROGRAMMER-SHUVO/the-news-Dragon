import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authprovider/AuthProviders';

const Register = () => {
    const {createUser}=useContext(AuthContext)
   const [accepted,setAccepted]=useState(false)
    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const name =form.name.value;
        const Photo=form.Photo.value
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,Photo,email,password)
        createUser(email,password)
        .then(result=>{
          const createdUser=result.user;
          console.log(createdUser)
        })
        .catch(error=>{
          console.log(error)
        })



 }
 const handleaccepeted=event=>{
  setAccepted(event.target.checked)

    }
    return (
        <Container className='w-25  border border-primar mx-auto' >
        <h3> Plese Register</h3>
        <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="your name " required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='Photo' placeholder="photo url" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
   </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
    onClick={handleaccepeted}
    type="checkbox"
     name='accept' 
     label={<>Accept <Link to="/terms"> Terms and Condition</Link></>} />
  </Form.Group>
 
  <Button variant="primary" type="submit" disabled={!accepted}>
   Register
  </Button>
  <br></br>
<Form.Text className='text-secondary'>
All ready Account?<Link to='/login'>Login</Link>
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

export default Register;