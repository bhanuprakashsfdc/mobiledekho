import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css';
import { exportToCSV } from '../utils/reporting'; // Import exportToCSV

const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    // Fetch analytics data from backend or Google Analytics API
    const fetchAnalyticsData = async () => {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setAnalyticsData(data);
    };
    fetchAnalyticsData();
  }, []);

  const handleExport = () => {
    exportToCSV(analyticsData, 'analytics_report');
  };

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      {analyticsData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.map((item, index) => (
                <tr key={index}>
                  <td>{item.metric}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleExport}>Export to CSV</button>
        </>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
