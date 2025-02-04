import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';
import ScrollToTop from './components/ScrollToTop';

function App() {

  useEffect(() => {
    //Store the default title from index.html
    const originalTitle = document.title;

    //Function to handle visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Come back! 😢';
      }
      else {
        document.title = originalTitle;
      }
    };

    // Add event listener for visibility changes
    document.addEventListener ('visibilitychange', handleVisibilityChange);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener ('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // useEffect (() => {
  //   const title = "Welcome to Supun Akalanka's Portfolio...";
  //   let position = 0;

  //   // Function to animate the title
  //   const animateTitle = () => {
  //     document.title = title.slice (position) + ' ' + title.slice (0, position);
  //     position = (position + 1) % title.length;
  //   };

  //   // Start the animation
  //   const intervalId = setInterval (animateTitle, 200); //Change every 300ms

  //   // Cleanup on component unmount
  //   return () => clearInterval (intervalId);
  // }, []);

  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='lgl:w-[95%] mx-auto'>
        <Navbar />
        <Home />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
