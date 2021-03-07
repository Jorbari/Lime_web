import React from "react";
import { ReactComponent as PieChartIcon } from "../../assets/pie-chart.svg";
import { ReactComponent as BarGraphIcon } from "../../assets/bar-graph.svg";

export const summaryDropdownData = ()=>(
    {
        [summaryFormatTypes.Pie]:<div
        className="dropdown-item"
        key="1"
        id={`${summaryFormatTypes.Pie}`}
        >
        <PieChartIcon />
        <span>Pie chart</span>
        </div>,
        [summaryFormatTypes.Bar]:<div
        className="dropdown-item"
        key="2"
        id={`${summaryFormatTypes.Bar}`}
        >
        <BarGraphIcon />
        <span>Bar chart</span>
        </div>,
        
    }
)

export const summaryFormatTypes = {
    Pie:'Pie',
    Bar:'Bar',
}
