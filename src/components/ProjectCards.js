import React from "react";
// import Chart from "chart.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

import folderIcon from "../assets/bigFolderNoFill.png";
import reportIcon from "../assets/bigReport.png";

const CardContainer = styled.div`
  background: #ebf7ee;
  border-radius: 15px;

  height: 164px;
  width: 100%;

  .card-number {
    position: relative;
    top: 0.2rem;
  }
`;

const ViewButton = styled.button`
  /* position: absolute; */
  width: 106.67px;
  height: 40px;
  /* left: 1639.19px;
top: 916px; */

  margin-top: 1rem;
  background: #b6e6bd;
  border-radius: 10px;
  margin-left: 3rem;
`;

export default function ProjectCards() {
  //   React.useEffect(() => {
  //     let config = {
  //       type: "bar",
  //       data: {
  //         labels: [
  //           "January",
  //           "February",
  //           "March",
  //           "April",
  //           "May",
  //           "June",
  //           "July",
  //         ],
  //         datasets: [
  //           {
  //             label: new Date().getFullYear(),
  //             backgroundColor: "#ed64a6",
  //             borderColor: "#ed64a6",
  //             data: [30, 78, 56, 34, 100, 45, 13],
  //             fill: false,
  //             barThickness: 8,
  //           },
  //           {
  //             label: new Date().getFullYear() - 1,
  //             fill: false,
  //             backgroundColor: "#4c51bf",
  //             borderColor: "#4c51bf",
  //             data: [27, 68, 86, 74, 10, 4, 87],
  //             barThickness: 8,
  //           },
  //         ],
  //       },
  //       options: {
  //         maintainAspectRatio: false,
  //         responsive: true,
  //         title: {
  //           display: false,
  //           text: "Orders Chart",
  //         },
  //         tooltips: {
  //           mode: "index",
  //           intersect: false,
  //         },
  //         hover: {
  //           mode: "nearest",
  //           intersect: true,
  //         },
  //         legend: {
  //           labels: {
  //             fontColor: "rgba(0,0,0,.4)",
  //           },
  //           align: "end",
  //           position: "bottom",
  //         },
  //         scales: {
  //           xAxes: [
  //             {
  //               display: false,
  //               scaleLabel: {
  //                 display: true,
  //                 labelString: "Month",
  //               },
  //               gridLines: {
  //                 borderDash: [2],
  //                 borderDashOffset: [2],
  //                 color: "rgba(33, 37, 41, 0.3)",
  //                 zeroLineColor: "rgba(33, 37, 41, 0.3)",
  //                 zeroLineBorderDash: [2],
  //                 zeroLineBorderDashOffset: [2],
  //               },
  //             },
  //           ],
  //           yAxes: [
  //             {
  //               display: true,
  //               scaleLabel: {
  //                 display: false,
  //                 labelString: "Value",
  //               },
  //               gridLines: {
  //                 borderDash: [2],
  //                 drawBorder: false,
  //                 borderDashOffset: [2],
  //                 color: "rgba(33, 37, 41, 0.2)",
  //                 zeroLineColor: "rgba(33, 37, 41, 0.15)",
  //                 zeroLineBorderDash: [2],
  //                 zeroLineBorderDashOffset: [2],
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     };
  //     let ctx = document.getElementById("bar-chart").getContext("2d");
  //     window.myBar = new Chart(ctx, config);
  //   }, []);
  return (
    <>
      <CardContainer className="w-full xl:w-4/12 pl-1 pr-4 mb-4">
        <div className="relative flex flex-col max-w-full break-words w-full mb-6 h-32">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1"></div>
            </div>
          </div>
          <div
            className="p-4 flex-auto"
            style={{ position: "absolute", left: "2rem", top: "1rem" }}
          >
            <img
              alt=""
              src={folderIcon}
              // className="opacity-75 mr-2 text-sm"
            />
            <div className="relative" style={{ left: "6rem", top: "-5.5rem" }}>
              <h1 className="mb-1 tet-2xl ml-4">
                <span className="font-semibold tet-3xl card-number">5</span>
                &nbsp; &nbsp;Recent Projects
              </h1>
              <Link to="/projects">
                <ViewButton>View</ViewButton>
              </Link>
            </div>
          </div>
        </div>
      </CardContainer>

      <CardContainer className="w-full xl:w-4/12 pl-1 pr-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 h-32">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1"></div>
            </div>
          </div>
          <div
            className="p-4 flex-auto"
            style={{ position: "absolute", left: "2rem" }}
          >
            <img
              alt=""
              src={reportIcon}
              // className="opacity-75 mr-2 text-sm"
            />
            <div className="relative" style={{ left: "6rem", top: "-5.5rem" }}>
              <h1 className="mb-1 tet-2xl">
                <span className="font-semibold  ml-4 txt-3xl card-number">
                  2
                </span>
                &nbsp; &nbsp;New surveys
              </h1>
              <Link to="/surveys">
                <ViewButton>View</ViewButton>
              </Link>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  );
}
