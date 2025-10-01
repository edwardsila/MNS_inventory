import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';

// Placeholder components for other pages
const DeviceInventory = () => <div className="p-8">Device Inventory Page</div>;
const DeviceMovements = () => <div className="p-8">Device Movements Page</div>;
const MaintenanceLog = () => <div className="p-8">Maintenance Log Page</div>;
const Reports = () => <div className="p-8">Reports Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devices" element={<DeviceInventory />} />
        <Route path="/movements" element={<DeviceMovements />} />
        <Route path="/maintenance" element={<MaintenanceLog />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;