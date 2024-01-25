
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navigationbar from "../Pages/Shared/Navigationbar/Navigationbar";


const Main = () => {
   
  
  
  
    return (
        <div>
             <Header></Header>
             <Navigationbar></Navigationbar>
            <Container className="text-center">
           
                <Row>
     <Col lg={3}>
     <LeftNav></LeftNav>
     </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    
                    </Col>
                    <Col lg={3}>
<RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;