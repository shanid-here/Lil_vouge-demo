export default function Footer() {
  return (
    <footer className="border-t border-stone p-12 flex justify-between items-center outline-none flex-wrap gap-6">
      <div className="serif font-bold text-xl">Lil Vogue</div>
      <div className="flex gap-8">
        <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Privacy</a>
        <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Shipping</a>
        <a href="#" className="text-[.75rem] tracking-[.12em] uppercase text-mid hover:text-ink transition-colors duration-200">Contact</a>
      </div>
      <p className="text-[.7rem] text-stone">© 2025 Lil Vogue. Ages 8–12.</p>
    </footer>
  );
}
