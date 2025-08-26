import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Search, Package, Truck, CheckCircle, Clock, X, Eye } from 'lucide-react';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '12345',
      date: '15 декабря 2024',
      status: 'delivered',
      statusText: 'Доставлен',
      total: 1250,
      items: [
        { name: 'Помидоры черри органические', quantity: 2, price: 299 },
        { name: 'Авокадо', quantity: 3, price: 149 },
        { name: 'Салат айсберг', quantity: 1, price: 119 }
      ],
      deliveryAddress: 'Москва, ул. Примерная, д. 123, кв. 45',
      deliveryDate: '15 декабря 2024, 14:30',
      paymentMethod: 'Банковская карта'
    },
    {
      id: '12344',
      date: '10 декабря 2024',
      status: 'delivered',
      statusText: 'Доставлен',
      total: 890,
      items: [
        { name: 'Морковь молодая', quantity: 1, price: 89 },
        { name: 'Огурцы свежие', quantity: 2, price: 129 },
        { name: 'Петрушка', quantity: 3, price: 59 }
      ],
      deliveryAddress: 'Москва, ул. Примерная, д. 123, кв. 45',
      deliveryDate: '10 декабря 2024, 16:15',
      paymentMethod: 'Наличными'
    },
    {
      id: '12343',
      date: '8 декабря 2024',
      status: 'in_transit',
      statusText: 'В пути',
      total: 1560,
      items: [
        { name: 'Яблоки Гала', quantity: 2, price: 179 },
        { name: 'Бананы', quantity: 3, price: 99 },
        { name: 'Апельсины', quantity: 2, price: 159 }
      ],
      deliveryAddress: 'Москва, ул. Примерная, д. 123, кв. 45',
      deliveryDate: '8 декабря 2024, ожидается',
      paymentMethod: 'СБП'
    },
    {
      id: '12342',
      date: '5 декабря 2024',
      status: 'processing',
      statusText: 'Обрабатывается',
      total: 750,
      items: [
        { name: 'Капуста белокочанная', quantity: 1, price: 79 },
        { name: 'Лук репчатый', quantity: 2, price: 45 },
        { name: 'Картофель', quantity: 1, price: 120 }
      ],
      deliveryAddress: 'Москва, ул. Примерная, д. 123, кв. 45',
      deliveryDate: 'Ожидается',
      paymentMethod: 'Банковская карта'
    },
    {
      id: '12341',
      date: '1 декабря 2024',
      status: 'cancelled',
      statusText: 'Отменен',
      total: 450,
      items: [
        { name: 'Помидоры обычные', quantity: 1, price: 150 },
        { name: 'Огурцы парниковые', quantity: 2, price: 150 }
      ],
      deliveryAddress: 'Москва, ул. Примерная, д. 123, кв. 45',
      deliveryDate: 'Отменен',
      paymentMethod: 'Банковская карта'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in_transit':
        return <Truck className="h-5 w-5 text-blue-600" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'cancelled':
        return <X className="h-5 w-5 text-red-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-500';
      case 'in_transit':
        return 'bg-blue-500';
      case 'processing':
        return 'bg-orange-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.includes(searchQuery) || 
                         order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const orderStats = {
    total: orders.length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    inTransit: orders.filter(o => o.status === 'in_transit').length,
    processing: orders.filter(o => o.status === 'processing').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/profile" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Вернуться в профиль
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Мои заказы</h1>
          <p className="text-gray-600">История всех ваших заказов и их текущий статус</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-800">{orderStats.total}</div>
              <div className="text-sm text-gray-600">Всего заказов</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{orderStats.delivered}</div>
              <div className="text-sm text-gray-600">Доставлено</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{orderStats.inTransit}</div>
              <div className="text-sm text-gray-600">В пути</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{orderStats.processing}</div>
              <div className="text-sm text-gray-600">Обрабатывается</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{orderStats.cancelled}</div>
              <div className="text-sm text-gray-600">Отменено</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Поиск по номеру заказа или товару..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="delivered">Доставлен</SelectItem>
              <SelectItem value="in_transit">В пути</SelectItem>
              <SelectItem value="processing">Обрабатывается</SelectItem>
              <SelectItem value="cancelled">Отменен</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(order.status)}
                    <div>
                      <CardTitle className="text-lg">Заказ #{order.id}</CardTitle>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(order.status)}>
                      {order.statusText}
                    </Badge>
                    <div className="text-xl font-bold text-green-600 mt-1">
                      {order.total}₽
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Товары в заказе:</h4>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.name} × {item.quantity}</span>
                          <span className="font-semibold">{item.price * item.quantity}₽</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Детали доставки:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Адрес:</span>
                        <div>{order.deliveryAddress}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Доставка:</span>
                        <div>{order.deliveryDate}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Оплата:</span>
                        <div>{order.paymentMethod}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Подробнее
                    </Button>
                    {order.status === 'delivered' && (
                      <Button variant="outline" size="sm">
                        Повторить заказ
                      </Button>
                    )}
                    {order.status === 'processing' && (
                      <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                        Отменить заказ
                      </Button>
                    )}
                  </div>
                  {order.status === 'in_transit' && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Отследить заказ
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Заказы не найдены</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Попробуйте изменить параметры поиска'
                  : 'У вас пока нет заказов'
                }
              </p>
              <Link to="/catalog">
                <Button className="bg-green-600 hover:bg-green-700">
                  Перейти в каталог
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Orders;