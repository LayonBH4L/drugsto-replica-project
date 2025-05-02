
import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: 'Pain Relief Tablets',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Pain Relief'
  },
  {
    id: 2,
    name: 'Vitamin C Supplements',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Vitamins'
  },
  {
    id: 3,
    name: 'Digital Thermometer',
    price: 15.95,
    image: 'https://images.unsplash.com/photo-1583947582886-f40ec95dd752?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Medical Devices'
  },
  {
    id: 4,
    name: 'First Aid Kit',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'First Aid'
  },
  {
    id: 5,
    name: 'Hand Sanitizer Gel',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Personal Care'
  },
  {
    id: 6,
    name: 'Allergy Relief Medication',
    price: 14.95,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Allergy'
  },
  {
    id: 7,
    name: 'Organic Multivitamin',
    price: 19.95,
    image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Vitamins'
  },
  {
    id: 8,
    name: 'Digital Blood Pressure Monitor',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1581595219265-75562836ccad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Medical Devices'
  },
  {
    id: 9,
    name: 'Antiseptic Wound Cleaner',
    price: 8.49,
    image: 'https://images.unsplash.com/photo-1583947581924-860bfederation927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'First Aid'
  },
  {
    id: 10,
    name: 'Premium Face Masks (Pack of 10)',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1605845753388-2b4dc55079bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Personal Care'
  },
  {
    id: 11,
    name: 'Collagen Supplements',
    price: 29.95,
    image: 'https://images.unsplash.com/photo-1576671413987-d11931580d42?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Vitamins'
  },
  {
    id: 12,
    name: 'Herbal Sleep Aid',
    price: 17.95,
    image: 'https://images.unsplash.com/photo-1567330389448-3efa48695426?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Herbal'
  }
];

// Get unique categories
const allCategories = [...new Set(mockProducts.map(product => product.category))];

const Shop = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortOption, setSortOption] = useState('name-asc');
  
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [priceExpanded, setPriceExpanded] = useState(true);

  const toggleCategory = (category: string) => {
    setCategoryFilters(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Filter products based on selected filters
  const filteredProducts = mockProducts.filter(product => {
    // Filter by category
    const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(product.category);
    
    // Filter by price range
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return categoryMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'name-asc':
      default:
        return a.name.localeCompare(b.name);
    }
  });
  
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-drugsto-dark">Shop</h1>

      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <Button 
          onClick={toggleMobileFilters} 
          className="w-full bg-drugsto-light-gray text-drugsto-dark hover:bg-gray-200"
        >
          <Filter size={18} className="mr-2" />
          {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar filters - hidden on mobile unless toggled */}
        <aside className={`md:w-1/4 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white p-4 rounded shadow-sm">
            {/* Categories */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3"
                onClick={() => setCategoryExpanded(!categoryExpanded)}
              >
                <h3 className="font-medium text-lg">Categories</h3>
                {categoryExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              
              {categoryExpanded && (
                <div className="space-y-2">
                  {allCategories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={categoryFilters.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label 
                        htmlFor={`category-${category}`}
                        className="ml-2 cursor-pointer text-drugsto-gray"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Separator className="my-4" />

            {/* Price range */}
            <div className="mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3"
                onClick={() => setPriceExpanded(!priceExpanded)}
              >
                <h3 className="font-medium text-lg">Price Range</h3>
                {priceExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              
              {priceExpanded && (
                <div>
                  <div className="mb-4">
                    <Slider 
                      defaultValue={[0, 50]}
                      min={0}
                      max={50}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-drugsto-gray">
                      ${priceRange[0].toFixed(2)}
                    </span>
                    <span className="text-sm text-drugsto-gray">
                      ${priceRange[1].toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <Separator className="my-4" />

            <Button 
              className="w-full bg-drugsto-blue hover:bg-drugsto-accent"
              onClick={() => {
                setCategoryFilters([]);
                setPriceRange([0, 50]);
              }}
            >
              Reset Filters
            </Button>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {/* Sort options */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-drugsto-gray">
              Showing {sortedProducts.length} products
            </p>
            <select
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-drugsto-blue text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>

          {/* Show message when no products match filters */}
          {sortedProducts.length === 0 && (
            <div className="bg-white rounded shadow-sm p-8 text-center">
              <p className="text-drugsto-gray">No products match your filters.</p>
              <Button 
                className="mt-4 bg-drugsto-blue hover:bg-drugsto-accent"
                onClick={() => {
                  setCategoryFilters([]);
                  setPriceRange([0, 50]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
