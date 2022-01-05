import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar"
 
const Chart = props => {
    const dataPointsValues = props.dataPoint.map(dataPoint => dataPoint.value)
    const defineMaxValue = Math.max(...dataPointsValues)

    return (
        <div className='chart'>
            {props.dataPoint.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={defineMaxValue}
                    label={dataPoint.label} />)}
        </div>
    )
}

export default Chart