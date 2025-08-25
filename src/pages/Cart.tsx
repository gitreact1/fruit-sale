import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart, Tag, Truck } from 'lucide-react';

const Cart = () => {
  const [promoCode, setPromoCode] = useState('');
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Помидоры черри органические',
      price: 299,
      quantity: 2,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
      weight: '500г'
    },
    {
      id: 2,
      name: 'Авокадо',
      price: 149,
      quantity: 3,
      image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=300',
      weight: '1шт'
    },
    {
      id: 3,
      name: 'Морковь молодая',
      price: 89,
      quantity: 1,
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300',
      weight: '1кг'
    }
  ]);

  const recommendedProducts = [
    { id: 4, name: 'Огурцы свежие', price: 129, image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 5, name: 'Салат айсберг', price: 119, image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id: 6, name: 'Петрушка', price: 59, image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 50; // Скидка по промокоду
  const deliveryFee = subtotal >= 1500 ? 0 : 200;
  const total = subtotal - discount + deliveryFee;

  const applyPromoCode = () => {
    // Логика применения промокода
    console.log('Applying promo code:', promoCode);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              На главную
            </Link>
          </div>
        </header>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Корзина пуста</h2>
          <p className="text-gray-600 mb-8">Добавьте товары из каталога, чтобы сделать заказ</p>
          <Link to="/catalog">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Перейти в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              На главную
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Корзина</h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Товары в корзине ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.weight}</p>
                      <p className="text-lg font-bold text-green-600">{item.price}₽</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{item.price * item.quantity}₽</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Промокод
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Введите промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button onClick={applyPromoCode} variant="outline">
                    Применить
                  </Button>
                </div>
                {discount > 0 && (
                  <div className="mt-2">
                    <Badge className="bg-green-500">Скидка применена: -{discount}₽</Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recommended Products */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Рекомендуем добавить</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-24 object-cover rounded mb-2"
                      />
                      <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-green-600">{product.price}₽</span>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Итого к оплате</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары ({cartItems.length}):</span>
                  <span>{subtotal}₽</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Скидка:</span>
                    <span>-{discount}₽</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <Truck className="h-4 w-4 mr-1" />
                    Доставка:
                  </span>
                  <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee}₽`}</span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-sm text-gray-600">
                    Бесплатная доставка от 1500₽
                  </p>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span>{total}₽</span>
                </div>
                <Link to="/checkout" className="block">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    Оформить заказ
                  </Button>
                </Link>
                <div className="text-center">
                  <Link to="/catalog" className="text-green-600 hover:text-green-700">
                    Продолжить покупки
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="mt-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold">Доставка сегодня</div>
                    <div className="text-sm text-gray-600">При заказе до 18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;