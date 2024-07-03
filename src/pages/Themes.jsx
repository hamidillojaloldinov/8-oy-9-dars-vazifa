// import { useState } from "react";

// function ChangeTheme() {
//   const themes = [
//     "default",
//     "dark",
//     "sunset",
//     "forest",
//     "aqua",
//     "lofi",
//     "pastel",
//     "cyberpunk",
//     "valentine",
//     "halloween",
//     "garden",
//     "luxury",
//     "cupcake",
//     "bumblebee",
//     "emerald",
//     "corporate",
//     "synthwave",
//     "retro",
//     "business",
//     "acid",
//     "lemonade",
//     "night",
//     "coffee",
//     "winter",
//     "dim",
//     "nord",
//     "dracula",
//     "cmyk",
//     "autumn",
//     "fantasy",
//     "wireframe",
//     "black"
//   ];
//   const [currentTheme, setCurrentTheme] = useState(
//     localStorage.getItem("theme") || "default"
//   );
//   function themeChanger(theme) {
//     const root = document.documentElement;
//     const attribute = "data-theme";
//     const element = "theme";
//     root.setAttribute(attribute, theme);
//     localStorage.setItem(element, root.dataset[element]);
//     setCurrentTheme(() => theme);
//   }
//   return (
//     <div className="pt-20 px-20">
//       <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2">
//         {themes
//           ? themes.map((theme, index) => {
//               return (
//                 <li key={index}>
//                   <button
//                     onClick={() => themeChanger(theme)}
//                     className={`btn w-full ${
//                       currentTheme === theme && "btn-neutral"
//                     }`}
//                   >
//                     {theme}
//                   </button>
//                 </li>
//               );
//             })
//           : "Loading..."}
//       </ul>
//     </div>
//   );
// }

// export default ChangeTheme;

import React from 'react'

function Themes() {
  return (
    <div>Themes</div>
  )
}

export default Themes