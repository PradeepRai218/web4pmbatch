"use client"
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";


export default function OnlineStore() {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState([]);
  
  const products = [
    { id: 1, name: 'Helbrok Stool', category: 'Mangol End Tables', price: 5990, originalPrice: null, image: 'table', tag: 'Tables', imgsrc : '/images/newArrivalimages (1).jpg' },
    { id: 2, name: 'Carolton Study Tables', category: 'Nest Of Tables', price: 5240, originalPrice: null, image: 'study', tag: 'Tables', imgsrc : '/images/newArrivalimages (2).jpg' },
    { id: 3, name: 'Geoffrey Coffee Table Set', category: 'Coffee Table Sets', price: 5299, originalPrice: null, image: 'coffee', tag: 'Tables', imgsrc : '/images/newArrivalimages (3).jpg' },
    { id: 4, name: 'Coffee Tables', category: 'Coffee Tables', price: 5300, originalPrice: 7800, image: 'orange', tag: 'Tables', imgsrc : '/images/newArrivalimages (4).jpg' },
    { id: 5, name: 'Hardwell Trunks Prayer Cell', category: 'Prayer Units', price: 9450, originalPrice: null, image: 'trunk', tag: 'Storage', imgsrc : '/images/newArrivalimages (5).jpg' },
    { id: 6, name: 'Durbin Shoe Rack', category: 'Display Unit', price: 5800, originalPrice: 7800, image: 'shoe', tag: 'Storage', imgsrc : '/images/newArrivalimages (6).jpg' },
    { id: 7, name: 'Drest Shoe Racks', category: 'Shoe Racks', price: 5700, originalPrice: null, image: 'rack', tag: 'Storage', imgsrc : '/images/newArrivalimages (7).jpg' },
    { id: 8, name: 'Isaac Chest Of Drawer', category: 'Chest Of Drawers', price: 25000, originalPrice: 32000, image: 'drawer', tag: 'Storage', imgsrc : '/images/newArrivalimages (1).jpg' },
    { id: 9, name: 'Lushier Cabinet', category: 'Cabinets and Sideboards', price: 21000, originalPrice: 28000, image: 'cabinet', tag: 'Storage', imgsrc : '/images/newArrivalimages (3).jpg' },
    { id: 10, name: 'Edna Bookshelfs', category: 'Bookshelves', price: 30000, originalPrice: 35000, image: 'bookshelf', tag: 'Storage', imgsrc : '/images/newArrivalimages (4).jpg' },
    { id: 11, name: 'Leo TV Lemire', category: 'TV Units', price: 21000, originalPrice: 25000, image: 'tv', tag: 'Living', imgsrc : '/images/newArrivalimages (2).jpg' },
    { id: 12, name: 'Wilmar Mirror', category: 'Wooden Mirrors', price: 3600, originalPrice: 4500, image: 'mirror', tag: 'Mirror', imgsrc : '/images/newArrivalimages (1).jpg' }
  ];

  const categories = [
    { name: 'Tables', children: ['All Of Tables', 'Coffee Table Sets', 'End Of Tables', 'Nest Of Tables'] },
    { name: 'Mirror', children: ['Wooden Mirrors'] },
    { name: 'Living Storage Collections', children: ['Prayer Units', 'Display Unit'] }
  ];

  const materials = ['Shesn Wood', 'Teak Wood', 'Saten Wood', 'Sat Wood', 'Mangoto Wood', 'Mahogany Wood', 'Mulhogary Wood', 'Snachford'];
  const colors = ['Burnt Orange', 'Brown', 'Cardon Black', 'Fudad Oak', 'Fudad Gradient Peach Grey', 'Fudad Ochres', 'Weathered Walnut', 'Provincial Teak', 'Mango Green', 'Maple White'];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const getProductColor = (id) => {
    const colors = ['bg-amber-100', 'bg-orange-100', 'bg-stone-100', 'bg-amber-50'];
    return colors[id % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-center mb-2">Online Store</h1>
          <div className="flex justify-center gap-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Online Store</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64">
            {/* Categories */}
            <div className="bg-white p-4 rounded mb-4">
              <h3 className="font-semibold mb-4 text-lg">Categories</h3>
              {categories.map((cat, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span className="font-medium">{cat.name}</span>
                  </div>
                  {cat.children.map((child, i) => (
                    <div key={i} className="flex items-center ml-6 mb-1">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">{child}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Material */}
            <div className="bg-white p-4 rounded mb-4">
              <h3 className="font-semibold mb-4 text-lg">Material</h3>
              {materials.map((mat, idx) => (
                <div key={idx} className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">{mat}</span>
                </div>
              ))}
            </div>

            {/* Color */}
            <div className="bg-white p-4 rounded mb-4">
              <h3 className="font-semibold mb-4 text-lg">Color</h3>
              {colors.map((color, idx) => (
                <div key={idx} className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">{color}</span>
                </div>
              ))}
            </div>

            {/* Price Filter */}
            <div className="bg-white p-4 rounded">
              <h3 className="font-semibold mb-4 text-lg">Filter By Price</h3>
              <div className="mb-4">
                <input 
                  type="range" 
                  min="0" 
                  max="200000" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Rs. {priceRange[0]} - Rs. {priceRange[1].toLocaleString()}
              </div>
              <button className="bg-black text-white px-4 py-2 text-sm rounded w-full">
                Filter
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort By:</span>
                <select 
                  className="border rounded px-3 py-1 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                Showing 1-12 of 99 Results
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className={`${getProductColor(product.id)} h-48 flex items-center justify-center relative`}>
                    <div className="absolute top-2 right-2 bg-white p-1 rounded">
                      <span className="text-xs text-gray-600">{product.tag}</span>
                    </div>
                    <div className="text-6xl">
                      <img src={product.imgsrc} alt="" />    
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="font-semibold">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="p-2 border rounded hover:bg-gray-50"
                      >
                        <FaHeart
                          size={18} 
                          className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                        />
                      </button>
                      <button className="flex-1 bg-black text-white py-2 rounded text-sm hover:bg-gray-800">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="px-3 py-1 border rounded hover:bg-gray-50">&lt;&lt; Previous</button>
              <button className="px-3 py-1 bg-orange-500 text-white rounded">1</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-50">Next &gt;&gt;</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
