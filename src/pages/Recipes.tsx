import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Clock, Users, ChefHat, Utensils, Star } from 'lucide-react';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const recipes = [
    {
      id: 1,
      title: 'Салат с авокадо и помидорами черри',
      description: 'Легкий и полезный салат с авокадо, помидорами черри и зеленью',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'salads',
      difficulty: 'easy',
      cookTime: 15,
      servings: 2,
      rating: 4.8,
      ingredients: ['Авокадо', 'Помидоры черри', 'Салат', 'Оливковое масло'],
      featured: true
    },
    {
      id: 2,
      title: 'Овощное рагу с баклажанами',
      description: 'Ароматное рагу с баклажанами, кабачками и помидорами',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'main',
      difficulty: 'medium',
      cookTime: 45,
      servings: 4,
      rating: 4.6,
      ingredients: ['Баклажаны', 'Кабачки', 'Помидоры', 'Лук'],
      featured: false
    },
    {
      id: 3,
      title: 'Смузи из шпината и яблок',
      description: 'Полезный зеленый смузи для завтрака или перекуса',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'drinks',
      difficulty: 'easy',
      cookTime: 5,
      servings: 1,
      rating: 4.9,
      ingredients: ['Шпинат', 'Яблоки', 'Банан', 'Вода'],
      featured: true
    },
    {
      id: 4,
      title: 'Запеченные овощи с травами',
      description: 'Ароматные запеченные овощи с розмарином и тимьяном',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'sides',
      difficulty: 'easy',
      cookTime: 35,
      servings: 4,
      rating: 4.7,
      ingredients: ['Морковь', 'Картофель', 'Брокколи', 'Розмарин'],
      featured: false
    },
    {
      id: 5,
      title: 'Крем-суп из тыквы',
      description: 'Нежный крем-суп из тыквы с имбирем и кокосовым молоком',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'soups',
      difficulty: 'medium',
      cookTime: 40,
      servings: 4,
      rating: 4.5,
      ingredients: ['Тыква', 'Лук', 'Имбирь', 'Кокосовое молоко'],
      featured: true
    },
    {
      id: 6,
      title: 'Овощные котлеты из брокколи',
      description: 'Полезные котлеты из брокколи с овсяными хлопьями',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'main',
      difficulty: 'medium',
      cookTime: 30,
      servings: 3,
      rating: 4.4,
      ingredients: ['Брокколи', 'Овсяные хлопья', 'Яйцо', 'Лук'],
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Все рецепты', count: recipes.length },
    { value: 'salads', label: 'Салаты', count: 1 },
    { value: 'main', label: 'Основные блюда', count: 2 },
    { value: 'soups', label: 'Супы', count: 1 },
    { value: 'sides', label: 'Гарниры', count: 1 },
    { value: 'drinks', label: 'Напитки', count: 1 }
  ];

  const difficulties = [
    { value: 'all', label: 'Любая сложность' },
    { value: 'easy', label: 'Легко' },
    { value: 'medium', label: 'Средне' },
    { value: 'hard', label: 'Сложно' }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const featuredRecipes = recipes.filter(recipe => recipe.featured);

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
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
            <ChefHat className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Рецепты</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Вкусные и полезные рецепты с нашими свежими овощами и фруктами. 
            Готовьте с удовольствием и заботьтесь о своем здоровье!
          </p>
        </section>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Поиск рецептов по названию или ингредиентам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
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

          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <Button
                  key={difficulty.value}
                  variant={selectedDifficulty === difficulty.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty.value)}
                  className={selectedDifficulty === difficulty.value ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {difficulty.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Recipes */}
            {selectedCategory === 'all' && selectedDifficulty === 'all' && !searchQuery && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Рекомендуемые рецепты</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredRecipes.map(recipe => (
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="group">
                      <Card className="overflow-hidden hover:shadow-lg transition-all group-hover:scale-105">
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={recipe.image} 
                            alt={recipe.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <Badge className="absolute top-2 left-2 bg-orange-500">
                            Рекомендуем
                          </Badge>
                          <Badge className={`absolute top-2 right-2 ${getDifficultyColor(recipe.difficulty)}`}>
                            {getDifficultyLabel(recipe.difficulty)}
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                            {recipe.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {recipe.cookTime} мин
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {recipe.servings} порций
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                              {recipe.rating}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* All Recipes */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {selectedCategory === 'all' ? 'Все рецепты' : 
                 categories.find(cat => cat.value === selectedCategory)?.label}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredRecipes.map(recipe => (
                  <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="group">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className={`absolute top-2 right-2 ${getDifficultyColor(recipe.difficulty)}`}>
                          {getDifficultyLabel(recipe.difficulty)}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                          {recipe.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{recipe.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {recipe.cookTime} мин
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {recipe.servings} порций
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                            {recipe.rating}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                          {recipe.ingredients.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{recipe.ingredients.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredRecipes.length === 0 && (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Рецепты не найдены</h3>
                    <p className="text-gray-500 mb-6">
                      Попробуйте изменить параметры поиска или фильтры
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setSelectedDifficulty('all');
                      }}
                      variant="outline"
                    >
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recipe of the Day */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Рецепт дня</CardTitle>
              </CardHeader>
              <CardContent>
                <Link to="/recipe/1" className="group">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Рецепт дня"
                    className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-80 transition-opacity"
                  />
                  <h4 className="font-semibold group-hover:text-green-600 transition-colors">
                    Салат с авокадо и помидорами черри
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Clock className="h-4 w-4 mr-1" />
                    15 мин
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* Popular Ingredients */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Популярные ингредиенты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Авокадо', 'Помидоры', 'Салат', 'Морковь', 'Брокколи', 'Тыква', 'Шпинат', 'Лук'].map((ingredient, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-green-50">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cooking Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Советы по готовке</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <Utensils className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Всегда мойте овощи перед приготовлением</span>
                  </div>
                  <div className="flex items-start">
                    <Utensils className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Не переваривайте овощи, чтобы сохранить витамины</span>
                  </div>
                  <div className="flex items-start">
                    <Utensils className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Добавляйте соль в конце приготовления</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;