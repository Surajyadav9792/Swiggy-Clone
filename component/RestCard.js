import { Link } from "react-router"
export default function RestCard({restInfo}){
    return (
      <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-75 relative">
   <div className="
          w-70 m-4 bg-white 
          hover:scale-95
          transition-transform duration-200
          cursor-pointer ">
            <img className=" w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
            <div className="ml-3 ">
                <div className="font-bold mt-3">{restInfo?.info?.name}</div>
            <div className="flex items-center gap-2">
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

     <span className="text-lg font-semibold text-gray-800">
      {restInfo?.info?.avgRatingString}
     </span>
     </div>
     <span className="text-lg font-semibold text-gray-800">
    {restInfo?.info?.sla?.slaString}
   </span>
</div>

             <span className="text-gray-600">
              {/* line-clamp-1 by this if the text is large the after few part it print ..... */}
             <div className="line-clamp-1">{restInfo?.info?.cuisines.join(" ")}</div>
             <div>{restInfo?.info?.areaName}</div>
            </span>
           </div>
           </div>
        </div>
          </Link>
    )
  
}

{/* <div className="absolute bottom-28 text-white left-3 font-bold font-sans z-10 gap-1">
              <span>{restInfo?.info?.aggregatedDiscountInfoV3?.header}</span>
               <span>{restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
           </div> */}
