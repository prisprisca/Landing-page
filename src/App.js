import React from "react";
import "./App.css";
import Cardo from "./Cardo";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Blog from "./Blog";
import Services from './Services'
import MyMain from "./MyMain";



function App() {
  return (
   <Router>
      <div>
       <Switch>

         <Route path="/blog">
           <Header />
           <Blog />
           <Footer />
         </Route>

         <Route path="/services">
           <Header />
           <Services />
           <Footer />
         </Route>

         <Route path="/repo">
           <Header />
           <MyMain />
           <Footer />

         </Route>


         <Route path="/">
         <Header /> 
         <Cardo /> 
         <Footer />
         </Route> 

         
         </Switch>
      </div>
      </Router>
   
  );
}

export default App;
