import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart = ({readBooksData}) => {
  console.log(readBooksData);
  return (
    <div className="h-screen">
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          // maxHeight: "700px",
          height: "100%",
          aspectRatio: 1.618,
        }}
        responsive
        data={readBooksData}
      >
        <Bar dataKey="totalPages" fill="#8884d8" />
        <XAxis
          dataKey="bookName"
        />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default Chart;