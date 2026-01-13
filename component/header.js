import { Link } from "react-router"
export default function Header (){
    return (
        <>
        <header className="bg-[#ff5200] font-serif">
         <div className="flex justify-between container mx-auto py-8">
            <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
            <div className="flex justify-center text-white gap-15 text-base items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                     <a target="_blank" href="https://partner.swiggy.com/login#/swiggy" >Partener with us</a>
                     <a className="border border-white flex items-center rounded-2xl py-3 px-4" target="_blank" href="" >Get the app</a>
                     <a className="border border-black bg-black rounded-2xl flex items-center py-3 px-4"  target="_blank" href="" >Sign in</a>
            </div>
         </div>

           <div className="pt-16 pb-8 relative">
            <div className=" max-w-[60%]  text-5xl text-white font-bold container mx-auto text-center">Order food & groceries. Discover best restaurants. Swiggy it!</div>
            <div>
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
              <div  className=" max-w-[70%] container mx-auto flex text-2xl mt-10 ml-63 gap-5">
                <input  className="w-[40%] border border-white bg-white rounded-2xl  px-6 py-4" placeholder="Delhi,India"></input> 
               <input  className="w-[55%] border border-white bg-white rounded-2xl  px-6 py-4" placeholder="Search for restaurant,item or more"></input> 
              </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex">
             <Link to="/restaurant">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
             </Link>
              <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
             </a>
              <a href="https://www.swiggy.com/dineout">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
             </a>
             
            </div>
        </div>
        <div></div>
        </header>
        
        </>
    )
}