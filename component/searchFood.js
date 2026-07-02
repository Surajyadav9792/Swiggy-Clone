import { useState } from "react";
import { useParams } from "react-router"

export default function SearchFood(){
    const {id}=useParams();
    const [Food,setFood]=useState("")
    return (
        <>
        <div className="w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20 px-2 md:px-0">
            <input className="text-lg md:text-2xl w-full rounded-3xl bg-gray-100 border border-gray-300 mr-2 p-4 md:p-5 focus:outline-none focus:ring-2 focus:ring-[#ff5200]/50" placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
        </div>
        </>
    )
}