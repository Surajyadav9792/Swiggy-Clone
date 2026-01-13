export default function FoodCard({ FoodData }) {
  return (
    <a
      href={FoodData?.action?.link}
      className="w-40 flex  items-center"
    >
      <img
        className="w-40 h-40 object-contain"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +FoodData?.imageId
        }
        alt=""
      />
    </a>
  );
}
