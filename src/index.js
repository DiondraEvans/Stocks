import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutpage from './pages/About_page'
import Stockspage from './pages/Stocks_page'
import Symbolpage from './pages/symbol_page';
import Nav from './components/Navbar'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    children: [{
      // this renders the navbar in our app.js. This is why Outlet is used. the <Outlet /> component is used to render child routes in nested/child routes.
      // A nested route is a route that is a child of another route in a routing hierarchy. It allows for the nesting of multiple levels of routes within a single parent route. This is useful for creating more complex page structures and components that require additional routes to function properly.
      path: "/",
      element: <Nav />
  }]
  },
  {
    path: "/about",
    element: <Aboutpage />,
    children: [{
      //this renders/displays the navbar in our Aboutpage
      path: "/about",
      element: <Nav />
  }]
  },
  {
    //this path renders the stock page, with the symbol, it renders a specific stock
    path: "/stock",
    element: <Stockspage />,
    children: [{
    //this renders/displays the navbar in our stockspage
    path: "/stock",
    element: <Nav />
  }]
},
  {
    //this path renders the stock page, with the symbol, it renders a specific stock
    path: "/stock/:symbol",
    element: <Symbolpage />,
    children: [{
    //this renders/displays the navbar in our stockspage
    path: "/stock/:symbol",
    element: <Nav />
  }]
}
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
