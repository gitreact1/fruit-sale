import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Gift, Percent, Clock, Star, Copy, Check } from 'lucide-react';

const Promotions = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const activePromotions = [
    {
      id: 1,
      title: 'Скидка 20% на первый заказ',
      description: 'Специальное предложение для новых покупателей',
      discount: '20%',
      code: 'FIRST20',
      validUntil: '31 декабря 2024',
      minOrder: 1000,
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'new-customer',
      popular: true
    },
    {
      id: 2,
      title: 'Бесплатная доставка',
      description: 'При заказе от 1500 рублей доставка бесплатно',
      discount: 'Бесплатно',
      code: 'DELIVERY0',
      validUntil: 'Постоянно',
      minOrder: 1500,
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'delivery',
      popular: true
    },
    {
      id: 3,
      title: 'Органические продукты -15%',
      description: 'Скидка на все органические овощи и фрукты',
      discount: '15%',
      code: 'ORGANIC15',
      validUntil: '15 января 2025',
      minOrder: 800,
      image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'category',
      popular: false
    },
    {
      id: 4,
      title: 'Выходные скидки',
      description: 'Каждые выходные скидка 10% на все товары',
      discount: '10%',
      code: 'WEEKEND10',
      validUntil: 'Каждые выходные',
      minOrder: 500,
      image: 'https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'weekend',
      popular: false
    }
  ];

  const seasonalOffers = [
    {
      title: 'Зимние витамины',
      description: 'Цитрусовые со скидкой до 25%',
      period: 'Декабрь - Февраль',
      products: ['Апельсины', 'Мандарины', 'Лимоны', 'Грейпфруты']
    },
    {
      title: 'Весенняя зелень',
      description: 'Свежая зелень с собственных грядок',
      period: 'Март - Май',
      products: ['Укроп', 'Петрушка', 'Салат', 'Шпинат']
    },
    {
      title: 'Летние ягоды',
      description: 'Сезонные ягоды по специальным ценам',
      period: 'Июнь - Август',
      products: ['Клубника', 'Малина', 'Черника', 'Смородина']
    }
  ];

  const loyaltyProgram = {
    bronze: { name: 'Бронза', discount: '3%', minOrders: 0 },
    silver: { name: 'Серебро', discount: '5%', minOrders: 10 },
    gold: { name: 'Золото', discount: '7%', minOrders: 25 },
    platinum: { name: 'Платина', discount: '10%', minOrders: 50 }
  };

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
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
            <Gift className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Акции и скидки</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Экономьте на покупках свежих овощей и фруктов! Актуальные промокоды, 
            сезонные предложения и программа лояльности.
          </p>
        </section>

        {/* Active Promotions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Активные акции</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activePromotions.map((promo) => (
              <Card key={promo.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${promo.popular ? 'ring-2 ring-green-500' : ''}`}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{promo.title}</CardTitle>
                    {promo.popular && (
                      <Badge className="bg-orange-500">Популярная</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Скидка:</span>
                      <span className="font-bold text-green-600 text-lg">{promo.discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Промокод:</span>
                      <div className="flex items-center space-x-2">
                        <code className="bg-gray-100 px-2 py-1 rounded font-mono">{promo.code}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyPromoCode(promo.code)}
                        >
                          {copiedCode === promo.code ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Действует до:</span>
                      <span className="font-semibold">{promo.validUntil}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Мин. заказ:</span>
                      <span className="font-semibold">{promo.minOrder}₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Использовать промокод
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seasonal Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Сезонные предложения</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-orange-600" />
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Период:</div>
                    <div className="font-semibold">{offer.period}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Товары:</div>
                    <div className="flex flex-wrap gap-1">
                      {offer.products.map((product, idx) => (
                        <Badge key={idx} variant="secondary">{product}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Программа лояльности</h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <Star className="h-6 w-6 mr-2 text-yellow-500" />
                Накопительная система скидок
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(loyaltyProgram).map(([key, level]) => (
                  <div key={key} className="text-center p-4 border rounded-lg">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      key === 'bronze' ? 'bg-orange-600' :
                      key === 'silver' ? 'bg-gray-500' :
                      key === 'gold' ? 'bg-yellow-500' : 'bg-purple-600'
                    }`}>
                      {level.discount}
                    </div>
                    <h3 className="font-semibold mb-2">{level.name}</h3>
                    <p className="text-sm text-gray-600">
                      От {level.minOrders} заказов
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Совершайте покупки и получайте постоянную скидку на все товары!
                </p>
                <Link to="/profile">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Узнать свой статус
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Promo Code Input */}
        <section className="mb-16">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Есть промокод?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input placeholder="Введите промокод" />
                <Button className="bg-green-600 hover:bg-green-700">
                  Проверить
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Введите промокод, чтобы узнать размер скидки
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center bg-green-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Не пропустите новые акции!</h2>
          <p className="text-xl mb-8 opacity-90">
            Подпишитесь на рассылку и получайте промокоды первыми
          </p>
          <div className="max-w-md mx-auto flex space-x-2">
            <Input 
              placeholder="Ваш email" 
              className="bg-white text-gray-800"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Promotions;