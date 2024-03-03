import React from 'react';
import './App.css';
function VariableRenderer({ csvData}) {
    if (!csvData || csvData.length === 0) {
        return <div>No CSV data available</div>;
    }
// const combi = comb;
    // Initialize variables to store data
    const dailyData = {}; // Object to store data for each day, including time, high, and low

    // Process CSV data
    csvData.slice(1).forEach(row => {
        if (row.length < 7) {
            // Skip rows that don't have enough columns
            return;
        }

        const date = row[0]; // Date column

        // Process each column for minute data
        const dailyDataForRow = {
            time: row[1], // Time column
            open: parseFloat(row[2]), // Open column
            high: parseFloat(row[3]), // High column
            low: parseFloat(row[4]), // Low column
            close: parseFloat(row[5]), // Close column
            volume: parseFloat(row[6]) // Volume column
        };

        // Update daily data
        if (!dailyData[date]) {
            dailyData[date] = [dailyDataForRow];
        } else {
            dailyData[date].push(dailyDataForRow);
        }
    });

    console.log('Daily Data:', dailyData);

    // Initialize variables to store highest and lowest values
    const dailyHighs = {};
    const dailyLows = {};

    // Process daily data to find highest and lowest values
    Object.keys(dailyData).forEach(date => {
        const dayData = dailyData[date];
        const dayHigh = Math.max(...dayData.map(data => data.high));
        const dayHighData = dayData.find(data => data.high === dayHigh);
        const dayLow = Math.min(...dayData.map(data => data.low));
        const dayLowData = dayData.find(data => data.low === dayLow);

        dailyHighs[date] = { value: dayHigh, time: dayHighData.time };
        dailyLows[date] = { value: dayLow, time: dayLowData.time };
    });

    console.log('Daily Highs:', dailyHighs);
    console.log('Daily Lows:', dailyLows);

    // Determine whether to start Fibonacci levels from the lowest or highest daily value
    const lastDate = Object.keys(dailyHighs).pop();
    const highestTime = dailyHighs[lastDate].time.split(':').map(Number);
    const lowestTime = dailyLows[lastDate].time.split(':').map(Number);
    const highestMinutes = highestTime[0] * 60 + highestTime[1];
    const lowestMinutes = lowestTime[0] * 60 + lowestTime[1];
    const startFromLowest = highestMinutes < lowestMinutes;

    // Calculate range (high - low) for the last day
    const range = dailyHighs[lastDate].value - dailyLows[lastDate].value;

    // Calculate Fibonacci retracement levels based on the range and the starting point
    const startValue = startFromLowest ? dailyLows[lastDate].value : dailyHighs[lastDate].value;
    const fibonacciLevels = {
        level0: startValue,
        level236: startValue + (range * 0.236),
        level382: startValue + (range * 0.382),
        level50: startValue + (range * 0.5),
        level618: startValue + (range * 0.618),
        level100: startFromLowest ? dailyHighs[lastDate].value : dailyLows[lastDate].value,
    };

    console.log('Fibonacci Levels:', fibonacciLevels);
    var trend = startFromLowest ? "down" : "up";
    var lastDayData = dailyData[lastDate];
    var setup = "";
    var openprice = document.getElementById('openvalue');
    var lastMinuteOpen = openprice.value;
    // var lastMinuteOpen = lastDayData[lastDayData.length - 1].open;
    // var lastMinuteOpen = 2025;
    var riskoption = 0;
    var riskvar = "";
    if (trend === "up") {
        if (fibonacciLevels.level618 <= lastMinuteOpen && lastMinuteOpen <= fibonacciLevels.level236){          
            setup = "A";
        }else if (fibonacciLevels.level236 <= lastMinuteOpen && lastMinuteOpen <= fibonacciLevels.level0){
            setup = "B";
        }else if (fibonacciLevels.level100 <= lastMinuteOpen && lastMinuteOpen <= fibonacciLevels.level618){
            setup = "C";
        }
    }
    if (trend === "down") {
        if (fibonacciLevels.level618 >= lastMinuteOpen && lastMinuteOpen >= fibonacciLevels.level236){          
            setup = "A";
        }else if (fibonacciLevels.level236 >= lastMinuteOpen && lastMinuteOpen >= fibonacciLevels.level0){
            setup = "B";
        }else if (fibonacciLevels.level100 >= lastMinuteOpen && lastMinuteOpen >= fibonacciLevels.level618){
            setup = "C";
        }
    }

    return (
        <div className='variable-renderer-container'>
            <h2>{lastDate}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>High</th>
                        {/* <th>Time (High)</th> */}
                        <th>Low</th>
                        {/* <th>Time (Low)</th> */}
                        {/* <th>Fibonacci 0% starts from</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{lastDate}</td>
                        <td>{dailyHighs[lastDate].value.toFixed(2)}</td>
                        {/* <td>{dailyHighs[lastDate].time}</td> */}
                        <td>{dailyLows[lastDate].value.toFixed(2)}</td>
                        {/* <td>{dailyLows[lastDate].time}</td> */}
                        {/* <td>{startFromLowest ? 'Lowest' : 'Highest'}</td> */}
                    </tr>
                </tbody>
            </table>

            <h2>Fibonacci Retracement Levels</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Level 0%</th>
                        <th>Level 23.6%</th>
                        <th>Level 38.2%</th>
                        <th>Level 50%</th>
                        <th>Level 61.8%</th>
                        <th>Level 100%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{lastDate}</td>
                        <td id='fibo0'>{fibonacciLevels.level0.toFixed(2)}</td>
                        <td id='fibo23'>{fibonacciLevels.level236.toFixed(2)}</td>
                        <td id='fibo28'>{fibonacciLevels.level382.toFixed(2)}</td>
                        <td id='fibo50'>{fibonacciLevels.level50.toFixed(2)}</td>
                        <td id='fibo61'>{fibonacciLevels.level618.toFixed(2)}</td>
                        <td id='fibo100'>{fibonacciLevels.level100.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <p className='secret' id='lastopen'>{lastMinuteOpen}</p>
            <p className='secret' id='trendline'>{trend}</p>
            <p className='secret' id='entry'>{setup}</p>
        </div>
    )
}


export default VariableRenderer;
