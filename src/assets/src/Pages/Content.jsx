import React from 'react'
import SimilarCars from '../Components/SimilarCars'
import CarInfo from '../Components/CarInfo'
import BiddingInfo from '../Components/BidingInfo'
import "../css/Content.css"


const Content = () => {
  return (
    <main>
    <section className='flex flex-row justify-between ml-32  mt-2 mb-2 w-[70%]'>
      <div>
      <p className='maintext px-5'>Home {">"} Audi 2017 AUDI A4 PRESTIGE</p>
      <h3 className='carnametext mt-2 px-5'>2017 AUDI A4 PRESTIGE</h3></div>
       <img className="text-[#E2952D] text-lg w-[16.5px] h-[16px] " src="Star.png" alt="☆"></img> 
    </section>
    <section className='flex flex-row w-full ml-32'>
      <CarInfo/>
    <BiddingInfo/>
    </section>
    
    <SimilarCars/>
    </main>
  )
}

export default Content