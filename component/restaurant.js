import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import Simmer from "./simmar";

export default function Restaurant(){
  const [RestData, setRestData] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      const proxyserver="https://cors-anywhere.herokuapp.com/";
      const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
      const response = await fetch(proxyserver + swiggyAPI);
      const data = await response.json();

      setRestData(
        data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    }
    fetchData();
  },[]);

  // this is basic simmir effect
  // if(RestData.length==0){
  //   return (
  //     <>
  //     <div className="flex items-center justify-center font-bold text-2xl">
  //       <h1>Data is Loading.....</h1>
  //     </div>
  //     </>
  //   )
  // }

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
