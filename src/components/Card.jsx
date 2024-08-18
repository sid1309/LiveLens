import React from "react";
import image from '../assets/newsimage.jpg'
import "./Card.css";

function Card({title, description, src, url}) {
  return (
    <div className="wrapper">
      <div className="single-card">
        <div className="front">
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px", width:"300px"}}className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{title} </h5>
    </div>
  </div>
        </div>
        <div className="back">
          <div className="content">
      <p className="card-text">{description?description:title}</p>
      <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
