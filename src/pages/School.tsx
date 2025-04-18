import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  Brain, 
  BarChart, 
  Users, 
  Clock, 
  Calendar, 
  Sparkles,
  Globe,
  Calculator,
  Microscope,
  Palette,
  MusicIcon,
  Code,
  Languages,
  Award,
  Dumbbell,
  Baseline,
  Building2,
  LineChart,
  Laptop,
  Compass,
  Atom,
  BookText
} from "lucide-react";

const School = () => {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "primary");

  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

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
                Школьное образование <span className="vr-gradient-text">нового поколения</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                В Virtual Reality Academy дети получают знания через полное погружение 
                в материал с помощью современных VR/AR технологий
              </p>
              
              <div className="flex justify-center max-w-xl mx-auto">
                <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="primary">
                      <BookOpen className="h-4 w-4 mr-2" /> Начальное
                    </TabsTrigger>
                    <TabsTrigger value="middle">
                      <Brain className="h-4 w-4 mr-2" /> Основное общее
                    </TabsTrigger>
                    <TabsTrigger value="high">
                      <BarChart className="h-4 w-4 mr-2" /> Среднее общее
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Начальное образование (1-4 классы) */}
        <TabsContent value="primary" className={activeTab === "primary" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Начальное образование (1-4 классы)</h2>
                    <p className="text-muted-foreground">
                      Для младших школьников мы создали волшебный мир знаний, где обучение 
                      превращается в захватывающее приключение. VR-технологии позволяют детям 
                      изучать окружающий мир через игровые сценарии и интерактивные истории, 
                      делая процесс познания естественным и увлекательным.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Особенности начального образования в VRA:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Игровое обучение</h4>
                          <p className="text-muted-foreground">
                            Образовательные игры в виртуальной реальности, где дети учатся читать, 
                            считать и познавать мир через интерактивные истории и квесты.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Социализация в безопасной среде</h4>
                          <p className="text-muted-foreground">
                            Виртуальные групповые активности, развивающие навыки общения и 
                            сотрудничества в контролируемой среде.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Персонализированный подход</h4>
                          <p className="text-muted-foreground">
                            Адаптация скорости и методов обучения под индивидуальные особенности 
                            каждого ребенка с мгновенной обратной связью.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="Начальное образование в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "В VRA мои дети не просто учатся — они путешествуют по волшебным мирам, где математика и чтение становятся увлекательным приключением."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Родитель ученика 3 класса
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vr-section">
            <div className="vr-container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="vr-heading mb-4">Учебный день младшего школьника</h2>
                <p className="vr-subheading">
                  Как проходит обучение в начальных классах VRA
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Расписание занятий</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Начало занятий:</span>
                        <span className="font-medium">9:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Продолжительность урока:</span>
                        <span className="font-medium">35 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Перемены между уроками:</span>
                        <span className="font-medium">15 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Обеденный перерыв:</span>
                        <span className="font-medium">40 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Количество уроков в день:</span>
                        <span className="font-medium">4-5</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Окончание занятий:</span>
                        <span className="font-medium">13:30-14:30</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Структура уроков</h3>
                    <p className="text-muted-foreground mb-4">
                      Каждый урок разделен на короткие интерактивные блоки, учитывающие 
                      особенности внимания младших школьников:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>10 мин: Погружение в тему через VR-историю</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>15 мин: Интерактивные задания в VR/AR</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>5 мин: Мини-игра для закрепления материала</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>5 мин: Персонализированная обратная связь</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Учебная неделя</h3>
                    <p className="text-muted-foreground mb-4">
                      Учебная неделя в начальной школе VRA включает:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Пн-Пт: Основные предметы с использованием VR/AR</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Среда: День проектной деятельности</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Пятница: Групповые VR-экскурсии</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Еженедельные виртуальные встречи с родителями</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Предметы начальной школы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><BookOpen className="h-5 w-5" /></div>
                    <div>Русский язык и литературное чтение</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><Calculator className="h-5 w-5" /></div>
                    <div>Математика</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><Globe className="h-5 w-5" /></div>
                    <div>Окружающий мир</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><Languages className="h-5 w-5" /></div>
                    <div>Иностранный язык (со 2 класса)</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><MusicIcon className="h-5 w-5" /></div>
                    <div>Музыка</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><Palette className="h-5 w-5" /></div>
                    <div>Изобразительное искусство</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><Users className="h-5 w-5" /></div>
                    <div>Технология</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><Sparkles className="h-5 w-5" /></div>
                    <div>VR-проектирование</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Примеры VR-активностей</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Путешествие по буквам</h4>
                      <p className="text-muted-foreground mb-3">
                        Интерактивная VR-среда, где каждая буква оживает в виде персонажа или предмета, 
                        помогая детям запоминать алфавит через эмоциональные ассоциации.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Длительность:</span> 15-20 минут
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Предмет:</span> Русский язык
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Математический лес</h4>
                      <p className="text-muted-foreground mb-3">
                        Виртуальное пространство, где дети решают примеры, собирая фрукты с деревьев, 
                        строя мосты через реки и помогая лесным жителям.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Длительность:</span> 20-25 минут
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Предмет:</span> Математика
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Основное общее образование (5-9 классы) */}
        <TabsContent value="middle" className={activeTab === "middle" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="Основное общее образование в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "VR-лаборатория позволяет мне проводить любые эксперименты и видеть молекулярные процессы изнутри. Это полностью изменило мое отношение к химии."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Ученик 8 класса
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 order-1 lg:order-2">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Основное общее образование (5-9 классы)</h2>
                    <p className="text-muted-foreground">
                      В средней школе VRA учебный процесс строится на сочетании фундаментальной теоретической 
                      подготовки и практического применения знаний в виртуальной среде. Подростки изучают 
                      предметы через углубленное погружение, работу над проектами и научно-исследовательскую деятельность.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Особенности основного общего образования в VRA:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <Microscope className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Виртуальные лаборатории</h4>
                          <p className="text-muted-foreground">
                            Проведение научных экспериментов в VR-средах, моделирование физических, 
                            химических и биологических процессов с возможностью детального изучения.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Иммерсивные экскурсии</h4>
                          <p className="text-muted-foreground">
                            Виртуальные путешествия в разные эпохи и страны, посещение исторических событий, 
                            знаменитых музеев и природных объектов в рамках учебной программы.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Проектная деятельность</h4>
                          <p className="text-muted-foreground">
                            Разработка индивидуальных и групповых проектов с использованием VR/AR технологий, 
                            развитие критического мышления и навыков командной работы.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vr-section">
            <div className="vr-container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="vr-heading mb-4">Организация учебного процесса</h2>
                <p className="vr-subheading">
                  Как построен учебный день в 5-9 классах VRA
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Расписание занятий</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Начало занятий:</span>
                        <span className="font-medium">8:30</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Продолжительность урока:</span>
                        <span className="font-medium">40 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Перемены между уроками:</span>
                        <span className="font-medium">10-15 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Обеденный перерыв:</span>
                        <span className="font-medium">45 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Количество уроков в день:</span>
                        <span className="font-medium">5-7</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Окончание занятий:</span>
                        <span className="font-medium">14:30-16:00</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Структура уроков</h3>
                    <p className="text-muted-foreground mb-4">
                      Уроки в средней школе построены по модульному принципу:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>10 мин: Теоретическое введение и постановка задач</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>20 мин: Практическая работа в VR/AR-среде</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>5 мин: Обсуждение результатов</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>5 мин: Задание для самостоятельной работы</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Учебная неделя</h3>
                    <p className="text-muted-foreground mb-4">
                      Структура учебной недели в 5-9 классах:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Пн-Пт: Основные предметы по расписанию</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Вторник и четверг: Проектные дни (работа над долгосрочными проектами)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Среда: "День науки" с углубленным изучением STEM-дисциплин</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Еженедельные мини-конференции с презентацией проектов</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Предметы основной школы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><BookOpen className="h-5 w-5" /></div>
                    <div>Русский язык и литература</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><Calculator className="h-5 w-5" /></div>
                    <div>Математика (алгебра, геометрия)</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><Languages className="h-5 w-5" /></div>
                    <div>Иностранные языки</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><BookText className="h-5 w-5" /></div>
                    <div>История и обществознание</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><Atom className="h-5 w-5" /></div>
                    <div>Физика</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><Microscope className="h-5 w-5" /></div>
                    <div>Химия и биология</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><Globe className="h-5 w-5" /></div>
                    <div>География</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><Laptop className="h-5 w-5" /></div>
                    <div>Информатика</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><Palette className="h-5 w-5" /></div>
                    <div>Искусство</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><MusicIcon className="h-5 w-5" /></div>
                    <div>Музыка</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><Dumbbell className="h-5 w-5" /></div>
                    <div>Физическая культура</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><Code className="h-5 w-5" /></div>
                    <div>VR/AR-разработка</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Примеры VR-активностей</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Виртуальная историческая реконструкция</h4>
                      <p className="text-muted-foreground mb-3">
                        Погружение в реконструированные исторические события и эпохи, где ученики могут 
                        взаимодействовать с историческими личностями и исследовать древние цивилизации.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Длительность:</span> 30-40 минут
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Предмет:</span> История
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Химическая VR-лаборатория</h4>
                      <p className="text-muted-foreground mb-3">
                        Виртуальная среда для проведения химических экспериментов, где ученики могут 
                        безопасно смешивать реактивы, наблюдать за молекулярными процессами и изучать 
                        строение веществ.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Длительность:</span> 35-45 минут
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Предмет:</span> Химия
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Среднее общее образование (10-11 классы) */}
        <TabsContent value="high" className={activeTab === "high" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Среднее общее образование (10-11 классы)</h2>
                    <p className="text-muted-foreground">
                      Старшая школа VRA — это профильное обучение с глубоким погружением в выбранные 
                      предметы и специальности. Ученики 10-11 классов проходят подготовку к поступлению 
                      в университет, развивают профессиональные навыки и работают над реальными 
                      индустриальными проектами в виртуальной среде.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Особенности среднего общего образования в VRA:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <LineChart className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Профильное обучение</h4>
                          <p className="text-muted-foreground">
                            Индивидуальные образовательные траектории с углубленным изучением выбранных 
                            предметов и специализаций в соответствии с будущей профессией.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Сотрудничество с индустрией</h4>
                          <p className="text-muted-foreground">
                            Работа над реальными проектами в партнерстве с ведущими компаниями, 
                            стажировки и менторство от профессионалов через виртуальные встречи.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <Compass className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Подготовка к университету</h4>
                          <p className="text-muted-foreground">
                            Целенаправленная подготовка к поступлению в высшие учебные заведения, 
                            включая виртуальные экскурсии по университетам и профориентационные VR-программы.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="Среднее общее образование в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "Благодаря проектной работе в виртуальной инженерной лаборатории я уже на школьной скамье освоил профессиональные навыки и поступил в технический вуз с реальным портфолио."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Выпускник 11 класса
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vr-section">
            <div className="vr-container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="vr-heading mb-4">Организация учебного процесса</h2>
                <p className="vr-subheading">
                  Как построено обучение в старшей школе VRA
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Расписание занятий</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Начало занятий:</span>
                        <span className="font-medium">8:30</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Продолжительность урока:</span>
                        <span className="font-medium">45 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Перемены между уроками:</span>
                        <span className="font-medium">10-15 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Обеденный перерыв:</span>
                        <span className="font-medium">50 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Количество уроков в день:</span>
                        <span className="font-medium">6-8</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Окончание занятий:</span>
                        <span className="font-medium">15:00-16:30</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Структура обучения</h3>
                    <p className="text-muted-foreground mb-4">
                      Учебный процесс в старшей школе организован по университетской модели:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Лекции: онлайн и в VR-формате (15-20% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Семинары и практикумы (30-35% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Лабораторные работы в VR (25-30% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Проектная работа (20-25% времени)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Академический год</h3>
                    <p className="text-muted-foreground mb-4">
                      Организация учебного года в старшей школе:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Модульная система обучения (4 модуля по 8-9 недель)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Проектные сессии в конце каждого модуля</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Летние и зимние интенсивы по выбранным направлениям</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Двухнедельная виртуальная стажировка у партнеров</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Профильные направления</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                        <Atom className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Естественно-научный профиль</h4>
                      <p className="text-muted-foreground mb-4">
                        Углубленное изучение физики, химии, биологии и математики с использованием 
                        продвинутых VR-лабораторий и симуляций научных экспериментов.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые предметы:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Физика</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Химия</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Биология</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Математика</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                        <Code className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Технологический профиль</h4>
                      <p className="text-muted-foreground mb-4">
                        Фокус на информатике, программировании, VR/AR-разработке и инженерных дисциплинах 
                        с проектной работой над практическими технологическими решениями.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые предметы:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Информатика</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Программирование</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>VR/AR-разработка</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Физика</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Социально-экономический профиль</h4>
                      <p className="text-muted-foreground mb-4">
                        Изучение экономики, права, географии и иностранных языков с использованием VR-симуляций 
                        экономических процессов и международных переговоров.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые предметы:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Экономика</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Право</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>География</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Иностранные языки</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple-dark/10 flex items-center justify-center mb-4 text-vra-purple-dark">
                        <BookText className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Гуманитарный профиль</h4>
                      <p className="text-muted-foreground mb-4">
                        Углубленное изучение литературы, истории, языков и искусства с иммерсивными историческими 
                        реконструкциями и виртуальными литературными мирами.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые предметы:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Литература</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>История</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Иностранные языки</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Мировая художественная культура</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Примеры профильных VR-активностей</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Виртуальная экономическая симуляция</h4>
                      <p className="text-muted-foreground mb-3">
                        Комплексная деловая игра, где ученики управляют виртуальными компаниями, анализируют 
                        рыночные тренды и принимают стратегические решения в условиях меняющейся экономической среды.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Длительность:</span> Семестровый проект
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Профиль:</span> Социально-экономический
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Инженерная VR-лаборатория</h4>
                      <p className="text-muted-foreground mb-3">
                        Проектирование и испытание инженерных конструкций в виртуальной среде, 
                        моделирование физических процессов и прототипирование технических решений.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Длительность:</span> 90 минут
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Профиль:</span> Технологический
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Призыв к действию */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="vr-heading mb-6">Начните образовательное путешествие в VRA</h2>
              <p className="vr-subheading mb-10">
                Присоединяйтесь к нашей школе и откройте для своего ребенка
                мир образования нового поколения
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                    Подать заявку <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-vra-purple/50 hover:border-vra-purple">
                    Записаться на консультацию
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default School;