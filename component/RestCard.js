import { Link } from "react-router"
export default function RestCard({restInfo}){
    return (
      <Link to={"/city/delhi/"+restInfo?.info?.id} className="w-full max-w-[280px] block mb-4">
        <div className="bg-white hover:scale-95 transition-transform duration-200 cursor-pointer w-full">
            <img className="w-full h-44 object-cover rounded-xl shadow-xs" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId} alt={restInfo?.info?.name}></img>
            <div className="mt-3 px-1">
                <div className="font-bold text-gray-900 text-lg line-clamp-1">{restInfo?.info?.name}</div>
            <div className="flex items-center gap-2 mt-1">
  {/* Rating */}
  <div className="flex items-center gap-1">
    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1BA672]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-3 h-3 fill-white"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>

     <span className="text-base font-semibold text-gray-800">
      {restInfo?.info?.avgRatingString}
     </span>
     </div>
     <span className="text-base font-semibold text-gray-800">
      • {restInfo?.info?.sla?.slaString}
    </span>
</div>

             <span className="text-gray-500 text-sm mt-1 block">
              {/* line-clamp-1 by this if the text is large the after few part it print ..... */}
             <div className="line-clamp-1">{restInfo?.info?.cuisines.join(", ")}</div>
             <div>{restInfo?.info?.areaName}</div>
            </span>
           </div>
           </div>
          </Link>
    )
  
}

{/* <div className="absolute bottom-28 text-white left-3 font-bold font-sans z-10 gap-1">
              <span>{restInfo?.info?.aggregatedDiscountInfoV3?.header}</span>
               <span>{restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
           </div> */}
