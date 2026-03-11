export default function Hero() {
  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20">
      <div className="flex flex-col justify-center py-10 px-6 md:py-16 md:pr-12 md:pl-16">
        <p className="text-[.7rem] tracking-[.2em] uppercase text-accent mb-6">Ages 8 – 12 · SS 2025</p>
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] font-bold mb-6 serif">
          Dressed for<br /><em className="text-accent italic">every move.</em>
        </h1>
        <p className="text-[.95rem] text-mid leading-[1.7] max-w-[340px] mb-10">
          Clothes that keep up — crafted for the in-between years when kids know exactly what they want.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="inline-flex items-center gap-[.6rem] text-[.75rem] tracking-[.12em] uppercase font-medium py-[.85rem] px-8 bg-ink text-paper border-none cursor-none transition-colors duration-200 hover:bg-accent" onClick={scrollToShop}>
            Shop Collection <span className="text-[.9rem]">→</span>
          </button>
          <button className="inline-flex items-center gap-[.6rem] text-[.75rem] tracking-[.12em] uppercase font-medium py-[.85rem] px-8 bg-transparent text-ink border border-ink cursor-none transition-colors duration-200 hover:bg-ink hover:text-paper">Our Story</button>
        </div>
      </div>
      <div className="relative overflow-hidden bg-[#e8e4de] h-[50vw] md:h-auto group">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='1100'%3E%3Crect fill='%23d6cfc6' width='900' height='1100'/%3E%3Crect fill='%23c4bdb4' x='200' y='150' width='500' height='700' rx='12'/%3E%3Ctext fill='%23a09890' font-family='Georgia' font-size='28' text-anchor='middle' x='450' y='520'%3EHero Look%3C/text%3E%3Ctext fill='%23a09890' font-family='Georgia' font-size='18' text-anchor='middle' x='450' y='560'%3ESS 2025%3C/text%3E%3C/svg%3E" 
          alt="Hero" 
          className="w-full h-full object-cover transition-transform duration-[8000ms] ease-in-out group-hover:scale-105"
        />
        <span className="absolute bottom-10 left-8 text-[.7rem] tracking-[.15em] uppercase text-paper bg-ink py-[.4rem] px-[.9rem]">New Arrivals</span>
      </div>
    </section>
  );
}
