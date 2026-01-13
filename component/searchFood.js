import { useState } from "react";
import { useParams } from "react-router"

export default function SearchFood(){
    const {id}=useParams();
    const [Food,setFood]=useState("")
    return (
        <>
        <div className="w-[80%] mx-auto mt-20">
            <input className="text-2xl w-full rounded-3xl bg-gray-300 border mr-2 p-5" placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
        </div>
        </>
    )
}