import { useState } from 'react';

export function useModalViewModel() {
  const [modalProduct, setModalProduct] = useState(null);
  const [modalSize, setModalSize] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setModalProduct(product);
    setModalSize(product.sizes[0]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalProduct(null);
      setModalSize(null);
    }, 300); // Wait for transition
  };

  const selectSize = (size) => {
    setModalSize(size);
  };

  return {
    modalProduct,
    modalSize,
    isModalOpen,
    openModal,
    closeModal,
    selectSize
  };
}
