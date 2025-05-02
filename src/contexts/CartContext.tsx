
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

// Define o tipo para os itens do carrinho
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

// Define o tipo para o contexto do carrinho
interface CartContextType {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// Cria o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Props do provedor
interface CartProviderProps {
  children: ReactNode;
}

// Componente provedor
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Adiciona um item ao carrinho
  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      // Verifica se o produto já existe no carrinho
      const existingItemIndex = currentItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex > -1) {
        // Se já existe, incrementa a quantidade
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += 1;
        
        toast.success(`${product.name} quantity updated in cart`);
        return updatedItems;
      }

      // Se não existe, adiciona com quantidade 1
      toast.success(`${product.name} added to cart`);
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  // Remove um item do carrinho
  const removeItem = (productId: number) => {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find(item => item.id === productId);
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from cart`);
      }
      return currentItems.filter((item) => item.id !== productId);
    });
  };

  // Atualiza a quantidade de um item
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Limpa o carrinho
  const clearCart = () => {
    setItems([]);
    toast.info('Cart cleared');
  };

  // Calcula o total de itens
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calcula o preço total
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
