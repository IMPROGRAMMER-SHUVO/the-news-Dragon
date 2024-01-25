import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorHighlits from '../EditorsHighlits/EditorHighlits';

const News = () => {
    const news=useLoaderData()
    const {title,details,image_url,category_id}=news
    return (
       
<div>
<Card >
            <p className='text-secondary'>All Details</p>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
          {details}
        </Card.Text>
       <Link to={`/catagory/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft> MAin news</Button></Link>
      </Card.Body>
    </Card>
    <EditorHighlits>

    </EditorHighlits>
</div>
    
    );
};

export default News;