import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  School, 
  Users, 
  Brain, 
  Database, 
  Atom, 
  Globe,
  Calculator,
  MessageSquare,
  UserPlus,
  BarChart,
  Microscope,
  Rocket,
  Award
} from "lucide-react";
import { useState } from "react";

interface LearningProcessProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const LearningProcess = ({ title, icon, description }: LearningProcessProps) => (
  <div className="flex gap-4 items-start">
    <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-lg mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Education = () => {
  const [activeTab, setActiveTab] = useState("school");

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
                Образование в <span className="vr-gradient-text">VRA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                От начальной школы до аспирантуры – непрерывный путь образования 
                с использованием передовых VR/AR технологий
              </p>
              
              <div className="flex justify-center max-w-xl mx-auto">
                <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="school">
                      <BookOpen className="h-4 w-4 mr-2" /> Школа
                    </TabsTrigger>
                    <TabsTrigger value="university">
                      <GraduationCap className="h-4 w-4 mr-2" /> Университет
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Школьное образование */}
        <TabsContent value="school" className={activeTab === "school" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="Школьное образование в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "VR-технологии помогают нашим ученикам визуализировать сложные концепции и запоминать материал на 40% эффективнее."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Руководитель школьного отделения
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Школьное образование</h2>
                    <p className="text-muted-foreground">
                      В Virtual Reality Academy мы полностью переосмыслили традиционное школьное 
                      образование. Наши ученики изучают предметы не через сухие параграфы учебников, 
                      а через полное погружение в материал с помощью VR/AR технологий.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Наша школа включает:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <LearningProcess 
                        title="Начальное образование (1-4 классы)" 
                        icon={<BookOpen className="h-5 w-5" />}
                        description="Адаптированные для младших школьников VR/AR программы, делающие обучение игровым и увлекательным процессом."
                      />
                      <LearningProcess 
                        title="Основное общее образование (5-9 классы)" 
                        icon={<School className="h-5 w-5" />}
                        description="Углубленное изучение предметов с помощью иммерсивных технологий, развитие критического мышления и творческих способностей."
                      />
                      <LearningProcess 
                        title="Среднее общее образование (10-11 классы)" 
                        icon={<Users className="h-5 w-5" />}
                        description="Профильное обучение с использованием профессиональных VR-симуляций и подготовка к поступлению в университет."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vr-section">
            <div className="vr-container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="vr-heading mb-4">Как проходит обучение в VR-школе?</h2>
                <p className="vr-subheading">
                  Типичный учебный день в Virtual Reality Academy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Утренние занятия</h3>
                    <p className="text-muted-foreground mb-4">
                      Ученики надевают VR-гарнитуры для изучения основных предметов. 
                      Например, на уроке биологии они погружаются внутрь клетки, 
                      наблюдая за процессами в 3D.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-purple">•</span>
                        <span>Интерактивные VR-уроки по основным предметам</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-purple">•</span>
                        <span>Индивидуальная адаптация материала</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-purple">•</span>
                        <span>Виртуальные учебные экскурсии</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Практические занятия</h3>
                    <p className="text-muted-foreground mb-4">
                      После теоретической части ученики применяют полученные знания 
                      в виртуальных лабораториях и интерактивных проектах.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Виртуальные лаборатории по физике и химии</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Создание 3D моделей и проектов в AR</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Командные симуляции исторических событий</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Проектная работа</h3>
                    <p className="text-muted-foreground mb-4">
                      Важная часть обучения – работа над междисциплинарными 
                      проектами в VR/AR среде с одноклассниками.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Групповые проекты в виртуальной среде</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Развитие коммуникативных навыков</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Презентации результатов в смешанной реальности</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Изучаемые предметы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><Atom className="h-5 w-5" /></div>
                    <div>Физика и химия в VR</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><Calculator className="h-5 w-5" /></div>
                    <div>Математика и геометрия</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><Microscope className="h-5 w-5" /></div>
                    <div>Биология и естествознание</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><Globe className="h-5 w-5" /></div>
                    <div>История и география</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple"><MessageSquare className="h-5 w-5" /></div>
                    <div>Языки и литература</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue"><Rocket className="h-5 w-5" /></div>
                    <div>Информатика и 3D-моделирование</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-purple-dark"><UserPlus className="h-5 w-5" /></div>
                    <div>Социальные навыки</div>
                  </div>
                  <div className="vr-card p-4 flex gap-3 items-center">
                    <div className="text-vra-blue-dark"><BarChart className="h-5 w-5" /></div>
                    <div>Проектная деятельность</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                    Подать заявку на поступление <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Университетское образование */}
        <TabsContent value="university" className={activeTab === "university" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Университетское образование</h2>
                    <p className="text-muted-foreground">
                      Университет VRA предлагает инновационный подход к высшему образованию, 
                      где студенты обучаются через полное погружение в профессиональные VR-симуляции 
                      и работают над реальными проектами в виртуальной среде.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Наш университет включает:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <LearningProcess 
                        title="Бакалавриат (4 года)" 
                        icon={<School className="h-5 w-5" />}
                        description="Основательная база знаний и практических навыков через VR-симуляции профессиональных ситуаций и проектную работу."
                      />
                      <LearningProcess 
                        title="Магистратура (2 года)" 
                        icon={<GraduationCap className="h-5 w-5" />}
                        description="Специализация и углубление в выбранной области с использованием передовых VR/AR инструментов для исследований."
                      />
                      <LearningProcess 
                        title="Аспирантура (3-4 года)" 
                        icon={<Award className="h-5 w-5" />}
                        description="Научно-исследовательская работа с применением иммерсивных технологий для моделирования сложных систем и процессов."
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="Университетское образование в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "Наши выпускники обладают уникальным опытом работы в виртуальных средах, что делает их востребованными специалистами на рынке труда."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Декан университета VRA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vr-section">
            <div className="vr-container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="vr-heading mb-4">Образовательный процесс в университете</h2>
                <p className="vr-subheading">
                  Как организовано обучение в Virtual Reality Academy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Теоретические лекции</h3>
                    <p className="text-muted-foreground mb-4">
                      Лекции проходят в виртуальных аудиториях с 3D-визуализацией 
                      изучаемых процессов и моделей прямо во время объяснения материала.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-purple">•</span>
                        <span>Интерактивные 3D-модели и схемы</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-purple">•</span>
                        <span>Возможность "увеличивать" детали изучаемых объектов</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-purple">•</span>
                        <span>Запись и повторный просмотр материалов в VR</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Лабораторные работы</h3>
                    <p className="text-muted-foreground mb-4">
                      Студенты выполняют эксперименты в виртуальных лабораториях, 
                      моделируя сложные процессы без ограничений реального мира.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Безопасные симуляции опасных экспериментов</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Работа с дорогостоящим оборудованием в VR</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Неограниченный доступ к материалам и ресурсам</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Проектная работа</h3>
                    <p className="text-muted-foreground mb-4">
                      Командная работа над реальными проектами в виртуальных хабах, 
                      взаимодействие со студентами и экспертами со всего мира.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Международные виртуальные коллаборации</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Работа над проектами для реальных заказчиков</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Менторство от ведущих специалистов в VR-среде</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-8">
                <h3 className="text-2xl font-semibold text-center">Направления подготовки</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-vra-purple">Технические направления</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple"></div>
                          <span>Разработка VR/AR приложений</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple"></div>
                          <span>Инженерное моделирование в VR</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple"></div>
                          <span>Робототехника и VR-симуляции</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple"></div>
                          <span>Архитектура и виртуальное проектирование</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple"></div>
                          <span>Искусственный интеллект и иммерсивные технологии</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-vra-blue">Естественнонаучные направления</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue"></div>
                          <span>Молекулярная биология в VR</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue"></div>
                          <span>Медицина и анатомические VR-модели</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue"></div>
                          <span>Физика элементарных частиц и космология</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue"></div>
                          <span>Химические процессы и моделирование</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue"></div>
                          <span>Экология и моделирование экосистем</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-vra-blue-dark">Гуманитарные направления</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue-dark"></div>
                          <span>История в иммерсивных реконструкциях</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue-dark"></div>
                          <span>Психология и VR-терапия</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue-dark"></div>
                          <span>Лингвистика и виртуальное языковое погружение</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue-dark"></div>
                          <span>Социология и моделирование общественных процессов</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-blue-dark"></div>
                          <span>Педагогика иммерсивного образования</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4 text-vra-purple-dark">Творческие направления</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple-dark"></div>
                          <span>Виртуальное искусство и 3D-скульптура</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple-dark"></div>
                          <span>Иммерсивная кинематография</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple-dark"></div>
                          <span>Дизайн виртуальных пространств</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple-dark"></div>
                          <span>Интерактивная музыка и звуковой дизайн</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-vra-purple-dark"></div>
                          <span>Игровое проектирование и нарративный дизайн</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                    Подать заявку на поступление <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </TabsContent>
      </main>
      <Footer />
    </div>
  );
};

export default Education;