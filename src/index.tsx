import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// You can add additional imports as needed
// import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you have any global code or service worker registration, add it here
// For example:
// reportWebVitals();

// This empty export makes TypeScript treat this file as a module
// You can remove this if you have other exports
export {};