import { Outlet } from "react-router";
import RestaurantHeader from "./RestaurentHeader";

export default function SecondaryHome(){
    return (
        <>
        <RestaurantHeader></RestaurantHeader>
        {/* is outlet  ki help se jo child element hai secondaryHome ke wo bhi render ho pa rahe hai  */}
        <Outlet></Outlet>
        </>
    )
}