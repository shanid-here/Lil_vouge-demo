export default function Footer() {
  return (
    <footer className="border-t border-stone py-12 px-6 md:p-12 flex flex-col md:flex-row justify-between items-center flex-wrap gap-8 text-center md:text-left bg-paper">
      <div className="serif font-bold text-2xl md:text-xl">Lil Vogue</div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full md:w-auto">
        <a href="#" className="text-[.7rem] md:text-[.75rem] tracking-[.15em] md:tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Privacy</a>
        <a href="#" className="text-[.7rem] md:text-[.75rem] tracking-[.15em] md:tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Shipping</a>
        <a href="#" className="text-[.7rem] md:text-[.75rem] tracking-[.15em] md:tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Contact</a>
      </div>
      <p className="text-[.7rem] tracking-[.05em] text-stone w-full md:w-auto">© 2025 Lil Vogue. Ages 8–12.</p>
    </footer>
  );
}
