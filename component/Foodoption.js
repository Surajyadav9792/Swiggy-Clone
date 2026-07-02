import { imageGridCard1 } from "../utils/foodData";
import FoodCard from "./foodcard";

export default function Foodoption() {
  return (
 <>
      <div className="mt-16 md:mt-20 max-w-[90%] sm:max-w-[80%] container mx-auto text-2xl md:text-3xl font-serif font-bold mb-5 px-2 md:px-0">
            <h1> Order our best food options</h1>
         </div>
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto overflow-x-auto flex flex-col flex-wrap h-48 md:h-60 gap-3 px-2 md:px-0 scrollbar-none">
         {
           imageGridCard1.map((FoodData) => (
             <FoodCard key={FoodData.id} FoodData={FoodData} />
           ))
         }
     </div>
 
 
 </>
  );
}
