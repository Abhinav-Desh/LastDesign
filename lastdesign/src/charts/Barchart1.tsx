import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Rectangle } from "recharts";

// Sample Data
const sampleData = [
  { date: "M", value: 12 },
  { date: "T", value: 15 },
  { date: "W", value: 10 },
  { date: "T", value: 8 },
  { date: "F", value: 20 },
  { date: "S", value: 18 },
  { date: "S", value: 25 },
];

const BarChart1 = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
      <BarChart
        width={500}
        height={300}
        data={sampleData}
        margin={{
          top: 40,
          right: 35,
          left: 0,
          bottom: 5,
        }}
      >
     
        <CartesianGrid stroke="#898faa" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        
       
        <Bar
          dataKey="value"
          fill="#ffffff"
          barSize={5} 
          shape={(props) => {
            const { x, y, width, height, fill } = props;
            return (
              <Rectangle
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                strokeWidth={1}
                radius={10}
              />
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChart1;
