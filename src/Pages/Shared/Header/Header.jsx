import { Button, Container,  } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import logos from '../../../assets/user.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";

import { useContext } from 'react';
import { AuthContext } from '../../../Providers/Authprovider/AuthProviders';

const Header = () => {
 
    return (
        <Container>
         <div className='text-center'>
         <img className='mt-4' src={logo}></img>
           <p className='text-primary'><small>Journalism Without Fear or Favour</small></p>
         <p className='fw-bolder'>{moment().format("dddd, MMMM D YYYY")}</p>
         </div>
         <div className='d-flex'>
         <Button variant="danger">Letest</Button>
         <Marquee  pauseOnHover={false} className='text-danger' speed={40}>
 Braking news all comming soon...
</Marquee>

         </div>
      
        </Container>
    );
};

export default Header;