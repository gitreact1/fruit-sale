import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MapPin, Clock, CreditCard, Truck, User, Phone, Mail } from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [deliveryType, setDeliveryType] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    entrance: '',
    floor: '',
    intercom: '',
    comment: '',
    deliveryDate: '',
    deliveryTime: ''
  });

  const orderItems = [
    { id: 1, name: 'Помидоры черри органические', price: 299, quantity: 2, weight: '500г' },
    { id: 2, name: 'Авокадо', price: 149, quantity: 3, weight: '1шт' },
    { id: 3, name: 'Морковь молодая', price: 89, quantity: 1, weight: '1кг' }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitOrder = () => {
    console.log('Order submitted:', { formData, deliveryType, paymentMethod, orderItems });
    // Здесь будет логика отправки заказа
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/cart" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Вернуться в корзину
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Оформление заказа</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Contact Information */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Введите фамилию"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="example@mail.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                      Далее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="h-5 w-5 mr-2" />
                      Способ доставки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={deliveryType} onValueChange={setDeliveryType}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="courier" id="courier" />
                        <Label htmlFor="courier" className="flex-1">
                          <div className="font-semibold">Курьерская доставка</div>
                          <div className="text-sm text-gray-600">Доставка по указанному адресу</div>
                          <div className="text-sm font-semibold text-green-600">Бесплатно</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex-1">
                          <div className="font-semibold">Самовывоз</div>
                          <div className="text-sm text-gray-600">Забрать из пункта выдачи</div>
                          <div className="text-sm font-semibold text-green-600">Бесплатно</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {deliveryType === 'courier' && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        Адрес доставки
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="address">Адрес *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Улица, дом"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="apartment">Квартира</Label>
                          <Input
                            id="apartment"
                            value={formData.apartment}
                            onChange={(e) => handleInputChange('apartment', e.target.value)}
                            placeholder="Номер квартиры"
                          />
                        </div>
                        <div>
                          <Label htmlFor="entrance">Подъезд</Label>
                          <Input
                            id="entrance"
                            value={formData.entrance}
                            onChange={(e) => handleInputChange('entrance', e.target.value)}
                            placeholder="Номер подъезда"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="floor">Этаж</Label>
                          <Input
                            id="floor"
                            value={formData.floor}
                            onChange={(e) => handleInputChange('floor', e.target.value)}
                            placeholder="Номер этажа"
                          />
                        </div>
                        <div>
                          <Label htmlFor="intercom">Домофон</Label>
                          <Input
                            id="intercom"
                            value={formData.intercom}
                            onChange={(e) => handleInputChange('intercom', e.target.value)}
                            placeholder="Код домофона"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Время доставки
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deliveryDate">Дата доставки</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          value={formData.deliveryDate}
                          onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryTime">Время доставки</Label>
                        <Input
                          id="deliveryTime"
                          type="time"
                          value={formData.deliveryTime}
                          onChange={(e) => handleInputChange('deliveryTime', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="comment">Комментарий к заказу</Label>
                      <Textarea
                        id="comment"
                        value={formData.comment}
                        onChange={(e) => handleInputChange('comment', e.target.value)}
                        placeholder="Дополнительная информация для курьера"
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Назад
                  </Button>
                  <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                    Далее
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Способ оплаты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1">
                          <div className="font-semibold">Банковской картой</div>
                          <div className="text-sm text-gray-600">Visa, MasterCard, МИР</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1">
                          <div className="font-semibold">Наличными при получении</div>
                          <div className="text-sm text-gray-600">Оплата курьеру</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="sbp" id="sbp" />
                        <Label htmlFor="sbp" className="flex-1">
                          <div className="font-semibold">Система быстрых платежей</div>
                          <div className="text-sm text-gray-600">Оплата через СБП</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="agreement" />
                      <Label htmlFor="agreement" className="text-sm">
                        Я согласен с <Link to="/terms" className="text-green-600 hover:underline">условиями обслуживания</Link> и 
                        <Link to="/privacy" className="text-green-600 hover:underline ml-1">политикой конфиденциальности</Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        Получать новости и специальные предложения
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Назад
                  </Button>
                  <Button onClick={submitOrder} className="bg-green-600 hover:bg-green-700 text-lg px-8">
                    Оформить заказ
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-gray-600">{item.weight} × {item.quantity}</div>
                    </div>
                    <div className="font-semibold">{item.price * item.quantity}₽</div>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <span>Товары:</span>
                  <span>{subtotal}₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee}₽`}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span>{total}₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;