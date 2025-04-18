import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  SendIcon
} from "lucide-react";

const Contacts = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, topic: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка формы:", formState);
    // Сброс формы или отображение сообщения об успешной отправке
    alert("Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormState({
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Герой-секция */}
        <section className="vr-section relative pt-20 md:pt-24">
          {/* Градиентные круги */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-vra-purple/10 blur-3xl -z-10 animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-vra-blue/15 blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>

          <div className="vr-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Связаться с <span className="vr-gradient-text">VRA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Мы всегда готовы ответить на ваши вопросы и предоставить дополнительную информацию 
                о наших образовательных программах и технологиях
              </p>
            </div>
          </div>
        </section>

        {/* Контактная информация и форма */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Форма обратной связи */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Иван Иванов" 
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="your@email.com" 
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            placeholder="+7 (XXX) XXX-XX-XX" 
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="topic">Тема обращения</Label>
                        <Select value={formState.topic} onValueChange={handleSelectChange}>
                          <SelectTrigger id="topic">
                            <SelectValue placeholder="Выберите тему обращения" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admission">Поступление</SelectItem>
                            <SelectItem value="programs">Информация о программах</SelectItem>
                            <SelectItem value="technologies">VR/AR технологии</SelectItem>
                            <SelectItem value="partnership">Партнерство</SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Ваш вопрос или сообщение..." 
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90"
                      >
                        Отправить сообщение
                        <SendIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Контактная информация */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
                
                <div className="space-y-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                          <p className="text-muted-foreground">ул. Виртуальная, 42, г. Москва, 123456</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Ближайшие станции метро: Технологическая, Инновационная
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                          <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Приемная комиссия: +7 (999) 765-43-21
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email</h3>
                          <p className="text-muted-foreground">info@vracademy.ru</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Приемная комиссия: admission@vracademy.ru
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple-dark/10 flex-shrink-0 flex items-center justify-center text-vra-purple-dark">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                          <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                          <p className="text-muted-foreground">Сб: 10:00 - 16:00 (только приемная комиссия)</p>
                          <p className="text-muted-foreground">Вс: выходной</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Социальные сети</h3>
                          <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-muted-foreground hover:text-vra-purple transition-colors">
                              <Facebook size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-vra-blue transition-colors">
                              <Twitter size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-vra-purple-dark transition-colors">
                              <Instagram size={20} />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-vra-blue-dark transition-colors">
                              <Linkedin size={20} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Карта */}
        <section className="vr-section">
          <div className="vr-container">
            <h2 className="text-3xl font-bold mb-6 text-center">Как нас найти</h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              {/* В реальном проекте здесь будет интеграция с картой (Яндекс Карты, Google Maps) */}
              <div className="w-full h-full bg-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-vra-purple mx-auto mb-4" />
                  <p className="text-lg font-medium">Здесь будет карта с расположением VRA</p>
                  <p className="text-muted-foreground">ул. Виртуальная, 42, г. Москва, 123456</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Часто задаваемые вопросы</h2>
              <p className="vr-subheading">
                Ответы на наиболее распространенные вопросы о VRA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="vr-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Какое оборудование требуется для обучения в VRA?</h3>
                  <p className="text-muted-foreground">
                    Для очного обучения все необходимое оборудование предоставляется академией. 
                    Для дистанционного формата мы предоставляем рекомендации по минимальным требованиям 
                    к компьютеру и VR-гарнитуре.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="vr-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Можно ли поступить в VRA без опыта работы с VR/AR?</h3>
                  <p className="text-muted-foreground">
                    Да, предыдущий опыт не требуется. Мы проводим вводные курсы и тренинги для 
                    новых студентов, чтобы они быстро освоились с технологиями.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="vr-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Выдаются ли государственные дипломы?</h3>
                  <p className="text-muted-foreground">
                    Да, VRA имеет государственную аккредитацию и выдает дипломы государственного образца 
                    по всем основным образовательным программам.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="vr-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Есть ли у вас программы для детей с особыми образовательными потребностями?</h3>
                  <p className="text-muted-foreground">
                    Да, мы разрабатываем адаптированные VR/AR программы для детей с различными 
                    образовательными потребностями, создавая инклюзивную среду обучения.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;