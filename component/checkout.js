// import { useSelector } from "react-redux"
// export default function Checkout(){
//     const counter=useSelector(state => state.cartslice.count);
//    const items = useSelector(state => state.cartslice.items);
//    let total_Price = 0;
//    items.forEach(value => {
//    const price = ("defaultPrice" in value ? value.defaultPrice : value.price) / 100;
//    total_Price+=value.quantity * price;
//    });
//     return (
//         <>
//         <div>
//           {
//              items.map(value => <div className="text-5xl w-[80%] mx-auto flex justify-between gap-2 bg-gray-300 mt-10 rounded-2xl p-2" key={value.id}>

//                 <span>{value.name}</span>
//                 <span>{value.quantity}</span>
//                 <span>
//                 ₹{("defaultPrice" in value ? value.defaultPrice : value.price) / 100}
//                 </span>
//                 <div> Total = ₹{(value.quantity * (("defaultPrice" in value ? value.defaultPrice : value.price) / 100))}</div>
//              </div>) 
//           }
//           <div>{total_Price}</div>
//         </div>
//         </>
//     )

// }



import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector(state => state.cartslice.items);

  let total_Price = 0;
  items.forEach(value => {
    const price =
      ("defaultPrice" in value ? value.defaultPrice : value.price) / 100;
    total_Price += value.quantity * price;
  });

  return (
    <div className="w-[80%] mx-auto mt-10 bg-gray-50 p-8 rounded-2xl">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-10 text-[#ff5200]">
        Your Cart
      </h1>

      {/* Cart Items */}
      {items.map(value => (
        <div
          key={value.id}
          className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow"
        >
          {/* Item name */}
          <div className="w-[40%]">
            <p className="text-2xl font-semibold text-gray-900">
              {value.name}
            </p>
          </div>

          {/* Quantity */}
          <div className="w-[15%] text-center text-lg font-medium text-gray-600">
            Qty: {value.quantity}
          </div>

          {/* Price */}
          <div className="w-[15%] text-lg text-gray-700">
            ₹{("defaultPrice" in value ? value.defaultPrice : value.price) / 100}
          </div>

          {/* Item Total */}
          <div className="w-[20%] text-xl font-bold text-gray-900">
            ₹
            {value.quantity *
              (("defaultPrice" in value ? value.defaultPrice : value.price) /
                100)}
          </div>
        </div>
      ))}

      {/* Divider */}
      <hr className="my-10 border-gray-300" />

      {/* Grand Total */}
      <div className="flex justify-between items-center bg-[#fff3eb] border border-[#ff5200]/30 p-6 rounded-xl">
        <p className="text-3xl font-bold text-gray-800">
          Grand Total
        </p>
        <p className="text-3xl font-bold text-green-600">
          ₹{total_Price}
        </p>
      </div>
    </div>
  );
}
