import React from 'react';
import image from '../assets/newsimage.jpg'
import './Card2.css';

const Card2 = ({title, description, src, url,author,publishedAt}) => (
  <div className="card" >
    <div className="card-front">
    <img src={src?src:image} style={{height:"200px", width:"325px"}}className="card-img-top" alt="..."/>
    <div>
      <p className="card-title">{title} </p>
      <p> author:{author}</p>
    </div>
    </div>
    <div className="card-back">
        <div>
        <p className="card-text">{description?description:title}</p>
        <p>Date: {publishedAt.slice(0,10)}</p>
        <a href={url} className="btn btn-primary">Read More</a>
        </div>

    </div>
  </div>
);

export default Card2;
