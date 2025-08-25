import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, Star, ShoppingCart, Leaf, ArrowLeft } from 'lucide-react';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    { id: 1, name: 'Помидоры черри', price: 299, category: 'vegetables', image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8, organic: true, inStock: true },
    { id: 2, name: 'Авокадо', price: 149, category: 'fruits', image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9, organic: false, inStock: true },
    { id: 3, name: 'Морковь молодая', price: 89, category: 'vegetables', image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7, organic: true, inStock: true },
    { id: 4, name: 'Салат айсберг', price: 119, category: 'greens', image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6, organic: false, inStock: false },
    { id: 5, name: 'Яблоки Гала', price: 179, category: 'fruits', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.5, organic: true, inStock: true },
    { id: 6, name: 'Огурцы свежие', price: 129, category: 'vegetables', image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.4, organic: false, inStock: true },
    { id: 7, name: 'Бананы', price: 99, category: 'fruits', image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.3, organic: false, inStock: true },
    { id: 8, name: 'Петрушка', price: 59, category: 'greens', image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7, organic: true, inStock: true },
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'vegetables', label: 'Овощи' },
    { value: 'fruits', label: 'Фрукты' },
    { value: 'greens', label: 'Зелень' },
    { value: 'berries', label: 'Ягоды' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
                <ArrowLeft className="h-5 w-5 mr-2" />
                На главную
              </Link>
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <h1 className="text-xl font-bold text-gray-800">Каталог товаров</h1>
              </div>
            </div>
            <Link to="/cart">
              <Button className="bg-green-600 hover:bg-green-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-6 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Фильтры
              </h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Поиск</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Найти товар..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Категория</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Цена: {priceRange[0]}₽ - {priceRange[1]}₽
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="mt-2"
                />
              </div>

              {/* Additional Filters */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="organic" />
                  <label htmlFor="organic" className="text-sm">Органические</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="instock" />
                  <label htmlFor="instock" className="text-sm">В наличии</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount" />
                  <label htmlFor="discount" className="text-sm">Со скидкой</label>
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and Results Info */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">
                Найдено {filteredProducts.length} товаров
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="name">По названию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all group-hover:scale-105">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.organic && (
                        <Badge className="absolute top-2 left-2 bg-green-500">
                          <Leaf className="h-3 w-3 mr-1" />
                          Органик
                        </Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <Badge variant="destructive">Нет в наличии</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Предыдущая</Button>
                <Button className="bg-green-600">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Следующая</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;