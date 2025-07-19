import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RotatingIcons from './components/RotatingIcons';
import FloatingCards from './components/FloatingCards';


function App() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Floating Cards - positioned around the screen edges */}
      <FloatingCards />
      
      {/* Rotating box with Text and Icons */}
      <div className='relative z-20'>
        <RotatingIcons/>
      </div>
      
     
      
      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen -my-16 relative z-20">
        <div className="w-1/5 h-1/5" style={{ minHeight: '350px', minWidth: '500px' }}>
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default App;