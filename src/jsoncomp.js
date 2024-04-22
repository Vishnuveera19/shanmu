import React from 'react';

const JsonTable = ({ jsonData }) => {
  // Check if JSON data is provided
  if (!jsonData) {
    return <div>No JSON data provided.</div>;
  }

  // Function to check if a value is an object
  const isObject = value => typeof value === 'object' && value !== null && !Array.isArray(value);

  // Render a cell containing either a value or a subtable
  const renderCell = value => {
    if (isObject(value)) {
      return <JsonTable jsonData={[value]} />;
    } else {
      return value;
    }
  };

  // Extract column headers from the first object in the JSON
  const columnHeaders = Object.keys(jsonData[0]);

  return (
    <table border="solid 2px black">
      <thead>
        <tr>
          {columnHeaders.map(header => (
            <th key={header}>{header.split("_").join(" ")}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jsonData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnHeaders.map((header, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`}>
                <input type='text' value={renderCell(row[header])} disabled='true'  />
              
              </td>
            ))}
            <td>
                <button onClick={{}}>Edit</button>
            </td>
            <td>
                <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsonTable;
