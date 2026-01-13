import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../component/home";
import Restaurant from "../component/restaurant";
import { BrowserRouter, Routes, Route} from "react-router";
import RestaurantMenu from "../component/RestaurentMenu";
import SearchFood from "../component/searchFood";
import SecondaryHome from "../component/SecondaryHome";
import { store } from "../component/store";
import {Provider} from "react-redux"
import Checkout from "../component/checkout";

function Main(){
  return(
       <>
       <Provider store={store}>
       <BrowserRouter>
           <Routes>
                 <Route path="/" element={<Home></Home>}></Route>
                 <Route element={<SecondaryHome></SecondaryHome>}>
                    <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
                    <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
                 </Route>
                  <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
           </Routes>
          
       </BrowserRouter>
       </Provider>
       </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main></Main>);


// https://cors-anywhere.herokuapp.com/corsdemo
