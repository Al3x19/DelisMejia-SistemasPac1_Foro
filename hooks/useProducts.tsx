import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  quantity: number;
  bought: boolean;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);  // Estado que guarda la lista de productos
  const [productName, setProductName] = useState<string>('');  // Estado que guarda el nombre del producto
  const [productQuantity, setProductQuantity] = useState<number>(1);  // Estado que guarda la cantidad del producto

  const addProduct = () => {
    if (!productName) return;  // No agregar producto si el nombre está vacío

    const newProduct: Product = {
      id: products.length + 1,  // ID único basado en la cantidad de productos
      name: productName,
      quantity: productQuantity,
      bought: false,  // Por defecto el producto está marcado como no comprado
    };

    setProducts([...products, newProduct]);  // Agregar el nuevo producto al estado
    setProductName('');  // Limpiar el campo de nombre después de agregar
    setProductQuantity(1);  // Resetear la cantidad a 1
  };

  const toggleProductBought = (productId: number) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, bought: !product.bought } : product  // Cambiar el estado de comprado/no comprado
    );
    setProducts(updatedProducts);  // Actualizar la lista de productos
  };

  return {
    products,
    productName,
    productQuantity,
    setProductName,
    setProductQuantity,
    addProduct,
    toggleProductBought,
  };
};