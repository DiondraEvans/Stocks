import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import image from './images/undraw.svg'
import Footer from './components/Footer';
function App() {

  return (
   
        <div className = "App">
          <Outlet /> 
          {/* outlet displays the navbar placed in out index.js (router). How we customized the navbar was by going to the Navbar component */}
          <div className="section-home">
            <h1>Home page</h1>
            <img src={image} alt="stocks" />
          </div>
          <Footer />
        </div>  
    

      
  );
}

export default App;