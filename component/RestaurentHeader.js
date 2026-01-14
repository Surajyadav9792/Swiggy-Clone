// import { useSelector } from "react-redux"
// import { Link } from "react-router";

// export default function RestaurantHeader(){
//     const counter=useSelector(state => state.cartslice.count);
//     return (
//         <div className="w-[80%] mx-auto flex justify-between mt-10 bg-[#ff5200] rounded-xl "> 
//            <img className="bg-[#ff5200] font-serif w-40 h-12 ml-2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
//            <Link to="/Checkout">
//             <p className="text-2xl font-bold mr-3 mt-2">Cart{`(${counter})`}</p>
//             </Link>
//         </div>
//     )

// }

import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestaurantHeader(){
    const counter=useSelector(state => state.cartslice.count);
    return (
        <div className="w-[80%] mx-auto flex justify-between mt-10 bg-[#ff5200] rounded-xl "> 
           <img className="bg-[#ff5200] font-serif w-40 h-12 ml-2" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
           <Link to="/Checkout" className="flex items-center mr-4 mt-2 relative">
  
  {/* Cart SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="white"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386a.75.75 0 01.728.558L5.25 7.5m0 0h13.5l-1.5 8.25a.75.75 0 01-.728.6H7.478a.75.75 0 01-.728-.6L5.25 7.5zM9 21a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
    />
  </svg>

  {counter > 0 && (
    <span className="absolute -top-2 -right-2 bg-white text-[#ff5200] text-xs font-bold px-2 py-0.5 rounded-full">
      {counter}
    </span>
  )}

</Link>

        </div>
    )

}