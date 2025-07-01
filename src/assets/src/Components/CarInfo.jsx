
import CarImageGallery from "./CarImageGallery";

const CarInfo = () => {
    const images = [
  "GalleryImg1.png",
 "Car1.png",
 "Car2.png",
  "Car3.png",
  "Car4.png",
 
];

  return (
    

    <div className="bg-white rounded-lg p-4 sm:p-6 w-1/2">
        <CarImageGallery images={images} />
      <h2 className="text-lg font-semibold text-[#01AA45] mb-3 mt-4 flex items-center">
        <span className="w-1 h-5 bg-[#01AA45] mr-2"></span> Car Info
      </h2>

      {/* Car Info */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-4">
        <div className="flex flex-row">
          <img src="Milage.png" alt="Mileage" className="mx-2 mt-1 w-5 h-5" />
          <div className="flex flex-col">
          <div className="text-sm font-medium">25,100 miles</div>
          <div className="text-xs text-gray-500">Mileage</div>
          </div>
        </div>
<div className="flex flex-row">
          <img src="Engine.png" alt="Engine" className="mx-2 mt-1 w-5 h-5" />
          <div className="flex flex-col">
          <div className="text-sm font-medium">22,231 cc</div>
          <div className="text-xs text-gray-500">Engine</div>
          </div>
        </div>
       
        <div className="flex flex-row">
          <img src="FuelType.png" alt="FuelType" className="mx-2 mt-1 w-5 h-5" />
          <div className="flex flex-col">
          <div className="text-sm font-medium">Petrol + Gas</div>
          <div className="text-xs text-gray-500">Fuel Type</div>
          </div>
        </div>
<div className="flex flex-row">
          <img src="Condition.png" alt="Condition" className="mx-2 mt-1 w-5 h-5" />
          <div className="flex flex-col">
          <div className="text-sm font-medium">Brand New</div>
          <div className="text-xs text-gray-500">Condition</div>
          </div>
        </div>
       

      </div>

      {/* Overviews */}
      <div className="border rounded p-4 bg-[#FFFFFF] overviews">
        <h3 className="text-base font-semibold text-[#01AA45] mb-3 flex items-center">
          <span className="w-1 h-5 bg-[#01AA45] mr-2"></span> Overviews
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-2 text-sm">
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Lot Number:</div>
            <div className="text-[14px] text-[#333333] font-[500]">53938754</div> 
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">VIN:</div>
            <div className="text-[14px] text-[#333333] font-[500]">WAUFNAF49HN*****</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Title Code:</div>
            <div className="text-[14px] text-[#333333] font-[500]">AK – CERTIFICATE OF VEHICLE TITLE</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Primary Damage:</div>
            <div className="text-[14px] text-[#333333] font-[500]">MINOR DENT/SCRATCHES</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Estimated Retail Value:</div>
            <div className="text-[14px] text-[#333333] font-[500]">$16,480.00 USD</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Cylinders:</div>
            <div className="text-[14px] text-[#333333] font-[500]">4</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Color:</div>
            <div className="text-[14px] text-[#333333] font-[500]">GRAY</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Transmission:</div>
            <div className="text-[14px] text-[#333333] font-[500]">AUTOMATIC</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Drive:</div>
            <div className="text-[14px] text-[#333333] font-[500]">All wheel drive</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Vehicle Type:</div>
            <div className="text-[14px] text-[#333333] font-[500]">AUTOMOBILE</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Keys:</div>
            <div className="text-[14px] text-[#333333] font-[500]">YES</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Highlights:</div>
            <div className="text-[14px] text-[#333333] font-[500]">Run and Drive</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Seller:</div>
            <div className="text-[14px] text-[#333333] font-[500]">GM Financial</div>
          </div>
          <div className="flex">
            <div className="w-40 text-[14px] text-[#666666] font-[400]">Notes:</div>
            <div className="text-[14px] text-[#333333] font-[500]">There are no notes for this lot</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
