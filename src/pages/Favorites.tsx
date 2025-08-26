import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Heart, Search, Star, ShoppingCart, Trash2, Share2 } from 'lucide-react';

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const favoriteProducts = [
    {
      id: 1,
      name: 'Помидоры черри органические',
      price: 299,
      oldPrice: 349,
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      inStock: true,
      organic: true,
      addedDate: '2024-12-10',
      discount: 14
    },
    {
      id: 2,
      name: 'Авокадо',
      price: 149,
      category: 'fruits',
      image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      inStock: true,
      organic: false,
      addedDate: '2024-12-08',
      discount: 0
    },
    {
      id: 3,
      name: 'Салат айсберг',
      price: 119,
      category: 'greens',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      inStock: false,
      organic: false,
      addedDate: '2024-12-05',
      discount: 0
    },
    {
      id: 4,
      name: 'Яблоки Гала органические',
      price: 179,
      oldPrice: 199,
      category: 'fruits',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      inStock: true,
      organic: true,
      addedDate: '2024-12-03',
      discount: 10
    },
    {
      id: 5,
      name: 'Морковь молодая',
      price: 89,
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      inStock: true,
      organic: true,
      addedDate: '2024-12-01',
      discount: 0
    },
    {
      id: 6,
      name: 'Петрушка свежая',
      price: 59,
      category: 'greens',
      image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      inStock: true,
      organic: true,
      addedDate: '2024-11-28',
      discount: 0
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'vegetables', label: 'Овощи' },
    { value: 'fruits', label: 'Фрукты' },
    { value: 'greens', label: 'Зелень' }
  ];

  const sortOptions = [
    { value: 'date', label: 'По дате добавления' },
    { value: 'name', label: 'По названию' },
    { value: 'price-asc', label: 'Цена: по возрастанию' },
    { value: 'price-desc', label: 'Цена: по убыванию' },
    { value: 'rating', label: 'По рейтингу' }
  ];

  const filteredProducts = favoriteProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'date':
        default:
          return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
      }
    });

  const removeFromFavorites = (productId: number) => {
    // Здесь будет логика удаления из избранного
    console.log('Remove from favorites:', productId);
  };

  const addToCart = (productId: number) => {
    // Здесь будет логика добавления в корзину
    console.log('Add to cart:', productId);
  };

  const shareProduct = (productId: number) => {
    // Здесь будет логика поделиться товаром
    console.log('Share product:', productId);
  };

  const addAllToCart = () => {
    // Здесь будет логика добавления всех товаров в корзину
    console.log('Add all to cart');
  };

  const clearFavorites = () => {
    // Здесь будет логика очистки избранного
    console.log('Clear favorites');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/profile" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Вернуться в профиль
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              Избранные товары
            </h1>
            <p className="text-gray-600">
              {favoriteProducts.length} товаров в избранном
            </p>
          </div>
          {favoriteProducts.length > 0 && (
            <div className="flex space-x-2">
              <Button onClick={addAllToCart} className="bg-green-600 hover:bg-green-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Все в корзину
              </Button>
              <Button variant="outline" onClick={clearFavorites}>
                <Trash2 className="h-4 w-4 mr-2" />
                Очистить
              </Button>
            </div>
          )}
        </div>

        {favoriteProducts.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-600 mb-4">Избранное пусто</h2>
              <p className="text-gray-500 mb-8">
                Добавляйте товары в избранное, чтобы не потерять их
              </p>
              <Link to="/catalog">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Перейти в каталог
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Поиск в избранном..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
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
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.organic && (
                      <Badge className="absolute top-2 left-2 bg-green-500">
                        Органик
                      </Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        -{product.discount}%
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Badge variant="destructive">Нет в наличии</Badge>
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => removeFromFavorites(product.id)}
                    >
                      <Heart className="h-4 w-4 text-red-500 fill-current" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">{product.oldPrice}₽</span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        disabled={!product.inStock}
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => shareProduct(product.id)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Добавлено: {new Date(product.addedDate).toLocaleDateString('ru-RU')}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Товары не найдены</h3>
                  <p className="text-gray-500">
                    Попробуйте изменить параметры поиска или фильтры
                  </p>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;