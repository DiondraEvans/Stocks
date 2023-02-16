import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import data from "../../data/data.js"
import './index.css'
import image from '../../images/price.svg'
import Footer from '../../components/Footer/index.js';
const Symbolpage = () =>{

  let { symbol } = useParams();
  let results = data.map((stock, index) =>{
    if(symbol === stock.symbol){
       return <ul key ={index} className="listOfInfo">
        <li><span style={{color: "blue"}}>{stock.name}</span></li>
        <li>symbol: {stock.symbol}</li>
        <li>lastPrice: {stock.lastPrice}</li>
        <li>change: {stock.change}</li>
        <li>high: <span style={{color:"green"}}>{stock.high}</span></li>
        <li>low: <span style={{color:"red"}}>{stock.low}</span></li>
        <li>open: {stock.open}</li>
       </ul>
    }
   
})

  return (
    <div className="symbolpage">
      <Outlet />
      <div className="section-symbol">
        <img src= {image} alt='stocks' style={{width:"500px"}} />
        <div className="symbol-stats">
          {results}
        </div>
      </div>
        <Footer/>
    </div>
     
  );
};

export default Symbolpage;