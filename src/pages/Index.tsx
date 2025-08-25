import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Truck, Star, Leaf, Clock, Shield, Users, Gift, BookOpen, Phone } from 'lucide-react';

const Index = () => {
  const featuredProducts = [
    { id: 1, name: 'Помидоры черри', price: 299, image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
    { id: 2, name: 'Авокадо', price: 149, image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 },
    { id: 3, name: 'Морковь молодая', price: 89, image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 },
    { id: 4, name: 'Салат айсберг', price: 119, image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6 }
  ];

  const categories = [
    { name: 'Овощи', count: 120, image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Фрукты', count: 85, image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Зелень', count: 45, image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Ягоды', count: 32, image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <h1 className="text-2xl font-bold">ФрешМаркет</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/catalog" className="hover:text-green-200 transition-colors">Каталог</Link>
              <Link to="/delivery" className="hover:text-green-200 transition-colors">Доставка</Link>
              <Link to="/about" className="hover:text-green-200 transition-colors">О нас</Link>
              <Link to="/contacts" className="hover:text-green-200 transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-green-600">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="text-white hover:bg-green-700">
                  Войти
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Свежие овощи и фрукты с доставкой
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Качественные продукты от проверенных поставщиков. Быстрая доставка по всему городу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Перейти в каталог
              </Button>
            </Link>
            <Link to="/promotions">
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
                Акции и скидки
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <div className="container mx-auto px-4 py-16">
        
        {/* 1. Преимущества */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доставляем в течение 2-4 часов по всему городу</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Свежесть</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Только свежие продукты от проверенных поставщиков</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Строгий контроль качества на всех этапах</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">100% гарантия возврата при любых проблемах</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 2. Категории товаров */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Категории товаров</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/catalog" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-all group-hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-lg mb-2">{category.name}</h4>
                    <p className="text-gray-600">{category.count} товаров</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Популярные товары */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Популярные товары</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                      <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Акции и предложения */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Акции и предложения</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-orange-400 to-orange-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <Gift className="h-12 w-12 mb-4" />
                <h4 className="text-2xl font-bold mb-4">Скидка 20% на первый заказ</h4>
                <p className="mb-6">Для новых покупателей действует специальная скидка</p>
                <Link to="/promotions">
                  <Button variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                    Подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-400 to-green-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 mb-4" />
                <h4 className="text-2xl font-bold mb-4">Бесплатная доставка</h4>
                <p className="mb-6">При заказе от 1500 рублей доставка бесплатно</p>
                <Link to="/delivery">
                  <Button variant="secondary" className="bg-white text-green-500 hover:bg-gray-100">
                    Условия доставки
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 5. Органические продукты */}
        <section className="mb-16">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Органические продукты</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Экологически чистые овощи и фрукты, выращенные без использования химических удобрений и пестицидов
              </p>
            </div>
            <div className="text-center">
              <Link to="/organic">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Смотреть органические продукты
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Сезонные продукты */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Сезонные продукты</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Зимний сезон</h4>
                <p className="text-gray-600 mb-6">
                  Сейчас самое время для цитрусовых, корнеплодов и зимних сортов яблок. 
                  Все продукты богаты витаминами и помогут поддержать иммунитет.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Апельсины</Badge>
                  <Badge variant="secondary">Мандарины</Badge>
                  <Badge variant="secondary">Свекла</Badge>
                  <Badge variant="secondary">Морковь</Badge>
                  <Badge variant="secondary">Капуста</Badge>
                </div>
                <Link to="/seasonal">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Календарь сезонности
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Сезонные продукты"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Рецепты и питание */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Рецепты и полезные советы</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/recipes" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Рецепты"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Рецепты</h4>
                  <p className="text-gray-600">Вкусные и полезные рецепты с нашими продуктами</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/nutrition" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Питание"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Здоровое питание</h4>
                  <p className="text-gray-600">Информация о пользе овощей и фруктов</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/blog" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Блог"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Блог</h4>
                  <p className="text-gray-600">Статьи о здоровом образе жизни</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* 8. Отзывы клиентов */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Отзывы наших клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Отличное качество продуктов! Заказываю уже полгода, всегда свежие овощи и фрукты. Доставка быстрая."
              </p>
              <div className="font-semibold">Анна К.</div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Очень удобно заказывать онлайн. Цены приемлемые, а качество превосходное. Рекомендую всем!"
              </p>
              <div className="font-semibold">Михаил П.</div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Большой выбор органических продуктов. Для нашей семьи это очень важно. Спасибо за качество!"
              </p>
              <div className="font-semibold">Елена В.</div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" size="lg">
                Все отзывы
              </Button>
            </Link>
          </div>
        </section>

        {/* 9. О компании */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">О компании ФрешМаркет</h3>
                <p className="text-gray-600 mb-6">
                  Мы работаем на рынке свежих продуктов уже более 10 лет. Наша миссия — 
                  обеспечить каждую семью качественными, свежими и полезными овощами и фруктами.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">10+</div>
                    <div className="text-sm text-gray-600">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50k+</div>
                    <div className="text-sm text-gray-600">довольных клиентов</div>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Узнать больше
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <Users className="h-32 w-32 text-green-600 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* 10. Контакты и поддержка */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Свяжитесь с нами</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Phone className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold mb-4">Служба поддержки</h4>
              <p className="text-gray-600 mb-4">
                Наши специалисты готовы помочь вам с выбором продуктов и оформлением заказа
              </p>
              <div className="space-y-2 mb-6">
                <div className="font-semibold">+7 (495) 123-45-67</div>
                <div className="text-gray-600">Ежедневно с 8:00 до 22:00</div>
              </div>
              <Link to="/contacts">
                <Button variant="outline">
                  Все контакты
                </Button>
              </Link>
            </Card>
            <Card className="p-8">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h4>
              <p className="text-gray-600 mb-6">
                Ответы на популярные вопросы о доставке, оплате и качестве продуктов
              </p>
              <Link to="/faq">
                <Button variant="outline">
                  Перейти к FAQ
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <h3 className="text-xl font-bold">ФрешМаркет</h3>
              </div>
              <p className="text-gray-400">
                Свежие овощи и фрукты с доставкой по всему городу
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/catalog" className="hover:text-white">Овощи</Link></li>
                <li><Link to="/catalog" className="hover:text-white">Фрукты</Link></li>
                <li><Link to="/catalog" className="hover:text-white">Зелень</Link></li>
                <li><Link to="/organic" className="hover:text-white">Органические</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">О нас</Link></li>
                <li><Link to="/delivery" className="hover:text-white">Доставка</Link></li>
                <li><Link to="/payment" className="hover:text-white">Оплата</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@freshmarket.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ФрешМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;