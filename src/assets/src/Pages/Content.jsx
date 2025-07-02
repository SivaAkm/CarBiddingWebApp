import SimilarCars from '../Components/SimilarCars'
import CarInfo from '../Components/CarInfo'
import BiddingInfo from '../Components/BidingInfo'
import "../css/Content.css"


const Content = () => {
  return (
    <main>
    <section className='flex flex-row justify-between ml-32 mt-2 mb-2 w-[70%] [@media(max-width:455px)]:ml-0'>
      <div className='cartitlesec'>
      <p className='maintext px-5'>Home {">"} Audi 2017 AUDI A4 PRESTIGE</p>
      <h3 className='carnametext mt-2 px-5'>2017 AUDI A4 PRESTIGE</h3></div>
      <button><img className="text-[#E2952D] text-lg w-[16.5px] h-[16px] starimg"src="Star.png" alt="☆"></img> </button> 
    </section>
    <section className='flex flex-row w-full ml-32 mainsec'>
      <CarInfo/>
    <BiddingInfo/>
    </section>
    
    <SimilarCars/>
    </main>
  )
}

export default Content