// import React from "react";
// import { styles } from "../assets/assets";



// export default function BrowseByStyle() {
//   return (
//     <section className="py-14 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
//             ✨ BROWSE BY BRACELET STYLE
//           </h2>
//           <p className="text-gray-600 mt-2 text-sm">
//             Discover the perfect bracelet for every occasion
//           </p>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//           {styles.map((style, index) => (
//             <a
//               key={index}
//               href={`/bracelets?style=${encodeURIComponent(style.name)}`}
//               className="group block transform transition-all duration-500 hover:-translate-y-2"
//             >
//               <div
//                 className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${style.gradient} p-1 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
//               >
//                 <div className="overflow-hidden rounded-2xl">
//                   <img
//                     src={style.image}
//                     alt={style.name}
//                     className="w-full h-44 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500 ease-out"
//                   />
//                 </div>
//               </div>
//               <p className="mt-4 text-center text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
//                 {style.name}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom"; // ✅ SPA navigation ke liye
import { styles } from "../assets/assets";

export default function BrowseByStyle() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            ✨ BROWSE BY BRACELET STYLE
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Discover the perfect bracelet for every occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {styles.map((style, index) => (
            <Link
              key={index}
              to={`/bracelets?style=${encodeURIComponent(style.name)}`} // ✅ Query param add
              className="group block transform transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${style.gradient} p-1 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-44 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                {style.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}




