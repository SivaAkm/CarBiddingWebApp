import "../css/BiddingInfo.css"
import { useState,useEffect } from "react";

const BiddingInfo = () => {

  // Convert initial time to total seconds
  const initialSeconds =
    15 * 24 * 60 * 60 + 6 * 60 * 60 + 17 * 60 + 48;

  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to format time units
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    const hours = Math.floor(seconds / (60 * 60));
    seconds %= 60 * 60;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return [
      { label: "Days", value: days },
      { label: "Hours", value: hours },
      { label: "Minutes", value: minutes },
      { label: "Seconds", value: secs }
    ];
  };

  const timeParts = formatTime(remainingSeconds);
  return (
    <section className="flex w-1/2">
    <div className="space-y-4 w-[60%]">
    
      <div className="bg-[#FFFFFF] space-y-2 shadow-sm rounded-lg p-4 mt-2 sm:p-6 bidInfo">
        <h2 className="text-lg font-semibold text-[#333333] flex items-center mb-3">
          <span className="w-1 h-5 bg-[#01AA45] mr-2"></span> Bid Information
        </h2>

       <div className="flex justify-between gap-2 text-center mb-4 flex-wrap">
      {timeParts.map((part, idx) => (
        <div key={idx} className="border rounded p-2 flex-1 min-w-[60px] timercount">
          <div className="text-sm font-bold text-[#333333]">{part.value}</div>
          <div className="text-xs text-[#333333]">{part.label}</div>
        </div>
      ))}
    </div>

        <div className="space-y-1 text-sm">
          <div className="flex justify-between "><span className="bidsts">Bid Status :</span><span className="font-normal bidval">Pre Bid</span></div>
          <div className="flex justify-between "><span className="bidsts">Eligibility Status :</span><span className="font-normal bidval">Eligible</span></div>
          <div className="flex justify-between "><span className="bidsts">Sale Status :</span><span className="font-normal bidval">On Approval</span></div>
          <div className="flex justify-between "><span className="bidsts">Current Bid :</span><span className="font-normal bidval">$1,050.00 USD</span></div>
        </div>

        <div className="mt-3">
            <p className="text-[#666666] text-[14px]">Your Bid</p>
          <div className="flex items-center gap-2 mb-2 mt-2 text-[14px]">
            
            <input type="radio" name="bidType" className="accent-[#01AA45]" />
            <span className="text-sm">Max Bid</span>
            <input type="radio" name="bidType" className="accent-[#01AA45]" />
            <span className="text-sm">Monster Bid</span>
          </div>
          <input
            type="text"
            value="$1250.00"
            className="border bg-[#FFFFFF] w-full font-bold text-center py-2 mb-2 bidAmount"
            readOnly
          />
          <p className="text-[14px] text-[#333333]">
            ($50.00 USD Bid Increment) <span className="text-[#E2952D] cursor-pointer">Incremental Bid Guidelines</span>
          </p>
          <button className="bg-[#E2952D] text-[#FFFFFF] w-full py-2 rounded mt-2">Bid Now</button>
          <p className="text-xs text-[#666666] mt-2">
            All bids are legally binding and all sales are final. <span className="text-[#E2952D] cursor-pointer">Learn more</span>
          </p>
        </div>
      </div>

    
      <div className="bg-[#FFFFFF] shadow-sm rounded-lg p-4 space-y-2 sm:p-6 saleinfo">
        <h2 className="text-lg font-semibold text-[#333333] flex items-center mb-3">
          <span className="w-1 h-5 bg-[#01AA45] mr-2"></span> Sale Information
        </h2>
        <div className="space-y-1">
          <div className="flex justify-between"><span className="bidsts">Sale Name :</span><span className="bidval">AK – ANCHORAGE SOUTH</span></div>
          <div className="flex justify-between"><span className="bidsts">Sale Location :</span><span className="bidval">AK – ANCHORAGE SOUTH</span></div>
          <div className="flex justify-between"><span className="bidsts">Sale Date :</span><span className="bidval">Wed. Aug 07, 2024 11:30 PM IST</span></div>
          <div className="flex justify-between"><span className="bidsts">Last Updated :</span><span className="bidval">07/10/2024 1:13 am</span></div>
        </div>
      </div>

      
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6 shippingest">
        <h2 className="text-lg font-[700] text-[#333333] flex items-center mb-3">
          <span className="w-1 h-5 bg-[#01AA45] mr-2"></span> Shipping Estimate
        </h2>
        <p className="font-[700] text-[#666666]">Select Shipping Type</p>
<div className="flex mb-3 mt-2 gap-2 font-[500] text-[16px] text-[#333333]">
  <button className="flex-1 border hover:border-[#01AA45] rounded flex overflow-hidden bg-[#F8F9FA] h-[51px]">
    <div className="bg-[#01AA45] w-[41px] h-full flex items-center justify-center">
      <img src="DomesticIcon.png" alt="Domestic" className="w-full h-full object-contain" />
    </div>
    <span className="flex-1 flex items-center justify-center font-medium text-[16px]">
      Domestic
    </span>
  </button>

  <button className="flex-1 border hover:border-[#01AA45] font-[500] text-[16px] rounded flex overflow-hidden bg-[#F8F9FA] h-[51px]">
    <div className="bg-[#01AA45] w-[41px] h-full flex items-center justify-center">
      <img src="InternationalIcon.png" alt="International" className="w-full h-full object-contain" />
    </div>
    <span className="flex-1 flex items-center justify-center font-medium text-[16px]">
      International
    </span>
  </button>
</div>

        <div className="space-y-2 text-sm p-2">
            <span className="text-[#666666] font-[700]">Select State</span>
          <select className="border rounded w-full py-1 px-2 bg-[#FFFFFF] font-[400] text-[#666666] stateselect">
            <option>Select</option>
          </select>
           <span className="text-[#666666] font-[700] ">Pickup Location</span>
          <input className="border rounded w-full py-1 px-2 pickuplocation" placeholder="Pickup Location"></input>
          <span className="text-[#666666] font-[700]">Select port of loading</span>
          <select className="border rounded w-full py-1 px-2 bg-[#FFFFFF] text-[#666666] font-[400] stateselect">
            <option>Select port of loading</option>
          </select>
           <span className="text-[#666666] font-[700]">Drop off Location</span>
          <input className="border rounded w-full py-1 px-2 DropLocation " placeholder="Drop off Location" />
          <span className="text-[#666666] font-[700] ">Others (Specify)</span>
          <div className="flex gap-2">
            <input className="border rounded flex-1 py-1 px-2 otherstxtbox" placeholder="Specify" />
            <button className="bg-[#E2952D] text-[#FFFFFF] rounded px-2 estimatebtn">Check Estimate</button>
          </div>
          <p className="text-xs text-[#666666] font-[400]">
            For international inquiries, contact <span className="text-[#E2952D]">export@gca.com</span>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BiddingInfo;
