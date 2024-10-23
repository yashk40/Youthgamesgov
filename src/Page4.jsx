import React, { useState } from 'react'

import './Page4.css'
export default function Page4() {
 
 const[show ,setshow]=useState('....readmore');

 const showing=(()=>{
      setshow('One of the key aspects that set the Youth Games & Sports Federation, India apart is its dedication to providing a level playing field for all participants. Despite not receiving any funds or grants from the state or central government, the organization ensures that the entry and registration fees for its competitions are kept nominal. These fees are utilized for a variety of purposes, including office expenses, accommodation for participants, booking of venues, procurement of medals and trophies, and payments for officials.')
 })





    return (
    
    <div>
        <div className="full" >
            
         <h1 id='headingGoal'  >Our Aim</h1>

         <p className='para' > <span style={{fontWeight:"600"}} >Youth Games & Sports Federation, India :</span>Encouraging Young Athletes to Shine In a country like India, where sports hold a special place in the hearts of millions, organizations like the Youth Games & Sports Federation, India play a crucial role in nurturing and honing the talents of young athletes. Dedicated to providing a platform for these budding sports enthusiasts to showcase their skills and abilities, the Youth Games & Sports Federation, India is a beacon of hope for those looking to make a mark in the world of sports.
             <br></br>
             <br></br>

         </p>
         <span style={{cursor:'pointer'}}    onClick={showing}><p className='para'  >{show}</p></span>
        </div>
    </div>
  )
}
