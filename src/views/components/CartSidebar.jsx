export default function CartSidebar({ cart, isCartOpen, cartTotal, cartCount, closeCart, removeFromCart, checkout }) {
  return (
    <>
      <div 
        id="cart-overlay" 
        className={`fixed inset-0 bg-[#1a1814]/35 z-[199] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={closeCart}
      ></div>
      
      <aside 
        id="cart-sidebar" 
        className={`fixed top-0 right-0 bottom-0 w-full md:w-[380px] bg-paper z-[200] border-l border-stone flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(.4,0,.2,1)] ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="py-6 px-7 border-b border-stone flex justify-between items-center">
          <span className="text-[.75rem] tracking-[.15em] uppercase font-medium">
            Your Bag (<span id="cart-count-inner">{cartCount}</span>)
          </span>
          <button 
            onClick={closeCart} 
            className="bg-transparent border-none cursor-pointer text-[.7rem] tracking-[.1em] uppercase text-mid"
          >
            Close
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-5 px-7" id="cart-items">
          {!cart.length ? (
            <p id="cart-empty-msg" className="text-[.75rem] text-stone text-center mt-12 tracking-[.08em]">
              Your bag is empty.
            </p>
          ) : (
            cart.map(item => (
              <div className="flex gap-4 items-start py-4 border-b border-[#eae7e1] animate-fadeUp" key={`${item.product.id}-${item.size}`}>
                <img 
                  src={item.product.img} 
                  alt={item.product.name} 
                  className="w-16 h-20 object-cover shrink-0"
                  onError={(e) => { e.currentTarget.style.background = '#e0dcd6'; }} 
                />
                <div className="flex-1">
                  <div className="text-[.8rem] font-medium mb-1">{item.product.name}</div>
                  <div className="text-[.7rem] text-mid">
                    Size {item.size} · Qty {item.qty} · ${(item.product.price * item.qty).toFixed(2)}
                  </div>
                  <button 
                    className="bg-transparent border-none cursor-none text-[.65rem] text-stone tracking-[.1em] uppercase mt-1.5 transition-colors duration-200 hover:text-accent" 
                    onClick={() => removeFromCart(item.product.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="border-t border-stone py-6 px-7">
          <div className="flex justify-between items-center mb-5">
            <span className="text-[.7rem] tracking-[.12em] uppercase text-mid">
              Total
            </span>
            <span id="cart-total" className="text-base font-medium">
              ${cartTotal}
            </span>
          </div>
          <button className="flex items-center gap-[.6rem] text-[.75rem] tracking-[.12em] uppercase font-medium py-[.85rem] px-8 bg-ink text-paper border-none cursor-none transition-colors duration-200 hover:bg-accent w-full justify-center" onClick={checkout}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
