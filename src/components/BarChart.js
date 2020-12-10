import React from "react";
import Chart from "chart.js";

import styled from "styled-components";
import ProjectCards from "./ProjectCard/ProjectCards.jsx";

const BarGraphContainer = styled.div`
  border: 2px solid #7fcd91;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 3.9rem;
`;

export default function BarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "",
            backgroundColor: "#575A89",
            // borderColor: "#575A89",
            data: [4, 5, 6, 5, 4, 7],
            fill: false,
            barThickness: 8,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
        },
      },
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);

    // let data = {
    //   datasets: [
    //     {
    //       barPercentage: 0.5,
    //       barThickness: 6,
    //       maxBarThickness: 8,
    //       minBarLength: 2,
    //       data: [10, 20, 30, 40, 50, 60, 70],
    //     },
    //   ],
    // };
    // let options = {
    //   scales: {
    //     xAxes: [
    //       {
    //         gridLines: {
    //           offsetGridLines: true,
    //         },
    //       },
    //     ],
    //   },
    // };

    // window.myBar = new Chart(ctx, {
    //   type: "bar",
    //   data: data,
    //   options: options,
    // });
  }, []);
  return (
    <>
      <div>
        <BarGraphContainer className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h2 className="text-gray-800 text-xl font-semibold text-center">
                  Task completion rate
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            <div className="relative">
              <canvas id="bar-chart"></canvas>
            </div>
          </div>
        </BarGraphContainer>
        <ProjectCards />
      </div>
    </>
  );
}
