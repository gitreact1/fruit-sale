import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Search, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'Все вопросы', count: 20 },
    { id: 'orders', name: 'Заказы', count: 5 },
    { id: 'delivery', name: 'Доставка', count: 4 },
    { id: 'payment', name: 'Оплата', count: 3 },
    { id: 'products', name: 'Товары', count: 4 },
    { id: 'account', name: 'Аккаунт', count: 2 },
    { id: 'other', name: 'Другое', count: 2 }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'orders',
      question: 'Как оформить заказ?',
      answer: 'Для оформления заказа добавьте нужные товары в корзину, перейдите в корзину, нажмите "Оформить заказ" и заполните необходимые данные: контактную информацию, адрес доставки и способ оплаты.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'Можно ли изменить или отменить заказ?',
      answer: 'Заказ можно изменить или отменить в течение 30 минут после оформления, пока он не передан в сборку. Для этого свяжитесь с нашей службой поддержки по телефону +7 (495) 123-45-67.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'Какая минимальная сумма заказа?',
      answer: 'Минимальная сумма заказа зависит от зоны доставки: для центра города - 1000₽, для ближних районов - 1500₽, для дальних районов - 2000₽, для Подмосковья - 3000₽.'
    },
    {
      id: 4,
      category: 'orders',
      question: 'Как отследить статус заказа?',
      answer: 'Вы можете отследить статус заказа в личном кабинете в разделе "Мои заказы" или по ссылке из SMS-уведомления. Также наш курьер свяжется с вами за 30 минут до доставки.'
    },
    {
      id: 5,
      category: 'orders',
      question: 'Что делать, если товар не подошел?',
      answer: 'Если товар не соответствует описанию или имеет дефекты, вы можете вернуть его курьеру при получении или обратиться в службу поддержки в течение 24 часов после доставки.'
    },
    {
      id: 6,
      category: 'delivery',
      question: 'В какие районы осуществляется доставка?',
      answer: 'Мы доставляем по всей Москве и ближайшему Подмосковью. Подробную карту зон доставки и стоимость можно посмотреть на странице "Доставка".'
    },
    {
      id: 7,
      category: 'delivery',
      question: 'Сколько стоит доставка?',
      answer: 'Стоимость доставки зависит от зоны: центр города - бесплатно, ближние районы - 200₽, дальние районы - 350₽, Подмосковье - 500₽. При заказе от 1500₽ доставка по всем зонам бесплатная.'
    },
    {
      id: 8,
      category: 'delivery',
      question: 'В какое время осуществляется доставка?',
      answer: 'Доставка осуществляется ежедневно с 9:00 до 23:00. Вы можете выбрать удобный 3-часовой интервал при оформлении заказа.'
    },
    {
      id: 9,
      category: 'delivery',
      question: 'Возможна ли бесконтактная доставка?',
      answer: 'Да, мы предлагаем бесконтактную доставку. Укажите это в комментарии к заказу, и курьер оставит товары у двери, предварительно связавшись с вами.'
    },
    {
      id: 10,
      category: 'payment',
      question: 'Какие способы оплаты доступны?',
      answer: 'Вы можете оплатить заказ банковской картой онлайн, через СБП, наличными курьеру или электронными кошельками (Яндекс.Деньги). Все онлайн-платежи защищены SSL-шифрованием.'
    },
    {
      id: 11,
      category: 'payment',
      question: 'Безопасно ли платить картой онлайн?',
      answer: 'Да, все платежи проходят через защищенные каналы с SSL-шифрованием. Мы соответствуем стандарту PCI DSS и не храним данные ваших карт на наших серверах.'
    },
    {
      id: 12,
      category: 'payment',
      question: 'Можно ли получить чек?',
      answer: 'Да, чек отправляется на указанный email сразу после оплаты. При оплате наличными курьер предоставит бумажный чек.'
    },
    {
      id: 13,
      category: 'products',
      question: 'Как выбрать свежие продукты?',
      answer: 'Все наши продукты проходят строгий контроль качества. Мы работаем только с проверенными поставщиками и обновляем ассортимент ежедневно. Срок годности указан на каждом товаре.'
    },
    {
      id: 14,
      category: 'products',
      question: 'Что означает маркировка "Органик"?',
      answer: 'Товары с маркировкой "Органик" выращены без использования химических удобрений, пестицидов и ГМО. Все органические продукты имеют соответствующие сертификаты.'
    },
    {
      id: 15,
      category: 'products',
      question: 'Можно ли заказать товары, которых нет в наличии?',
      answer: 'К сожалению, заказать товары, которых нет в наличии, нельзя. Но вы можете добавить их в избранное и получить уведомление, когда они появятся в продаже.'
    },
    {
      id: 16,
      category: 'products',
      question: 'Как хранить продукты после доставки?',
      answer: 'Рекомендации по хранению указаны на упаковке каждого товара. Общие правила: овощи и фрукты хранить в холодильнике в отделе для овощей, зелень - в стакане с водой.'
    },
    {
      id: 17,
      category: 'account',
      question: 'Как создать личный кабинет?',
      answer: 'Для создания личного кабинета нажмите "Войти" в правом верхнем углу сайта, затем "Регистрация". Заполните необходимые данные: имя, email и пароль.'
    },
    {
      id: 18,
      category: 'account',
      question: 'Как восстановить пароль?',
      answer: 'На странице входа нажмите "Забыли пароль?", введите ваш email. Мы отправим ссылку для восстановления пароля на указанную почту.'
    },
    {
      id: 19,
      category: 'other',
      question: 'Есть ли программа лояльности?',
      answer: 'Да, у нас есть накопительная программа лояльности с 4 уровнями: Бронза (3%), Серебро (5%), Золото (7%), Платина (10%). Уровень зависит от количества заказов.'
    },
    {
      id: 20,
      category: 'other',
      question: 'Как связаться со службой поддержки?',
      answer: 'Вы можете связаться с нами по телефону +7 (495) 123-45-67 (ежедневно с 8:00 до 22:00), написать на email info@freshmarket.ru или воспользоваться онлайн-чатом на сайте.'
    }
  ];

  const filteredFAQ = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularQuestions = faqItems.slice(0, 6);

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
            <HelpCircle className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Часто задаваемые вопросы</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите ответы на популярные вопросы о заказах, доставке, оплате и наших продуктах
          </p>
        </section>

        {/* Search */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {faqCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-green-600 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? 'text-green-100' : 'text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {/* Popular Questions */}
            {selectedCategory === 'all' && !searchQuery && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Популярные вопросы</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {popularQuestions.map(item => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-green-600 mb-2">{item.question}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ List */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCategory === 'all' ? 'Все вопросы' : 
                   faqCategories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <span className="text-gray-500">
                  {filteredFAQ.length} вопросов
                </span>
              </div>

              {filteredFAQ.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQ.map(item => (
                    <AccordionItem key={item.id} value={item.id.toString()}>
                      <Card>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <span className="text-left font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Вопросы не найдены</h3>
                    <p className="text-gray-500 mb-6">
                      Попробуйте изменить поисковый запрос или выберите другую категорию
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
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
        </div>

        {/* Contact Support */}
        <section className="mt-16">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Не нашли ответ на свой вопрос?</h2>
                <p className="text-gray-600">
                  Наша служба поддержки готова помочь вам в любое время
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-gray-600 mb-3">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500">Ежедневно с 8:00 до 22:00</p>
                </div>
                <div className="text-center">
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 mb-3">info@freshmarket.ru</p>
                  <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
                </div>
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Онлайн-чат</h3>
                  <p className="text-gray-600 mb-3">Чат на сайте</p>
                  <p className="text-sm text-gray-500">Пн-Вс с 9:00 до 21:00</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/contacts">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Связаться с поддержкой
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;