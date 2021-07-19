import React, { useState } from 'react';
import './App.css';

import Topbar from './components/toolbars/topbar';
import Intro from './components/intro/intro';
import Work from './components/Work/work';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/Testimonials/testimonials';
import Contact from './components/Contact/contact';
import Menu from './components/Menu/menu';

function App() {

  const [act, setAct] = useState(false);


  return (
    <div className="App">
      <Topbar handleClick = {() => setAct(!act)} clickMode = {act}/>
      <Menu clickMode = {act}/>
      <div className="section">
        <Intro name="sizeOfAll" />
        <Portfolio name="sizeOfAll" />
        <Work name="sizeOfAll" />
        <Testimonial name="sizeOfAll" />
        <Contact name="sizeOfAll" />
      </div>
    </div>
  );
}

export default App;
