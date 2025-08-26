import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, Smartphone, Banknote, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const Payment = () => {
  const paymentMethods = [
    {
      id: 'card',
      name: 'Банковские карты',
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      description: 'Visa, MasterCard, МИР',
      commission: '0%',
      processing: 'Мгновенно',
      security: 'Высокий',
      popular: true
    },
    {
      id: 'sbp',
      name: 'Система быстрых платежей',
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      description: 'Оплата через мобильное приложение банка',
      commission: '0%',
      processing: 'Мгновенно',
      security: 'Высокий',
      popular: true
    },
    {
      id: 'cash',
      name: 'Наличными курьеру',
      icon: <Banknote className="h-8 w-8 text-orange-600" />,
      description: 'Оплата при получении заказа',
      commission: '0%',
      processing: 'При доставке',
      security: 'Средний',
      popular: false
    },
    {
      id: 'yandex',
      name: 'Яндекс.Деньги',
      icon: <CreditCard className="h-8 w-8 text-yellow-600" />,
      description: 'Электронный кошелек',
      commission: '0%',
      processing: 'Мгновенно',
      security: 'Высокий',
      popular: false
    }
  ];

  const securityFeatures = [
    'SSL-шифрование всех платежных данных',
    'Соответствие стандарту PCI DSS',
    'Двухфакторная аутентификация',
    'Мониторинг подозрительных операций',
    'Возврат средств в течение 14 дней',
    'Страхование платежей'
  ];

  const paymentSteps = [
    {
      step: 1,
      title: 'Выбор товаров',
      description: 'Добавьте нужные товары в корзину'
    },
    {
      step: 2,
      title: 'Оформление заказа',
      description: 'Укажите данные для доставки'
    },
    {
      step: 3,
      title: 'Выбор способа оплаты',
      description: 'Выберите удобный способ оплаты'
    },
    {
      step: 4,
      title: 'Подтверждение платежа',
      description: 'Подтвердите оплату в безопасной форме'
    }
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
            <CreditCard className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Способы оплаты</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ оплаты. Все платежи защищены современными 
            системами безопасности и проходят мгновенно.
          </p>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Доступные способы оплаты</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => (
              <Card key={method.id} className={`hover:shadow-lg transition-shadow ${method.popular ? 'ring-2 ring-green-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {method.icon}
                      <CardTitle className="text-xl">{method.name}</CardTitle>
                    </div>
                    {method.popular && (
                      <Badge className="bg-green-500">Популярный</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Комиссия:</div>
                      <div className="font-semibold text-green-600">{method.commission}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Обработка:</div>
                      <div className="font-semibold">{method.processing}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Безопасность:</div>
                      <div className="font-semibold">{method.security}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Как происходит оплата</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {paymentSteps.map((step) => (
              <Card key={step.step} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Безопасность платежей</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Защита данных
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Гарантии и возвраты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold">100% возврат средств</div>
                      <div className="text-sm text-gray-600">При отмене заказа до начала сборки</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold">Возврат в течение 14 дней</div>
                      <div className="text-sm text-gray-600">При проблемах с качеством товара</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold">Компенсация за задержку</div>
                      <div className="text-sm text-gray-600">Скидка 10% при опоздании курьера</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Безопасно ли платить картой онлайн?</h3>
                <p className="text-gray-600">Да, все платежи проходят через защищенные каналы с SSL-шифрованием. Мы не храним данные ваших карт.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Можно ли оплатить заказ частично?</h3>
                <p className="text-gray-600">Нет, заказ необходимо оплатить полностью. Но вы можете использовать промокоды для получения скидки.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Что делать, если платеж не прошел?</h3>
                <p className="text-gray-600">Обратитесь в службу поддержки по телефону +7 (495) 123-45-67. Мы поможем решить проблему.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-green-600 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите товары и оплатите удобным способом
          </p>
          <Link to="/catalog">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Перейти в каталог
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Payment;