import React from 'react';
import './App.css';
function Setup() {
    var fibo0 = parseFloat(document.getElementById('fibo0')?.textContent);
    var fibo23 = parseFloat(document.getElementById('fibo23')?.textContent);
    var fibo28 = parseFloat(document.getElementById('fibo28')?.textContent);
    var fibo50 = parseFloat(document.getElementById('fibo50')?.textContent);
    var fibo61 = parseFloat(document.getElementById('fibo61')?.textContent);
    var fibo100 = parseFloat(document.getElementById('fibo100')?.textContent);
    var lastMinuteOpen = parseFloat(document.getElementById('lastopen')?.textContent);
    var trend = document.getElementById('trendline')?.textContent;
    var setup = document.getElementById('entry')?.textContent;
    var comb = document.getElementById('combi')?.textContent;
    console.log('Fibonacci 0%:', fibo0);
    console.log('Fibonacci 23.6%:', fibo23);
    console.log('Fibonacci 38.2%:', fibo28);
    console.log('Fibonacci 50%:', fibo50);
    console.log('Fibonacci 61.8%:', fibo61);
    console.log('Fibonacci 100%:', fibo100);
    console.log('Last Open:', lastMinuteOpen);
    console.log('Trend Line:', trend);
    console.log('Entry:', setup);
    console.log('Combination:', comb);
    var keypip = 1.63;
    var spread = 0.3;
    var ts = 4.22;
    var buystop = 0;
    var sellstop = 0;
    var a = 0;
    var b = 0;
    var riskoption = 1;
    var riskvar = "1%";
    var checkab = true;
    var invers = false;
    var trade = true;
    if (trend === "up") {
        if (setup === "A") {
            buystop = fibo50 + keypip + spread;
            sellstop = fibo50 - keypip;
            if (comb == "A1kYes") {
                // code block
            } else if (comb == "A1kNo") {
                // code block
            } else if (comb == "A1sYes") {
                // code block
            } else if (comb == "A1sNo") {
                // code block
            } else if (comb == "A1bYes") {
                // code block
            } else if (comb == "A1bNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A2kYes") {
                // code block
            } else if (comb == "A2kNo") {
                // code block
            } else if (comb == "A2sYes") {
                // code block
            } else if (comb == "A2sNo") {
                // code block
            } else if (comb == "A2bYes") {
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "A2bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A3kYes") {
                // code block
            } else if (comb == "A3kNo") {
                // code block
            } else if (comb == "A3sYes") {
                // code block
            } else if (comb == "A3sNo") {
                // code block
            } else if (comb == "A3bYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A3bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A4kYes") {
                // code block
            } else if (comb == "A4kNo") {
                // code block
            } else if (comb == "A4sYes") {
                // code block
            } else if (comb == "A4sNo") {
                trade = false;
            } else if (comb == "A4bYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "A4bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A5kYes") {
                // code block
            } else if (comb == "A5kNo") {
                // code block
            } else if (comb == "A5sYes") {
                // code block
            } else if (comb == "A5sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A5bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A5bNo") {
                // code block
            } else if (comb == "B1kYes") {
                // code block
            } else if (comb == "B1kNo") {
                // code block
            } else if (comb == "B1sYes") {
                // code block
            } else if (comb == "B1sNo") {
                // code block
            } else if (comb == "B1bYes") {
                // code block
            } else if (comb == "B1bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B2kYes") {
                // code block
            } else if (comb == "B2kNo") {
                // code block
            } else if (comb == "B2sYes") {
                // code block
            } else if (comb == "B2sNo") {
                // code block
            } else if (comb == "B2bYes") {
                // code block
            } else if (comb == "B2bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "B3kYes") {
                // code block
            } else if (comb == "B3kNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "B3sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B3sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B3bYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B3bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4kYes") {
                // code block
            } else if (comb == "B4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4bYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "B4bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B5kNo") {
                // code block
            } else if (comb == "B5sYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "B5sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "B5bYes") {
                // code block
            } else if (comb == "B5bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C1kYes") {
                // code block
            } else if (comb == "C1kNo") {
                // code block
            } else if (comb == "C1sYes") {
                // code block
            } else if (comb == "C1sNo") {
                // code block
            } else if (comb == "C1bYes") {
                // code block
                trade = false;
            } else if (comb == "C1bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "C2kYes") {
                // code block
            } else if (comb == "C2kNo") {
                // code block
            } else if (comb == "C2sYes") {
                // code block
            } else if (comb == "C2sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C2bYes") {
                trade = false;
            } else if (comb == "C2bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3sYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "C3sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3bYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "C4kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "C4bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5bYes") {
                // code block
            } else if (comb == "C5bNo") {
                // code block
            } else if (comb == "D1kYes") {
                // code block
            } else if (comb == "D1kNo") {
                // code block
            } else if (comb == "D1sYes") {
                // code block
            } else if (comb == "D1sNo") {
                // code block
            } else if (comb == "D1bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D1bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D2kYes") {
                // code block
            } else if (comb == "D2kNo") {
                // code block
            } else if (comb == "D2sYes") {
                // code block
            } else if (comb == "D2sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D2bYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "D2bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D3kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D3kNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D3sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D3sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D3bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D3bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "D4kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4bYes") {
                // code block
            } else if (comb == "D4bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "D5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D5kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D5sYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D5sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D5bYes") {
                // code block
            } else if (comb == "D5bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E1kYes") {
                // code block
            } else if (comb == "E1kNo") {
                // code block
            } else if (comb == "E1sYes") {
                // code block
            } else if (comb == "E1sNo") {
                // code block
            } else if (comb == "E1bYes") {
                // code block
            } else if (comb == "E1bNo") {
                // code block
            } else if (comb == "E2kYes") {
                // code block
            } else if (comb == "E2kNo") {
                // code block
            } else if (comb == "E2sYes") {
                // code block
            } else if (comb == "E2sNo") {
                // code block
            } else if (comb == "E2bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E2bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "E3kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3bYes") {
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "E3bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E4kYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E4sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E4bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E4bNo") {
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "E5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E5bNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            }
        } else if (setup === "B") {
            buystop = fibo0 + keypip + spread;
            sellstop = fibo23 - keypip;
            a = parseFloat((fibo0 + fibo23) / 2 - keypip).toFixed(2);
            b = parseFloat(fibo0 - keypip).toFixed(2);
            if (comb == "A1kYes") {
                // code block
            } else if (comb == "A1kNo") {
                // code block
            } else if (comb == "A1sYes") {
                // code block
            } else if (comb == "A1sNo") {
                // code block
            } else if (comb == "A1bYes") {
                // code block
            } else if (comb == "A1bNo") {
                invers = false;
            } else if (comb == "A2kYes") {
                // code block
            } else if (comb == "A2kNo") {
                // code block
            } else if (comb == "A2sYes") {
                // code block
            } else if (comb == "A2sNo") {
                // code block
            } else if (comb == "A2bYes") {
                invers = false;
            } else if (comb == "A2bNo") {
                invers = false;
            } else if (comb == "A3kYes") {
                // code block
            } else if (comb == "A3kNo") {
                // code block
            } else if (comb == "A3sYes") {
                // code block
            } else if (comb == "A3sNo") {
                checkab = false;
            } else if (comb == "A3bYes") {
                invers = false;
            } else if (comb == "A3bNo") {
                invers = false;
            } else if (comb == "A4kYes") {
                // code block
            } else if (comb == "A4kNo") {
                // code block
            } else if (comb == "A4sYes") {
                // code block
            } else if (comb == "A4sNo") {
                // code block
            } else if (comb == "A4bYes") {
                // code block
            } else if (comb == "A4bNo") {
                invers = true;
            } else if (comb == "A5kYes") {
                // code block
            } else if (comb == "A5kNo") {
                // code block
            } else if (comb == "A5sYes") {
                // code block
            } else if (comb == "A5sNo") {
                // code block
            } else if (comb == "A5bYes") {
                invers = true;
            } else if (comb == "A5bNo") {
                checkab = false;
            } else if (comb == "B1kYes") {
                // code block
            } else if (comb == "B1kNo") {
                // code block
            } else if (comb == "B1sYes") {
                // code block
            } else if (comb == "B1sNo") {
                // code block
            } else if (comb == "B1bYes") {
                invers = true;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "B1bNo") {
                invers = true;
            } else if (comb == "B2kYes") {
                // code block
            } else if (comb == "B2kNo") {
                // code block
            } else if (comb == "B2sYes") {
                // code block
            } else if (comb == "B2sNo") {
                invers = false;
            } else if (comb == "B2bYes") {
                checkab = false;
            } else if (comb == "B2bNo") {
                invers = false;
            } else if (comb == "B3kYes") {
                // code block
            } else if (comb == "B3kNo") {
                checkab = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "B3sYes") {
                // code block
            } else if (comb == "B3sNo") {
                invers = false;
            } else if (comb == "B3bYes") {
                trade = false;
            } else if (comb == "B3bNo") {
                // code block
            } else if (comb == "B4kYes") {
                // code block
            } else if (comb == "B4kNo") {
                // code block
            } else if (comb == "B4sYes") {
                invers = false;
            } else if (comb == "B4sNo") {
                // code block
            } else if (comb == "B4bYes") {
                checkab = false;
            } else if (comb == "B4bNo") {
                checkab = false;
            } else if (comb == "B5kYes") {
                // code block
            } else if (comb == "B5kNo") {
                // code block
            } else if (comb == "B5sYes") {
                // code block
            } else if (comb == "B5sNo") {
                invers = true;
            } else if (comb == "B5bYes") {
                invers = true;
            } else if (comb == "B5bNo") {
                checkab = false;
            } else if (comb == "C1kYes") {
                // code block
            } else if (comb == "C1kNo") {
                // code block
            } else if (comb == "C1sYes") {
                // code block
            } else if (comb == "C1sNo") {
                // code block
            } else if (comb == "C1bYes") {
                trade = false;
            } else if (comb == "C1bNo") {
                invers = true;
            } else if (comb == "C2kYes") {
                // code block
            } else if (comb == "C2kNo") {
                // code block
            } else if (comb == "C2sYes") {
                checkab = false;
            } else if (comb == "C2sNo") {
                invers = true;
            } else if (comb == "C2bYes") {
                invers = true;
            } else if (comb == "C2bNo") {
                invers = true;
            } else if (comb == "C3kYes") {
                checkab = false;
            } else if (comb == "C3kNo") {
                invers = false;
            } else if (comb == "C3sYes") {
                invers = false;
            } else if (comb == "C3sNo") {
                invers = false;
            } else if (comb == "C3bYes") {
                invers = true;
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "C3bNo") {
                invers = true;
            } else if (comb == "C4kYes") {
                invers = true;
            } else if (comb == "C4kNo") {
                invers = true;
            } else if (comb == "C4sYes") {
                invers = true;
            } else if (comb == "C4sNo") {
                trade = false;
            } else if (comb == "C4bYes") {
                invers = false;
            } else if (comb == "C4bNo") {
                invers = false;
            } else if (comb == "C5kYes") {
                invers = true;
            } else if (comb == "C5kNo") {
                invers = true;
            } else if (comb == "C5sYes") {
                invers = false;
            } else if (comb == "C5sNo") {
                trade = false;
            } else if (comb == "C5bYes") {
                invers = true;
            } else if (comb == "C5bNo") {
                // code block
            } else if (comb == "D1kYes") {
                // code block
            } else if (comb == "D1kNo") {
                // code block
            } else if (comb == "D1sYes") {
                // code block
            } else if (comb == "D1sNo") {
                // code block
            } else if (comb == "D1bYes") {
                invers = true;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D1bNo") {
                trade = false;
            } else if (comb == "D2kYes") {
                // code block
            } else if (comb == "D2kNo") {
                // code block
            } else if (comb == "D2sYes") {
                trade = false;
            } else if (comb == "D2sNo") {
                invers = true;
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D2bYes") {
                trade = false;
            } else if (comb == "D2bNo") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D3kYes") {
                trade = false;
            } else if (comb == "D3kNo") {
                invers = true;
            } else if (comb == "D3sYes") {
                invers = false;
            } else if (comb == "D3sNo") {
                checkab = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D3bYes") {
                invers = false;
            } else if (comb == "D3bNo") {
                invers = false;
            } else if (comb == "D4kYes") {
                invers = true;
            } else if (comb == "D4kNo") {
                invers = true;
            } else if (comb == "D4sYes") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D4sNo") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D4bYes") {
                invers = true;
            } else if (comb == "D4bNo") {
                // code block
            } else if (comb == "D5kYes") {
                invers = true;
            } else if (comb == "D5kNo") {
                invers = false;
            } else if (comb == "D5sYes") {
                invers = false;
            } else if (comb == "D5sNo") {
                invers = true;
            } else if (comb == "D5bYes") {
                // code block
            } else if (comb == "D5bNo") {
                trade = false;
            } else if (comb == "E1kYes") {
                // code block
            } else if (comb == "E1kNo") {
                // code block
            } else if (comb == "E1sYes") {
                // code block
            } else if (comb == "E1sNo") {
                // code block
            } else if (comb == "E1bYes") {
                invers = false;
            } else if (comb == "E1bNo") {
                invers = true;
            } else if (comb == "E2kYes") {
                // code block
            } else if (comb == "E2kNo") {
                // code block
            } else if (comb == "E2sYes") {
                trade = false;
            } else if (comb == "E2sNo") {
                trade = false;
            } else if (comb == "E2bYes") {
                invers = true;
            } else if (comb == "E2bNo") {
                invers = false;
            } else if (comb == "E3kYes") {
                invers = false;
            } else if (comb == "E3kNo") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "E3sYes") {
                trade = false;
            } else if (comb == "E3sNo") {
                invers = false;
            } else if (comb == "E3bYes") {
                invers = false;
            } else if (comb == "E3bNo") {
                trade = false;
            } else if (comb == "E4kYes") {
                invers = false;
            } else if (comb == "E4kNo") {
                invers = false;
            } else if (comb == "E4sYes") {
                invers = false;
            } else if (comb == "E4sNo") {
                invers = false;
            } else if (comb == "E4bYes") {
                // code block
            } else if (comb == "E4bNo") {
                invers = false;
            } else if (comb == "E5kYes") {
                invers = false;
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "E5kNo") {
                invers = true;
            } else if (comb == "E5sYes") {
                trade = false;
            } else if (comb == "E5sNo") {
                trade = false;
            } else if (comb == "E5bYes") {
                invers = false;
            } else if (comb == "E5bNo") {
                // code block
            }
        } else if (setup === "C") {
            a = parseFloat((fibo61 + fibo100) / 2 - keypip).toFixed(2);
            b = parseFloat(fibo61 - keypip).toFixed(2);
            sellstop = fibo100 - keypip;
            buystop = fibo61 + keypip + spread;
            if (comb == "A1kYes") {
                // code block
            } else if (comb == "A1kNo") {
                // code block
            } else if (comb == "A1sYes") {
                // code block
            } else if (comb == "A1sNo") {
                // code block
            } else if (comb == "A1bYes") {
                // code block
            } else if (comb == "A1bNo") {
                invers = false;
            } else if (comb == "A2kYes") {
                // code block
            } else if (comb == "A2kNo") {
                // code block
            } else if (comb == "A2sYes") {
                // code block
            } else if (comb == "A2sNo") {
                // code block
            } else if (comb == "A2bYes") {
                invers = false;
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A2bNo") {
                invers = false;
            } else if (comb == "A3kYes") {
                // code block
            } else if (comb == "A3kNo") {
                // code block
            } else if (comb == "A3sYes") {
                // code block
            } else if (comb == "A3sNo") {
                // code block
            } else if (comb == "A3bYes") {
                // code block
            } else if (comb == "A3bNo") {
                // code block
            } else if (comb == "A4kYes") {
                // code block
            } else if (comb == "A4kNo") {
                invers = false;
            } else if (comb == "A4sYes") {
                // code block
            } else if (comb == "A4sNo") {
                // code block
            } else if (comb == "A4bYes") {
                // code block
            } else if (comb == "A4bNo") {
                invers = false;
            } else if (comb == "A5kYes") {
                // code block
            } else if (comb == "A5kNo") {
                // code block
            } else if (comb == "A5sYes") {
                // code block
            } else if (comb == "A5sNo") {
                // code block
            } else if (comb == "A5bYes") {
                // code block
            } else if (comb == "A5bNo") {
                invers = true;
            } else if (comb == "B1kYes") {
                // code block
            } else if (comb == "B1kNo") {
                // code block
            } else if (comb == "B1sYes") {
                // code block
            } else if (comb == "B1sNo") {
                // code block
            } else if (comb == "B1bYes") {
                // code block
            } else if (comb == "B1bNo") {
                // code block
            } else if (comb == "B2kYes") {
                // code block
            } else if (comb == "B2kNo") {
                // code block
            } else if (comb == "B2sYes") {
                // code block
            } else if (comb == "B2sNo") {
                // code block
            } else if (comb == "B2bYes") {
                // code block
            } else if (comb == "B2bNo") {
                // code block
            } else if (comb == "B3kYes") {
                // code block
            } else if (comb == "B3kNo") {
                // code block
            } else if (comb == "B3sYes") {
                // code block
            } else if (comb == "B3sNo") {
                trade = false;
            } else if (comb == "B3bYes") {
                // code block
            } else if (comb == "B3bNo") {
                invers = false;
            } else if (comb == "B4kYes") {
                // code block
            } else if (comb == "B4kNo") {
                invers = false;
            } else if (comb == "B4sYes") {
                invers = false;
            } else if (comb == "B4sNo") {
                // code block
            } else if (comb == "B4bYes") {
                // code block
            } else if (comb == "B4bNo") {
                invers = false;
            } else if (comb == "B5kYes") {
                invers = false;
            } else if (comb == "B5kNo") {
                invers = false;
            } else if (comb == "B5sYes") {
                invers = false;
            } else if (comb == "B5sNo") {
                invers = false;
            } else if (comb == "B5bYes") {
                // code block
            } else if (comb == "B5bNo") {
                invers = false;
            } else if (comb == "C1kYes") {
                // code block
            } else if (comb == "C1kNo") {
                // code block
            } else if (comb == "C1sYes") {
                // code block
            } else if (comb == "C1sNo") {
                // code block
            } else if (comb == "C1bYes") {
                // code block
            } else if (comb == "C1bNo") {
                // code block
            } else if (comb == "C2kYes") {
                // code block
            } else if (comb == "C2kNo") {
                // code block
            } else if (comb == "C2sYes") {
                // code block
            } else if (comb == "C2sNo") {
                // code block
            } else if (comb == "C2bYes") {
                // code block
            } else if (comb == "C2bNo") {
                invers = true;
            } else if (comb == "C3kYes") {
                // code block
            } else if (comb == "C3kNo") {
                trade = false;
            } else if (comb == "C3sYes") {
                // code block
            } else if (comb == "C3sNo") {
                invers = true;
            } else if (comb == "C3bYes") {
                // code block
            } else if (comb == "C3bNo") {
                invers = true;
            } else if (comb == "C4kYes") {
                checkab = false;
            } else if (comb == "C4kNo") {
                checkab = false;
            } else if (comb == "C4sYes") {
                // code block
            } else if (comb == "C4sNo") {
                invers = false;
            } else if (comb == "C4bYes") {
                // code block
            } else if (comb == "C4bNo") {
                invers = false;
            } else if (comb == "C5kYes") {
                trade = false;
            } else if (comb == "C5kNo") {
                invers = false;
            } else if (comb == "C5sYes") {
                checkab = false;
            } else if (comb == "C5sNo") {
                invers = false;
            } else if (comb == "C5bYes") {
                checkab = false;
            } else if (comb == "C5bNo") {
                invers = true;
            } else if (comb == "D1kYes") {
                // code block
            } else if (comb == "D1kNo") {
                // code block
            } else if (comb == "D1sYes") {
                // code block
            } else if (comb == "D1sNo") {
                // code block
            } else if (comb == "D1bYes") {
                // code block
            } else if (comb == "D1bNo") {
                // code block
            } else if (comb == "D2kYes") {
                // code block
            } else if (comb == "D2kNo") {
                // code block
            } else if (comb == "D2sYes") {
                // code block
            } else if (comb == "D2sNo") {
                // code block
            } else if (comb == "D2bYes") {
                invers = false;
            } else if (comb == "D2bNo") {
                // code block
            } else if (comb == "D3kYes") {
                // code block
            } else if (comb == "D3kNo") {
                invers = true;
            } else if (comb == "D3sYes") {
                // code block
            } else if (comb == "D3sNo") {
                invers = false;
            } else if (comb == "D3bYes") {
                // code block
            } else if (comb == "D3bNo") {
                checkab = false;
            } else if (comb == "D4kYes") {
                invers = false;
            } else if (comb == "D4kNo") {
                invers = false;
            } else if (comb == "D4sYes") {
                invers = false;
            } else if (comb == "D4sNo") {
                // code block
            } else if (comb == "D4bYes") {
                // code block
            } else if (comb == "D4bNo") {
                // code block
            } else if (comb == "D5kYes") {
                invers = false;
            } else if (comb == "D5kNo") {
                invers = false;
            } else if (comb == "D5sYes") {
                invers = false;
            } else if (comb == "D5sNo") {
                invers = false;
            } else if (comb == "D5bYes") {
                // code block
            } else if (comb == "D5bNo") {
                invers = true;
            } else if (comb == "E1kYes") {
                // code block
            } else if (comb == "E1kNo") {
                // code block
            } else if (comb == "E1sYes") {
                // code block
            } else if (comb == "E1sNo") {
                // code block
            } else if (comb == "E1bYes") {
                // code block
            } else if (comb == "E1bNo") {
                // code block
            } else if (comb == "E2kYes") {
                // code block
            } else if (comb == "E2kNo") {
                // code block
            } else if (comb == "E2sYes") {
                // code block
            } else if (comb == "E2sNo") {
                // code block
            } else if (comb == "E2bYes") {
                // code block
            } else if (comb == "E2bNo") {
                // code block
            } else if (comb == "E3kYes") {
                invers = false;
            } else if (comb == "E3kNo") {
                // code block
            } else if (comb == "E3sYes") {
                // code block
            } else if (comb == "E3sNo") {
                trade = false;
            } else if (comb == "E3bYes") {
                // code block
            } else if (comb == "E3bNo") {
                // code block
            } else if (comb == "E4kYes") {
                invers = false;
            } else if (comb == "E4kNo") {
                invers = true;
            } else if (comb == "E4sYes") {
                invers = false;
            } else if (comb == "E4sNo") {
                invers = false;
            } else if (comb == "E4bYes") {
                invers = false;
            } else if (comb == "E4bNo") {
                invers = false;
            } else if (comb == "E5kYes") {
                invers = false;
            } else if (comb == "E5kNo") {
                invers = false;
            } else if (comb == "E5sYes") {
                invers = true;
            } else if (comb == "E5sNo") {
                invers = false;
            } else if (comb == "E5bYes") {
                // code block
            } else if (comb == "E5bNo") {
                invers = false;
            }
        }
    } else {
        if (setup === "A") {
            buystop = fibo50 + keypip + spread;
            sellstop = fibo50 - keypip;
            if (comb == "A1kYes") {
                // code block
            } else if (comb == "A1kNo") {
                // code block
            } else if (comb == "A1sYes") {
                // code block
            } else if (comb == "A1sNo") {
                // code block
            } else if (comb == "A1bYes") {
                // code block
            } else if (comb == "A1bNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A2kYes") {
                // code block
            } else if (comb == "A2kNo") {
                // code block
            } else if (comb == "A2sYes") {
                // code block
            } else if (comb == "A2sNo") {
                // code block
            } else if (comb == "A2bYes") {
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "A2bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A3kYes") {
                // code block
            } else if (comb == "A3kNo") {
                // code block
            } else if (comb == "A3sYes") {
                // code block
            } else if (comb == "A3sNo") {
                // code block
            } else if (comb == "A3bYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A3bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A4kYes") {
                // code block
            } else if (comb == "A4kNo") {
                // code block
            } else if (comb == "A4sYes") {
                // code block
            } else if (comb == "A4sNo") {
                trade = false;
            } else if (comb == "A4bYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "A4bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "A5kYes") {
                // code block
            } else if (comb == "A5kNo") {
                // code block
            } else if (comb == "A5sYes") {
                // code block
            } else if (comb == "A5sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A5bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "A5bNo") {
                // code block
            } else if (comb == "B1kYes") {
                // code block
            } else if (comb == "B1kNo") {
                // code block
            } else if (comb == "B1sYes") {
                // code block
            } else if (comb == "B1sNo") {
                // code block
            } else if (comb == "B1bYes") {
                // code block
            } else if (comb == "B1bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B2kYes") {
                // code block
            } else if (comb == "B2kNo") {
                // code block
            } else if (comb == "B2sYes") {
                // code block
            } else if (comb == "B2sNo") {
                // code block
            } else if (comb == "B2bYes") {
                // code block
            } else if (comb == "B2bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "B3kYes") {
                // code block
            } else if (comb == "B3kNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "B3sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B3sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B3bYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B3bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4kYes") {
                // code block
            } else if (comb == "B4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B4bYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "B4bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "B5kNo") {
                // code block
            } else if (comb == "B5sYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "B5sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "B5bYes") {
                // code block
            } else if (comb == "B5bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C1kYes") {
                // code block
            } else if (comb == "C1kNo") {
                // code block
            } else if (comb == "C1sYes") {
                // code block
            } else if (comb == "C1sNo") {
                // code block
            } else if (comb == "C1bYes") {
                // code block
                trade = false;
            } else if (comb == "C1bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "C2kYes") {
                // code block
            } else if (comb == "C2kNo") {
                // code block
            } else if (comb == "C2sYes") {
                // code block
            } else if (comb == "C2sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C2bYes") {
                trade = false;
            } else if (comb == "C2bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3sYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "C3sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3bYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C3bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "C4kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C4bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "C4bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "C5bYes") {
                // code block
            } else if (comb == "C5bNo") {
                // code block
            } else if (comb == "D1kYes") {
                // code block
            } else if (comb == "D1kNo") {
                // code block
            } else if (comb == "D1sYes") {
                // code block
            } else if (comb == "D1sNo") {
                // code block
            } else if (comb == "D1bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D1bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D2kYes") {
                // code block
            } else if (comb == "D2kNo") {
                // code block
            } else if (comb == "D2sYes") {
                // code block
            } else if (comb == "D2sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D2bYes") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "D2bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D3kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D3kNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D3sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D3sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D3bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D3bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "D4kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D4bYes") {
                // code block
            } else if (comb == "D4bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "D5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D5kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D5sYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D5sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "D5bYes") {
                // code block
            } else if (comb == "D5bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E1kYes") {
                // code block
            } else if (comb == "E1kNo") {
                // code block
            } else if (comb == "E1sYes") {
                // code block
            } else if (comb == "E1sNo") {
                // code block
            } else if (comb == "E1bYes") {
                // code block
            } else if (comb == "E1bNo") {
                // code block
            } else if (comb == "E2kYes") {
                // code block
            } else if (comb == "E2kNo") {
                // code block
            } else if (comb == "E2sYes") {
                // code block
            } else if (comb == "E2sNo") {
                // code block
            } else if (comb == "E2bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E2bNo") {
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "E3kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E3bYes") {
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "E3bNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E4kYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E4kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E4sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E4sNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E4bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E4bNo") {
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "E5kYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5kNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5sYes") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5sNo") {
                riskoption = 1;
                riskvar = "1%";
            } else if (comb == "E5bYes") {
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "E5bNo") {
                riskoption = 1.5;
                riskvar = "1.5%";
            }
        } else if (setup === "B") {
            a = parseFloat((fibo0 + fibo23) / 2 + keypip + spread).toFixed(2);
            b = parseFloat(fibo0 + keypip + spread).toFixed(2);
            sellstop = (fibo0 - keypip);
            buystop = (fibo23 + keypip + spread);
            if (comb == "A1kYes") {
                // code block
            } else if (comb == "A1kNo") {
                // code block
            } else if (comb == "A1sYes") {
                // code block
            } else if (comb == "A1sNo") {
                // code block
            } else if (comb == "A1bYes") {
                // code block
            } else if (comb == "A1bNo") {
                invers = false;
            } else if (comb == "A2kYes") {
                // code block
            } else if (comb == "A2kNo") {
                // code block
            } else if (comb == "A2sYes") {
                // code block
            } else if (comb == "A2sNo") {
                // code block
            } else if (comb == "A2bYes") {
                invers = false;
            } else if (comb == "A2bNo") {
                invers = false;
            } else if (comb == "A3kYes") {
                // code block
            } else if (comb == "A3kNo") {
                // code block
            } else if (comb == "A3sYes") {
                // code block
            } else if (comb == "A3sNo") {
                checkab = false;
            } else if (comb == "A3bYes") {
                invers = false;
            } else if (comb == "A3bNo") {
                invers = false;
            } else if (comb == "A4kYes") {
                // code block
            } else if (comb == "A4kNo") {
                // code block
            } else if (comb == "A4sYes") {
                // code block
            } else if (comb == "A4sNo") {
                // code block
            } else if (comb == "A4bYes") {
                // code block
            } else if (comb == "A4bNo") {
                invers = true;
            } else if (comb == "A5kYes") {
                // code block
            } else if (comb == "A5kNo") {
                // code block
            } else if (comb == "A5sYes") {
                // code block
            } else if (comb == "A5sNo") {
                // code block
            } else if (comb == "A5bYes") {
                invers = true;
            } else if (comb == "A5bNo") {
                checkab = false;
            } else if (comb == "B1kYes") {
                // code block
            } else if (comb == "B1kNo") {
                // code block
            } else if (comb == "B1sYes") {
                // code block
            } else if (comb == "B1sNo") {
                // code block
            } else if (comb == "B1bYes") {
                invers = true;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "B1bNo") {
                invers = true;
            } else if (comb == "B2kYes") {
                // code block
            } else if (comb == "B2kNo") {
                // code block
            } else if (comb == "B2sYes") {
                // code block
            } else if (comb == "B2sNo") {
                invers = false;
            } else if (comb == "B2bYes") {
                checkab = false;
            } else if (comb == "B2bNo") {
                invers = false;
            } else if (comb == "B3kYes") {
                // code block
            } else if (comb == "B3kNo") {
                checkab = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "B3sYes") {
                // code block
            } else if (comb == "B3sNo") {
                invers = false;
            } else if (comb == "B3bYes") {
                trade = false;
            } else if (comb == "B3bNo") {
                // code block
            } else if (comb == "B4kYes") {
                // code block
            } else if (comb == "B4kNo") {
                // code block
            } else if (comb == "B4sYes") {
                invers = false;
            } else if (comb == "B4sNo") {
                // code block
            } else if (comb == "B4bYes") {
                checkab = false;
            } else if (comb == "B4bNo") {
                checkab = false;
            } else if (comb == "B5kYes") {
                // code block
            } else if (comb == "B5kNo") {
                // code block
            } else if (comb == "B5sYes") {
                // code block
            } else if (comb == "B5sNo") {
                invers = true;
            } else if (comb == "B5bYes") {
                invers = true;
            } else if (comb == "B5bNo") {
                checkab = false;
            } else if (comb == "C1kYes") {
                // code block
            } else if (comb == "C1kNo") {
                // code block
            } else if (comb == "C1sYes") {
                // code block
            } else if (comb == "C1sNo") {
                // code block
            } else if (comb == "C1bYes") {
                trade = false;
            } else if (comb == "C1bNo") {
                invers = true;
            } else if (comb == "C2kYes") {
                // code block
            } else if (comb == "C2kNo") {
                // code block
            } else if (comb == "C2sYes") {
                checkab = false;
            } else if (comb == "C2sNo") {
                invers = true;
            } else if (comb == "C2bYes") {
                invers = true;
            } else if (comb == "C2bNo") {
                invers = true;
            } else if (comb == "C3kYes") {
                checkab = false;
            } else if (comb == "C3kNo") {
                invers = false;
            } else if (comb == "C3sYes") {
                invers = false;
            } else if (comb == "C3sNo") {
                invers = false;
            } else if (comb == "C3bYes") {
                invers = true;
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "C3bNo") {
                invers = true;
            } else if (comb == "C4kYes") {
                invers = true;
            } else if (comb == "C4kNo") {
                invers = true;
            } else if (comb == "C4sYes") {
                invers = true;
            } else if (comb == "C4sNo") {
                trade = false;
            } else if (comb == "C4bYes") {
                invers = false;
            } else if (comb == "C4bNo") {
                invers = false;
            } else if (comb == "C5kYes") {
                invers = true;
            } else if (comb == "C5kNo") {
                invers = true;
            } else if (comb == "C5sYes") {
                invers = false;
            } else if (comb == "C5sNo") {
                trade = false;
            } else if (comb == "C5bYes") {
                invers = true;
            } else if (comb == "C5bNo") {
                // code block
            } else if (comb == "D1kYes") {
                // code block
            } else if (comb == "D1kNo") {
                // code block
            } else if (comb == "D1sYes") {
                // code block
            } else if (comb == "D1sNo") {
                // code block
            } else if (comb == "D1bYes") {
                invers = true;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D1bNo") {
                trade = false;
            } else if (comb == "D2kYes") {
                // code block
            } else if (comb == "D2kNo") {
                // code block
            } else if (comb == "D2sYes") {
                trade = false;
            } else if (comb == "D2sNo") {
                invers = true;
                riskoption = 1.5;
                riskvar = "1.5%";
            } else if (comb == "D2bYes") {
                trade = false;
            } else if (comb == "D2bNo") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D3kYes") {
                trade = false;
            } else if (comb == "D3kNo") {
                invers = true;
            } else if (comb == "D3sYes") {
                invers = false;
            } else if (comb == "D3sNo") {
                checkab = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D3bYes") {
                invers = false;
            } else if (comb == "D3bNo") {
                invers = false;
            } else if (comb == "D4kYes") {
                invers = true;
            } else if (comb == "D4kNo") {
                invers = true;
            } else if (comb == "D4sYes") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D4sNo") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "D4bYes") {
                invers = true;
            } else if (comb == "D4bNo") {
                // code block
            } else if (comb == "D5kYes") {
                invers = true;
            } else if (comb == "D5kNo") {
                invers = false;
            } else if (comb == "D5sYes") {
                invers = false;
            } else if (comb == "D5sNo") {
                invers = true;
            } else if (comb == "D5bYes") {
                // code block
            } else if (comb == "D5bNo") {
                trade = false;
            } else if (comb == "E1kYes") {
                // code block
            } else if (comb == "E1kNo") {
                // code block
            } else if (comb == "E1sYes") {
                // code block
            } else if (comb == "E1sNo") {
                // code block
            } else if (comb == "E1bYes") {
                invers = false;
            } else if (comb == "E1bNo") {
                invers = true;
            } else if (comb == "E2kYes") {
                // code block
            } else if (comb == "E2kNo") {
                // code block
            } else if (comb == "E2sYes") {
                trade = false;
            } else if (comb == "E2sNo") {
                trade = false;
            } else if (comb == "E2bYes") {
                invers = true;
            } else if (comb == "E2bNo") {
                invers = false;
            } else if (comb == "E3kYes") {
                invers = false;
            } else if (comb == "E3kNo") {
                invers = false;
                riskoption = 0.5;
                riskvar = "0.5%";
            } else if (comb == "E3sYes") {
                trade = false;
            } else if (comb == "E3sNo") {
                invers = false;
            } else if (comb == "E3bYes") {
                invers = false;
            } else if (comb == "E3bNo") {
                trade = false;
            } else if (comb == "E4kYes") {
                invers = false;
            } else if (comb == "E4kNo") {
                invers = false;
            } else if (comb == "E4sYes") {
                invers = false;
            } else if (comb == "E4sNo") {
                invers = false;
            } else if (comb == "E4bYes") {
                // code block
            } else if (comb == "E4bNo") {
                invers = false;
            } else if (comb == "E5kYes") {
                invers = false;
                riskoption = 2;
                riskvar = "2%";
            } else if (comb == "E5kNo") {
                invers = true;
            } else if (comb == "E5sYes") {
                trade = false;
            } else if (comb == "E5sNo") {
                trade = false;
            } else if (comb == "E5bYes") {
                invers = false;
            } else if (comb == "E5bNo") {
                // code block
            }
        } else if (setup === "C") {
            a = parseFloat((fibo61 + fibo100) / 2 + keypip + spread).toFixed(2);
            b = parseFloat(fibo61 + keypip + spread).toFixed(2);
            buystop = (fibo100 + keypip + spread);
            sellstop = (fibo61 - keypip);
            if (comb == "A1kYes") {
                // code block
            } else if (comb == "A1kNo") {
                // code block
            } else if (comb == "A1sYes") {
                // code block
            } else if (comb == "A1sNo") {
                // code block
            } else if (comb == "A1bYes") {
                // code block
            } else if (comb == "A1bNo") {
                invers = false;
            } else if (comb == "A2kYes") {
                // code block
            } else if (comb == "A2kNo") {
                // code block
            } else if (comb == "A2sYes") {
                // code block
            } else if (comb == "A2sNo") {
                // code block
            } else if (comb == "A2bYes") {
                invers = false;
                riskoption = 1.5;
                riskvar = "1.5";
            } else if (comb == "A2bNo") {
                invers = false;
            } else if (comb == "A3kYes") {
                // code block
            } else if (comb == "A3kNo") {
                // code block
            } else if (comb == "A3sYes") {
                // code block
            } else if (comb == "A3sNo") {
                // code block
            } else if (comb == "A3bYes") {
                // code block
            } else if (comb == "A3bNo") {
                // code block
            } else if (comb == "A4kYes") {
                // code block
            } else if (comb == "A4kNo") {
                invers = false;
            } else if (comb == "A4sYes") {
                // code block
            } else if (comb == "A4sNo") {
                // code block
            } else if (comb == "A4bYes") {
                // code block
            } else if (comb == "A4bNo") {
                invers = false;
            } else if (comb == "A5kYes") {
                // code block
            } else if (comb == "A5kNo") {
                // code block
            } else if (comb == "A5sYes") {
                // code block
            } else if (comb == "A5sNo") {
                // code block
            } else if (comb == "A5bYes") {
                // code block
            } else if (comb == "A5bNo") {
                invers = true;
            } else if (comb == "B1kYes") {
                // code block
            } else if (comb == "B1kNo") {
                // code block
            } else if (comb == "B1sYes") {
                // code block
            } else if (comb == "B1sNo") {
                // code block
            } else if (comb == "B1bYes") {
                // code block
            } else if (comb == "B1bNo") {
                // code block
            } else if (comb == "B2kYes") {
                // code block
            } else if (comb == "B2kNo") {
                // code block
            } else if (comb == "B2sYes") {
                // code block
            } else if (comb == "B2sNo") {
                // code block
            } else if (comb == "B2bYes") {
                // code block
            } else if (comb == "B2bNo") {
                // code block
            } else if (comb == "B3kYes") {
                // code block
            } else if (comb == "B3kNo") {
                // code block
            } else if (comb == "B3sYes") {
                // code block
            } else if (comb == "B3sNo") {
                trade = false;
            } else if (comb == "B3bYes") {
                // code block
            } else if (comb == "B3bNo") {
                invers = false;
            } else if (comb == "B4kYes") {
                // code block
            } else if (comb == "B4kNo") {
                invers = false;
            } else if (comb == "B4sYes") {
                invers = false;
            } else if (comb == "B4sNo") {
                // code block
            } else if (comb == "B4bYes") {
                // code block
            } else if (comb == "B4bNo") {
                invers = false;
            } else if (comb == "B5kYes") {
                invers = false;
            } else if (comb == "B5kNo") {
                invers = false;
            } else if (comb == "B5sYes") {
                invers = false;
            } else if (comb == "B5sNo") {
                invers = false;
            } else if (comb == "B5bYes") {
                // code block
            } else if (comb == "B5bNo") {
                invers = false;
            } else if (comb == "C1kYes") {
                // code block
            } else if (comb == "C1kNo") {
                // code block
            } else if (comb == "C1sYes") {
                // code block
            } else if (comb == "C1sNo") {
                // code block
            } else if (comb == "C1bYes") {
                // code block
            } else if (comb == "C1bNo") {
                // code block
            } else if (comb == "C2kYes") {
                // code block
            } else if (comb == "C2kNo") {
                // code block
            } else if (comb == "C2sYes") {
                // code block
            } else if (comb == "C2sNo") {
                // code block
            } else if (comb == "C2bYes") {
                // code block
            } else if (comb == "C2bNo") {
                invers = true;
            } else if (comb == "C3kYes") {
                // code block
            } else if (comb == "C3kNo") {
                trade = false;
            } else if (comb == "C3sYes") {
                // code block
            } else if (comb == "C3sNo") {
                invers = true;
            } else if (comb == "C3bYes") {
                // code block
            } else if (comb == "C3bNo") {
                invers = true;
            } else if (comb == "C4kYes") {
                checkab = false;
            } else if (comb == "C4kNo") {
                checkab = false;
            } else if (comb == "C4sYes") {
                // code block
            } else if (comb == "C4sNo") {
                invers = false;
            } else if (comb == "C4bYes") {
                // code block
            } else if (comb == "C4bNo") {
                invers = false;
            } else if (comb == "C5kYes") {
                trade = false;
            } else if (comb == "C5kNo") {
                invers = false;
            } else if (comb == "C5sYes") {
                checkab = false;
            } else if (comb == "C5sNo") {
                invers = false;
            } else if (comb == "C5bYes") {
                checkab = false;
            } else if (comb == "C5bNo") {
                invers = true;
            } else if (comb == "D1kYes") {
                // code block
            } else if (comb == "D1kNo") {
                // code block
            } else if (comb == "D1sYes") {
                // code block
            } else if (comb == "D1sNo") {
                // code block
            } else if (comb == "D1bYes") {
                // code block
            } else if (comb == "D1bNo") {
                // code block
            } else if (comb == "D2kYes") {
                // code block
            } else if (comb == "D2kNo") {
                // code block
            } else if (comb == "D2sYes") {
                // code block
            } else if (comb == "D2sNo") {
                // code block
            } else if (comb == "D2bYes") {
                invers = false;
            } else if (comb == "D2bNo") {
                // code block
            } else if (comb == "D3kYes") {
                // code block
            } else if (comb == "D3kNo") {
                invers = true;
            } else if (comb == "D3sYes") {
                // code block
            } else if (comb == "D3sNo") {
                invers = false;
            } else if (comb == "D3bYes") {
                // code block
            } else if (comb == "D3bNo") {
                checkab = false;
            } else if (comb == "D4kYes") {
                invers = false;
            } else if (comb == "D4kNo") {
                invers = false;
            } else if (comb == "D4sYes") {
                invers = false;
            } else if (comb == "D4sNo") {
                // code block
            } else if (comb == "D4bYes") {
                // code block
            } else if (comb == "D4bNo") {
                // code block
            } else if (comb == "D5kYes") {
                invers = false;
            } else if (comb == "D5kNo") {
                invers = false;
            } else if (comb == "D5sYes") {
                invers = false;
            } else if (comb == "D5sNo") {
                invers = false;
            } else if (comb == "D5bYes") {
                // code block
            } else if (comb == "D5bNo") {
                invers = true;
            } else if (comb == "E1kYes") {
                // code block
            } else if (comb == "E1kNo") {
                // code block
            } else if (comb == "E1sYes") {
                // code block
            } else if (comb == "E1sNo") {
                // code block
            } else if (comb == "E1bYes") {
                // code block
            } else if (comb == "E1bNo") {
                // code block
            } else if (comb == "E2kYes") {
                // code block
            } else if (comb == "E2kNo") {
                // code block
            } else if (comb == "E2sYes") {
                // code block
            } else if (comb == "E2sNo") {
                // code block
            } else if (comb == "E2bYes") {
                // code block
            } else if (comb == "E2bNo") {
                // code block
            } else if (comb == "E3kYes") {
                invers = false;
            } else if (comb == "E3kNo") {
                // code block
            } else if (comb == "E3sYes") {
                // code block
            } else if (comb == "E3sNo") {
                trade = false;
            } else if (comb == "E3bYes") {
                // code block
            } else if (comb == "E3bNo") {
                // code block
            } else if (comb == "E4kYes") {
                invers = false;
            } else if (comb == "E4kNo") {
                invers = true;
            } else if (comb == "E4sYes") {
                invers = false;
            } else if (comb == "E4sNo") {
                invers = false;
            } else if (comb == "E4bYes") {
                invers = false;
            } else if (comb == "E4bNo") {
                invers = false;
            } else if (comb == "E5kYes") {
                invers = false;
            } else if (comb == "E5kNo") {
                invers = false;
            } else if (comb == "E5sYes") {
                invers = true;
            } else if (comb == "E5sNo") {
                invers = false;
            } else if (comb == "E5bYes") {
                // code block
            } else if (comb == "E5bNo") {
                invers = false;
            }
        }
    }
    var stoplossa = 0;
    var stoplossb = 0;
    var order = "";
    if (!invers) {
        var invers = "false";
        if (trend == "up") {
            if (setup == "B") {
                //sell
                order = "Sell";
                var stoplossa = buystop;
                var stoplossb = buystop;
            } else if (setup == "C") {
                //buy
                order = "Buy";
                var stoplossa = sellstop;
                var stoplossb = sellstop;
            }
        } else {
            if (setup == "B") {
                //buy
                order = "Buy";
                var stoplossa = sellstop;
                var stoplossb = sellstop;
            } else if (setup == "C") {
                //sell
                order = "Sell";
                var stoplossa = buystop;
                var stoplossb = buystop;
            }
        }
    } else {
        var invers = "true";
        if (trend == "up") {
            if (setup == "B") {
                //buy
                order = "Buy";
                var stoplossa = sellstop;
                var stoplossb = sellstop;
            } else if (setup == "C") {
                //sell
                order = "Sell";
                var stoplossa = buystop;
                var stoplossb = buystop;
            }
        } else {
            if (setup == "B") {
                //sell
                order = "Sell";
                var stoplossa = buystop;
                var stoplossb = buystop;
            } else if (setup == "C") {
                //buy
                order = "Buy";
                var stoplossa = sellstop;
                var stoplossb = sellstop;
            }
        }
    }
    if (!checkab) {
        var checkab = "false";
    } else {
        var checkab = "true";
    }

    //hitungBUYSELLbiasa
    var pip = parseFloat((buystop - sellstop) * 100).toFixed(0);
    var equityInput = document.getElementById('equityInput');
    var equity = equityInput.value;
    equityInput.classList.add('hidden');
    var loss = equity * riskoption / 100;
    var lot = parseFloat(loss / pip).toFixed(2);
    console.log({ pip }, { loss }, { lot });

    //HITUNG BUYSELL A
    var pipa = parseFloat((a - sellstop) * 100).toFixed(0);
    var lossa = equity * riskoption / 100;
    var lota = parseFloat(lossa / pipa).toFixed(2);

    //HITUNG BUYSELL B
    var pipb = parseFloat((b - sellstop) * 100).toFixed(0);
    var lossb = equity * riskoption / 100;
    var lotb = parseFloat(lossb / pipb).toFixed(2);

    if (!trade) {
        return (
            <div>
                NO TRADE
            </div>
        )
    } else {
        if (setup == "A") {
            return (
                <div>
                    <div>
                        <h2>Setup Variables</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Trend Line</td>
                                    <td>{trend}</td>
                                </tr>
                                <tr>
                                    <td>Setup</td>
                                    <td>{setup}</td>
                                </tr>
                                <tr>
                                    <td>Risk</td>
                                    <td>{riskvar}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="horizontal-table">
                            <tbody>
                                <tr>
                                    <td className="table-cell">
                                        <div>Buy Stop</div>
                                        <div>{buystop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{sellstop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pip}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lot}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${loss}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>Sell Stop</div>
                                        <div>{sellstop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{buystop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pip}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lot}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${loss}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else if (setup == "B") {
            return (
                <div>
                    <div>
                        <h2>Setup Variables</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Trend Line</td>
                                    <td>{trend}</td>
                                </tr>
                                <tr>
                                    <td>Setup</td>
                                    <td>{setup}</td>
                                </tr>
                                <tr>
                                    <td>Invers</td>
                                    <td>{invers}</td>
                                </tr>
                                <tr>
                                    <td>ab Setup</td>
                                    <td>{checkab}</td>
                                </tr>
                                <tr>
                                    <td>Risk</td>
                                    <td>{riskvar}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="horizontal-table">
                            <tbody>
                                <tr>
                                    <td className="table-cell">
                                        <div>Buy Stop</div>
                                        <div>{buystop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>Buy</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{sellstop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pip}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lot}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${loss}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>Sell Stop</div>
                                        <div>{sellstop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>Sell</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{buystop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pip}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lot}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${loss}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>a</div>
                                        <div>{a}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>{order}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{stoplossa}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pipa}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lota}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${lossa}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>b</div>
                                        <div>{b}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>{order}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{stoplossb}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pipb}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lotb}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${lossb}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else if (setup = "C") {
            return (
                <div>
                    <div>
                        <h2>Setup Variables</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Trend Line</td>
                                    <td>{trend}</td>
                                </tr>
                                <tr>
                                    <td>Setup</td>
                                    <td>{setup}</td>
                                </tr>
                                <tr>
                                    <td>Invers</td>
                                    <td>{invers}</td>
                                </tr>
                                <tr>
                                    <td>ab Setup</td>
                                    <td>{checkab}</td>
                                </tr>
                                <tr>
                                    <td>Risk</td>
                                    <td>{riskvar}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="horizontal-table">
                            <tbody>
                                <tr>
                                    <td className="table-cell">
                                        <div>Buy Stop</div>
                                        <div>{buystop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>Buy</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{sellstop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pip}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lot}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${loss}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>Sell Stop</div>
                                        <div>{sellstop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>Sell</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{buystop}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pip}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lot}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${loss}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>a</div>
                                        <div>{a}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>{order}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{stoplossa}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pipa}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lota}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${lossa}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-cell">
                                        <div>b</div>
                                        <div>{b}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Order</div>
                                        <div>{order}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Stoploss</div>
                                        <div>{stoplossb}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>PIP</div>
                                        <div>{pipb}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Lot</div>
                                        <div>{lotb}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Risk</div>
                                        <div>{riskvar}</div>
                                    </td>
                                    <td className="table-cell">
                                        <div>Value</div>
                                        <div>${lossb}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    NO TRADE
                </div>
            )
        }

    }
}

export default Setup;
