import { useEffect, useState } from "react";
import "../css/SimilarCars.css";
import projectsData from "../utils/mockData"
import SimilierCarInfoContainer from "./SimilierCarInfoContainer";
const SimilarCars = () => {
  

  const [CurrentIndex, SetCurrentIndex] = useState(0);
  const [CardstoShow, SetCardstoShow] = useState(1);
  useEffect(() => {
    const cardsToshow = () => {
      if (window.innerWidth >= 1024) {
        SetCardstoShow(projectsData.length);
      } else {
        SetCardstoShow(1);
      }
    };
    cardsToshow();
    window.addEventListener("resize",cardsToshow)
    return window.removeEventListener("resize",cardsToshow)
  }, []);
  const nextProject = () => {
    SetCurrentIndex((prev) => (prev + 1) % projectsData.length)
  };
  const prevProject = () => {
    SetCurrentIndex((prev) => prev === 0 ? projectsData.length - 1 : prev - 1)
  };
  return (
    <div
      className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-2 w-full overflow-hidden "
      id="Projects"
    >
      <div className="flex items-center space-x-3 gap-36 SimilarHeader_main [@media(max-width:655px)]:flex-col [@media(max-width:655px)]:gap-0">

  <div className="flex items-center gap-4">
 <div className="w-[5px] h-[69px] GreenLine "></div> 
  <div>
    <p className="uppercase text-gray-500 text-sm SimilarHeader_label">
      Similar
    </p>
    <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 text-left SimilarHeader_title">
      View Similar Vehicles
    </h1>
  </div>
  </div>
<div className="flex items-center justify-end space-x-2 mb-8 SimilarNav_main">
  <a href="#" className="text-[#E2952D] SimilarNav_link">
    Explore More &gt;
  </a>

  <button
    type="button"
    onClick={prevProject}
    className="w-8 h-8 rounded-full flex items-center justify-center previousbtn"
    aria-label="Previous Project"
  >
    <img src="PreviousBtn.png" alt="Previous"  />
  </button>

  <button
    onClick={nextProject}
    className="w-8 h-8 rounded-full flex items-center justify-center nextbtn"
    aria-label="Next Project"
  >
    <img src="NextBtn.png" alt="Next" />
  </button>
</div>

</div>
      <div className="overflow-hidden w-full [@media(max-width:655px)]:overflow-auto">
        <div
          className="flex gap-8 transition transform duration-500 ease-in-out [@media(max-width:655px)]:gap-2 w-[90%]"
          style={{
            transform: `translateX(-${(CurrentIndex * 100) / CardstoShow}%)`,
          }}
        >
       <SimilierCarInfoContainer/>

        </div>
      </div>
    </div>
  );
};

export default SimilarCars;
