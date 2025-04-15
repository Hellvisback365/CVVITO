import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'py-4'
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <a href="#home" className="font-poppins font-bold text-2xl text-primary dark:text-primary">
          VP<span className="text-green-500 dark:text-green-400">.dev</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">Chi Sono</a>
          <a href="#experience" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">Esperienze</a>
          <a href="#projects" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">Progetti</a>
          <a href="#skills" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-primary dark:hover:text-primary transition-colors duration-300">Contatti</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="text-yellow-300 h-5 w-5" /> : <Moon className="text-gray-700 h-5 w-5" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg mx-4 overflow-hidden"
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              <a 
                href="#about" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chi Sono
              </a>
              <a 
                href="#experience" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Esperienze
              </a>
              <a 
                href="#projects" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Progetti
              </a>
              <a 
                href="#skills" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contatti
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
