import React from 'react';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function Charts() {
  const [donuts, useDonuts] = useState();
  console.log(Doughnut);
  return (
    <>
      <div>Charts</div>
      {/* <Doughnut data={...} /> */}
    </>

  );
}
