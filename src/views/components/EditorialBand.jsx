export default function EditorialBand() {
  return (
    <div className="bg-ink text-paper grid grid-cols-1 md:grid-cols-2 min-h-[400px] reveal">
      <div className="flex flex-col justify-center py-16 px-14">
        <p className="text-[.65rem] tracking-[.2em] uppercase text-accent mb-4">
          Limited Edition
        </p>
        <h2 className="serif text-[clamp(2rem,4vw,3rem)] mb-4 leading-[1.1]">
          The Weekend<br />Edit.
        </h2>
        <p className="text-[.85rem] text-[#a09a92] leading-[1.7] max-w-[320px] mb-8">
          Relaxed fits and neutral tones for Saturday mornings and long afternoons.
        </p>
        <button className="inline-flex items-center gap-[.6rem] text-[.75rem] tracking-[.12em] uppercase font-medium py-[.85rem] px-8 bg-transparent text-white border border-white cursor-none w-fit transition-colors duration-200 hover:bg-white hover:text-ink">
          Explore →
        </button>
      </div>
      <div className="overflow-hidden h-[50vw] md:h-auto">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500'%3E%3Crect fill='%232a2720' width='700' height='500'/%3E%3Crect fill='%23383430' x='80' y='60' width='540' height='380' rx='8'/%3E%3Ctext fill='%23706a62' font-family='Georgia' font-size='24' text-anchor='middle' x='350' y='250'%3EWeekend Edit%3C/text%3E%3Ctext fill='%23706a62' font-family='Georgia' font-size='16' text-anchor='middle' x='350' y='285'%3ELimited Collection%3C/text%3E%3C/svg%3E"
          className="w-full h-full object-cover opacity-80" 
          alt="Weekend edit" 
        />
      </div>
    </div>
  );
}
