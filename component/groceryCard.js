export default function GroceryCard ({GroceryData}){
    return (
        <div className="flex-none">
       <a href={GroceryData?.action?.link}>
         <img className="w-36 h-40 "src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+GroceryData?.imageId}></img>
       </a>
        {<h2 className="w-36 text-center font-bold font-serif text-wrap ">{GroceryData?.action.text}</h2>}
        </div>
    )
}