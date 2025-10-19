import React from 'react'
import background from './assets/bg-main.webp'
import playButton from './assets/play-btn.webp'
import './App.css'

const RATIO = 600 / 1350 * 0.75;

function App() {
  const imgRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const backgroundRef = React.useRef(null);

  React.useEffect(() => {
    function handleResize() {
      if (imgRef.current && backgroundRef.current) {
        const windowHeight = backgroundRef.current.clientHeight;
        const buttonHeight = windowHeight * RATIO;

        imgRef.current.style.height = `${buttonHeight}px`;
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="overflow-hidden h-screen">
      <div className="relative h-screen font-sans lg:hidden">
        <img id="background" src={background} ref={backgroundRef} alt="Herbalife Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10" />

        <div className="relative h-full">
          <button ref={btnRef} className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 appearance:none will-change-transform transition-transform duration-50 ease-in-out active:scale-80">
            <img ref={imgRef} id="play-button" src={playButton} alt="Play Button"
              className="max-w-[600px] h-auto cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center h-full flex-col gap-4">
        <p className="text-2xl">This experience is only available on mobile devices.</p>
      </div>
    </div>
  )
}

export default App
