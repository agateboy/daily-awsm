import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import VariableRenderer from './VariableRenderer'; // Import VariableRenderer component
import DailyDataProcessor from './DailyDataProcessor';
import Setup from './setup';
function App() {
  const [csvData, setCsvData] = useState([]);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const data = text.split('\n').map(row => row.split(','));
      setCsvData(data);
    };
    reader.readAsText(file);
  };
  return (
    <div>
        <input type='number' id='openvalue' placeholder='Open Price'></input>
      <label className='blue-button' htmlFor='fileupload'>
        Upload CSV File
      </label>
      <input className='file-input' id='fileupload' type="file" accept=".csv" onChange={handleFileUpload} />
      <div>
        {csvData.length > 0 ? (
          <div>
            <VariableRenderer csvData={csvData} />
            <DailyDataProcessor csvData={csvData} />
          </div>
        ) : (
          <h2>WELCOME 2024</h2>
        )}
      </div>
    </div>
  );
}
export default App;
