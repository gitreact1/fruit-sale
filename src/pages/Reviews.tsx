import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Star, Search, ThumbsUp, MessageCircle, Filter, User } from 'lucide-react';

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const reviews = [
    {
      id: 1,
      author: 'Анна Петрова',
      rating: 5,
      date: '15 декабря 2024',
      product: 'Помидоры черри органические',
      title: 'Отличное качество!',
      text: 'Заказываю помидоры черри уже не первый раз. Всегда свежие, сладкие и сочные. Доставка быстрая, упаковка качественная. Очень довольна сервисом!',
      helpful: 12,
      verified: true,
      images: ['https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=200']
    },
    {
      id: 2,
      author: 'Михаил Сидоров',
      rating: 4,
      date: '12 декабря 2024',
      product: 'Авокадо',
      title: 'Хорошие авокадо',
      text: 'Авокадо пришли в хорошем состоянии, спелые. Один был немного мягковат, но в целом качество устраивает. Цена адекватная.',
      helpful: 8,
      verified: true,
      images: []
    },
    {
      id: 3,
      author: 'Елена Козлова',
      rating: 5,
      date: '10 декабря 2024',
      product: 'Салат айсберг',
      title: 'Свежий и хрустящий',
      text: 'Салат очень свежий, листья хрустящие, без повреждений. Идеально подходит для салатов. Буду заказывать еще!',
      helpful: 15,
      verified: true,
      images: []
    },
    {
      id: 4,
      author: 'Дмитрий Волков',
      rating: 3,
      date: '8 декабря 2024',
      product: 'Морковь молодая',
      title: 'Средне',
      text: 'Морковь была не очень сладкая, немного жестковата. Возможно, не сезон. В целом нормально, но ожидал лучшего качества.',
      helpful: 5,
      verified: false,
      images: []
    },
    {
      id: 5,
      author: 'Ольга Иванова',
      rating: 5,
      date: '5 декабря 2024',
      product: 'Яблоки Гала',
      title: 'Вкусные яблоки',
      text: 'Яблоки очень вкусные, сладкие, сочные. Размер крупный, без повреждений. Детям очень понравились. Рекомендую!',
      helpful: 20,
      verified: true,
      images: ['https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200']
    },
    {
      id: 6,
      author: 'Александр Петров',
      rating: 4,
      date: '3 декабря 2024',
      product: 'Огурцы свежие',
      title: 'Свежие огурцы',
      text: 'Огурцы свежие, хрустящие. Размер средний, что подходит для салатов. Один огурец был немного вялый, но остальные отличные.',
      helpful: 7,
      verified: true,
      images: []
    },
    {
      id: 7,
      author: 'Мария Смирнова',
      rating: 5,
      date: '1 декабря 2024',
      product: 'Петрушка свежая',
      title: 'Ароматная зелень',
      text: 'Петрушка очень свежая и ароматная. Листья зеленые, без желтизны. Отлично подходит для приготовления блюд и украшения.',
      helpful: 9,
      verified: true,
      images: []
    },
    {
      id: 8,
      author: 'Сергей Николаев',
      rating: 2,
      date: '28 ноября 2024',
      product: 'Бананы',
      title: 'Переспелые бананы',
      text: 'Бананы пришли переспелые, с темными пятнами. Для еды подходят, но внешний вид не очень. Надеюсь, в следующий раз будут лучше.',
      helpful: 3,
      verified: true,
      images: []
    }
  ];

  const reviewStats = {
    total: reviews.length,
    average: 4.1,
    distribution: {
      5: 4,
      4: 2,
      3: 1,
      2: 1,
      1: 0
    }
  };

  const filteredReviews = reviews
    .filter(review => {
      const matchesSearch = review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           review.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = ratingFilter === 'all' || review.rating.toString() === ratingFilter;
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'rating-high':
          return b.rating - a.rating;
        case 'rating-low':
          return a.rating - b.rating;
        case 'helpful':
          return b.helpful - a.helpful;
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  const renderStars = (rating: number, size: string = 'h-4 w-4') => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            На главную
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Отзывы покупателей</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Читайте честные отзывы наших клиентов о качестве продуктов и сервисе
          </p>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Review Stats */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Общая оценка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">{reviewStats.average}</div>
                  {renderStars(Math.round(reviewStats.average), 'h-6 w-6')}
                  <div className="text-sm text-gray-600 mt-2">
                    На основе {reviewStats.total} отзывов
                  </div>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center space-x-2">
                      <span className="text-sm w-2">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(reviewStats.distribution[rating] / reviewStats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-6">{reviewStats.distribution[rating]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <Select value={ratingFilter} onValueChange={setRatingFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все оценки</SelectItem>
                      <SelectItem value="5">5 звезд</SelectItem>
                      <SelectItem value="4">4 звезды</SelectItem>
                      <SelectItem value="3">3 звезды</SelectItem>
                      <SelectItem value="2">2 звезды</SelectItem>
                      <SelectItem value="1">1 звезда</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сортировка</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Сначала новые</SelectItem>
                      <SelectItem value="oldest">Сначала старые</SelectItem>
                      <SelectItem value="rating-high">Высокая оценка</SelectItem>
                      <SelectItem value="rating-low">Низкая оценка</SelectItem>
                      <SelectItem value="helpful">По полезности</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Поиск по отзывам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {filteredReviews.map(review => (
                <Card key={review.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{review.author}</span>
                            {review.verified && (
                              <Badge className="bg-green-500 text-xs">Проверенная покупка</Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{review.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    <div className="mb-3">
                      <Link to={`/product/${review.id}`} className="text-sm text-green-600 hover:underline">
                        {review.product}
                      </Link>
                    </div>

                    <h3 className="font-semibold text-lg mb-3">{review.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>

                    {review.images.length > 0 && (
                      <div className="flex space-x-2 mb-4">
                        {review.images.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt="Фото от покупателя"
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Полезно ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        Ответить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Отзывы не найдены</h3>
                  <p className="text-gray-500 mb-6">
                    Попробуйте изменить параметры поиска или фильтры
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchQuery('');
                      setRatingFilter('all');
                    }}
                    variant="outline"
                  >
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Pagination */}
            {filteredReviews.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>Предыдущая</Button>
                  <Button className="bg-green-600">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Следующая</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Write Review CTA */}
        <section className="mt-16">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <User className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Поделитесь своим мнением</h2>
              <p className="text-gray-600 mb-6">
                Ваш отзыв поможет другим покупателям сделать правильный выбор
              </p>
              <Link to="/profile">
                <Button className="bg-green-600 hover:bg-green-700">
                  Написать отзыв
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Reviews;