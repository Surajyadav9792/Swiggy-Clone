import {useState} from "react"
import RecommendedList from "./RecomdedList"
export default function MenuCard({menuItem,foodslected}){
    const [IsOpen,setOpen]=useState(true);
    if('categories' in menuItem){
        <div className="w-full">
        <p className="text-3xl font-bold">{menuItem?.title}</p>
        <div>
            {
                menuItem?.categories.map((recomdedItem1) => <RecommendedList key={recomdedItem1?.title} restData={recomdedItem1} foodslected={foodslected}></RecommendedList>)
            }
        </div>
        </div>
    }
    if(!IsOpen){
       return(
         <div className="w-full">
       <div className="flex justify-between w-full">
         <p className="text-3xl font-bold mb-4">{menuItem?.title}</p>
        <button className="text-3xl mr-20 font-bold" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
       <div className="h-5 bg-gray-400 mt-2 mb-2"></div>
         </div>
       )
    }
   if(foodslected==='veg'){
     return (
        <div className="w-full">
       <div className="flex justify-between w-full">
         <p className="text-3xl font-bold mb-4">{menuItem?.title}</p>
        <button className="text-3xl mr-20 font-bold" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
        <div>
            {
                menuItem?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((recomdedItem2)=><RecommendedList key={recomdedItem2?.card?.info?.id}  restData={recomdedItem2?.card?.info}></RecommendedList> )
            }
        </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
   }
   if(foodslected==='nonveg'){
    return (
        <div className="w-full">
       <div className="flex justify-between w-full">
         <p className="text-3xl font-bold mb-4">{menuItem?.title}</p>
        <button className="text-3xl mr-20 font-bold" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
        <div>
            {
                menuItem?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((recomdedItem2)=><RecommendedList key={recomdedItem2?.card?.info?.id}  restData={recomdedItem2?.card?.info}></RecommendedList> )
            }
        </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
   }
    return(
        <>
        <div className="w-full">
       <div className="flex justify-between w-full">
         <p className="text-3xl font-bold mb-4">{menuItem?.title}</p>
        <button className="text-3xl mr-20 font-bold" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
        <div>
            {
                menuItem?.itemCards?.map((recomdedItem2)=><RecommendedList key={recomdedItem2?.card?.info?.id}  restData={recomdedItem2?.card?.info} ></RecommendedList> )
            }
        </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        </>
    )
}