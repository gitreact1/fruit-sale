import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, Leaf, Truck, Shield } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: 'Помидоры черри органические',
    price: 299,
    oldPrice: 349,
    rating: 4.8,
    reviewsCount: 124,
    description: 'Сочные и сладкие помидоры черри, выращенные без использования химических удобрений. Идеально подходят для салатов, закусок и украшения блюд.',
    images: [
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    organic: true,
    inStock: true,
    weight: '500г',
    origin: 'Краснодарский край',
    shelfLife: '7 дней',
    nutrition: {
      calories: 18,
      protein: 0.9,
      fat: 0.2,
      carbs: 3.9,
      fiber: 1.2,
      vitamin_c: 13.7
    }
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна К.',
      rating: 5,
      date: '15 декабря 2024',
      text: 'Отличные помидоры! Очень сладкие и сочные. Заказываю уже не первый раз.',
      helpful: 12
    },
    {
      id: 2,
      author: 'Михаил П.',
      rating: 4,
      date: '10 декабря 2024',
      text: 'Хорошее качество, быстрая доставка. Рекомендую!',
      helpful: 8
    },
    {
      id: 3,
      author: 'Елена В.',
      rating: 5,
      date: '5 декабря 2024',
      text: 'Идеальны для салатов. Очень свежие, долго хранятся.',
      helpful: 15
    }
  ];

  const relatedProducts = [
    { id: 2, name: 'Огурцы свежие', price: 129, image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 3, name: 'Салат айсберг', price: 119, image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 4, name: 'Морковь молодая', price: 89, image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/catalog" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Вернуться к каталогу
            </Link>
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
        {/* Product Main Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              {product.organic && (
                <Badge className="bg-green-500 mb-2">
                  <Leaf className="h-3 w-3 mr-1" />
                  Органический продукт
                </Badge>
              )}
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviewsCount} отзывов)</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-green-600">{product.price}₽</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">{product.oldPrice}₽</span>
                )}
                <Badge variant="destructive">-14%</Badge>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm text-gray-500">Вес:</span>
                <div className="font-semibold">{product.weight}</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Происхождение:</span>
                <div className="font-semibold">{product.origin}</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Срок хранения:</span>
                <div className="font-semibold">{product.shelfLife}</div>
              </div>
              <div>
                <span className="text-sm text-gray-500">Наличие:</span>
                <div className="font-semibold text-green-600">В наличии</div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-3">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Добавить в корзину - {product.price * quantity}₽
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <Button variant="outline" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                В избранное
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <Truck className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-semibold">Доставка сегодня</div>
                  <div className="text-sm text-gray-600">При заказе до 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({product.reviewsCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
                <p className="text-gray-600 mb-4">
                  Наши органические помидоры черри выращиваются в экологически чистых условиях 
                  без использования химических удобрений и пестицидов. Они отличаются насыщенным 
                  вкусом, сочностью и высоким содержанием полезных веществ.
                </p>
                <p className="text-gray-600 mb-4">
                  Помидоры черри идеально подходят для приготовления салатов, закусок, 
                  украшения блюд и употребления в свежем виде. Они богаты витаминами C, K, 
                  фолиевой кислотой и антиоксидантами.
                </p>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Сертифицированный органический продукт</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Пищевая ценность на 100г</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Калории:</span>
                      <span className="font-semibold">{product.nutrition.calories} ккал</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Белки:</span>
                      <span className="font-semibold">{product.nutrition.protein}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Жиры:</span>
                      <span className="font-semibold">{product.nutrition.fat}г</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Углеводы:</span>
                      <span className="font-semibold">{product.nutrition.carbs}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Клетчатка:</span>
                      <span className="font-semibold">{product.nutrition.fiber}г</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Витамин C:</span>
                      <span className="font-semibold">{product.nutrition.vitamin_c}мг</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="font-semibold">{review.author}</div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <p className="text-gray-600 mb-4">{review.text}</p>
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        👍 Полезно ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm">
                        Ответить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card>
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Написать отзыв
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Похожие товары</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-all group-hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-600">{product.price}₽</span>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;