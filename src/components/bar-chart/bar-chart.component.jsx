import React, { useEffect, useState } from "react";
import Chart from "chart.js";

import styled from "styled-components";
const PieContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default function BarChart() {
    const [datasets_data, setdatasets_data] = useState({"product-a":10, "product-b":20, "product-c":30});



//   useEffect(() => {
//     const load_pie_chart = async () => {
//       try {
//         const api = await updateUserDetails();

//         setdatasets_data(api.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     load_pie_chart();
//   }, []);

  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: Object.keys(datasets_data),
        datasets: [
          {
            barPercentage: 0.5,
            barThickness: 30,
            minBarLength: 20,
            backgroundColor: '#22B0FC',
            data: Object.values(datasets_data),
          },
        ],
      },
      options: {
          animation:{
              animateScale: true
          }
      },
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);


  }, [datasets_data]);

  return (
    <>
      <PieContainer>
        <canvas id="bar-chart"></canvas>
      </PieContainer>
    </>
  );
}
