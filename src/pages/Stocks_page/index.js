import React from 'react'
import { Outlet } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/index.js';
import './index.css'
import Footer from '../../components/Footer';
const stockpage = () =>{

 

  return (
    <div className="stockspage" >
       
            < Outlet />
            <div className="section">
              <p className="msg">
              Welcome to our stock page, where you can quickly and easily check the latest stock prices, highs, and lows for your favorite companies. Our user-friendly platform allows you to track stocks in real-time and make informed decisions about your investments.
              </p>
                <br></br><Dashboard />
            </div>
          <Footer />
    </div>
     
  );
};

export default stockpage;