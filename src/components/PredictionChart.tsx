import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type Props = {
  data: { time: string; value: number }[];
};

export default function PredictionChart({ data }: Props) {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} />
    </LineChart>
  );
}
