import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition text-white"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
