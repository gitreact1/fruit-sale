import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Leaf, Users, Award, Heart, Target, Eye } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Анна Петрова',
      position: 'Основатель и CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Более 15 лет опыта в сфере здорового питания'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Директор по качеству',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Эксперт по органическому земледелию'
    },
    {
      name: 'Елена Козлова',
      position: 'Руководитель логистики',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Обеспечивает быструю и качественную доставку'
    },
    {
      name: 'Дмитрий Волков',
      position: 'Шеф-технолог',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Контролирует процессы хранения и обработки'
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Экологичность',
      description: 'Мы заботимся об окружающей среде и поддерживаем устойчивое развитие'
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: 'Забота о здоровье',
      description: 'Предлагаем только полезные и качественные продукты для вашего здоровья'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Клиентоориентированность',
      description: 'Каждый клиент важен для нас, мы стремимся превзойти ожидания'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Качество',
      description: 'Строгий контроль качества на всех этапах от поставщика до покупателя'
    }
  ];

  const achievements = [
    { number: '10+', label: 'лет на рынке' },
    { number: '50k+', label: 'довольных клиентов' },
    { number: '500+', label: 'видов продукции' },
    { number: '99%', label: 'положительных отзывов' }
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
            <Leaf className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">О компании ФрешМаркет</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали ФрешМаркет с одной простой целью — сделать здоровое питание доступным 
            для каждой семьи. Уже более 10 лет мы поставляем свежие, качественные овощи и фрукты 
            прямо к вашему столу.
          </p>
        </section>

        {/* Mission and Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Наша миссия</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Обеспечить каждую семью качественными, свежими и полезными продуктами, 
              способствуя здоровому образу жизни и благополучию наших клиентов. 
              Мы стремимся сделать здоровое питание простым, доступным и удобным.
            </p>
          </Card>
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Наше видение</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Стать ведущей компанией в сфере доставки свежих продуктов, 
              устанавливая новые стандарты качества и сервиса. Мы видим будущее, 
              где каждый человек имеет легкий доступ к здоровой и натуральной пище.
            </p>
          </Card>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Наша история</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">2014 год - Начало пути</h3>
                  <p className="text-gray-600">
                    Основание компании с небольшого магазина органических продуктов. 
                    Первые клиенты и понимание важности качества.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">2017 год - Развитие</h3>
                  <p className="text-gray-600">
                    Запуск службы доставки и расширение ассортимента. 
                    Установление партнерских отношений с фермерами.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">2020 год - Цифровизация</h3>
                  <p className="text-gray-600">
                    Создание онлайн-платформы и мобильного приложения. 
                    Внедрение современных технологий логистики.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">2024 год - Лидерство</h3>
                  <p className="text-gray-600">
                    Признание как лидера рынка свежих продуктов. 
                    Более 50,000 довольных клиентов по всей стране.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Наша история"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="bg-green-600 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Сертификаты и награды</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 22000</h3>
              <p className="text-gray-600">Сертификат системы менеджмента безопасности пищевых продуктов</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Органик сертификат</h3>
              <p className="text-gray-600">Подтверждение качества органических продуктов</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Лучший сервис 2024</h3>
              <p className="text-gray-600">Награда за качество обслуживания клиентов</p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Присоединяйтесь к нам</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Станьте частью нашей большой семьи довольных клиентов. 
            Попробуйте наши продукты и убедитесь в их качестве сами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Перейти в каталог
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline" size="lg">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;