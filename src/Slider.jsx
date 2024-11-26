import React, { useEffect, useState } from 'react'
import './Slider.css'




export default function Slider() {
  useEffect(() => {
    var carousel = new bootstrap.Carousel('#carouselExampleFade', {
      interval: 4000,
      ride: 'carousel',
      pause: 'hover',
    })
  }, [])


const[show ,setshow]=useState('https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif');

const[show1 ,setshow1]=useState('https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif');

const[show2 ,setshow2]=useState('https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif');


useEffect(()=>{
 
 setTimeout(() => {
  setshow('./slide1.png')
  setshow1('./slide2.jpeg')
  setshow2('./slider3.jpg')
 }, 4000);


},[])


  return (
    <div>
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ opacity: '0.9' }}>
          <div className="carousel-item active">
            <img src={show} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={show1} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={show2}id="slide4" className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="fa-solid fa-chevron-right -lol" id="arrow" aria-hidden="true"></span>
          <span className="visually-hidden -icon">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="fa-solid fa-chevron-right -lol" id="arrow2" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9618451181666722"
     data-ad-slot="9166834227"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </div>
  )
}