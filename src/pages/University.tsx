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
  GraduationCap, 
  Award, 
  BrainCircuit, 
  Users, 
  Clock, 
  Calendar, 
  Sparkles,
  Globe,
  Building2,
  Calculator,
  Microscope,
  Palette,
  MusicIcon,
  Code,
  Languages,
  Rocket,
  Lightbulb,
  BookOpen,
  Building,
  Network,
  BarChart,
  Laptop,
  FileCode,
  FlaskConical,
  Atoms
} from "lucide-react";

const University = () => {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "bachelor");

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
                Университет <span className="vr-gradient-text">Virtual Reality Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Высшее образование в иммерсивной среде: глубокое погружение в профессию
                через технологии виртуальной и дополненной реальности
              </p>
              
              <div className="flex justify-center max-w-xl mx-auto">
                <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="bachelor">
                      <GraduationCap className="h-4 w-4 mr-2" /> Бакалавриат
                    </TabsTrigger>
                    <TabsTrigger value="master">
                      <Award className="h-4 w-4 mr-2" /> Магистратура
                    </TabsTrigger>
                    <TabsTrigger value="phd">
                      <BrainCircuit className="h-4 w-4 mr-2" /> Аспирантура
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Бакалавриат */}
        <TabsContent value="bachelor" className={activeTab === "bachelor" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Бакалавриат VRA</h2>
                    <p className="text-muted-foreground">
                      Программы бакалавриата в Virtual Reality Academy сочетают фундаментальное 
                      академическое образование с глубоким практическим погружением в профессию 
                      через иммерсивные технологии. Наши студенты не просто изучают теорию, 
                      а проживают её в виртуальной среде, отрабатывая практические навыки 
                      в условиях, максимально приближенных к реальным.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Особенности бакалавриата в VRA:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Практико-ориентированное обучение</h4>
                          <p className="text-muted-foreground">
                            Более 60% учебного времени отводится на практические занятия в виртуальных 
                            лабораториях и профессиональных симуляторах.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Индивидуальная образовательная траектория</h4>
                          <p className="text-muted-foreground">
                            Возможность формирования персонального учебного плана с выбором 
                            специализаций и факультативов в соответствии с карьерными целями.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <Network className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Работа над реальными проектами</h4>
                          <p className="text-muted-foreground">
                            Сотрудничество с компаниями-партнерами, выполнение актуальных отраслевых 
                            задач и стажировки с первого курса.
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
                      alt="Бакалавриат в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "Виртуальные практикумы дали мне больше практического опыта за 4 года обучения, чем многие получают за 5-7 лет работы в отрасли."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Выпускник бакалавриата VRA
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
                  Как построено обучение на программах бакалавриата
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
                        <span>Продолжительность пары:</span>
                        <span className="font-medium">90 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Перерывы между парами:</span>
                        <span className="font-medium">15-20 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Большой перерыв:</span>
                        <span className="font-medium">40 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Количество пар в день:</span>
                        <span className="font-medium">3-4</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Учебные дни:</span>
                        <span className="font-medium">Пн-Пт</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Формат:</span>
                        <span className="font-medium">Очный, гибридный</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Структура обучения</h3>
                    <p className="text-muted-foreground mb-4">
                      Образовательный процесс включает:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Лекции: традиционные и VR-формат (25% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Семинары и практикумы (35% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>VR-лаборатории и симуляции (25% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Проектная работа (15% времени)</span>
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
                      Организация учебного года:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>2 семестра по 16 недель</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Сессии: зимняя (январь) и летняя (июнь)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Производственная практика: 4-6 недель (лето)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Каникулы: зимние (2 недели) и летние (6-8 недель)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Направления подготовки бакалавриата</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                        <FileCode className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Информационные технологии и VR/AR-разработка</h4>
                      <p className="text-muted-foreground mb-4">
                        Подготовка специалистов в области создания программного обеспечения, 
                        иммерсивных технологий, машинного обучения и искусственного интеллекта.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Профили:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Разработка виртуальной и дополненной реальности</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Искусственный интеллект и машинное обучение</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Программная инженерия</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                        <Rocket className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Инженерные науки</h4>
                      <p className="text-muted-foreground mb-4">
                        Программы для будущих инженеров, проектировщиков и конструкторов с использованием 
                        передовых VR-симуляторов для моделирования инженерных систем.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Профили:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Робототехника и механика</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Проектирование и конструирование</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Энергетика и автоматизация</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                        <FlaskConical className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Естественные науки</h4>
                      <p className="text-muted-foreground mb-4">
                        Подготовка ученых и исследователей в области физики, химии, биологии и 
                        экологии с применением иммерсивных лабораторий и симуляций.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Профили:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Молекулярная биология и генетика</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Физика и астрономия</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Экология и природопользование</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple-dark/10 flex items-center justify-center mb-4 text-vra-purple-dark">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Образование и педагогика VR/AR</h4>
                      <p className="text-muted-foreground mb-4">
                        Подготовка преподавателей нового поколения, способных создавать и применять 
                        иммерсивные образовательные технологии и методики.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Профили:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Иммерсивная педагогика</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Разработка VR/AR образовательного контента</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Цифровые образовательные технологии</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Пример иммерсивного курса</h3>
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <h4 className="font-semibold text-lg mb-3">VR-лаборатория по молекулярной биологии</h4>
                        <div className="text-sm text-muted-foreground mb-3 space-y-2">
                          <div>
                            <span className="font-medium">Курс:</span> Основы молекулярной биологии
                          </div>
                          <div>
                            <span className="font-medium">Семестр:</span> 3-й
                          </div>
                          <div>
                            <span className="font-medium">Длительность:</span> 16 недель
                          </div>
                          <div>
                            <span className="font-medium">Формат:</span> Лекции + VR-практикумы
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-muted-foreground mb-3">
                          Курс позволяет студентам погрузиться в мир клеток и молекул, где они могут 
                          наблюдать и взаимодействовать с ДНК, белками и клеточными структурами 
                          в масштабе, недоступном в традиционных лабораториях.
                        </p>
                        <p className="text-muted-foreground mb-3">
                          Студенты проводят виртуальные эксперименты по клонированию генов, редактированию 
                          ДНК с помощью CRISPR-Cas9, наблюдают за экспрессией генов и работой белковых комплексов 
                          в режиме реального времени.
                        </p>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Результаты обучения:</span> Глубокое понимание молекулярных 
                          процессов в клетке, практические навыки работы с генетическим материалом, 
                          понимание принципов биоинженерии и генной терапии.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Магистратура */}
        <TabsContent value="master" className={activeTab === "master" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/placeholder.svg" 
                      alt="Магистратура в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "Магистратура в VRA позволила мне совмещать глубокое изучение теории с немедленной проверкой идей в виртуальной среде. За два года я запустил собственный стартап в области VR-коммуникаций."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Выпускник магистратуры
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 order-1 lg:order-2">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Магистратура VRA</h2>
                    <p className="text-muted-foreground">
                      Программы магистратуры в Virtual Reality Academy предлагают углубленное 
                      изучение выбранной специальности с сильным исследовательским компонентом 
                      и фокусом на инновации. Наши магистранты не только получают передовые 
                      знания, но и активно участвуют в создании новых решений в своей области, 
                      используя возможности иммерсивных технологий.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Особенности магистратуры в VRA:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Исследовательский фокус</h4>
                          <p className="text-muted-foreground">
                            Акцент на оригинальных исследованиях и разработке инновационных 
                            решений с использованием виртуальных лабораторий и прототипирования.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Междисциплинарность</h4>
                          <p className="text-muted-foreground">
                            Возможность комбинировать различные области знаний и выстраивать 
                            уникальные образовательные траектории на стыке дисциплин.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Индивидуальный подход</h4>
                          <p className="text-muted-foreground">
                            Работа с научным руководителем в формате менторства, развитие 
                            собственных исследовательских проектов с доступом к передовой 
                            VR/AR-инфраструктуре.
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
                  Как построено обучение на программах магистратуры
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
                        <span>Продолжительность пары:</span>
                        <span className="font-medium">90 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Перерывы между парами:</span>
                        <span className="font-medium">15-20 минут</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Количество пар в день:</span>
                        <span className="font-medium">2-3</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Учебные дни:</span>
                        <span className="font-medium">3-4 дня в неделю</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Остальное время:</span>
                        <span className="font-medium">Исследования, проекты</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Форматы:</span>
                        <span className="font-medium">Очный, гибридный, онлайн</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Структура обучения</h3>
                    <p className="text-muted-foreground mb-4">
                      Образовательный процесс включает:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Лекции и семинары (30% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Научно-исследовательская работа (40% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Работа над магистерской диссертацией (20% времени)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Практика и стажировки (10% времени)</span>
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
                      Организация учебного года:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>2 семестра по 15 недель</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Научно-исследовательский семинар (еженедельно)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Научно-исследовательская практика (4-6 недель)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Педагогическая практика (2-4 недели)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Программы магистратуры</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                        <Laptop className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Передовые VR/AR-технологии</h4>
                      <p className="text-muted-foreground mb-4">
                        Исследования и разработка инновационных иммерсивных технологий, 
                        платформ и приложений следующего поколения.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые направления исследований:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Нейроинтерфейсы для VR/AR</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Тактильная обратная связь в виртуальных мирах</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Иммерсивные социальные платформы</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Иммерсивное образование</h4>
                      <p className="text-muted-foreground mb-4">
                        Исследование и разработка образовательных VR/AR-методик, 
                        педагогических подходов и учебных материалов нового поколения.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые направления исследований:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Когнитивные процессы в виртуальной среде</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Персонализированное VR/AR-обучение</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Оценка эффективности иммерсивного образования</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                        <Atoms className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Научные визуализации и моделирование</h4>
                      <p className="text-muted-foreground mb-4">
                        Исследование методов представления научной информации в иммерсивных средах
                        и создание интерактивных моделей сложных систем и процессов.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые направления исследований:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>VR для визуализации медицинских данных</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Интерактивное моделирование экосистем</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Визуализация данных большого объема</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple-dark/10 flex items-center justify-center mb-4 text-vra-purple-dark">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Индустриальные VR/AR-приложения</h4>
                      <p className="text-muted-foreground mb-4">
                        Разработка и внедрение решений виртуальной и дополненной реальности 
                        для промышленности, медицины, архитектуры и других отраслей.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Ключевые направления исследований:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>VR в проектировании и строительстве</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>AR-системы для промышленного обслуживания</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Иммерсивные технологии в медицине</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Научно-исследовательские лаборатории</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Лаборатория иммерсивных когнитивных исследований</h4>
                      <p className="text-muted-foreground mb-3">
                        Изучение влияния виртуальной реальности на восприятие, память, обучение и 
                        другие когнитивные функции с использованием нейромониторинга и биометрических данных.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Оборудование:</span> VR-шлемы с системами трекинга движения глаз, 
                        ЭЭГ-сенсоры, системы анализа физиологических данных.
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Центр разработки иммерсивных интерфейсов</h4>
                      <p className="text-muted-foreground mb-3">
                        Создание и тестирование революционных интерфейсов взаимодействия человека с 
                        виртуальными мирами, включая тактильные, голосовые и жестовые системы управления.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Оборудование:</span> Системы захвата движения, тактильные 
                        контроллеры, устройства обратной связи, голографические дисплеи.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Аспирантура */}
        <TabsContent value="phd" className={activeTab === "phd" ? "block" : "hidden"}>
          <section className="vr-section bg-card/30">
            <div className="vr-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Аспирантура VRA</h2>
                    <p className="text-muted-foreground">
                      Программы аспирантуры в Virtual Reality Academy направлены на подготовку 
                      ученых-исследователей и преподавателей высшей квалификации, способных 
                      проводить прорывные исследования в области иммерсивных технологий и 
                      формировать научную повестку в своей отрасли.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Особенности аспирантуры в VRA:</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                          <BrainCircuit className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Фронтир исследований</h4>
                          <p className="text-muted-foreground">
                            Работа на переднем крае науки с фокусом на инновационные направления, 
                            где иммерсивные технологии открывают новые исследовательские горизонты.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                          <Network className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Международная научная среда</h4>
                          <p className="text-muted-foreground">
                            Интеграция в глобальное научное сообщество через международные проекты, 
                            стажировки в ведущих научных центрах и виртуальные коллаборации.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                          <Rocket className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Инфраструктура мирового уровня</h4>
                          <p className="text-muted-foreground">
                            Доступ к передовым исследовательским лабораториям, вычислительным ресурсам 
                            и прототипам новейших иммерсивных технологий.
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
                      alt="Аспирантура в VRA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                    <p className="font-medium text-foreground mb-2">
                      "В аспирантуре VRA я получил уникальную возможность работать с технологиями, которые еще не вышли на рынок, и внести вклад в формирование будущего иммерсивных взаимодействий."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Аспирант 2-го года обучения
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="vr-section">
            <div className="vr-container">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="vr-heading mb-4">Организация научной работы</h2>
                <p className="vr-subheading">
                  Как построен научно-исследовательский процесс в аспирантуре
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Структура обучения</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Срок обучения:</span>
                        <span className="font-medium">3-4 года</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Образовательная часть:</span>
                        <span className="font-medium">1-й год</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Научно-исследовательская работа:</span>
                        <span className="font-medium">Весь период</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Педагогическая практика:</span>
                        <span className="font-medium">2-й и 3-й годы</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Работа над диссертацией:</span>
                        <span className="font-medium">С 1-го года</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Аттестации:</span>
                        <span className="font-medium">Каждые 6 месяцев</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Научная деятельность</h3>
                    <p className="text-muted-foreground mb-4">
                      Ключевые компоненты научной работы:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Еженедельные исследовательские семинары</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Ежеквартальные отчеты о прогрессе</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Участие в международных конференциях</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Публикации в рецензируемых журналах</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue">•</span>
                        <span>Стажировки в партнерских организациях</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Научное руководство</h3>
                    <p className="text-muted-foreground mb-4">
                      Система поддержки аспирантов:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Индивидуальный научный руководитель</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Еженедельные индивидуальные консультации</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Комитет из 3-4 экспертов для ежегодной оценки</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vra-blue-dark">•</span>
                        <span>Международные со-руководители для междисциплинарных тем</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Исследовательские направления</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                        <BrainCircuit className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Когнитивная наука и иммерсивные технологии</h4>
                      <p className="text-muted-foreground mb-4">
                        Исследование влияния VR/AR на когнитивные процессы, восприятие, внимание, 
                        память и принятие решений; разработка методов улучшения когнитивных 
                        функций с помощью иммерсивных технологий.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Примеры исследовательских тем:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Нейронные корреляты присутствия в виртуальной реальности</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>VR-терапия когнитивных нарушений</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple">•</span>
                            <span>Эмоциональные реакции в иммерсивных средах</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                        <Code className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Технологии следующего поколения VR/AR</h4>
                      <p className="text-muted-foreground mb-4">
                        Разработка теоретических и практических аспектов передовых иммерсивных 
                        технологий, включая новые методы рендеринга, системы отслеживания и 
                        взаимодействия, тактильный интерфейс.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Примеры исследовательских тем:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Нейроморфные интерфейсы для VR</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Распределенные вычисления для иммерсивных сред</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue">•</span>
                            <span>Симуляция мультисенсорного опыта</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Теория и методология иммерсивного образования</h4>
                      <p className="text-muted-foreground mb-4">
                        Разработка научных основ и образовательных парадигм для использования 
                        VR/AR в обучении, оценка эффективности иммерсивных образовательных методик.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Примеры исследовательских тем:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Теоретические модели обучения в виртуальной среде</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Методы оценки иммерсивного образовательного опыта</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-blue-dark">•</span>
                            <span>Культурные аспекты виртуального образования</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-vra-purple-dark/10 flex items-center justify-center mb-4 text-vra-purple-dark">
                        <Atoms className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">Междисциплинарные приложения иммерсивных технологий</h4>
                      <p className="text-muted-foreground mb-4">
                        Исследование трансформационного потенциала VR/AR в различных научных 
                        и профессиональных областях, от медицины до искусства.
                      </p>
                      <div className="mt-4 text-sm">
                        <div className="font-medium mb-2">Примеры исследовательских тем:</div>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>VR в реабилитационной медицине</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>Иммерсивная археология и исторические реконструкции</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-vra-purple-dark">•</span>
                            <span>AR-системы для научных исследований экосистем</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-semibold text-center">Исследовательские центры для аспирантов</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Центр нейроиммерсивных исследований</h4>
                      <p className="text-muted-foreground mb-3">
                        Передовая лаборатория, оснащенная новейшими нейровизуализационными технологиями 
                        для изучения мозговой активности в условиях иммерсивного опыта. Аспиранты проводят 
                        исследования на стыке нейронауки, психологии и технологий VR/AR.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Ключевое оборудование:</span> МРТ-совместимые VR-системы, 
                        мобильные ЭЭГ, функциональная ближняя инфракрасная спектроскопия, системы айтрекинга.
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="vr-card">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">Лаборатория иммерсивных социальных взаимодействий</h4>
                      <p className="text-muted-foreground mb-3">
                        Исследовательский центр, сфокусированный на изучении социальных аспектов виртуальной 
                        реальности, включая виртуальные сообщества, идентичность в VR, невербальную коммуникацию 
                        и социальное присутствие в иммерсивных средах.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Ключевое оборудование:</span> Многопользовательские VR-системы, 
                        системы захвата мимики и движений тела, алгоритмы анализа социальных взаимодействий.
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
              <h2 className="vr-heading mb-6">Начните путь к карьере будущего</h2>
              <p className="vr-subheading mb-10">
                Получите образование мирового уровня в университете Virtual Reality Academy
                и станьте лидером в сфере инновационных технологий
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                    Подать заявку <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-vra-purple/50 hover:border-vra-purple">
                    Узнать о вступительных испытаниях
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

export default University;