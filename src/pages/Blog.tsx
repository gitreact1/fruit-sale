import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Calendar, User, Eye, BookOpen } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: '10 причин есть больше овощей каждый день',
      excerpt: 'Узнайте, как овощи могут улучшить ваше здоровье и самочувствие. Научные факты и практические советы.',
      content: 'Овощи являются основой здорового питания...',
      author: 'Анна Петрова',
      date: '15 декабря 2024',
      category: 'Здоровье',
      readTime: '5 мин',
      views: 1250,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Сезонные овощи зимой: что выбрать?',
      excerpt: 'Гид по зимним овощам: какие выбрать, как хранить и готовить. Максимум пользы в холодное время года.',
      content: 'Зимой особенно важно поддерживать иммунитет...',
      author: 'Михаил Сидоров',
      date: '12 декабря 2024',
      category: 'Сезонность',
      readTime: '7 мин',
      views: 890,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'Органические продукты: мифы и реальность',
      excerpt: 'Разбираемся, действительно ли органические продукты полезнее обычных и стоят ли они своих денег.',
      content: 'Органическое земледелие становится все популярнее...',
      author: 'Елена Козлова',
      date: '10 декабря 2024',
      category: 'Органика',
      readTime: '6 мин',
      views: 2100,
      image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 4,
      title: 'Как правильно хранить овощи и фрукты',
      excerpt: 'Практические советы по хранению продуктов, чтобы они дольше оставались свежими и полезными.',
      content: 'Правильное хранение продуктов помогает сохранить...',
      author: 'Дмитрий Волков',
      date: '8 декабря 2024',
      category: 'Советы',
      readTime: '4 мин',
      views: 1560,
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Детокс-смузи: рецепты для очищения организма',
      excerpt: 'Полезные рецепты смузи из овощей и фруктов для детоксикации и поддержания здоровья.',
      content: 'Смузи - отличный способ получить максимум витаминов...',
      author: 'Анна Петрова',
      date: '5 декабря 2024',
      category: 'Рецепты',
      readTime: '8 мин',
      views: 3200,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Витамины в овощах: полный гид',
      excerpt: 'Какие витамины содержатся в разных овощах и как составить сбалансированный рацион.',
      content: 'Овощи - природный источник витаминов...',
      author: 'Елена Козлова',
      date: '3 декабря 2024',
      category: 'Питание',
      readTime: '10 мин',
      views: 1800,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Все статьи', count: blogPosts.length },
    { value: 'Здоровье', label: 'Здоровье', count: 1 },
    { value: 'Сезонность', label: 'Сезонность', count: 1 },
    { value: 'Органика', label: 'Органика', count: 1 },
    { value: 'Советы', label: 'Советы', count: 1 },
    { value: 'Рецепты', label: 'Рецепты', count: 1 },
    { value: 'Питание', label: 'Питание', count: 1 }
  ];

  const popularPosts = blogPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
            <BookOpen className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Блог о здоровом питании</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полезные статьи о правильном питании, рецепты, советы по выбору 
            и хранению овощей и фруктов от наших экспертов.
          </p>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {selectedCategory === 'all' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Рекомендуемые статьи</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="group">
                      <Card className="overflow-hidden hover:shadow-lg transition-all group-hover:scale-105">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-orange-500">Рекомендуем</Badge>
                            <Badge variant="secondary">{post.category}</Badge>
                          </div>
                          <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {post.views}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {selectedCategory === 'all' ? 'Все статьи' : `Статьи: ${selectedCategory}`}
              </h2>
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary">{post.category}</Badge>
                              <span className="text-sm text-gray-500">{post.readTime} чтения</span>
                            </div>
                            <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                              {post.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  {post.author}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {post.date}
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {post.views}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Posts */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Популярные статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="group">
                      <div className="flex space-x-3">
                        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Подписка на новости</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте новые статьи о здоровом питании на email
                </p>
                <div className="space-y-2">
                  <Input placeholder="Ваш email" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;