import projectsData from "../utils/mockData"
const SimilierCarInfoContainer = () => {
    
  return (
    <>
      {projectsData.map((project, index) => (
  <div
    className="relative flex flex-col shrink-0 w-full sm:w-1/4 border rounded-md shadow-sm m-2 slider"
    key={index}
  >
    <img
      className="w-full h-40 object-cover rounded-t-md sliderImage"
      src={project.image}
      alt={project.model}
    />

    <div className="p-3">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-sm text-[#333333]">{project.model}</h2>
          <p className="text-xs text-[#333333]">{project.agency}</p>
        </div>
        
         <button><img className="text-[#E2952D] text-lg" src="Star.png" alt="☆"></img>  </button>
      </div>

      <div className="flex flex-row items-center justify-between mt-2 text-xs">
        <p className="text-[#8D9297]">
          Lot # : <br/><span className="text-[#333333] font-semibold">{project.lotno}</span>
        </p>
        <p className="text-[#8D9297]">
          Current Bid :{" "}  <br/>
          <span className={"font-semibold text-[#01AA45]"
          }>
            {project.bid}
          </span>
        </p>
      </div>
    </div>
  </div>
))}
</>
  )
  
}

export default SimilierCarInfoContainer