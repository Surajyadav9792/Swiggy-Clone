export default function GroceryCard ({GroceryData}){
    return (
       <div className="flex-none w-36">
        <a href={GroceryData?.action?.link}>
          <img className="w-36 h-40 object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+GroceryData?.imageId} alt={GroceryData?.action?.text}></img>
        </a>
        <h2 className="w-36 text-center font-bold font-serif text-wrap mt-2 text-sm text-gray-800">{GroceryData?.action?.text}</h2>
       </div>
    )
}