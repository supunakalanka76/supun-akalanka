import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

function App() {

  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='lgl:w-[95%] mx-auto'>
        <Navbar />
        <Home />
        <Features />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}

export default App;
