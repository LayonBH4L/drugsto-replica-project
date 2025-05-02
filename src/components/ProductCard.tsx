
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({ id, name, price, image, category });
  };

  return (
    <div className="bg-white rounded shadow hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-drugsto-gray uppercase mb-1">{category}</p>
        <h3 className="font-medium text-drugsto-dark mb-2 line-clamp-2 h-12">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-drugsto-dark">$ {price.toFixed(2)}</span>
          <Button 
            size="sm" 
            className="bg-drugsto-blue hover:bg-drugsto-accent transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
