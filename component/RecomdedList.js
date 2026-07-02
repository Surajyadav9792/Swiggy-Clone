import { useState } from "react"
import { addItems,IncrementItems,DecrementItems } from "./CartSlice";
import { useDispatch } from "react-redux";
export default function RecommendedList({restData}){
     const [count,setcount]=useState(0);
     const dispatch=useDispatch();

    //  addItem wala redusers me hai aur usame ham rest data bhej rahe hai 
     function handleAddItem(){
        setcount(1);
        dispatch(addItems(restData));
     }
     function handleIncrement(){
        setcount(count+1);
      dispatch(IncrementItems(restData));
     }
     function handledecrement(){
        setcount(count-1);
      dispatch(DecrementItems(restData));
     }
    return(
        <>
        <div className="flex w-full justify-between gap-4 py-6 items-start">
            {/* text info div */}
            <div className="flex-1 pr-2 sm:pr-4">
                <p className="text-lg md:text-xl text-gray-800 font-bold">{restData?.name}</p>
                <p className="text-base md:text-lg font-semibold text-gray-700 mt-1">{"₹"+("defaultPrice" in restData? restData?.defaultPrice/100 : restData?.price/100)}</p>
               {restData?.ratings?.aggregatedRating?.rating &&
               restData?.ratings?.aggregatedRating?.ratingCountV2 && (
               <div className="flex items-center gap-1 mt-1 text-sm">
                  <span className="text-green-600">★</span>
                  <span className="text-green-700 font-bold">{restData.ratings.aggregatedRating.rating}</span>
                  <span className="text-gray-500"> ({restData.ratings.aggregatedRating.ratingCountV2})</span>
               </div>
               )}
                <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3 md:line-clamp-none">{restData?.description}</p> 
            </div>

            {/* photo div */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0">
               {restData?.imageId ? (
                  <img className="w-full h-full object-cover rounded-2xl border border-gray-100 shadow-xs" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId} alt={restData?.name}></img>
               ) : (
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-xs">No Image</div>
               )}
               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
               {
                   count===0?(
                      <button className="px-4 py-1 md:px-6 md:py-1.5 text-sm md:text-base font-bold text-green-600 bg-white border border-gray-200 rounded-xl shadow-md hover:bg-gray-50 focus:outline-none cursor-pointer" onClick={()=>handleAddItem()}>ADD</button>
                   ):(
                     <div className="flex items-center gap-3 px-3 py-1 md:px-4 md:py-1.5 text-sm md:text-base font-bold text-green-600 bg-white border border-gray-200 rounded-xl shadow-md">
                        <button className="focus:outline-none cursor-pointer" onClick={()=>handledecrement()}>-</button>
                        <span>{count}</span>
                        <button className="focus:outline-none cursor-pointer" onClick={()=>handleIncrement()}>+</button>
                     </div>
                   )
               }
               </div>
            </div>
        </div>
        <hr className="border-gray-100"></hr>
        </>
    )
}

// rating wala shi karana hai