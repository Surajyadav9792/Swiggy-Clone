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
       <div className="flex justify-between items-center w-full py-2">
         <p className="text-xl md:text-2xl font-bold text-gray-800">{menuItem?.title}</p>
         <button className="text-xl md:text-2xl font-bold focus:outline-none cursor-pointer" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
       <div className="h-2 bg-gray-200 mt-2 mb-4"></div>
         </div>
       )
    }
   if(foodslected==='veg'){
     const vegItems = menuItem?.itemCards?.filter((food)=>"isVeg" in food?.card?.info) || [];
     return (
        <div className="w-full">
       <div className="flex justify-between items-center w-full py-2">
         <p className="text-xl md:text-2xl font-bold text-gray-800">{menuItem?.title} ({vegItems.length})</p>
         <button className="text-xl md:text-2xl font-bold focus:outline-none cursor-pointer" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
        <div className="mt-4">
            {
                vegItems.map((recomdedItem2)=><RecommendedList key={recomdedItem2?.card?.info?.id}  restData={recomdedItem2?.card?.info}></RecommendedList> )
            }
        </div>
          <div className="h-2 bg-gray-200 mt-2 mb-4"></div>
        </div>
     )
   }
   if(foodslected==='nonveg'){
     const nonvegItems = menuItem?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)) || [];
     return (
        <div className="w-full">
       <div className="flex justify-between items-center w-full py-2">
         <p className="text-xl md:text-2xl font-bold text-gray-800">{menuItem?.title} ({nonvegItems.length})</p>
         <button className="text-xl md:text-2xl font-bold focus:outline-none cursor-pointer" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
        <div className="mt-4">
            {
                nonvegItems.map((recomdedItem2)=><RecommendedList key={recomdedItem2?.card?.info?.id}  restData={recomdedItem2?.card?.info}></RecommendedList> )
            }
        </div>
          <div className="h-2 bg-gray-200 mt-2 mb-4"></div>
        </div>
     )
   }
    return(
        <>
        <div className="w-full">
       <div className="flex justify-between items-center w-full py-2">
         <p className="text-xl md:text-2xl font-bold text-gray-800">{menuItem?.title} ({menuItem?.itemCards?.length || 0})</p>
         <button className="text-xl md:text-2xl font-bold focus:outline-none cursor-pointer" onClick={()=>setOpen(!IsOpen)}>{IsOpen?'▲':'▼'}</button>
       </div>
        <div className="mt-4">
            {
                menuItem?.itemCards?.map((recomdedItem2)=><RecommendedList key={recomdedItem2?.card?.info?.id}  restData={recomdedItem2?.card?.info} ></RecommendedList> )
            }
        </div>
          <div className="h-2 bg-gray-200 mt-2 mb-4"></div>
        </div>
        </>
    )
}