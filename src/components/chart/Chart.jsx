import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.jsx";

const Chart = (props) => {
  // console.log(props.dataPoints);

  let priceArray = props.dataPoints.map((row) => row.price);

  // console.log(priceArray);

  let maxPrice = Math.max(...priceArray);

  console.log(maxPrice);

  return (
    <div className="chart">
      {props.dataPoints.map((record, index) => {
        return (
          <ChartBar
            label={record.label}
            value={record.price}
            maxValue={maxPrice}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Chart;
