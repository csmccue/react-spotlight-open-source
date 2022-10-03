import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['red', 'white', 'blue'],
  datasets: [
    {
      label: 'colors of the american flag',
      data: [3, 3, 3],
      backgroundColor: [
        'rgba(190, 80, 120, 0.3)',
        'rgba(255, 255, 255. 0.3)',
        'rgba(72, 122, 180, 0.3)',
      ],
      borderColor: [
        'rgba(190, 80, 120, 1)',
        'rgba(255, 255, 255. 1)',
        'rgba(72, 122, 180, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Charts() {
  return (
    <>
      <div>Colors of the American Flag</div>
      <Pie data={data} />
    </>

  );
}
