import React, { useEffect, useState } from "react";
import Chart from "chart.js";

import styled from "styled-components";
const PieContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default function PieChart() {
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
      type: "pie",
      data: {
        labels: Object.keys(datasets_data),
        datasets: [
          {
            label: "",
            backgroundColor: ['#C4C4C4','#FFE8A5','#EBF8ED'],
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

    let ctx = document.getElementById("pie-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);


  }, [datasets_data]);

  return (
    <>
      <PieContainer>
        <canvas id="pie-chart"></canvas>
      </PieContainer>
    </>
  );
}
