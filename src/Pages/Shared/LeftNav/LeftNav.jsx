import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import thrid from '../../../assets/3.png'


const LeftNav = () => {
const [cetagorys,setCategoys]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/Cetagorys')
.then(response=>response.json())
.then(data=>setCategoys(data))

.catch(error=>console.log(error))


},[])
    return (
        <div>
            <h4 className="bg-secondary rounded-4 p-2 "> All cetagoris</h4>
           <div >
           {
            cetagorys.map(catagory=><p
            key={catagory.id}
            >
<Link to={`/catagory/${catagory.id}`} className="text-decoration-none text-primary" > {catagory.name}</Link>


            </p>)
           }
           </div>
      
           <Row style={{textAlign:'justify'}} xs={1}   className="g-4 mt-5">
      
      <Col >
        <Card>
          <Card.Img variant="top" src={first}  />
          <Card.Body >
            <Card.Title>Child</Card.Title>
            <Card.Text >
            Child development encompasses the physical, cognitive, emotional, and social growth of children from birth through adolescence. It involves monitoring key milestones, providing appropriate stimulation, and ensuring a nurturing environment to support their holistic development.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second}  />
          <Card.Body>
            <Card.Title>Friends</Card.Title>
            <Card.Text>
            Friendships can take various forms, from close-knit groups of individuals who share similar interests and values to more casual acquaintances built on shared experiences. Regardless of the nature of the friendship, it is characterized by a sense of camaraderie, loyalty, and genuine care for one another's well-being.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={thrid}/>
          <Card.Body>
            <Card.Title>Sports</Card.Title>
            <Card.Text>
            ports have been a part of human culture for thousands of years and hold significant social, cultural, and economic importance in many societies. They provide opportunities for physical fitness, mental well-being, and social interaction, and can also serve as a source of entertainment and community pride.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Col>
\
  </Row>
        </div>
    );
};

export default LeftNav;