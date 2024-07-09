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
    <div className="place-content-center flex text-center content-center mb-10">
      {data ? (
        <div>
          <div className="mb-20 mt-10">
            <h1 className="text-2xl mb-2">Nation</h1>
            <div id="chart">
              <ReactApexChart
                className="flex justify-center place-content-center"
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