import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Truck, Clock, MapPin, Calculator, Shield, Phone } from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    {
      zone: 'Центр города',
      areas: ['Центральный', 'Тверской', 'Хамовники'],
      price: 'Бесплатно',
      time: '2-4 часа',
      minOrder: 1000
    },
    {
      zone: 'Ближние районы',
      areas: ['Сокольники', 'Басманный', 'Красносельский'],
      price: '200₽',
      time: '3-5 часов',
      minOrder: 1500
    },
    {
      zone: 'Дальние районы',
      areas: ['Митино', 'Бутово', 'Марьино'],
      price: '350₽',
      time: '4-6 часов',
      minOrder: 2000
    },
    {
      zone: 'Подмосковье',
      areas: ['Химки', 'Мытищи', 'Люберцы'],
      price: '500₽',
      time: '6-8 часов',
      minOrder: 3000
    }
  ];

  const timeSlots = [
    { time: '9:00 - 12:00', available: true, popular: false },
    { time: '12:00 - 15:00', available: true, popular: true },
    { time: '15:00 - 18:00', available: true, popular: true },
    { time: '18:00 - 21:00', available: false, popular: false },
    { time: '21:00 - 23:00', available: true, popular: false }
  ];

  const deliveryRules = [
    'Минимальная сумма заказа зависит от зоны доставки',
    'Доставка осуществляется ежедневно с 9:00 до 23:00',
    'Курьер свяжется с вами за 30 минут до доставки',
    'Оплата наличными или картой курьеру',
    'Возможна бесконтактная доставка',
    'Проверка товара при получении'
  ];

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
            <Truck className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Доставка</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Быстрая и надежная доставка свежих овощей и фруктов прямо к вашему дому. 
            Работаем ежедневно по всей Москве и Подмосковью.
          </p>
        </section>

        {/* Delivery Zones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Зоны доставки</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">{zone.zone}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Районы:</div>
                      <div className="text-sm">{zone.areas.join(', ')}</div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Стоимость:</span>
                      <span className="font-semibold text-green-600">{zone.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Время:</span>
                      <span className="font-semibold">{zone.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Мин. заказ:</span>
                      <span className="font-semibold">{zone.minOrder}₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Time Slots */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Время доставки</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Доступные интервалы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {timeSlots.map((slot, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${
                    slot.available ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <span className={`font-medium ${slot.available ? 'text-gray-800' : 'text-gray-400'}`}>
                      {slot.time}
                    </span>
                    <div className="flex items-center space-x-2">
                      {slot.popular && (
                        <Badge className="bg-orange-500">Популярное</Badge>
                      )}
                      <Badge variant={slot.available ? "default" : "secondary"}>
                        {slot.available ? 'Доступно' : 'Занято'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Calculator */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Калькулятор доставки</h2>
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Рассчитать стоимость
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Адрес доставки</label>
                  <input 
                    type="text" 
                    placeholder="Введите ваш адрес"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сумма заказа</label>
                  <input 
                    type="number" 
                    placeholder="0"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Рассчитать
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Rules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Условия доставки</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Правила доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {deliveryRules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Служба доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-2">Горячая линия доставки</div>
                    <div className="text-2xl font-bold text-green-600">+7 (495) 123-45-67</div>
                    <div className="text-sm text-gray-500">Круглосуточно</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Отследить заказ</div>
                    <Button variant="outline" className="w-full">
                      Проверить статус доставки
                    </Button>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Экстренная связь</div>
                    <div className="text-sm text-gray-600">
                      Если курьер опаздывает более чем на 30 минут, 
                      звоните по номеру выше
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Карта доставки</h2>
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Интерактивная карта зон доставки</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Здесь будет отображена карта с зонами доставки
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-green-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите свежие продукты и мы доставим их в удобное для вас время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Перейти в каталог
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                Задать вопрос
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Delivery;