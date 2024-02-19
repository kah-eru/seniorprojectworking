import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChartsComponent = () => {
  // Data for the first line chart
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Data for the second line chart
  const data2 = {
    labels: ['July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  // Options for the line charts
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Chart 1</h2>
      <Line data={data1} options={options} />
      <h2>Line Chart 2</h2>
      <Line data={data2} options={options} />
    </div>
  );
};

export default LineChartsComponent;