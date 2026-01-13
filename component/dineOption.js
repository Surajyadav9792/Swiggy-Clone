import { DineoutRestaurants } from "../utils/dineData"
import DineCard from "./dineCard"
export default function DineOption(){
    return (
        <>
        <div className="w-[80%] container mx-auto mt-20">
            <p className="text-3xl font-serif font-bold mb-10">Discover best restaurant on dineout</p>
         <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5 ">
            {
             DineoutRestaurants.map((DineValue) => <DineCard key={DineValue?.info?.id}  DineValue={DineValue}></DineCard>)
            }
         </div>
       </div>
        <img className="w-full h-65 object-center mt-20 mb-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
        </>
    )
}