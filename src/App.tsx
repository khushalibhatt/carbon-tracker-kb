import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivityProvider } from "./context/ActivityContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "./styles.css";
 
const App: React.FC = () => {
  return (
    <ActivityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ActivityProvider>
  );
};

export default App;
