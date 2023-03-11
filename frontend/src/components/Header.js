import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import "./Header.css";
import libraryImg from '../images/library-img.jpg';
import backgroundImg1 from '../images/library-img1.jpg';
import backgroundImg2 from '../images/library-img2.jpg';
import backgroundImg3 from '../images/library-img3.jpg';
import backgroundImg4 from '../images/library-img4.jpg';

function Header() {
    const images = [    libraryImg,    backgroundImg1,    backgroundImg2, backgroundImg3 ,backgroundImg4,  ];  // add more images here  
  
    const [backgroundIndex, setBackgroundIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundIndex((backgroundIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }, [backgroundIndex]);

  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)), url(${images[backgroundIndex]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '50vh',
    flexDirection: 'column',
  };

  return (
   
    <>
      <div className='holder'>
     <Navbar />
        <header className='header' style={headerStyle}>
          <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>BooK Store.</h2>
            <p className="header-text">Welcome to our bookstore. Discover a world of endless possibilities with our vast collection of books.</p>
          </div>
        </header>
      </div>
    </>
  );
}  

export default Header;