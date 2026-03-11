import { useEffect, useState } from 'react';

export default function NavBar({ cartCount, openCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] mix-blend-multiply">
        <div className={`flex items-center justify-between py-4 px-6 md:py-6 md:px-12 border-b transition-all duration-300 ${scrolled || menuOpen ? 'bg-paper/95 backdrop-blur-md border-stone' : 'border-transparent bg-transparent'}`}>
          <div className="flex items-center gap-4">
            {/* Hamburger Mobile Menu */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1 z-50 bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-[1.5px] bg-ink transition-transform duration-300 ${menuOpen ? 'translate-y-[5.5px] rotate-45' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-ink transition-transform duration-300 ${menuOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`}></span>
            </button>
            <div className="serif font-bold text-lg md:text-xl tracking-tight z-50 uppercase md:normal-case" style={{ letterSpacing: '-.01em' }}>
              Lil Vogue
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10">
            <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">New In</a>
            <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Boys</a>
            <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Girls</a>
            <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Sale</a>
          </div>

          <div className="flex gap-5 md:gap-6 items-center z-50">
            <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200 hidden md:block">Search</a>
            <button 
              onClick={openCart} 
              className="relative bg-none border-none cursor-pointer md:cursor-none text-[.75rem] tracking-[.12em] uppercase text-ink md:text-mid md:hover:text-ink transition-colors duration-200 font-medium md:font-normal" 
            >
              Bag
              <span className="absolute -top-1.5 -right-2.5 text-[0.55rem] bg-accent text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-paper border-b border-stone overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col px-6 gap-6 pt-2 pb-4">
            <a href="#" className="text-[.85rem] tracking-[.15em] uppercase text-ink font-medium hover:text-accent transition-colors">New In</a>
            <a href="#" className="text-[.85rem] tracking-[.15em] uppercase text-ink font-medium hover:text-accent transition-colors">Boys</a>
            <a href="#" className="text-[.85rem] tracking-[.15em] uppercase text-ink font-medium hover:text-accent transition-colors">Girls</a>
            <a href="#" className="text-[.85rem] tracking-[.15em] uppercase text-ink font-medium hover:text-accent transition-colors">Sale</a>
            <a href="#" className="text-[.85rem] tracking-[.15em] uppercase text-mid font-medium hover:text-ink transition-colors border-t border-stone pt-6 mt-2">Search</a>
          </div>
        </div>
      </nav>

      {/* Background Overlay for mobile menu */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-ink/20 z-[90] backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
