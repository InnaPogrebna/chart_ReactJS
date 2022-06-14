import React, { useState } from 'react'
import { Bar, Line, PolarArea } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto';
import './Chart.scss';

const ChartBar = ({axisX, axisY, color, borderColor}) => {
  const [changeChart, setChangeChart] = useState('BarChart');

  const changeRadio = (event) => {
    setChangeChart(event.target.value);
    
  }

  return (
    <>
      <div className="chart">
        {(changeChart === 'BarChart')
          && <Bar data={{
              datasets: [{
                data: axisY,
                label: "ChartBar",
                backgroundColor: color,
              }],
              labels: axisX,
            }}
              width={500}
              height={500}
              options={{
                maintainAspectRatio: false,
              }}
            />
        }
        {(changeChart === "LineChart")
          && <Line data={{
                datasets: [{
                  data: axisY,
                  label: "ChartLine",
                  borderColor: borderColor,
                }],
                labels: axisX,
              }}
                width={500}
                height={500}
                options={{
                  maintainAspectRatio: false,
                }}
            />
        }
        {(changeChart === 'PolarAreaChart')
          && <PolarArea data={{
                datasets: [{
                  data: axisY,
                  label: "PolarArea",
                  backgroundColor: color,
                }],
                labels: axisX,
              }}
                width={500}
                height={500}
                options={{
                  maintainAspectRatio: false,
                }}
            />
        }
    </div>
    <div className="chart__radio">
      <label
        className="chart__radio__label"
        htmlFor="changeChartA"
      >
        <input
          type="radio"
          className="chart__radio__input"
          id="changeChart"
          value="BarChart"
          checked={changeChart === "BarChart"}
          onChange={changeRadio}
          required
        />
          Bar chart
      </label>
      <label
        className="chart__radio__label"
        htmlFor="changeChartB"
      >
        <input
          type="radio"
          className="chart__radio__input"
          id="changeChartB"
          value="LineChart"
          checked={changeChart === "LineChart"}
          onChange={changeRadio}
          required
        />
          Line chart
      </label>
      <label
        className="chart__radio__label"
        htmlFor="changeChartC"
      >
        <input
          type="radio"
          className="chart__radio__input"
          id="changeChartC"
          value="PolarAreaChart"
          checked={changeChart === "PolarAreaChart"}
          onChange={changeRadio}
          required
        />
          Polar Area Chart
      </label>
    </div>
    </>

  )
}

export default ChartBar;
