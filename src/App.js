import React,{useState} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './GlobalStyles';
import DropDown from './components/DropDown'
import InfoSection from './components/InfoSection';
import {  InfoDataOne, InfoDataTwo } from './data/InfoData';



function App() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  }
  return (
    <> 
      <GlobalStyle />    
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoDataOne}/>
      <InfoSection {...InfoDataTwo}/>
      
    </>
  );
}

export default App;
