import { imageGridCards } from "../utils/groceryData"
import GroceryCard from "./groceryCard"
export default function GroceryOption(){
    return (
        <>
        <div className="mt-20 max-w-[80%] container mx-auto text-3xl font-serif font-bold mb-10">
           <h1> Shop groceries on Instamart</h1>
        </div>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto gap-3">
            {
                imageGridCards.map((GroceryData)=><GroceryCard key={GroceryData.id} GroceryData={GroceryData}></GroceryCard>)
            }

        </div>
        </>
    )
}