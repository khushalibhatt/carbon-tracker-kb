import React, { useState, useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import Notification from "./Notification";

const ActivityLogger: React.FC = () => {
  const { dispatch } = useContext(ActivityContext)!;
  const [activity, setActivity] = useState<string>("");
  const [carbonValue, setCarbonValue] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddActivity = () => {
    if (!activity) return;

    dispatch({ type: "ADD_ACTIVITY", payload: { name: activity, carbonValue } });

    setNotification(`Added activity: ${activity}`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="p-4">
      <input className="border p-2 mr-2" placeholder="Activity Name" onChange={(e) => setActivity(e.target.value)} />
      <input className="border p-2 mr-2" type="number" placeholder="Carbon Value" onChange={(e) => setCarbonValue(Number(e.target.value))} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddActivity}>Log Activity</button>
      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
    </div>
  );
};

export default ActivityLogger;
