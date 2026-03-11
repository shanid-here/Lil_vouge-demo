export default function ProductCard({ item, openModal }) {
  return (
    <div className="bg-paper cursor-none relative overflow-hidden group" onClick={() => openModal(item)}>
      <div className="aspect-[3/4] overflow-hidden bg-[#ece8e2]">
        <img 
          src={item.img} 
          alt={item.name} 
          className="w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
          onError={(e) => { e.currentTarget.parentElement.style.background = '#e0dcd6'; }} 
        />
      </div>
      {item.tag && <span className="absolute top-4 left-4 text-[.6rem] tracking-[.12em] uppercase bg-accent text-white py-1 px-2.5 font-medium">{item.tag}</span>}
      <div className="py-[1.1rem] px-[1.2rem] pb-[1.4rem]">
        <div className="text-[.85rem] font-medium tracking-[.03em] mb-1">{item.name}</div>
        <div className="flex justify-between items-center">
          <span className="text-[.8rem] text-mid">${item.price}</span>
          <button 
            className="text-[.65rem] tracking-[.1em] uppercase font-medium text-accent bg-transparent border-none cursor-none opacity-0 transition-opacity duration-200 group-hover:opacity-100" 
            onClick={(e) => {
              e.stopPropagation();
              openModal(item);
            }}
          >
            Quick Add +
          </button>
        </div>
      </div>
    </div>
  );
}
