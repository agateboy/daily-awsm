import React, { useState } from 'react';
import './App.css';
import Setup from './setup';
function DailyDataProcessor({ csvData }) {
  if (!csvData || csvData.length === 0) {
    return <div>No CSV data available</div>;
  }

  // Initialize variables to store daily data
  const dailyData = {};

  // Process CSV data
  csvData.slice(1).forEach(row => {
    if (row.length < 7) {
      // Skip rows that don't have enough columns
      return;
    }

    const date = row[0]; // Date column

    // If the date doesn't exist in dailyData, create a new entry
    if (!dailyData[date]) {
      dailyData[date] = {
        minuteAverages: [],
        totalVolume: 0,
        totalAveragePriceVolume: 0,
      };
    }

    // Process each column for minute data
    const open = parseFloat(row[2]); // Open column
    const high = parseFloat(row[3]); // High column
    const low = parseFloat(row[4]); // Low column
    const close = parseFloat(row[5]); // Close column
    const volume = parseFloat(row[6]); // Volume column

    const average = (high + low + close) / 3; // Calculate average

    // Push the average to the dailyData
    dailyData[date].minuteAverages.push(average);

    // Accumulate total volume and total average price volume for the day
    dailyData[date].totalVolume += volume;
    dailyData[date].totalAveragePriceVolume += average * volume;
  });

  // Initialize variables to store daily statistics
  const dailyStatistics = [];

  // Calculate statistics for each day
  Object.keys(dailyData).forEach(date => {
    const { minuteAverages, totalVolume, totalAveragePriceVolume } = dailyData[date];

    // Find highest and lowest average values for the day
    const highestAverage = Math.max(...minuteAverages);
    const lowestAverage = Math.min(...minuteAverages);

    // Calculate difference between highest and lowest averages for the day
    const difference = highestAverage - lowestAverage;

    // Calculate difference between last minute average and first minute average for the day
    const firstMinuteAverage = minuteAverages[0];
    const lastMinuteAverage = minuteAverages[minuteAverages.length - 1];
    const differenceFirstLast = lastMinuteAverage - firstMinuteAverage;

    // Calculate VWAP (Volume Weighted Average Price) for the day
    const vwap = totalAveragePriceVolume / totalVolume;

    // Store the statistics for the day
    dailyStatistics.push({
      date,
      highestAverage,
      lowestAverage,
      difference,
      differenceFirstLast,
      vwap,
    });
  });
  // Calculate VWAP difference between the last and first day
  const lastDayStats = dailyStatistics[dailyStatistics.length - 1];
  const firstDayStats = dailyStatistics[0];
  const vwapDifference = lastDayStats.vwap - firstDayStats.vwap;
  var differgence = "Yes";
  if ((lastDayStats.differenceFirstLast > 0 && vwapDifference < 0) || (lastDayStats.differenceFirstLast < 0 && vwapDifference > 0)) {
    differgence = "Yes";
  } else {
    differgence = "No";
  }

  var vwap = "";
  var vc = "";
  var vwapvalue = Math.abs(vwapDifference);
  if (vwapvalue >= 24.20) {
    vwap = "Curam";
    vc = "A";
  } else if (vwapvalue >= 15.12 && vwapvalue < 24.20) {
    vwap = "Jauh";
    vc = "B";
  } else if (vwapvalue >= 7.56 && vwapvalue < 15.12) {
    vwap = "Tdk Jauh";
    vc = "C";
  } else if (vwapvalue >= 3.53 && vwapvalue < 7.56) {
    vwap = "Nondef";
    vc = "D";
  } else if (vwapvalue >= 0 && vwapvalue < 3.53) {
    vwap = "Mendekati";
    vc = "E";
  }

  var opclo = "";
  var oc = "";
  var opclovalue = Math.abs(lastDayStats.differenceFirstLast);
  if (opclovalue >= 24.20) {
    opclo = "Curam";
    oc = "1";
  } else if (opclovalue >= 15.12 && opclovalue < 24.20) {
    opclo = "Jauh";
    oc = "2";
  } else if (opclovalue >= 7.56 && opclovalue < 15.12) {
    opclo = "Tdk Jauh";
    oc = "3";
  } else if (opclovalue >= 3.53 && opclovalue < 7.56) {
    opclo = "Nondef";
    oc = "4";
  } else if (opclovalue >= 0 && opclovalue < 3.53) {
    opclo = "Mendekati";
    oc = "5";
  }

  var rangeavg = "";
  var rc = "";
  var rangeval = Math.abs(lastDayStats.difference);
  if (rangeval < 14.49) {
    rangeavg = "kecil";
    rc = "k";
  } else if (rangeval >= 14.49 && rangeval < 23.19) {
    rangeavg = "sedang";
    rc = "s";
  } else if (rangeval >= 23.19) {
    rangeavg = "besar";
    rc = "b";
  }

  var comb = vc + oc + rc + differgence;

  const [showSetup, setShowSetup] = useState(false);
  const handleSetupClick = () => {
    setShowSetup(true); // Set showSetup state to true when the button is clicked
  };

  return (
    <div className='variable-renderer-container'>
      <h2>Daily Data Processor</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>VWAP Difference</th>
            <th>Open Close</th>
            <th>Range Average Price</th>
            <th>Differgence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{lastDayStats.date}</td>
            <td>{vwapDifference.toFixed(2)}</td>
            <td>{lastDayStats.differenceFirstLast.toFixed(2)}</td>
            <td>{lastDayStats.difference.toFixed(2)}</td>
            <td>{differgence}</td>
          </tr>
          <tr>
            <td>{lastDayStats.date}</td>
            <td>{vwap}</td>
            <td>{opclo}</td>
            <td>{rangeavg}</td>
            <td>{differgence}</td>
          </tr>
        </tbody>
      </table>
      {/* <p id='combi'>{comb}</p> */}
      {showSetup && <Setup />}
      <input type='number' id='equityInput' placeholder='Input Equity'></input>
      <div>
        <input className='blue-button' type='submit' onClick={handleSetupClick} value="Show Setup" />

      </div>
    </div>
  );
}
export default DailyDataProcessor;