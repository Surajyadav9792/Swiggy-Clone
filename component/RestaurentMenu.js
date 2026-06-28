import { useParams} from "react-router"
import { useEffect, useState } from "react";
import MenuCard from "./MenuItCard1";
import Simmer from "./simmar";
import { Link } from "react-router";
import { mockMenus } from "../utils/mockData";

export default function RestaurantMenu (){
    let {id}=useParams();
    const [RestId,setRestId]=useState([]);
    const [selcted,setslected]=useState(null);
    useEffect(()=>{
      async function fetchData() {
        try {
          const proxyServer = "https://corsproxy.io/?";
          const MenuAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

          const response = await fetch(proxyServer + MenuAPI);
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          const data = await response.json();

          // Dynamically locate the grouped card that holds the menu cards
          const menuGroupedCard = data?.data?.cards?.find(
            card => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
          );
          const tempData = menuGroupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
          
          // filter items that have title in card.card
          const filterData = tempData.filter((items)=>'title' in items?.card?.card)
          
          if (filterData && filterData.length > 0) {
            setRestId(filterData);
          } else {
            console.warn("No filterable categories found in live menu data, using mock menu.");
            const fallbackMenu = mockMenus[id] || mockMenus["default"];
            setRestId(fallbackMenu);
          }
        } catch (error) {
          console.error("CORS proxy or Swiggy menu API failed. Falling back to mock menu:", error);
          const fallbackMenu = mockMenus[id] || mockMenus["default"];
          setRestId(fallbackMenu);
        }
      }
       fetchData();
    },[]);
     
      if(RestId.length==0){
        return(
          <>
          <Simmer></Simmer>
          </>
        )
      }

    return (
        <>
        <div>
          <Link to={`/city/delhi/${id}/search`}>
          <div className="w-[80%] mx-auto mt-20">
           <button className="w-full py-4 text-center bg-gray-300 rounded-3xl border">Search the Item</button>
          </div>
           </Link>
           <div className="w-[80%] mx-auto mt-20">
             <button className={`rounded-2xl font-bold py-2 px-8 border mr-2 bg-gray-300 ${selcted==='veg'? "bg-green-600":"bg-gray-300"}`} onClick={()=>setslected(selcted==='veg'?null:'veg')}>Veg</button>
             <button className={`rounded-2xl font-bold py-2 px-4 border mr-2 bg-gray-300 ${selcted==='nonveg'? "bg-red-600":"bg-gray-300"}`}onClick={()=>setslected(selcted==='nonveg'?null:'nonveg')} >Non Veg</button>
           </div>
        <div className="w-[80%] mx-auto mt-20">
            {
              RestId?.map((menuItem)=> <MenuCard key={menuItem?.card?.card?.title} menuItem={menuItem?.card?.card} foodslected={selcted}></MenuCard>)
            }
        </div>
        </div>
        </>
    )
}

