import { useEffect, useState } from 'react';

export default function NavBar({ cartCount, openCart }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] mix-blend-multiply">
      <div className={`flex items-center justify-between py-5 px-6 md:py-6 md:px-12 border-b transition-all duration-300 ${scrolled ? 'bg-paper/92 backdrop-blur-md border-stone' : 'border-transparent bg-transparent'}`}>
        <div className="serif font-bold text-lg tracking-tight" style={{ letterSpacing: '-.01em' }}>
          Lil Vogue
        </div>
        <div className="hidden md:flex gap-10">
          <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">New In</a>
          <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Boys</a>
          <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Girls</a>
          <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Sale</a>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200 hidden md:block">Search</a>
          <button 
            onClick={openCart} 
            className="relative bg-none border-none cursor-none text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200" 
          >
            Bag
            <span className="absolute -top-1.5 -right-2.5 text-[0.55rem] bg-accent text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
