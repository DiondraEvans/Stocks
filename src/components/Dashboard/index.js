import './index.css';
import React from 'react';
import { Link } from "react-router-dom";
import data from "../../data/data.js"
const Dashboard = () =>{
    let results = data.map((stock) =>{
        return<li key={stock.symbol}><Link to = {stock.symbol}  className="links">{stock.name}</Link></li>
    })
    return (
    <div>
        <h1>Most Active Stocks</h1>
            <div className="stocks-box">
        
                <div className="results-section">
                    {results}
                </div>
        
            </div>
    </div>
      );
}

export default Dashboard;