import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import logos from '../../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authprovider/AuthProviders';

const Navigationbar = () => {
    const {user,  logOut}=useContext(AuthContext,)
   const handlelogout=()=>{
    logOut()
    .then(result=>{
      const log=result.user;
      console.log(log)
      .catch(error=>{
        console.log(error.massage)
      })
    })
   }
   
   
    return (
        <Container>
               <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" mx-auto  ">
        <Link className='text-decoration-none ' to='/catagory/0'>Home</Link>
        <Link to='/About' className='px-5 text-decoration-none ' >About</Link>
        <Nav><Link className='text-decoration-none '>New</Link></Nav>
          </Nav>
          <Nav>
            {user&&<FaUserCircle></FaUserCircle>}<image src={logos}></image>
         {
            user&& <Button onClick={handlelogout} variant="dark">logout</Button>
           }
           <Link to='/login'>
           <Button>login</Button>
           </Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Navigationbar;