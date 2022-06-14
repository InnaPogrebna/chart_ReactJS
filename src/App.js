import React, { useState } from 'react';
import ChartBar from './components/Chart/Chart';
import './App.scss';

const colorSet = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)',
];

const App = () => {
  const [axisX, setAxisX] = useState(['January', ' February', ' March', ' April', ' May']);
  const [axisY, setAxisY] = useState(['1', '5', '10', '4', '5']);
  const [color, setColor] = useState([
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ])

  const [borderColor] = useState(colorSet[Math.floor(Math.random() * colorSet.length - 1)]);


  const handleChange = (event, setInput) => {
    const result = (event.target.value).split(',');
    setInput(result);
    setColor(color.concat(colorSet[Math.floor(Math.random() * colorSet.length)]));
  }

  return (
    <div className="App">
      <div className="App__inputWrap">
        <label
          for="axisX"
          className="App__inputWrap__label"
        >
          X axis labels
        </label>
        <input
          type="text"
          name="axisX"
          value={axisX}
          className="App__inputWrap__input"
          onChange={(value) => handleChange(value, setAxisX)}
        />
      </div>
      <div className="App__inputWrap">
        <label
          for="axisY"
          className="App__inputWrap__label"
        >
          Y axis values
        </label>
        <input
          type="text"
          name="axisY"
          value={axisY}
          className="App__inputWrap__input"
          onChange={(value) => handleChange(value, setAxisY)}
        />
      </div>

      <ChartBar
        axisX={axisX}
        axisY={axisY}
        color={color}
        borderColor={borderColor}
      />
    </div>
  );
}

export default App;
