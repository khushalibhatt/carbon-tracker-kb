import React from "react";
import { Link } from "react-router-dom";
import ActivityLogger from "../components/ActivityLogger";

const Home: React.FC = () => (
  <div className="p-4">
    <h1 className="text-2xl">Activity Logger</h1>
    <ActivityLogger />
    <Link to="/dashboard" className="text-blue-500 mt-4 block">View Dashboard</Link>
  </div>
);

export default Home;
