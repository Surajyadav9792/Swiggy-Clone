import { imageGridCards } from "../utils/groceryData"
import GroceryCard from "./groceryCard"
export default function GroceryOption(){
    return (
        <>
        <div className="mt-16 md:mt-20 max-w-[90%] sm:max-w-[80%] container mx-auto text-2xl md:text-3xl font-serif font-bold mb-6 md:mb-10 px-2 md:px-0">
           <h1> Shop groceries on Instamart</h1>
        </div>
        <div className="max-w-[90%] sm:max-w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-4 px-2 md:px-0 scrollbar-none">
            {
                imageGridCards.map((GroceryData)=><GroceryCard key={GroceryData.id} GroceryData={GroceryData}></GroceryCard>)
            }
        </div>
        </>
    )
}