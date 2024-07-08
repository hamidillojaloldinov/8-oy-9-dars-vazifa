import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";

function Charts() {
  const { user } = useSelector((state) => state.user);
  const [ColumnCharts, setColumnCharts] = useState({
    series: [
      {
        data: [
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/04/01",
            y: 430,
          },
          {
            x: "2019/07/01",
            y: 448,
          },
          {
            x: "2019/10/01",
            y: 470,
          },
          {
            x: "2020/01/01",
            y: 540,
          },
          {
            x: "2020/04/01",
            y: 580,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
      },
      xaxis: {
        type: "category",

        group: {
          style: {
            fontSize: "10px",
            fontWeight: 700,
          },
        },
      },
    },
  });
  const [PieChart, setPieChart] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  const { data } = useCollection(
    "Recipes",
    ["uid", "==", user.uid],
    ["createdAT"]
  );
  useEffect(() => {
    if (data) {
      const nationsCount = data.reduce((acc, item) => {
        acc[item.nation] = (acc[item.nation] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(nationsCount);
      const series = Object.values(nationsCount);

      setPieChart({
        series,
        options: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      });
    }
    if (data) {
      let TimeChart = [];
      data.map((time) => {
        let Time = {
          x: time.title,
          y: time.time,
        };
        TimeChart.push(Time);
      });

      setColumnCharts({
        series: [
          {
            data: TimeChart,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 380,
          },
          xaxis: {
            type: "category",
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="place-content-center flex text-center content-center">
      {data ? (
        <div>
          <div className="mb-20 mt-10">
            <h1 className="text-2xl mb-2">Nation</h1>
            <div id="chart">
              <ReactApexChart
                className="flex justify-center"
                options={PieChart.options}
                series={PieChart.series}
                type="pie"
                width={600}
              />
            </div>
            <div id="html-dist"></div>
          </div>
          <div className="">
            <h1 className="text-2xl mb-2">Time</h1>
            <div id="chart">
              <ReactApexChart
                options={ColumnCharts.options}
                series={ColumnCharts.series}
                type="bar"
                height={350}
                width={1300}
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>
      ) : (
        <span className="loading loading-ring w-20 my-60"></span>
      )}
    </div>
  );
}
export default Charts;

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
