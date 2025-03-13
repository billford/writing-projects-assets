import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const SolonTrafficDashboard = () => {
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState("Morning Rush (7-9am)");
  
  // Traffic congestion data
  const trafficData = {
    "Morning Rush (7-9am)": [
      {
        "roadName": "SOM Center Road (Route 91)",
        "congestionPercentage": 86,
        "congestionCategory": "Severe",
        "averageSpeed": 14,
        "maxSpeed": 45
      },
      {
        "roadName": "Aurora Road (Route 43)",
        "congestionPercentage": 83,
        "congestionCategory": "Severe",
        "averageSpeed": 15,
        "maxSpeed": 45
      },
      {
        "roadName": "Solon Road",
        "congestionPercentage": 71,
        "congestionCategory": "Heavy",
        "averageSpeed": 15,
        "maxSpeed": 35
      },
      {
        "roadName": "Bainbridge Road",
        "congestionPercentage": 67,
        "congestionCategory": "Heavy",
        "averageSpeed": 16,
        "maxSpeed": 35
      },
      {
        "roadName": "Harper Road",
        "congestionPercentage": 57,
        "congestionCategory": "Moderate",
        "averageSpeed": 19,
        "maxSpeed": 35
      },
      {
        "roadName": "US-422",
        "congestionPercentage": 94,
        "congestionCategory": "Severe",
        "averageSpeed": 16,
        "maxSpeed": 65
      },
      {
        "roadName": "I-480",
        "congestionPercentage": 93,
        "congestionCategory": "Severe",
        "averageSpeed": 17,
        "maxSpeed": 65
      },
      {
        "roadName": "Cochran Road",
        "congestionPercentage": 52,
        "congestionCategory": "Moderate",
        "averageSpeed": 20,
        "maxSpeed": 35
      },
      {
        "roadName": "Pettibone Road",
        "congestionPercentage": 49,
        "congestionCategory": "Moderate",
        "averageSpeed": 21,
        "maxSpeed": 35
      },
      {
        "roadName": "Liberty Road",
        "congestionPercentage": 43,
        "congestionCategory": "Moderate",
        "averageSpeed": 23,
        "maxSpeed": 35
      }
    ],
    "Midday (11am-1pm)": [
      {
        "roadName": "SOM Center Road (Route 91)",
        "congestionPercentage": 45,
        "congestionCategory": "Moderate",
        "averageSpeed": 29,
        "maxSpeed": 45
      },
      {
        "roadName": "Aurora Road (Route 43)",
        "congestionPercentage": 41,
        "congestionCategory": "Moderate",
        "averageSpeed": 30,
        "maxSpeed": 45
      },
      {
        "roadName": "Solon Road",
        "congestionPercentage": 40,
        "congestionCategory": "Light",
        "averageSpeed": 24,
        "maxSpeed": 35
      },
      {
        "roadName": "Bainbridge Road",
        "congestionPercentage": 32,
        "congestionCategory": "Light",
        "averageSpeed": 26,
        "maxSpeed": 35
      },
      {
        "roadName": "Harper Road",
        "congestionPercentage": 26,
        "congestionCategory": "Light",
        "averageSpeed": 28,
        "maxSpeed": 35
      },
      {
        "roadName": "US-422",
        "congestionPercentage": 62,
        "congestionCategory": "Heavy",
        "averageSpeed": 33,
        "maxSpeed": 65
      },
      {
        "roadName": "I-480",
        "congestionPercentage": 57,
        "congestionCategory": "Moderate",
        "averageSpeed": 35,
        "maxSpeed": 65
      },
      {
        "roadName": "Cochran Road",
        "congestionPercentage": 24,
        "congestionCategory": "Light",
        "averageSpeed": 28,
        "maxSpeed": 35
      },
      {
        "roadName": "Pettibone Road",
        "congestionPercentage": 19,
        "congestionCategory": "Free Flow",
        "averageSpeed": 30,
        "maxSpeed": 35
      },
      {
        "roadName": "Liberty Road",
        "congestionPercentage": 17,
        "congestionCategory": "Free Flow",
        "averageSpeed": 30,
        "maxSpeed": 35
      }
    ],
    "Evening Rush (4-6pm)": [
      {
        "roadName": "SOM Center Road (Route 91)",
        "congestionPercentage": 88,
        "congestionCategory": "Severe",
        "averageSpeed": 13,
        "maxSpeed": 45
      },
      {
        "roadName": "Aurora Road (Route 43)",
        "congestionPercentage": 86,
        "congestionCategory": "Severe",
        "averageSpeed": 14,
        "maxSpeed": 45
      },
      {
        "roadName": "Solon Road",
        "congestionPercentage": 83,
        "congestionCategory": "Severe",
        "averageSpeed": 12,
        "maxSpeed": 35
      },
      {
        "roadName": "Bainbridge Road",
        "congestionPercentage": 71,
        "congestionCategory": "Heavy",
        "averageSpeed": 15,
        "maxSpeed": 35
      },
      {
        "roadName": "Harper Road",
        "congestionPercentage": 64,
        "congestionCategory": "Heavy",
        "averageSpeed": 17,
        "maxSpeed": 35
      },
      {
        "roadName": "US-422",
        "congestionPercentage": 90,
        "congestionCategory": "Severe",
        "averageSpeed": 18,
        "maxSpeed": 65
      },
      {
        "roadName": "I-480",
        "congestionPercentage": 80,
        "congestionCategory": "Severe",
        "averageSpeed": 23,
        "maxSpeed": 65
      },
      {
        "roadName": "Cochran Road",
        "congestionPercentage": 58,
        "congestionCategory": "Moderate",
        "averageSpeed": 19,
        "maxSpeed": 35
      },
      {
        "roadName": "Pettibone Road",
        "congestionPercentage": 46,
        "congestionCategory": "Moderate",
        "averageSpeed": 22,
        "maxSpeed": 35
      },
      {
        "roadName": "Liberty Road",
        "congestionPercentage": 47,
        "congestionCategory": "Moderate",
        "averageSpeed": 22,
        "maxSpeed": 35
      }
    ],
    "Late Night (10pm-12am)": [
      {
        "roadName": "SOM Center Road (Route 91)",
        "congestionPercentage": 13,
        "congestionCategory": "Free Flow",
        "averageSpeed": 40,
        "maxSpeed": 45
      },
      {
        "roadName": "Aurora Road (Route 43)",
        "congestionPercentage": 13,
        "congestionCategory": "Free Flow",
        "averageSpeed": 40,
        "maxSpeed": 45
      },
      {
        "roadName": "Solon Road",
        "congestionPercentage": 14,
        "congestionCategory": "Free Flow",
        "averageSpeed": 31,
        "maxSpeed": 35
      },
      {
        "roadName": "Bainbridge Road",
        "congestionPercentage": 15,
        "congestionCategory": "Free Flow",
        "averageSpeed": 31,
        "maxSpeed": 35
      },
      {
        "roadName": "Harper Road",
        "congestionPercentage": 5,
        "congestionCategory": "Free Flow",
        "averageSpeed": 34,
        "maxSpeed": 35
      },
      {
        "roadName": "US-422",
        "congestionPercentage": 30,
        "congestionCategory": "Light",
        "averageSpeed": 49,
        "maxSpeed": 65
      },
      {
        "roadName": "I-480",
        "congestionPercentage": 23,
        "congestionCategory": "Light",
        "averageSpeed": 53,
        "maxSpeed": 65
      },
      {
        "roadName": "Cochran Road",
        "congestionPercentage": 5,
        "congestionCategory": "Free Flow",
        "averageSpeed": 34,
        "maxSpeed": 35
      },
      {
        "roadName": "Pettibone Road",
        "congestionPercentage": 5,
        "congestionCategory": "Free Flow",
        "averageSpeed": 34,
        "maxSpeed": 35
      },
      {
        "roadName": "Liberty Road",
        "congestionPercentage": 6,
        "congestionCategory": "Free Flow",
        "averageSpeed": 33,
        "maxSpeed": 35
      }
    ]
  };

  // Congestion hotspots
  const congestionHotspots = [
    {
      "location": "SOM Center Rd & Aurora Rd Intersection",
      "severity": "High",
      "description": "Major intersection in downtown Solon",
      "peakHours": "7-9am, 4-6pm"
    },
    {
      "location": "I-480 & US-422 Interchange",
      "severity": "High",
      "description": "Highway interchange with frequent backups",
      "peakHours": "7-9am, 4-7pm"
    },
    {
      "location": "Solon Rd & SOM Center Rd",
      "severity": "Medium",
      "description": "Busy commercial area intersection",
      "peakHours": "11am-1pm, 5-6pm"
    },
    {
      "location": "US-422 near Harper Rd Exit",
      "severity": "Medium",
      "description": "Highway exit to industrial area",
      "peakHours": "7-8am, 4-5pm"
    },
    {
      "location": "Bainbridge Rd & Solon Rd",
      "severity": "Medium-Low",
      "description": "Residential area intersection with school traffic",
      "peakHours": "7:30-8:30am, 2:30-3:30pm"
    }
  ];

  // Average commute times to surrounding areas
  const commuteDestinations = [
    {
      "destination": "Downtown Cleveland",
      "distance": 18,
      "morningRushTime": 35,
      "middayTime": 22,
      "eveningRushTime": 40,
      "lateNightTime": 18
    },
    {
      "destination": "University Circle",
      "distance": 15,
      "morningRushTime": 30,
      "middayTime": 20,
      "eveningRushTime": 35,
      "lateNightTime": 16
    },
    {
      "destination": "Hopkins Airport",
      "distance": 25,
      "morningRushTime": 38,
      "middayTime": 28,
      "eveningRushTime": 45,
      "lateNightTime": 24
    },
    {
      "destination": "Akron",
      "distance": 32,
      "morningRushTime": 43,
      "middayTime": 32,
      "eveningRushTime": 48,
      "lateNightTime": 28
    },
    {
      "destination": "Chagrin Falls",
      "distance": 8,
      "morningRushTime": 18,
      "middayTime": 12,
      "eveningRushTime": 22,
      "lateNightTime": 10
    }
  ];

  // Prepare data for each time period
  const getTimeData = (timeOfDay) => {
    return trafficData[timeOfDay].sort((a, b) => b.congestionPercentage - a.congestionPercentage);
  };

  // Color mapping for congestion levels
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

  // Get hotspot color based on severity
  const getHotspotColor = (severity) => {
    switch(severity) {
      case "High": return "#d32f2f";
      case "Medium": return "#f57c00";
      case "Medium-Low": return "#fbc02d";
      case "Low": return "#7cb342";
      default: return "#757575";
    }
  };

  // Calculate congestion distribution for pie chart
  const calcCongestionDistribution = (timeData) => {
    const categories = {"Severe": 0, "Heavy": 0, "Moderate": 0, "Light": 0, "Free Flow": 0};
    
    timeData.forEach(road => {
      categories[road.congestionCategory]++;
    });
    
    return Object.keys(categories).map(key => ({
      name: key,
      value: categories[key],
      color: getCongestionColor(key)
    }));
  };
  
  // Format data for commute time comparison chart
  const formatCommuteData = () => {
    return commuteDestinations.map(dest => ({
      name: dest.destination,
      morning: dest.morningRushTime,
      midday: dest.middayTime,
      evening: dest.eveningRushTime,
      night: dest.lateNightTime,
      distance: dest.distance
    }));
  };

  // Format road data for radar chart
  const formatRadarData = (timeData) => {
    return timeData.map(road => ({
      subject: road.roadName.split(' ')[0],
      congestion: road.congestionPercentage,
      speed: (road.averageSpeed / road.maxSpeed) * 100,
      fullMark: 100
    }));
  };

  const currentTimeData = getTimeData(selectedTimeOfDay);
  const pieData = calcCongestionDistribution(currentTimeData);
  const commuteData = formatCommuteData();
  const radarData = formatRadarData(currentTimeData.slice(0, 6));

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Solon, Ohio Traffic Congestion Dashboard</h1>
        <p className="text-gray-600">Visualizing traffic patterns and congestion across different times of day</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Congestion by Road */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Road Congestion Levels</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={currentTimeData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="roadName" type="category" width={100} />
                <Tooltip formatter={(value) => [`${value}%`, 'Congestion']} />
                <Legend />
                <Bar 
                  dataKey="congestionPercentage" 
                  name="Congestion %" 
                  fill="#8884d8"
                  background={{ fill: '#eee' }}
                >
                  {currentTimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getCongestionColor(entry.congestionCategory)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Average Speed vs. Speed Limit */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Average Speed vs. Speed Limit</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={currentTimeData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 70]} />
                <YAxis dataKey="roadName" type="category" width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="maxSpeed" name="Speed Limit (mph)" fill="#82ca9d" />
                <Bar dataKey="averageSpeed" name="Average Speed (mph)" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Congestion Distribution */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Congestion Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} roads`, 'Count']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Radar Chart of Top Roads */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Congestion Pattern</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Congestion %" dataKey="congestion" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Commute Times */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Commute Times (minutes)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={commuteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="morning" name="Morning Rush" stroke="#d32f2f" strokeWidth={2} />
                <Line type="monotone" dataKey="midday" name="Midday" stroke="#388e3c" strokeWidth={2} />
                <Line type="monotone" dataKey="evening" name="Evening Rush" stroke="#1976d2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Congestion Hotspots */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Congestion Hotspots</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peak Hours</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {congestionHotspots.map((hotspot, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{hotspot.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span 
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                      style={{ backgroundColor: `${getHotspotColor(hotspot.severity)}20`, color: getHotspotColor(hotspot.severity) }}
                    >
                      {hotspot.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hotspot.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hotspot.peakHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Summary and Notes */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Traffic Analysis Summary</h2>
        <div className="space-y-4 text-sm text-gray-600">
          <p>This traffic congestion visualization for Solon, Ohio shows patterns across different times of the day, highlighting the most congested roads and intersections.</p>
          <p>Key observations for {selectedTimeOfDay}:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Average congestion across all roads: {Math.round(currentTimeData.reduce((sum, road) => sum + road.congestionPercentage, 0) / currentTimeData.length)}%</li>
            <li>Most congested road: {currentTimeData[0].roadName} ({currentTimeData[0].congestionPercentage}% congestion)</li>
            <li>Least congested road: {currentTimeData[currentTimeData.length - 1].roadName} ({currentTimeData[currentTimeData.length - 1].congestionPercentage}% congestion)</li>
            <li>Average travel speed reduction: {Math.round((1 - currentTimeData.reduce((sum, road) => sum + road.averageSpeed, 0) / currentTimeData.reduce((sum, road) => sum + road.maxSpeed, 0)) * 100)}% below speed limits</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">Note: Data shown is representative and based on typical traffic patterns. Real-time conditions may vary. For current traffic information, please check local traffic services or navigation apps.</p>
        </div>
      </div>
    </div>
  );
};

export default SolonTrafficDashboard;