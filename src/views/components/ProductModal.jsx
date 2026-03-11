export default function ProductModal({ isModalOpen, modalProduct, modalSize, selectSize, closeModal, addToCart }) {
  if (!modalProduct) return null;

  return (
    <div id="modal" className={`fixed inset-0 z-[300] bg-[#1a1814]/50 flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div id="modal-box" className={`bg-paper w-[840px] max-w-[95vw] grid grid-cols-1 md:grid-cols-2 relative transition-transform duration-[350ms] ease-[cubic-bezier(.34,1.2,.64,1)] ${isModalOpen ? 'translate-y-0' : 'translate-y-5'}`}>
        <button className="absolute top-5 right-5 bg-transparent border-none cursor-none text-[.7rem] tracking-[.12em] uppercase text-mid transition-colors duration-200 hover:text-ink z-10" onClick={closeModal}>
          Close ✕
        </button>
        <div className="aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-[#ece8e2]">
          <img src={modalProduct.img} alt={modalProduct.name} className="w-full h-full object-cover" />
        </div>
        <div className="py-10 px-8 flex flex-col justify-center">
          <p className="text-[.65rem] tracking-[.18em] uppercase text-accent mb-2" id="m-cat">{modalProduct.cat}</p>
          <h2 className="text-[1.6rem] font-bold leading-[1.15] mb-3 serif" id="m-name">{modalProduct.name}</h2>
          <p className="text-base text-mid mb-5" id="m-price">${modalProduct.price}</p>
          <p className="text-[.8rem] leading-[1.7] text-mid mb-7" id="m-desc">{modalProduct.desc}</p>
          
          <p className="text-[.65rem] tracking-[.12em] uppercase text-mid mb-2.5">Select Size</p>
          <div className="flex gap-2 flex-wrap mb-7" id="m-sizes">
            {modalProduct.sizes.map(s => (
              <button 
                key={s}
                className={`text-[.7rem] tracking-[.08em] font-medium py-1.5 px-3 border bg-transparent cursor-none transition-all duration-150 hover:border-ink ${s === modalSize ? 'bg-ink text-paper border-ink' : 'border-stone'}`} 
                data-size={s}
                onClick={() => selectSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
          
          <button 
            className="flex items-center gap-[.6rem] text-[.75rem] tracking-[.12em] uppercase font-medium py-[.85rem] px-8 bg-ink text-paper border-none cursor-none transition-colors duration-200 hover:bg-accent justify-center" 
            id="m-add" 
            onClick={() => {
              if (modalProduct && modalSize) {
                addToCart(modalProduct, modalSize);
                closeModal();
              }
            }}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
