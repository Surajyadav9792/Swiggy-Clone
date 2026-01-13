export default function DineCard({ DineValue }) {
  return (
   <div className=" w-[80%] mb-10">
     <a target="_blank" href={DineValue?.cta?.link}>
      <div className="w-64 flex-none relative">
        <img
          className="rounded-2xl w-64 h-48 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            DineValue?.info?.mediaFiles?.[0]?.url
          }
        />

        {/* gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 to-transparent"></div>

        {/* name */}
        <p className="absolute bottom-2 left-3 text-white text-[15px] font-bold z-10">
          {DineValue?.info?.name}
        </p>

        {/* rating */}
        <span className="absolute bottom-2 right-3 text-white text-[15px] font-bold z-10">
          ⭐ {DineValue?.info?.rating?.value}
        </span>
      </div>
      <div className="bottom-0 flex justify-between text-ellipsis text-[16px] text-gray-600 shrink-0 mt-2">
          <span className="mr-10">{DineValue?.info?.cuisines?.[1] || DineValue?.info?.cuisines?.[0]}
         </span>
           <span className="ml-5">{DineValue?.info?.costForTwo}</span>
        </div>
        <div className="flex items-center gap-2 justify-between ">
  <span className="w-40 overflow-hidden whitespace-nowrap text-ellipsis text-[16px] text-gray-600 shrink-0 ">
    {DineValue?.info?.locationInfo?.formattedAddress}
  </span>

  <span className="text-[16px] text-gray-600 shrink-0">
    {DineValue?.info?.locationInfo?.distanceString}
  </span>
</div>

    </a>
   </div>
  );
}
