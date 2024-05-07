import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Pastikan paket ini telah diinstal

function CSVReader() {
    const [dailyData, setDailyData] = useState({});
    const [filteredData, setFilteredData] = useState(null);
    var setup = document.getElementById('entry')?.textContent;
    var ccomb = document.getElementById('ccomb')?.textContent;
    var comb = setup + ccomb;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/assets/wrupdate.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);

            // Parsing CSV menggunakan PapaParse
            const parsedData = Papa.parse(csv, { header: false }).data;

            // Proses setiap baris data CSV
            const processedData = {};
            parsedData.slice(1).forEach(row => {
                if (row.length < 17) {
                    // Skip rows that don't have enough columns
                    return;
                }

                const combination = row[0]; // Combination column

                // Process each column for minute data
                //Combination,freq,sumoutput,win,wr,avg out,
                //freqnon,winnon,wrnon,sumnon,freqab,winab,wrab,sumab,
                //freqinv,wininv,wrinv,suminv
                const rowData = {
                    freq: parseInt(row[1]),
                    sumoutput: parseFloat(row[2]),
                    win: parseInt(row[3]),
                    wr: parseFloat(row[4]),
                    avgOut: parseFloat(row[5]),
                    freqNon: parseInt(row[6]),
                    winNon: parseInt(row[7]),
                    wrNon: parseFloat(row[8]),
                    sumNon: parseFloat(row[9]),
                    freqAb: parseInt(row[10]),
                    winAb: parseInt(row[11]),
                    wrAb: parseFloat(row[12]),
                    sumAb: parseFloat(row[13]),
                    freqInv: parseInt(row[14]),
                    winInv: parseInt(row[15]),
                    wrInv: parseFloat(row[16]),
                    sumInv: parseFloat(row[17])
                };

                // Update daily data
                if (!processedData[combination]) {
                    processedData[combination] = [rowData];
                } else {
                    processedData[combination].push(rowData);
                }
            });

            // Simpan hasil pemrosesan ke state
            setDailyData(processedData);

            // Cek apakah combination yang dicari ada di data
            if (processedData[comb]) {
                setFilteredData(processedData[comb]);
            } else {
                setFilteredData(null); // Jika tidak ada, set null
            }
        };

        fetchData();
    }, [comb]); // Pastikan useEffect dipanggil kembali saat nilai comb berubah

    // var setup = 5;
    return (
        <div>
            {/* <p>{comb}</p> */}
            {/* Tampilkan data yang difilter jika ada */}
            {filteredData && (
                <div>
                    <h2>WINRATE</h2>
                    <div>
                        <ul>
                            {Object.keys(filteredData[0]).map((key, index) => (
                                <li key={index}>
                                    <strong>{key}</strong>: {filteredData[0][key]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            )}
        </div>
    );
}

export default CSVReader;
