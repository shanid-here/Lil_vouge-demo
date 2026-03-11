import ProductCard from './ProductCard';

export default function ProductList({ categories, activeCategory, setActiveCategory, sortOrder, setSortOrder, filteredProducts, openModal }) {
  return (
    <section id="shop" className="py-16 md:py-20">
      <div className="px-5 md:px-12 mb-8 reveal text-center md:text-left">
        <p className="text-[.65rem] md:text-[.7rem] tracking-[.2em] uppercase text-stone mb-3 md:mb-2">The Collection</p>
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-5 md:gap-4">
          <h2 className="text-[clamp(2.2rem,4vw,2.8rem)] font-bold leading-[1.1] serif">Essentials for 8–12</h2>
          <select 
            id="sort-select" 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="text-[.7rem] tracking-[.1em] uppercase font-sans bg-transparent border-none border-b border-stone py-1.5 px-0 md:px-2 text-mid outline-none cursor-pointer w-[180px] md:w-auto text-center md:text-left focus:border-ink transition-colors"
          >
            <option value="default">Sort: Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="px-5 md:px-12 mb-8 reveal overflow-hidden">
        <div className="flex gap-2 items-center border-b border-stone pb-0 overflow-x-auto whitespace-nowrap hide-scrollbar -mx-5 px-5 md:mx-0 md:px-0" id="filter-bar">
          {categories.map(c => (
            <button 
              key={c}
              className={`text-[.65rem] md:text-[.7rem] tracking-[.12em] md:tracking-[.15em] uppercase font-medium bg-none border-none cursor-pointer md:cursor-none pt-3 px-4 pb-2.5 border-b-2 -mb-px transition-colors duration-200 hover:text-ink shrink-0 ${c === activeCategory ? 'text-ink border-accent' : 'text-mid border-transparent'}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-stone" id="product-grid" style={{ display: filteredProducts.length ? 'grid' : 'none' }}>
        {filteredProducts.map(p => (
          <ProductCard key={p.id} item={p} openModal={openModal} />
        ))}
      </div>

      {!filteredProducts.length && (
        <div id="empty-state" className="text-center py-20 px-8">
          <p className="text-[.8rem] tracking-[.12em] uppercase text-stone">
            No items in this category
          </p>
        </div>
      )}
    </section>
  );
}
