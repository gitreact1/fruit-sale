import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const offices = [
    {
      city: 'Москва (Главный офис)',
      address: 'ул. Примерная, 123, офис 456',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@freshmarket.ru',
      hours: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, 789',
      phone: '+7 (812) 987-65-43',
      email: 'spb@freshmarket.ru',
      hours: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00'
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Ленина, 321',
      phone: '+7 (343) 555-12-34',
      email: 'ekb@freshmarket.ru',
      hours: 'Пн-Пт: 9:00-18:00'
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Телефон',
      description: 'Звоните нам в любое время',
      contact: '+7 (495) 123-45-67',
      hours: 'Ежедневно с 8:00 до 22:00'
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: 'Email',
      description: 'Напишите нам письмо',
      contact: 'info@freshmarket.ru',
      hours: 'Ответим в течение 24 часов'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: 'Онлайн-чат',
      description: 'Быстрая помощь в чате',
      contact: 'Чат на сайте',
      hours: 'Пн-Вс с 9:00 до 21:00'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы помочь вам с выбором продуктов, оформлением заказа 
            или ответить на любые вопросы о нашем сервисе.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <div className="font-semibold text-green-600 mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-500">{method.hours}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Форма обратной связи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="example@mail.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тему" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="order">Вопрос по заказу</SelectItem>
                        <SelectItem value="delivery">Доставка</SelectItem>
                        <SelectItem value="quality">Качество продукции</SelectItem>
                        <SelectItem value="payment">Оплата</SelectItem>
                        <SelectItem value="cooperation">Сотрудничество</SelectItem>
                        <SelectItem value="complaint">Жалоба</SelectItem>
                        <SelectItem value="suggestion">Предложение</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Опишите ваш вопрос или предложение"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Offices */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Наши офисы</h2>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-600">{office.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <div className="font-medium">Адрес:</div>
                          <div className="text-gray-600">{office.address}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Телефон:</div>
                          <div className="text-gray-600">{office.phone}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Email:</div>
                          <div className="text-gray-600">{office.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium">Часы работы:</div>
                          <div className="text-gray-600">{office.hours}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Как нас найти</h2>
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Здесь будет интерактивная карта</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Москва, ул. Примерная, 123, офис 456
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Link */}
        <section className="mt-16 text-center">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Не нашли ответ на свой вопрос?</h2>
            <p className="text-gray-600 mb-6">
              Возможно, ответ есть в нашем разделе часто задаваемых вопросов
            </p>
            <Link to="/faq">
              <Button variant="outline" size="lg">
                Перейти к FAQ
              </Button>
            </Link>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contacts;