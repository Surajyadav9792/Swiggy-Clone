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
        <div className="flex w-full justify-between mb-2 pd-2">
            {/* text wala div */}
            <div className="w-[70%]">
                <p className="text-2xl text-gray-600 font-semibold">{restData?.name}</p>
                <p className="text-xl">{"₹"+("defaultPrice" in restData? restData?.defaultPrice/100 : restData?.price/100)}</p>
               {restData?.ratings?.aggregatedRating?.rating &&
               restData?.ratings?.aggregatedRating?.ratingCountV2 && (
               <>
              <span className="text-green-600 mr-0.5">★</span>
              <span className="text-green-700 mr-2">{restData.ratings.aggregatedRating.rating}</span>
              <span> ({restData.ratings.aggregatedRating.ratingCountV2})</span>
               </>
)}

                <p>{restData?.description}</p> 
                </div>

            {/* photo wala div */}
            <div className="w-[20%] relative h-42">
            <img className=" w-60 h-36 object-cover mb-10 rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId} ></img>
            {
                count===0?(<button className="absolute text-2xl bottom-0 left-20 px-6 py-2 text-green-600 shadow-md rounded-xl bg-white border border-white" onClick={()=>handleAddItem()}>Add</button>):(
                 <div className="flex gap-2 absolute text-2xl text-green-600  bottom-0 left-20 px-6 py-2 shadow-md rounded-xl bg-white border border-white ">
                    <button  onClick={()=>handledecrement()}>-</button>
                    <span>{count}</span>
                    <button  onClick={()=>handleIncrement()}>+</button>
                 </div>
                )
            }
            </div>
        </div>
        <hr className="mb-4"></hr>
        </>
    )
}

// rating wala shi karana hai 