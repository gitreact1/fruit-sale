import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Eye, Clock, Share2, Heart, MessageCircle } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // В реальном приложении данные загружались бы по ID
  const post = {
    id: 1,
    title: '10 причин есть больше овощей каждый день',
    content: `
      <p>Овощи являются основой здорового питания и должны составлять значительную часть нашего ежедневного рациона. В этой статье мы рассмотрим 10 веских причин, почему стоит увеличить потребление овощей.</p>

      <h2>1. Богатый источник витаминов и минералов</h2>
      <p>Овощи содержат множество важных витаминов и минералов, необходимых для нормального функционирования организма. Витамин C в болгарском перце, фолиевая кислота в шпинате, калий в помидорах - все это помогает поддерживать здоровье.</p>

      <h2>2. Высокое содержание клетчатки</h2>
      <p>Клетчатка в овощах способствует нормальному пищеварению, помогает контролировать уровень сахара в крови и снижает риск сердечно-сосудистых заболеваний.</p>

      <h2>3. Низкая калорийность</h2>
      <p>Большинство овощей содержат мало калорий, что делает их идеальными для поддержания здорового веса. Вы можете есть их в больших количествах, не беспокоясь о лишних калориях.</p>

      <h2>4. Антиоксидантные свойства</h2>
      <p>Овощи богаты антиоксидантами, которые защищают клетки от повреждения свободными радикалами и могут снизить риск развития рака и других хронических заболеваний.</p>

      <h2>5. Поддержка иммунной системы</h2>
      <p>Витамины и минералы в овощах укрепляют иммунную систему, помогая организму бороться с инфекциями и болезнями.</p>

      <h2>6. Улучшение состояния кожи</h2>
      <p>Витамины A, C и E в овощах способствуют здоровью кожи, делая ее более упругой и сияющей.</p>

      <h2>7. Поддержка здоровья сердца</h2>
      <p>Регулярное потребление овощей связано со снижением риска сердечно-сосудистых заболеваний благодаря содержанию калия, магния и других полезных веществ.</p>

      <h2>8. Улучшение пищеварения</h2>
      <p>Клетчатка в овощах способствует здоровому пищеварению и может помочь предотвратить запоры.</p>

      <h2>9. Естественная детоксикация</h2>
      <p>Многие овощи помогают печени в процессе детоксикации, очищая организм от вредных веществ.</p>

      <h2>10. Разнообразие вкусов и текстур</h2>
      <p>Овощи предлагают невероятное разнообразие вкусов, цветов и текстур, делая питание более интересным и приятным.</p>

      <h2>Заключение</h2>
      <p>Включение большего количества овощей в ваш рацион - это простой и эффективный способ улучшить здоровье. Начните с малого: добавьте дополнительную порцию овощей к каждому приему пищи, и вы скоро почувствуете разницу!</p>
    `,
    author: 'Анна Петрова',
    date: '15 декабря 2024',
    category: 'Здоровье',
    readTime: '5 мин',
    views: 1250,
    likes: 89,
    comments: 23,
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['здоровье', 'питание', 'овощи', 'витамины', 'диета']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Сезонные овощи зимой: что выбрать?',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '12 декабря 2024'
    },
    {
      id: 3,
      title: 'Органические продукты: мифы и реальность',
      image: 'https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '10 декабря 2024'
    },
    {
      id: 4,
      title: 'Как правильно хранить овощи и фрукты',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '8 декабря 2024'
    }
  ];

  const comments = [
    {
      id: 1,
      author: 'Мария К.',
      date: '16 декабря 2024',
      text: 'Отличная статья! Очень полезная информация. Теперь буду стараться есть больше овощей.',
      likes: 5
    },
    {
      id: 2,
      author: 'Алексей П.',
      date: '16 декабря 2024',
      text: 'Спасибо за подробное объяснение пользы овощей. Особенно понравился пункт про антиоксиданты.',
      likes: 3
    },
    {
      id: 3,
      author: 'Елена С.',
      date: '15 декабря 2024',
      text: 'Всегда знала, что овощи полезны, но не знала насколько! Буду рекомендовать статью друзьям.',
      likes: 7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/blog" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Вернуться к блогу
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="mb-4">
                <Badge className="bg-green-600">{post.category}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime} чтения
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    {post.views}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    {post.likes}
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Теги:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">#{tag}</Badge>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{post.author}</h3>
                    <p className="text-gray-600">Эксперт по здоровому питанию</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Специалист с 10-летним опытом в области диетологии и здорового питания. 
                      Автор более 50 статей о пользе овощей и фруктов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Комментарии ({post.comments})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold">
                            {comment.author.charAt(0)}
                          </div>
                          <span className="font-semibold">{comment.author}</span>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </Button>
                      </div>
                      <p className="text-gray-700 ml-10">{comment.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4">Оставить комментарий</h4>
                  <div className="space-y-4">
                    <textarea 
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={4}
                      placeholder="Ваш комментарий..."
                    />
                    <Button className="bg-green-600 hover:bg-green-700">
                      Отправить комментарий
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Related Posts */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Похожие статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                      <div className="flex space-x-3">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Подписка на блог</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте новые статьи о здоровом питании на email
                </p>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="w-full p-2 border rounded-lg"
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;