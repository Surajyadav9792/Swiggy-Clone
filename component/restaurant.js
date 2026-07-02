import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import Simmer from "./simmar";
import { mockRestaurants } from "../utils/mockData";

export default function Restaurant(){
  const [RestData, setRestData] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try {
        const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        const swiggyAPI = "restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const fetchURL = isLocal 
          ? "https://corsproxy.io/?https://www.swiggy.com/dapi/" + swiggyAPI
          : "/api/" + swiggyAPI;

        const response = await fetch(fetchURL);
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
    <div className="w-[90%] md:w-[80%] mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto justify-items-center mb-20 px-2 md:px-0">
      {
        RestData.map((restInfo)=> <RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
      }
    </div>
    
    </>
  )
}

