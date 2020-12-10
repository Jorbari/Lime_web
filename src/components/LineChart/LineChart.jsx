import React from "react";
import Chart from "chart.js";
import { LineGraphContainer } from "./LineChart.styles";

export default function LineChart() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: ["1 Dec", "8 Dec", "16 Dec", "31 Dec"],
        datasets: [
          {
            data: [50, 98, 53, 150],
            // borderWidth: 3,
            borderColor: "#7fcd91",
            backgroundColor: "#b6e6bd36",
            pointBorderColor: "white",
            // pointRadius: 10,
            pointBackgroundColor: "#2493fe",
            // pointBorderWidth: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              stacked: false,
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <>
      <LineGraphContainer>
        <div className="content__wrapper">
          <section className="section__one">
            <div className="section__one--heading">
              <h2>Total response rate</h2>
            </div>
            <div className="toggle__show">
              <section>
                <label htmlFor="">Show: </label>
                <select name="" id="">
                  <option value="All surveys">All surveys</option>
                  <option value="All projects">All projects</option>
                </select>
              </section>
              <section>
                <label htmlFor="">Show: </label>
                <select name="" id="">
                  <option value="Monthly">Monthly</option>
                  <option value="All  year">All projects</option>
                </select>
              </section>
            </div>
          </section>

          <section className="section__two">
            <canvas id="line-chart"></canvas>
          </section>
        </div>
      </LineGraphContainer>

      {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 pr-4">
        <LineGraphContainer className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded bg-white">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h2 className="text-black-200 mb-1 text-xl font-semibold">
                  Total response rate
                </h2>
                <h2 className="text-white text-xl font-semibold">
                  Sales value
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            Chart
            <div className="relative" style={{ height: "350px" }}>
              <canvas id="line-chart"></canvas>
            </div>
          </div>
        </LineGraphContainer>
      </div> */}
    </>
  );
}
