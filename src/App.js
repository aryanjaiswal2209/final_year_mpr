import React,{useState} from 'react';
// import { render } from '@testing-library/react';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';
import DropDown from './components/DropDown'
import InfoSection from './components/InfoSection';
import {  InfoDataOne, InfoDataTwo } from './data/InfoData';
import SignUp from './components/login1'

function App() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  }  
    return (
      <Router>
      <div>
        <Switch>
          <Route path="/login">
            <SignUp />
          </Route>
          <Route path="/request">
            <p>dfb</p>
          </Route>
          <Route path="/">
          <GlobalStyle />                  
          <Navbar toggle={toggle} />                     
          <DropDown isOpen={isOpen} toggle={toggle}/>      
          <Hero slides={SliderData}/>    
          <InfoSection {...InfoDataOne}/>
          <InfoSection {...InfoDataTwo}/>
          </Route>
        </Switch>
      </div>
    </Router>
      // <RouterProvider router={router} />
    );
    
}

export default App;
