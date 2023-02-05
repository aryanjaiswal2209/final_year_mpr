import React,{useState} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';
import DropDown from './components/DropDown'
import InfoSection from './components/InfoSection';
import {  InfoDataOne, InfoDataTwo } from './data/InfoData';
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import login from './components/login'

function App() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  }
  
    return (
      <div> 
        <Router>
          <GlobalStyle />
        </Router>
        <Router>    
          <Navbar toggle={toggle} />
          <Route path="/login" exact/>
        </Router>
        <Router>
          <DropDown isOpen={isOpen} toggle={toggle}/>
        </Router>
        <Router>
          <Hero slides={SliderData}/>
        </Router>
        <Router>
            <InfoSection {...InfoDataOne}/>
        </Router>
        <Router>
            <InfoSection {...InfoDataTwo}/>
        </Router>
        
        
      </div>
    );
    
}

export default App;
