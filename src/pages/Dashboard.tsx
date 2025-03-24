import React from "react";
import { Link } from "react-router-dom";
import SummaryView from "../components/SummaryView";

const Dashboard: React.FC = () => (
  <div className="p-4">
    <h1 className="text-2xl">Dashboard</h1>
    <SummaryView />
    <Link to="/" className="text-blue-500 mt-4 block">Back to Home</Link>
  </div>
);

export default Dashboard;
