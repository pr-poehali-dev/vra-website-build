import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Users,
  Brain,
  Award,
  Shuffle,
  Layout,
  Search,
  BrainCircuit
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
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
                <span className="vr-gradient-text">Образование</span> в VRA
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Комплексная образовательная система от начальной школы до аспирантуры, 
                полностью погруженная в иммерсивные технологии
              </p>
            </div>
          </div>
        </section>

        {/* Образовательная система */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Образовательная система VRA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                  <p className="font-medium text-foreground mb-2">
                    "Непрерывное образование в единой VR/AR экосистеме обеспечивает плавный переход между всеми образовательными ступенями."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Образовательная концепция VRA
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Единая образовательная экосистема</h2>
                  <p className="text-muted-foreground">
                    Virtual Reality Academy предлагает полный образовательный цикл от начальной школы 
                    до высшего образования в рамках единой технологической и методологической экосистемы.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Наша уникальная особенность — непрерывность образовательного процесса, где каждый 
                    следующий этап органично продолжает предыдущий, сохраняя преемственность методов 
                    и углубляя иммерсивный опыт обучения.
                  </p>
                </div>
                
                <div className="space-y-4 mt-6">
                  <h3 className="text-xl font-semibold">Ключевые принципы:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                        <Layout className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Системность образования</h4>
                        <p className="text-muted-foreground">
                          Все уровни образования интегрированы в единую систему с общей методологией и технологической базой.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                        <Shuffle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Адаптивная сложность</h4>
                        <p className="text-muted-foreground">
                          Постепенное усложнение технологий и методов обучения в соответствии с возрастом и уровнем подготовки учащихся.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                        <Search className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Исследовательский подход</h4>
                        <p className="text-muted-foreground">
                          Фокус на самостоятельном исследовании и открытии знаний через иммерсивные технологии на всех образовательных уровнях.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Школьное образование */}
        <section className="vr-section">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Школа в VRA</h2>
              <p className="vr-subheading">
                Начальное, основное общее и среднее общее образование
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="vr-card group transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Начальное образование" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-vra-purple to-vra-blue w-fit mb-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Начальное образование (1-4 классы)</h3>
                  <p className="text-muted-foreground mb-4">
                    Игровой подход к обучению с использованием VR/AR технологий, адаптированных для младших школьников, 
                    формирование базовых навыков и любви к познанию.
                  </p>
                  <Link to="/school" className="flex items-center text-vra-purple font-medium group-hover:underline">
                    Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="vr-card group transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Основное общее образование" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-vra-blue to-vra-purple w-fit mb-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Основное общее образование (5-9 классы)</h3>
                  <p className="text-muted-foreground mb-4">
                    Углубленное изучение предметов через виртуальные лаборатории и симуляции, развитие критического 
                    мышления и проектных навыков.
                  </p>
                  <Link to="/school?tab=middle" className="flex items-center text-vra-purple font-medium group-hover:underline">
                    Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="vr-card group transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Среднее общее образование" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-vra-purple-dark to-vra-blue-dark w-fit mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Среднее общее образование (10-11 классы)</h3>
                  <p className="text-muted-foreground mb-4">
                    Профильное обучение с глубоким погружением в выбранные предметы через VR/AR, подготовка 
                    к поступлению в университет.
                  </p>
                  <Link to="/school?tab=high" className="flex items-center text-vra-purple font-medium group-hover:underline">
                    Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/school">
                <Button className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                  Все про школьное образование <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Высшее образование */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Университет VRA</h2>
              <p className="vr-subheading">
                Бакалавриат, магистратура и аспирантура в иммерсивной образовательной среде
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="vr-card group transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Бакалавриат" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-vra-blue to-vra-purple w-fit mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Бакалавриат</h3>
                  <p className="text-muted-foreground mb-4">
                    Базовое высшее образование с глубоким погружением в профессиональную сферу через 
                    VR-моделирование реальных рабочих процессов.
                  </p>
                  <Link to="/university?tab=bachelor" className="flex items-center text-vra-purple font-medium group-hover:underline">
                    Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="vr-card group transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Магистратура" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-vra-purple to-vra-blue-dark w-fit mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Магистратура</h3>
                  <p className="text-muted-foreground mb-4">
                    Углубленное изучение выбранной специальности с акцентом на исследовательскую деятельность 
                    и работу над сложными проектами в виртуальных средах.
                  </p>
                  <Link to="/university?tab=master" className="flex items-center text-vra-purple font-medium group-hover:underline">
                    Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="vr-card group transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Аспирантура" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gradient-to-br from-vra-blue-dark to-vra-purple-dark w-fit mb-4">
                    <BrainCircuit className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Аспирантура</h3>
                  <p className="text-muted-foreground mb-4">
                    Подготовка научно-педагогических кадров и проведение передовых исследований в области 
                    иммерсивных технологий и их применения в образовании.
                  </p>
                  <Link to="/university?tab=phd" className="flex items-center text-vra-purple font-medium group-hover:underline">
                    Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/university">
                <Button className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                  Все про высшее образование <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Преимущества образования в VRA */}
        <section className="vr-section">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Преимущества образования в VRA</h2>
              <p className="vr-subheading">
                Ключевые отличия нашей образовательной системы от традиционных учебных заведений
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="vr-card p-6">
                <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Иммерсивное обучение</h3>
                <p className="text-muted-foreground">
                  Полное погружение в учебный материал через VR/AR технологии, что улучшает запоминание на 70% 
                  по сравнению с традиционными методами обучения.
                </p>
              </div>
              
              <div className="vr-card p-6">
                <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Персонализация</h3>
                <p className="text-muted-foreground">
                  Адаптивная образовательная система, которая подстраивается под индивидуальные особенности, 
                  темп и стиль обучения каждого учащегося.
                </p>
              </div>
              
              <div className="vr-card p-6">
                <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Практический опыт</h3>
                <p className="text-muted-foreground">
                  Возможность получать практические навыки через высокореалистичные симуляции реальных 
                  ситуаций и профессиональных задач.
                </p>
              </div>
              
              <div className="vr-card p-6">
                <div className="w-12 h-12 rounded-full bg-vra-purple-dark/10 flex items-center justify-center mb-4 text-vra-purple-dark">
                  <Layout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Непрерывность</h3>
                <p className="text-muted-foreground">
                  Целостная образовательная траектория от школы до университета в единой технологической 
                  и методологической среде.
                </p>
              </div>
              
              <div className="vr-card p-6">
                <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                  <Shuffle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Гибкость</h3>
                <p className="text-muted-foreground">
                  Возможность обучаться в удобном темпе, из любой точки мира, с доступом к виртуальным 
                  классам и лабораториям 24/7.
                </p>
              </div>
              
              <div className="vr-card p-6">
                <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Результативность</h3>
                <p className="text-muted-foreground">
                  98% наших выпускников успешно трудоустраиваются в течение первого года после выпуска 
                  благодаря актуальным и востребованным навыкам.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="vr-heading mb-6">Начните свой путь в образовании будущего</h2>
              <p className="vr-subheading mb-10">
                Присоединяйтесь к Virtual Reality Academy и откройте для себя новые 
                возможности обучения с помощью иммерсивных технологий
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                    Подать заявку <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-vra-purple/50 hover:border-vra-purple">
                    Задать вопрос
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

export default Education;