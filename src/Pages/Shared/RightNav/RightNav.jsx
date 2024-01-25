import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import { useState } from "react";


const RightNav = () => {
  const [user,SetUser]=useState()
  
  const auth=getAuth(app);
  const googleprovider=new GoogleAuthProvider()
  const handlegoogle=()=>{
    signInWithPopup(auth,googleprovider)
    .then(result=>{
      const googlelogin=result.user
      console.log(googlelogin)
     
    })
    .catch(error=>{
      console.log(error)
    })
  }





    return (
        <div><h4>Login With</h4>
<Button  onClick={handlegoogle} className="mb-2 " variant="outline-primary"> <FaGoogle />Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub />Login with GitHub</Button>
       <div className="mt-4">
        <h4> </h4>
        <ListGroup className="mb-4">
      <ListGroup.Item>  <FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
      <ListGroup.Item ><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
      
    </ListGroup>
       </div>
       <Qzone></Qzone>
        </div>
    );
};

export default RightNav;