import React, { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
const SummaryView: React.FC = () => {
  const { state } = useContext(ActivityContext)!;

  return (
    <div className="summary-container">
      <h2 className="summary-title">Carbon Footprint Summary</h2>
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
