import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, User, Edit, Save, Star, ShoppingBag, Heart, MapPin, Phone, Mail } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Анна',
    lastName: 'Петрова',
    email: 'anna.petrova@email.com',
    phone: '+7 (495) 123-45-67',
    birthDate: '1985-03-15',
    address: 'Москва, ул. Примерная, д. 123, кв. 45'
  });

  const userStats = {
    totalOrders: 24,
    totalSpent: 18750,
    loyaltyLevel: 'Золото',
    loyaltyDiscount: '7%',
    favoriteProducts: 12,
    reviewsCount: 8
  };

  const recentOrders = [
    {
      id: '12345',
      date: '15 декабря 2024',
      status: 'Доставлен',
      total: 1250,
      items: ['Помидоры черри', 'Авокадо', 'Салат айсберг']
    },
    {
      id: '12344',
      date: '10 декабря 2024',
      status: 'Доставлен',
      total: 890,
      items: ['Морковь', 'Огурцы', 'Петрушка']
    },
    {
      id: '12343',
      date: '5 декабря 2024',
      status: 'Доставлен',
      total: 1560,
      items: ['Яблоки', 'Бананы', 'Апельсины']
    }
  ];

  const favoriteProducts = [
    {
      id: 1,
      name: 'Помидоры черри органические',
      price: 299,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Авокадо',
      price: 149,
      image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Салат айсберг',
      price: 119,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Здесь будет логика сохранения данных
  };

  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
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
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
              {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {userData.firstName} {userData.lastName}
              </h1>
              <p className="text-gray-600">{userData.email}</p>
              <div className="flex items-center space-x-4 mt-2">
                <Badge className="bg-yellow-500">
                  <Star className="h-3 w-3 mr-1" />
                  {userStats.loyaltyLevel}
                </Badge>
                <span className="text-sm text-gray-500">
                  Скидка {userStats.loyaltyDiscount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <ShoppingBag className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.totalOrders}</div>
              <div className="text-sm text-gray-600">Заказов</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">{userStats.totalSpent.toLocaleString()}₽</div>
              <div className="text-sm text-gray-600">Потрачено</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.favoriteProducts}</div>
              <div className="text-sm text-gray-600">В избранном</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.reviewsCount}</div>
              <div className="text-sm text-gray-600">Отзывов</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Личная информация
                  </CardTitle>
                  <Button
                    variant="outline"
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    {isEditing ? (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Сохранить
                      </>
                    ) : (
                      <>
                        <Edit className="h-4 w-4 mr-2" />
                        Редактировать
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      value={userData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={userData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        value={userData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        value={userData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Дата рождения</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={userData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="address"
                        value={userData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Последние заказы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold">Заказ #{order.id}</div>
                          <div className="text-sm text-gray-600">{order.date}</div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-green-500 mb-2">{order.status}</Badge>
                          <div className="font-bold">{order.total}₽</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Товары: {order.items.join(', ')}
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Link to={`/orders/${order.id}`}>
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          Повторить заказ
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/orders">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Все заказы
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {favoriteProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">{product.price}₽</span>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          В корзину
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/favorites">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Все избранные
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Email уведомления</div>
                        <div className="text-sm text-gray-600">Получать уведомления о заказах на email</div>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">SMS уведомления</div>
                        <div className="text-sm text-gray-600">Получать SMS о статусе доставки</div>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Рекламные рассылки</div>
                        <div className="text-sm text-gray-600">Получать информацию об акциях и скидках</div>
                      </div>
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Изменить пароль
                    </Button>
                    <Button variant="outline" className="w-full">
                      Настроить двухфакторную аутентификацию
                    </Button>
                    <Button variant="outline" className="w-full text-red-600 border-red-600 hover:bg-red-50">
                      Удалить аккаунт
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;