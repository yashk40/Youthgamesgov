import React from 'react';
import './Gallery.css';

import Navbar from './Navbar';
import Final from './Final';


const images = ['./gallery/img1.jpg','./gallery/img2.jpg','./gallery/img3.jpg','./gallery/img4.jpg','./gallery/img5.jpg','./gallery/img6.jpg'];

const ImageCards = () => {
  return (
    <div style={{backgroundColor:'whitesmoke'}}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9618451181666722"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-9618451181666722"
     data-ad-slot="3495603519"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
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
