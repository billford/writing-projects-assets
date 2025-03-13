import React from 'react';

const SolonRetailSpaces = () => {
  const retailSpaces = [
    {
      address: "6130 Kruse Drive",
      squareFeet: 2500,
      pricePerSqFt: 15.00,
      propertyType: "Shopping Center",
      availableSince: "2024-09-15",
      contact: "Goodman Real Estate Services",
      additionalInfo: "End cap space, high visibility"
    },
    {
      address: "6175 SOM Center Road",
      squareFeet: 3800,
      pricePerSqFt: 18.50,
      propertyType: "Strip Mall",
      availableSince: "2024-07-01",
      contact: "CBRE Commercial",
      additionalInfo: "Former restaurant space, kitchen equipment available"
    },
    {
      address: "33365 Station Street",
      squareFeet: 1200,
      pricePerSqFt: 12.00,
      propertyType: "Downtown Retail",
      availableSince: "2024-10-10",
      contact: "Solon Realty Group",
      additionalInfo: "Near Solon Square, suitable for small business"
    },
    {
      address: "28900 Solon Road",
      squareFeet: 5200,
      pricePerSqFt: 14.75,
      propertyType: "Standalone Building",
      availableSince: "2024-08-22",
      contact: "Marcus & Millichap",
      additionalInfo: "Former bank branch, drive-thru available"
    },
    {
      address: "6060 Enterprise Parkway",
      squareFeet: 3100,
      pricePerSqFt: 16.25,
      propertyType: "Office/Retail",
      availableSince: "2024-06-15",
      contact: "Howard Hanna Commercial",
      additionalInfo: "Mixed-use building, flexible layout"
    },
    {
      address: "32975 Aurora Road",
      squareFeet: 4500,
      pricePerSqFt: 13.50,
      propertyType: "Shopping Center",
      availableSince: "2024-11-01",
      contact: "Cushman & Wakefield",
      additionalInfo: "Anchor space available in Aurora Shopping Center"
    },
    {
      address: "34100 Solon Road",
      squareFeet: 1800,
      pricePerSqFt: 17.00,
      propertyType: "Strip Mall",
      availableSince: "2024-09-05",
      contact: "Colliers International",
      additionalInfo: "High traffic area, ample parking"
    }
  ];

  // Calculate summary statistics
  const totalSpaces = retailSpaces.length;
  const totalSquareFeet = retailSpaces.reduce((sum, space) => sum + space.squareFeet, 0);
  const averagePricePerSqFt = retailSpaces.reduce((sum, space) => sum + space.pricePerSqFt, 0) / totalSpaces;

  // Function to format date in a more readable way
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-800">Empty Retail Spaces in Solon, Ohio</h1>
        <p className="text-gray-600">Available commercial properties as of March 2025</p>
        
        <div className="grid grid-cols-3 gap-4 mt-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-lg font-semibold text-blue-800">{totalSpaces}</p>
            <p className="text-sm text-gray-600">Available Properties</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-lg font-semibold text-blue-800">{totalSquareFeet.toLocaleString()} sq ft</p>
            <p className="text-sm text-gray-600">Total Available Space</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-lg font-semibold text-blue-800">${averagePricePerSqFt.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Avg. Price per Sq Ft</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Address</th>
              <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Property Type</th>
              <th className="px-4 py-3 border-b text-right text-sm font-medium text-gray-700">Square Feet</th>
              <th className="px-4 py-3 border-b text-right text-sm font-medium text-gray-700">Price/Sq Ft</th>
              <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Available Since</th>
              <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Contact</th>
              <th className="px-4 py-3 border-b text-left text-sm font-medium text-gray-700">Additional Info</th>
            </tr>
          </thead>
          <tbody>
            {retailSpaces.map((space, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 border-b text-sm font-medium">{space.address}</td>
                <td className="px-4 py-3 border-b text-sm">{space.propertyType}</td>
                <td className="px-4 py-3 border-b text-sm text-right">{space.squareFeet.toLocaleString()}</td>
                <td className="px-4 py-3 border-b text-sm text-right">${space.pricePerSqFt.toFixed(2)}</td>
                <td className="px-4 py-3 border-b text-sm">{formatDate(space.availableSince)}</td>
                <td className="px-4 py-3 border-b text-sm">{space.contact}</td>
                <td className="px-4 py-3 border-b text-sm">{space.additionalInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>Note: This table displays commercial retail spaces available for lease in Solon, Ohio. Pricing and availability subject to change. Contact the listed brokers for the most current information.</p>
      </div>
    </div>
  );
};

export default SolonRetailSpaces;
