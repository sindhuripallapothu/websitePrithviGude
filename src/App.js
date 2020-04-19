import React from 'react';
import './App.css';
import Header from './Header';
import Analytics from './Analytics';
import About from './AboutMe';
import WorkEx from './WorkEx';
import Education from './Education';
import Certifications from './Certifications';
import IResume from './IResume';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Analytics />
      <About />
      <WorkEx />
      <Education />
      <Certifications />
      <IResume />
      <Contact />
    </div>
  );
}

export default App;
