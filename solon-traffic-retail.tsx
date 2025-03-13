import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const SolonTrafficRetailDashboard = () => {
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("Morning Rush (7-9am)");
  
  // Traffic congestion data
  const trafficData = {
    "Morning Rush (7-9am)": [
      { roadName: "SOM Center Road (Route 91)", congestionPercentage: 86, congestionCategory: "Severe", retailImpactPercentage: 26 },
      { roadName: "Aurora Road (Route 43)", congestionPercentage: 83, congestionCategory: "Severe", retailImpactPercentage: 14 },
      { roadName: "Solon Road", congestionPercentage: 71, congestionCategory: "Heavy", retailImpactPercentage: 29 },
      { roadName: "Bainbridge Road", congestionPercentage: 67, congestionCategory: "Heavy", retailImpactPercentage: 9 },
      { roadName: "Harper Road", congestionPercentage: 57, congestionCategory: "Moderate", retailImpactPercentage: 4 },
      { roadName: "US-422", congestionPercentage: 94, congestionCategory: "Severe", retailImpactPercentage: 6 },
      { roadName: "I-480", congestionPercentage: 93, congestionCategory: "Severe", retailImpactPercentage: 0 },
      { roadName: "Cochran Road", congestionPercentage: 52, congestionCategory: "Moderate", retailImpactPercentage: 16 }
    ],
    "Midday (11am-1pm)": [
      { roadName: "SOM Center Road (Route 91)", congestionPercentage: 45, congestionCategory: "Moderate", retailImpactPercentage: 59 },
      { roadName: "Aurora Road (Route 43)", congestionPercentage: 41, congestionCategory: "Moderate", retailImpactPercentage: 33 },
      { roadName: "Solon Road", congestionPercentage: 40, congestionCategory: "Light", retailImpactPercentage: 49 },
      { roadName: "Bainbridge Road", congestionPercentage: 32, congestionCategory: "Light", retailImpactPercentage: 18 },
      { roadName: "Harper Road", congestionPercentage: 26, congestionCategory: "Light", retailImpactPercentage: 12 },
      { roadName: "US-422", congestionPercentage: 62, congestionCategory: "Heavy", retailImpactPercentage: 15 },
      { roadName: "I-480", congestionPercentage: 57, congestionCategory: "Moderate", retailImpactPercentage: 0 },
      { roadName: "Cochran Road", congestionPercentage: 24, congestionCategory: "Light", retailImpactPercentage: 14 }
    ],
    "Evening Rush (4-6pm)": [
      { roadName: "SOM Center Road (Route 91)", congestionPercentage: 88, congestionCategory: "Severe", retailImpactPercentage: 74 },
      { roadName: "Aurora Road (Route 43)", congestionPercentage: 86, congestionCategory: "Severe", retailImpactPercentage: 41 },
      { roadName: "Solon Road", congestionPercentage: 83, congestionCategory: "Severe", retailImpactPercentage: 60 },
      { roadName: "Bainbridge Road", congestionPercentage: 71, congestionCategory: "Heavy", retailImpactPercentage: 25 },
      { roadName: "Harper Road", congestionPercentage: 64, congestionCategory: "Heavy", retailImpactPercentage: 16 },
      { roadName: "US-422", congestionPercentage: 90, congestionCategory: "Severe", retailImpactPercentage: 18 },
      { roadName: "I-480", congestionPercentage: 80, congestionCategory: "Severe", retailImpactPercentage: 0 },
      { roadName: "Cochran Road", congestionPercentage: 58, congestionCategory: "Moderate", retailImpactPercentage: 18 }
    ],
    "Late Night (10pm-12am)": [
      { roadName: "SOM Center Road (Route 91)", congestionPercentage: 13, congestionCategory: "Free Flow", retailImpactPercentage: 17 },
      { roadName: "Aurora Road (Route 43)", congestionPercentage: 13, congestionCategory: "Free Flow", retailImpactPercentage: 9 },
      { roadName: "Solon Road", congestionPercentage: 14, congestionCategory: "Free Flow", retailImpactPercentage: 10 },
      { roadName: "Bainbridge Road", congestionPercentage: 15, congestionCategory: "Free Flow", retailImpactPercentage: 5 },
      { roadName: "Harper Road", congestionPercentage: 5, congestionCategory: "Free Flow", retailImpactPercentage: 2 },
      { roadName: "US-422", congestionPercentage: 30, congestionCategory: "Light", retailImpactPercentage: 3 },
      { roadName: "I-480", congestionPercentage: 23, congestionCategory: "Light", retailImpactPercentage: 0 },
      { roadName: "Cochran Road", congestionPercentage: 5, congestionCategory: "Free Flow", retailImpactPercentage: 2 }
    ]
  };

  // Retail areas data
  const retailAreas = [
    {
      name: "Solon Shopping Center",
      location: "SOM Center Rd & Aurora Rd",
      totalSquareFeet: 180000,
      occupancyRate: 0.85,
      businesses: 24,
      trafficContribution: {
        "Morning Rush (7-9am)": 12,
        "Midday (11am-1pm)": 25,
        "Evening Rush (4-6pm)": 30,
        "Late Night (10pm-12am)": 8
      },
      primaryType: "Mixed Retail"
    },
    {
      name: "Solon Village Shopping Center",
      location: "Solon Rd & SOM Center Rd",
      totalSquareFeet: 120000,
      occupancyRate: 0.92,
      businesses: 18,
      trafficContribution: {
        "Morning Rush (7-9am)": 8,
        "Midday (11am-1pm)": 22,
        "Evening Rush (4-6pm)": 26,
        "Late Night (10pm-12am)": 5
      },
      primaryType: "Grocery & Services"
    },
    {
      name: "Solar Shopping Center",
      location: "Aurora Rd near Harper Rd",
      totalSquareFeet: 85000,
      occupancyRate: 0.78,
      businesses: 15,
      trafficContribution: {
        "Morning Rush (7-9am)": 5,
        "Midday (11am-1pm)": 15,
        "Evening Rush (4-6pm)": 20,
        "Late Night (10pm-12am)": 3
      },
      primaryType: "Specialty Retail"
    },
    {
      name: "Solon Square",
      location: "SOM Center Rd south of Bainbridge",
      totalSquareFeet: 145000,
      occupancyRate: 0.88,
      businesses: 22,
      trafficContribution: {
        "Morning Rush (7-9am)": 10,
        "Midday (11am-1pm)": 20,
        "Evening Rush (4-6pm)": 28,
        "Late Night (10pm-12am)": 6
      },
      primaryType: "Restaurants & Retail"
    },
    {
      name: "Uptown Solon",
      location: "Kruse Dr & Enterprise Pkwy",
      totalSquareFeet: 95000,
      occupancyRate: 0.82,
      businesses: 16,
      trafficContribution: {
        "Morning Rush (7-9am)": 7,
        "Midday (11am-1pm)": 18,
        "Evening Rush (4-6pm)": 22,
        "Late Night (10pm-12am)": 4
      },
      primaryType: "Office & Retail"
    },
    {
      name: "Solon Business Park",
      location: "Cochran Rd & Solon Rd",
      totalSquareFeet: 220000,
      occupancyRate: 0.90,
      businesses: 35,
      trafficContribution: {
        "Morning Rush (7-9am)": 18,
        "Midday (11am-1pm)": 15,
        "Evening Rush (4-6pm)": 20,
        "Late Night (10pm-12am)": 2
      },
      primaryType: "Office & Light Industrial"
    }
  ];

  // Helper functions
  const getTimeData = (timeOfDay) => {
    return trafficData[timeOfDay].sort((a, b) => b.congestionPercentage - a.congestionPercentage);
  };

  const getCongestionColor = (category) => {
    switch(category) {
      case "Severe": return "#d32f2f";
      case "Heavy": return "#f57c00";
      case "Moderate": return "#fbc02d";
      case "Light": return "#7cb342";
      case "Free Flow": return "#388e3c";
      default: return "#757575";
    }
  };

  const formatRetailTrafficData = () => {
    return retailAreas.map(area => ({
      name: area.name,
      trafficContribution: area.trafficContribution[selectedTimeOfDay],
      adjustedContribution: Math.round(area.trafficContribution[selectedTimeOfDay] * area.occupancyRate),
      occupancyRate: Math.round(area.occupancyRate * 100),
      primaryType: area.primaryType,
      businesses: area.businesses
    })).sort((a, b) => b.trafficContribution - a.trafficContribution);
  };

  const formatComparisonData = () => {
    return trafficData[selectedTimeOfDay]
      .filter(road => road.retailImpactPercentage > 0)
      .map(road => ({
        roadName: road.roadName,
        congestion: road.congestionPercentage,
        retailImpact: road.retailImpactPercentage,
        difference: road.congestionPercentage - road.retailImpactPercentage,
        congestionCategory: road.congestionCategory
      }))
      .sort((a, b) => b.retailImpact - a.retailImpact);
  };

  // Prepare data
  const currentTimeData = getTimeData(selectedTimeOfDay);
  const retailTrafficData = formatRetailTrafficData();
  const comparisonData = formatComparisonData();
  
  // Calculate totals
  const totalRetailMetrics = {
    totalSquareFeet: retailAreas.reduce((sum, area) => sum + area.totalSquareFeet, 0),
    totalBusinesses: retailAreas.reduce((sum, area) => sum + area.businesses, 0),
    avgOccupancy: Math.round(retailAreas.reduce((sum, area) => sum + area.occupancyRate, 0) / retailAreas.length * 100)
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Solon, Ohio Traffic & Retail Space Dashboard</h1>
        <p className="text-gray-600">Analyzing the relationship between traffic congestion and retail centers</p>
      </div>
      
      {/* Time selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Period:</label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(trafficData).map((timeOption) => (
            <button
              key={timeOption}
              onClick={() => setSelectedTimeOfDay(timeOption)}
              className={`px-4 py-2 rounded-md text-sm ${
                selectedTimeOfDay === timeOption
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {timeOption}
            </button>
          ))}
        </div>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Average Congestion</p>
          <p className="text-2xl font-semibold text-gray-800">{Math.round(currentTimeData.reduce((sum, road) => sum + road.congestionPercentage, 0) / currentTimeData.length)}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Retail Impact</p>
          <p className="text-2xl font-semibold text-gray-800">{Math.round(comparisonData.reduce((sum, road) => sum + road.retailImpact, 0) / comparisonData.length)}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Retail Space</p>
          <p className="text-2xl font-semibold text-gray-800">{(totalRetailMetrics.totalSquareFeet / 1000).toFixed(1)}K sq ft</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Retail Occupancy</p>
          <p className="text-2xl font-semibold text-gray-800">{totalRetailMetrics.avgOccupancy}%</p>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Road Congestion with Retail Impact */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Road Congestion vs. Retail Impact</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="roadName" type="category" width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="congestion" name="Total Congestion %" fill="#8884d8">
                  {comparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getCongestionColor(entry.congestionCategory)} />
                  ))}
                </Bar>
                <Bar dataKey="retailImpact" name="Retail Impact %" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Retail Centers Traffic Contribution */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Retail Centers Traffic Contribution</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={retailTrafficData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="trafficContribution" name="Traffic Impact Points" fill="#8884d8" />
                <Bar dataKey="occupancyRate" name="Occupancy Rate %" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Traffic Over Time */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Traffic Patterns by Time of Day</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" type="category" allowDuplicatedCategory={false} />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(trafficData).map(timeKey => (
                <Line 
                  key={timeKey}
                  data={trafficData[timeKey].filter(road => road.retailImpactPercentage > 10)}
                  type="monotone"
                  dataKey="congestionPercentage"
                  name={timeKey}
                  stroke={timeKey === "Morning Rush (7-9am)" ? "#8884d8" : 
                         timeKey === "Midday (11am-1pm)" ? "#82ca9d" :
                         timeKey === "Evening Rush (4-6pm)" ? "#ff7300" : "#888888"}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Retail Hotspots */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Retail Areas and Traffic Impact</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retail Center</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Traffic Impact</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Businesses</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {retailTrafficData.map((retail, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{retail.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{retailAreas.find(area => area.name === retail.name).location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{retail.primaryType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">{retail.trafficContribution}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{retail.occupancyRate}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{retail.businesses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mt-4">
        <p>This dashboard visualizes the relationship between traffic congestion in Solon, Ohio and the impact from retail centers. Data shown is representative based on traffic patterns and retail center characteristics.</p>
      </div>
    </div>
  );
};

export default SolonTrafficRetailDashboard;