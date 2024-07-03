// import { useSelector } from "react-redux";
// import { useCollection } from "../hooks/useCollection";
// import { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// function Charts() {
    // const { user } = useSelector((state) => state.user);
    // const { data } = useCollection("Recipes", ["uid", "==", user.uid]);
//     const [titles,settitles]= useState([])
//     const [lengths,setlengths]= useState([])
//     data?.map((item)=>{
//         titles.push(item.title)
//     })
//     let d =data?.length
//     console.log(lengths, data);
//     setlengths(100/d)

//     const [chart, setChart]= useState({
//         series:lengths,
//         options: {
//           chart: {
//             width: 380,
//             type: 'pie',
//           },
//           labels: titles,
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200
//               },
//               legend: {
//                 position: 'bottom'
//               }
//             }
//           }]
//         },

//       })
//       console.log(chart);
//   return (
// <div>
//               <div id="chart">
//                 <ReactApexChart options={chart.options} series={chart.series} type="pie" width={380} />
//               </div>
//               <div id="html-dist"></div>
//             </div>  )
// }

// export default Charts

// import React, { useEffect } from "react";
// import { useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import { useSelector } from "react-redux";
// import { useCollection } from "../hooks/useCollection";

// function Chart() {
//   const { user } = useSelector((state) => state.user);
//   const { data } = useCollection("Recipes", ["uid", "==", user.uid]);
//   const [countires, setcountires] = useState(data);
//   // console.log(setarea, setnames);
//   const [data2, setData] = useState({
//     series: [],
//     options: {
//       chart: {
//         width: 380,
//         type: "pie",
//       },
//       labels: [],

//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });
//   useEffect(() => {
//     let name = "";
//     let area = "";

//     name = countires.map((country) => {
//       return country.title;
//     });
//     const populitions = countires.map((country) => {
//       return country.population;
//     });
//     const areas = countires;
//     area = areas.map((country) => {
//       return country.area;
//     });
//     setData({
//       series: area,
//       options: {
//         ...data.options,
//         labels: {
//           categories: name,
//         },
//       },
//     });
//   }, []);
//   return (
//     <div>
//       maydoni
//       <div id="chart">
//         <ReactApexChart
//           series={data2.series}
//           options={data2.options}
//           type="bar"
//           height={4100}
//           width={700}
//         />
//       </div>
//     </div>
//   );
// }

// export default Chart;


import React from 'react'

function Charts() {
  return (
    <div>Charts</div>
  )
}

export default Charts