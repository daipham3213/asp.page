import React from 'react'
import background from './assets/bg-main.webp'
import playButton from './assets/play-btn.webp'
import './App.css'

const RATIO = 600 / 1350 * 0.7;

function App() {
  const buttonRef = React.useRef(null);
  const backgroundRef = React.useRef(null);

  React.useEffect(() => {
    function handleResize() {
      if (buttonRef.current && backgroundRef.current) {
        const windowHeight = backgroundRef.current.clientHeight;
        const buttonHeight = windowHeight * RATIO;
        buttonRef.current.style.height = `${buttonHeight}px`;
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-screen font-sans">
      <img id="background" src={background} ref={backgroundRef} alt="Herbalife Background"
        className="absolute top-0 left-0 w-full h-full object-contain -z-10" />

      <div className="relative h-full">
        <button className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 appearance:none will-change-transform transition-transform duration-200 ease-in-out active:scale-50">
          <img ref={buttonRef} id="play-button" src={playButton} alt="Play Button"
            className="max-w-[600px] h-auto cursor-pointer" />
        </button>
      </div>
    </div>

  )
}

export default App
