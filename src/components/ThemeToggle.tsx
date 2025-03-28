import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FF6F61]/10 hover:bg-[#FF6F61]/20 transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#FF6F61]" />
      ) : (
        <Moon className="w-5 h-5 text-[#FF6F61]" />
      )}
    </button>
  );
}