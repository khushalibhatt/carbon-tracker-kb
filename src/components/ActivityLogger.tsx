import React, { useState, useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import Notification from "./Notification";

const ActivityLogger: React.FC = () => {
  const { dispatch } = useContext(ActivityContext)!;
  const [activityName, setActivityName] = useState<string>("");
  const [carbonEmission, setCarbonEmission] = useState<number>(0);
  const [message, setMessage] = useState<string | null>(null);
  const handleLogActivity = () => {
    if (!activityName) return;
    dispatch({ type: "ADD_ACTIVITY", payload: { name: activityName, carbonValue: carbonEmission } });
    setMessage(`Logged activity: ${activityName}`);
    setTimeout(() => setMessage(null), 3000);
  };
  return (
    <div className="p-4">
      <input className="border p-2 mr-2" placeholder="Activity" onChange={(e) => setActivityName(e.target.value)} />
      <input className="border p-2 mr-2" type="number" placeholder="Total Carbon" onChange={(e) => setCarbonEmission(Number(e.target.value))} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogActivity}>Log Activity</button>
      {message && <Notification message={message} onClose={() => setMessage(null)} />}
    </div>
  );
};

export default ActivityLogger;
