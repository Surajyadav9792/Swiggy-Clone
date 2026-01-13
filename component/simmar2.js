export default function Simmer2(){

    return (
        <>
           <div className="flex w-full justify-between mb-2 pd-2">
            {/* text wala div */}
            <div className="w-[70%]">
                <p className="text-2xl text-gray-600 font-semibold">{restData?.name}</p>
                <p className="text-xl">{"₹"+("defaultPrice" in restData? restData?.defaultPrice/100 : restData?.price/100)}</p>
                <span className="text-green-600 mr-0.5">★</span>
                <span  className="text-green-700 mr-2">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>{restData?.description}</p> 
                </div>

            {/* photo wala div */}
            <div className="w-[20%] relative">
            <div className=" w-full h-36 object-cover mb-10 rounded-3xl" ></div>
            <div className="absolute text-2xl bottom-1 left-20 shadow-md rounded-xl bg-gray-300 "></div>
            </div>
        </div>
        <hr className="mb-4"></hr>
        </>
    )
}