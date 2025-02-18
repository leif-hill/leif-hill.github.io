import { useState, useEffect } from 'react';
import { zen } from '../pages/_app';

function LandingHeaderMobile() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header id="landing-header" style={{ backgroundColor: '#b881d4', zIndex: 0 }} className="flex justify-center items-center p-4 transition-colors duration-300 relative header-blur" >
      <div className="flex flex-col items-center">
        <a href="#">
          <h1 className={`${zen.className} bg-white p-0 px-3 inline-block ${isLoaded ? 'fade-in' : ''}`} style={{ letterSpacing: '0.2em', color: '#6757A2', borderRadius: '3px', fontSize: '0.8rem', textAlign: 'center' }}>
            LEIF HILL
          </h1>
          <h1 className={`${zen.className} p-1 inline-block ${isLoaded ? 'fade-in' : ''}`} style={{ letterSpacing: '0.1em', color: 'white', fontSize: '0.8rem', textShadow: '-2px 1px 5px rgba(62, 62, 62, 0.5)', textAlign: 'center' }}>
            software engineer
          </h1>
        </a>
      </div>
    </header>
  );
}

export default LandingHeaderMobile;
