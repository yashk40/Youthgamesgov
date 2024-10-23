import React from 'react';
import './Gallery.css';

import Navbar from './Navbar';
import Final from './Final';


const images = ['./gallery/img1.jpg','./gallery/img2.jpg','./gallery/img3.jpg','./gallery/img4.jpg','./gallery/img5.jpg','./gallery/img6.jpg'];

const ImageCards = () => {
  return (
    <div style={{backgroundColor:'whitesmoke'}}>
        <Navbar/>
        <h1 id='gallery'   style={{ padding:'10px 10px 10px ',marginTop:"10px",borderRadius:'7px'}}  >Gallery</h1>
    <div className="ficard-container">
      {images.map((src, index) => (
        <div key={index} className="ficard">
          <img  className='gall1'  src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    <Final/>
    </div>
  );
};

export default ImageCards;
