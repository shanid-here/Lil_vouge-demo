import { useState, useCallback, useEffect } from 'react';
import './index.css';

// ViewModels
import { useShopViewModel } from './viewmodels/useShopViewModel';
import { useCartViewModel } from './viewmodels/useCartViewModel';
import { useModalViewModel } from './viewmodels/useModalViewModel';

// Components
import CustomCursor from './views/components/CustomCursor';
import NavBar from './views/components/NavBar';
import Hero from './views/components/Hero';
import Features from './views/components/Features';
import ProductList from './views/components/ProductList';
import EditorialBand from './views/components/EditorialBand';
import Footer from './views/components/Footer';
import CartSidebar from './views/components/CartSidebar';
import ProductModal from './views/components/ProductModal';

function App() {
  const [toastMsg, setToastMsg] = useState('');
  const [showToastObj, setShowToastObj] = useState(false);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    setShowToastObj(true);
    setTimeout(() => setShowToastObj(false), 2400);
  }, []);

  // Initialize ViewModels
  const shopVM = useShopViewModel();
  const cartVM = useCartViewModel(showToast);
  const modalVM = useModalViewModel();

  // Reveal Animation Initialization
  useEffect(() => {
    const obs = new IntersectionObserver((es) =>
      es.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in');
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    // Cleanup observer
    return () => obs.disconnect();
  }, [shopVM.activeCategory, shopVM.sortOrder]); // Re-run when products change to catch new .reveal elements

  return (
    <>
      <CustomCursor />
      
      <NavBar cartCount={cartVM.cartCount} openCart={cartVM.openCart} />
      
      <Hero />
      
      <Features />
      
      <ProductList 
        categories={shopVM.categories}
        activeCategory={shopVM.activeCategory}
        setActiveCategory={shopVM.setActiveCategory}
        sortOrder={shopVM.sortOrder}
        setSortOrder={shopVM.setSortOrder}
        filteredProducts={shopVM.filteredProducts}
        openModal={modalVM.openModal}
      />
      
      <EditorialBand />
      
      <Footer />
      
      <CartSidebar 
        cart={cartVM.cart}
        isCartOpen={cartVM.isCartOpen}
        cartTotal={cartVM.cartTotal}
        cartCount={cartVM.cartCount}
        closeCart={cartVM.closeCart}
        removeFromCart={cartVM.removeFromCart}
        checkout={cartVM.checkout}
      />
      
      <ProductModal 
        isModalOpen={modalVM.isModalOpen}
        modalProduct={modalVM.modalProduct}
        modalSize={modalVM.modalSize}
        selectSize={modalVM.selectSize}
        closeModal={modalVM.closeModal}
        addToCart={cartVM.addToCart}
      />
      
      <div id="toast" className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-ink text-paper text-[.7rem] tracking-[.12em] uppercase py-3 px-7 z-[400] transition-all duration-300 ${showToastObj ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'}`}>
        {toastMsg}
      </div>
    </>
  );
}

export default App;
