
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './index.css'
import Footer from '../../components/Footer';
const Aboutpage = () =>{

 const [aboutmessage, setAboutMessage] = useState('')
  useEffect(() =>{
    setAboutMessage(<div className="message">Welcome to our stocks webpage! Here, you'll find all the information you need to stay up-to-date on the latest happenings in the world of finance and investing.

    Our team of expert analysts is dedicated to providing you with accurate and timely information on the stock market, including insights on current trends and forecasts for the future. We offer a wide range of resources to help you make informed decisions about your investments, whether you're a seasoned investor or just starting out.
    
    From daily market updates and breaking news to in-depth analysis of individual stocks and sectors, we have everything you need to stay on top of your portfolio. Our user-friendly platform makes it easy to access all the information you need, with intuitive charts and graphs that help you visualize trends and track your investments.
    
    Whether you're looking to invest in the latest hot stock or simply want to keep tabs on the market, our stocks webpage is the go-to resource for investors of all levels. So why wait? Start exploring our site today and take the first step towards building a successful investment strategy!</div>)
  },[])
  return (
    <div className="aboutpage">
        <Outlet />
        <div className='section-about'>
          <div><h1>About</h1></div>
          {aboutmessage}
        </div>
        <Footer />
    </div>
     
  );
};

export default Aboutpage;