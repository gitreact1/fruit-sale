import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Clock, Users, Star, Heart, Share2, ShoppingCart, ChefHat, Utensils } from 'lucide-react';

const Recipe = () => {
  const { id } = useParams();
  const [servings, setServings] = useState(2);

  // В реальном приложении данные загружались бы по ID
  const recipe = {
    id: 1,
    title: 'Салат с авокадо и помидорами черри',
    description: 'Легкий и полезный салат с авокадо, помидорами черри и зеленью. Идеально подходит для летнего обеда или ужина.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Салаты',
    difficulty: 'Легко',
    cookTime: 15,
    prepTime: 10,
    totalTime: 25,
    servings: 2,
    rating: 4.8,
    reviews: 24,
    calories: 280,
    author: 'Анна Петрова',
    ingredients: [
      { name: 'Авокадо', amount: 2, unit: 'шт', price: 149 },
      { name: 'Помидоры черри', amount: 200, unit: 'г', price: 299 },
      { name: 'Салат айсберг', amount: 100, unit: 'г', price: 119 },
      { name: 'Огурец', amount: 1, unit: 'шт', price: 65 },
      { name: 'Красный лук', amount: 0.5, unit: 'шт', price: 45 },
      { name: 'Оливковое масло', amount: 3, unit: 'ст.л', price: 0 },
      { name: 'Лимонный сок', amount: 2, unit: 'ст.л', price: 0 },
      { name: 'Соль', amount: 1, unit: 'щепотка', price: 0 },
      { name: 'Черный перец', amount: 1, unit: 'щепотка', price: 0 }
    ],
    instructions: [
      {
        step: 1,
        title: 'Подготовка ингредиентов',
        description: 'Вымойте все овощи. Авокадо разрежьте пополам, удалите косточку и нарежьте кубиками.',
        time: 3
      },
      {
        step: 2,
        title: 'Нарезка овощей',
        description: 'Помидоры черри разрежьте пополам. Огурец нарежьте кружочками. Красный лук нарежьте тонкими полукольцами.',
        time: 5
      },
      {
        step: 3,
        title: 'Подготовка салата',
        description: 'Салат айсберг порвите руками на небольшие кусочки. Выложите в большую миску.',
        time: 2
      },
      {
        step: 4,
        title: 'Приготовление заправки',
        description: 'В небольшой миске смешайте оливковое масло, лимонный сок, соль и перец.',
        time: 2
      },
      {
        step: 5,
        title: 'Сборка салата',
        description: 'Добавьте к салату авокадо, помидоры, огурец и лук. Полейте заправкой и аккуратно перемешайте.',
        time: 3
      }
    ],
    nutrition: {
      calories: 280,
      protein: 6,
      fat: 24,
      carbs: 16,
      fiber: 12,
      sugar: 8
    },
    tips: [
      'Выбирайте спелые, но не переспелые авокадо',
      'Добавляйте лимонный сок сразу к авокадо, чтобы он не потемнел',
      'Салат лучше подавать сразу после приготовления',
      'Можно добавить семечки или орехи для хруста'
    ]
  };

  const relatedRecipes = [
    {
      id: 2,
      title: 'Овощное рагу с баклажанами',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=300',
      cookTime: 45,
      rating: 4.6
    },
    {
      id: 3,
      title: 'Смузи из шпината и яблок',
      image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=300',
      cookTime: 5,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Запеченные овощи с травами',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300',
      cookTime: 35,
      rating: 4.7
    }
  ];

  const calculateIngredientAmount = (amount: number) => {
    return (amount * servings / recipe.servings).toFixed(1).replace('.0', '');
  };

  const totalPrice = recipe.ingredients.reduce((sum, ingredient) => {
    return sum + (ingredient.price * servings / recipe.servings);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/recipes" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Вернуться к рецептам
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Header */}
            <div className="mb-8">
              <div className="mb-4">
                <Badge className="bg-green-600">{recipe.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {recipe.totalTime} мин
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    {recipe.servings} порций
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 mr-2" />
                    {recipe.difficulty}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                    {recipe.rating} ({recipe.reviews})
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    В избранное
                  </Button>
                </div>
              </div>
            </div>

            {/* Recipe Image */}
            <div className="mb-8">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Recipe Tabs */}
            <Tabs defaultValue="instructions" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="instructions">Приготовление</TabsTrigger>
                <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
                <TabsTrigger value="tips">Советы</TabsTrigger>
              </TabsList>
              
              <TabsContent value="instructions" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-5 w-5 mr-2" />
                      Пошаговое приготовление
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {recipe.instructions.map((instruction) => (
                        <div key={instruction.step} className="flex space-x-4">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                            {instruction.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">{instruction.title}</h4>
                            <p className="text-gray-600 mb-2">{instruction.description}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {instruction.time} мин
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="nutrition" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Пищевая ценность на порцию</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Калории:</span>
                          <span className="font-semibold">{recipe.nutrition.calories} ккал</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Белки:</span>
                          <span className="font-semibold">{recipe.nutrition.protein}г</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Жиры:</span>
                          <span className="font-semibold">{recipe.nutrition.fat}г</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Углеводы:</span>
                          <span className="font-semibold">{recipe.nutrition.carbs}г</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Клетчатка:</span>
                          <span className="font-semibold">{recipe.nutrition.fiber}г</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Сахар:</span>
                          <span className="font-semibold">{recipe.nutrition.sugar}г</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tips" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Полезные советы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Author Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {recipe.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{recipe.author}</h3>
                    <p className="text-gray-600">Кулинарный эксперт</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Специалист по здоровому питанию с 8-летним опытом. 
                      Автор более 100 рецептов с овощами и фруктами.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Ingredients */}
            <Card className="mb-6 sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Ингредиенты</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setServings(Math.max(1, servings - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{servings}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setServings(servings + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">порций</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex-1">
                        <span className="font-medium">{ingredient.name}</span>
                        <div className="text-sm text-gray-600">
                          {calculateIngredientAmount(ingredient.amount)} {ingredient.unit}
                        </div>
                      </div>
                      {ingredient.price > 0 && (
                        <div className="text-sm font-semibold text-green-600">
                          {Math.round(ingredient.price * servings / recipe.servings)}₽
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {totalPrice > 0 && (
                  <>
                    <div className="border-t pt-4 mb-4">
                      <div className="flex justify-between items-center font-semibold">
                        <span>Общая стоимость:</span>
                        <span className="text-green-600">{Math.round(totalPrice)}₽</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Добавить все в корзину
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Related Recipes */}
            <Card>
              <CardHeader>
                <CardTitle>Похожие рецепты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedRecipes.map((relatedRecipe) => (
                    <Link key={relatedRecipe.id} to={`/recipe/${relatedRecipe.id}`} className="group">
                      <div className="flex space-x-3">
                        <img 
                          src={relatedRecipe.image} 
                          alt={relatedRecipe.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                            {relatedRecipe.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {relatedRecipe.cookTime} мин
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                              {relatedRecipe.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;