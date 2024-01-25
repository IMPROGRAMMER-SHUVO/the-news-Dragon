import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaShare, FaShareNodes, FaEye, FaRegStar, FaSquareFull, FaStar } from "react-icons/fa6";
import Rating from 'react-rating';
const NewsCard = ({news}) => {
    const {title,_id,details,image_url,thumbnail_url,name,author,published_date,total_view,rating,}=news
    return (
        <Card className="mb-4  font-monospace">
        <Card.Header className='d-flex align-item-center'>
        <Image style={{height:'40px'}} src={author?.img} roundedCircle />
           <div className='ps-2 flex-grow-1'>
            <p className='mb-0'>{author?.name}</p> 
            <h3><small> {moment(author.published_date).format('yyyy-mm-d')}</small></h3>
           </div>
           <div >
            <FaRegBookmark > </FaRegBookmark><FaShareNodes></FaShareNodes>
           </div>
           
            </Card.Header>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{textAlign:'justify'}} className='text-align:justify'>
            {details.length<250?<>{details}</>:
            <>{details.slice(0,250)}....
            <Link to={`/news/${_id}`}>Red more</Link></>}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1'>
          <Rating
  placeholderRating={rating.number}
  readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>
<span>{rating?.number}</span>
          </div>
          <div>
            <FaEye></FaEye>{total_view}
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;