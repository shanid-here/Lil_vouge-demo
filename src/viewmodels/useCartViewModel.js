import { useState, useMemo } from 'react';

export function useCartViewModel(showToast) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = useMemo(() => {
    return cart.reduce((s, i) => s + i.product.price * i.qty, 0).toFixed(2);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((s, i) => s + i.qty, 0);
  }, [cart]);

  const addToCart = (product, size) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.product.id === product.id && i.size === size);
      if (existingItem) {
        return prevCart.map(i =>
          i.product.id === product.id && i.size === size
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prevCart, { product, size, qty: 1 }];
    });
    showToast(`${product.name} added`);
  };

  const removeFromCart = (id, size) => {
    setCart(prevCart => prevCart.filter(i => !(i.product.id === id && i.size === size)));
  };

  const checkout = () => {
    if (!cart.length) {
      showToast('Bag is empty');
      return;
    }
    showToast('Order placed — thank you!');
    setCart([]);
    setIsCartOpen(false);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return {
    cart,
    isCartOpen,
    cartTotal,
    cartCount,
    addToCart,
    removeFromCart,
    checkout,
    openCart,
    closeCart
  };
}
