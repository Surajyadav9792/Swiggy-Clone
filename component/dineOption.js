import { DineoutRestaurants } from "../utils/dineData"
import DineCard from "./dineCard"
export default function DineOption(){
    return (
        <>
        <div className="max-w-[90%] sm:max-w-[80%] container mx-auto mt-16 md:mt-20 px-2 md:px-0">
             <p className="text-2xl md:text-3xl font-serif font-bold mb-6 md:mb-10">Discover best restaurant on dineout</p>
          <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5 scrollbar-none">
             {
              DineoutRestaurants.map((DineValue) => <DineCard key={DineValue?.info?.id}  DineValue={DineValue}></DineCard>)
             }
          </div>
        </div>
         <img className="w-full h-auto md:h-65 object-cover mt-16 md:mt-20 mb-16 md:mb-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="App Download Banner"></img>
        </>
    )
}