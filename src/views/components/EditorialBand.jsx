export default function EditorialBand() {
  return (
    <div className="bg-ink text-paper grid grid-cols-1 md:grid-cols-2 min-h-[400px] reveal">
      <div className="flex flex-col justify-center py-16 px-8 md:px-14 items-center text-center md:items-start md:text-left">
        <p className="text-[.65rem] tracking-[.2em] uppercase text-accent mb-4">
          Limited Edition
        </p>
        <h2 className="serif text-[clamp(2.5rem,6vw,3.5rem)] mb-4 md:mb-5 leading-[1.1]">
          The Weekend<br className="hidden md:block"/>Edit.
        </h2>
        <p className="text-[.85rem] text-[#a09a92] leading-[1.7] max-w-[320px] mb-8 md:mb-10">
          Relaxed fits and neutral tones for Saturday mornings and long afternoons.
        </p>
        <button className="flex justify-center items-center gap-[.6rem] text-[.75rem] tracking-[.12em] uppercase font-medium py-[.95rem] md:py-[.85rem] px-8 bg-transparent text-white border border-white cursor-pointer md:cursor-none w-full md:w-fit transition-colors duration-200 hover:bg-white hover:text-ink">
          Explore <span className="text-[.9rem] leading-none mb-0.5">→</span>
        </button>
      </div>
      <div className="overflow-hidden h-[75vw] md:h-auto min-h-[300px]">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500'%3E%3Crect fill='%232a2720' width='700' height='500'/%3E%3Crect fill='%23383430' x='80' y='60' width='540' height='380' rx='8'/%3E%3Ctext fill='%23706a62' font-family='Georgia' font-size='24' text-anchor='middle' x='350' y='250'%3EWeekend Edit%3C/text%3E%3Ctext fill='%23706a62' font-family='Georgia' font-size='16' text-anchor='middle' x='350' y='285'%3ELimited Collection%3C/text%3E%3C/svg%3E"
          className="w-full h-full object-cover opacity-85" 
          alt="Weekend edit" 
        />
      </div>
    </div>
  );
}
