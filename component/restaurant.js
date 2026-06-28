import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import Simmer from "./simmar";
import { mockRestaurants } from "../utils/mockData";

export default function Restaurant(){
  const [RestData, setRestData] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try {
        const proxyserver = "https://corsproxy.io/?";
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyserver + swiggyAPI);
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();

        // Dynamically find the card containing restaurants instead of hardcoding cards[1]
        const restaurantCard = data?.data?.cards?.find(
          card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants && restaurants.length > 0) {
          setRestData(restaurants);
        } else {
          console.warn("Restaurants not found in live data, loading mock fallback.");
          setRestData(mockRestaurants);
        }
      } catch (error) {
        console.error("CORS proxy or Swiggy API failed. Falling back to mock data:", error);
        setRestData(mockRestaurants);
      }
    }
    fetchData();
  },[]);

  if(RestData.length==0){
    return(
      <>
      <Simmer></Simmer>
      </>
    )
  }

  return (
    <>
    <div className="w-[80%] mt-20 flex flex-wrap container mx-auto">
      {
        RestData.map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
      }
    </div>
    
    </>
  )
}

