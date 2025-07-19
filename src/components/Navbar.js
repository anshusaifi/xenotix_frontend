import ThemeToggle from './ThemeToggle';
import { Button } from './ui/Button';

export default function Navbar() {
  return (
    <nav className="flex justify-center fixed w-full top-0 z-50 p-4">
      <div className="flex justify-between items-center w-11/12 max-w-7xl bg-white/10 backdrop-blur-md rounded-2xl px-6 py-1 border border-white/20">
        <div className="font-bold text-white">Xenotix Tech</div>
        <div className="flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Articles</a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button>Contact Now →</Button>
        </div>
      </div>
    </nav>
  );
}