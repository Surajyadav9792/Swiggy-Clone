import { imageGridCard1 } from "../utils/foodData";
import FoodCard from "./foodcard";

export default function Foodoption() {
  return (
 <>
     <div className="mt-20 max-w-[80%] container mx-auto text-3xl font-serif font-bold mb-5">
           <h1> Order our best food options</h1>
        </div>
     <div className="max-w-[80%] mx-auto overflow-x-auto flex flex-col flex-wrap h-60 gap-3">
        {
          imageGridCard1.map((FoodData) => (
            <FoodCard key={FoodData.id} FoodData={FoodData} />
          ))
        }
    </div>
 
 
 </>
  );
}
