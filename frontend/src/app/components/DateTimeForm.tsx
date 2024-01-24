"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function DateTimeForm() {
  const router = useRouter();

  async function checkout() {
    const { data } = await axios.post(
      "http://localhost:3000/api/checkout",
      { price_id: "price_1OXUCVKX0Q1pwx2K4dApHd3I" },
      { headers: { "Content-Type": "application/json" } }
    );
    router.push(data.url);
  }

  return (
    <button onClick={checkout}>Checkout</button>
    // <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
    //   <div className="flex flex-col">
    //     <div className="flex flex-row">
    //       {successMessage ? (
    //         <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">
    //           {successMessage}
    //         </p>
    //       ) : (
    //         <>
    //           <input
    //             type="date"
    //             placeholder="date"
    //             onChange={(e) => setDate(e.target.value)}
    //             value={date}
    //             className={"w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700"}
    //           />
    //         </>
    //       )}
    //     </div>

    //     <div className="flex flex-row">
    //       <>
    //         <input
    //           type="time"
    //           placeholder="time"
    //           onChange={(e) => setTime(e.target.value)}
    //           value={time}
    //           className={"w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700"}
    //         />
    //       </>
    //     </div>

    //     <button
    //       type="button"
    //       className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
    //       onClick={handleSubmit}
    //     >
    //       {text}
    //     </button>

    //     {errorMessage && (
    //       <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
    //         {errorMessage}
    //       </p>
    //     )}
    //   </div>
    // </div>
  );
}
