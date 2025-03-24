import React, { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SummaryView: React.FC = () => {
  const { state } = useContext(ActivityContext)!;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Carbon Footprint Summary</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={state.activities}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="carbonValue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SummaryView;
