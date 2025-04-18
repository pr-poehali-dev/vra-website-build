import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Brain, 
  BarChart, 
  Layers, 
  UserPlus, 
  Shuffle, 
  Clock, 
  Shield, 
  BookOpen,
  Camera,
  Eye,
  Monitor,
  Share2,
  Target,
  Zap,
  Grid
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
}

const TechCard = ({ title, description, icon, image, color }: TechCardProps) => (
  <Card className="vr-card overflow-hidden group hover:shadow-lg transition-all duration-300">
    <div className="relative aspect-video">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-${color}/80 to-transparent`}></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
    <CardContent className="p-6">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Benefit = ({ title, description, icon, color }: BenefitProps) => (
  <div className="flex gap-4">
    <div className={`w-12 h-12 rounded-full bg-${color}/10 flex-shrink-0 flex items-center justify-center text-${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-lg mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Technologies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Герой-секция */}
        <section className="vr-section relative pt-20 md:pt-24" id="vr">
          {/* Градиентные круги */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-vra-purple/10 blur-3xl -z-10 animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-vra-blue/15 blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>

          <div className="vr-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="vr-gradient-text">VR/AR технологии</span> в образовании
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Иммерсивные технологии, которые меняют будущее образования и 
                создают новые возможности для обучения
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <TechCard 
                title="Virtual Reality"
                description="Полное погружение в виртуальный мир, где студенты могут взаимодействовать с образовательным контентом в трехмерном пространстве."
                icon={<Eye className="h-5 w-5" />}
                image="/placeholder.svg"
                color="vra-blue"
              />
              <TechCard 
                title="Augmented Reality"
                description="Наложение цифровых образовательных элементов на реальный мир через мобильные устройства или AR-очки для расширения учебного опыта."
                icon={<Camera className="h-5 w-5" />}
                image="/placeholder.svg"
                color="vra-purple"
              />
              <TechCard 
                title="Mixed Reality"
                description="Слияние виртуального и реального миров, где физические и цифровые объекты сосуществуют и взаимодействуют в реальном времени."
                icon={<Shuffle className="h-5 w-5" />}
                image="/placeholder.svg"
                color="vra-blue-dark"
              />
            </div>
          </div>
        </section>

        {/* Раздел о трансформации образования */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Иммерсивное обучение" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                  <p className="font-medium text-foreground mb-2">
                    "Иммерсивные технологии улучшают запоминание материала на 70% и повышают вовлеченность в учебный процесс."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Исследование эффективности VR в образовании
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Трансформация образовательного процесса</h2>
                  <p className="text-muted-foreground">
                    Иммерсивные технологии радикально меняют традиционный подход к обучению, 
                    предлагая многоуровневое погружение в изучаемый материал и интерактивное 
                    взаимодействие с контентом.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    В VRA мы используем VR/AR не просто как дополнение к обычным методам, 
                    а как основу для создания принципиально нового образовательного опыта, 
                    который невозможен в традиционной среде.
                  </p>
                </div>
                
                <div className="space-y-4 mt-6">
                  <h3 className="text-xl font-semibold">Ключевые особенности:</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Benefit 
                      title="Визуализация абстрактных концепций" 
                      icon={<Layers className="h-5 w-5" />}
                      description="Представление сложных теоретических понятий в форме наглядных 3D-моделей и интерактивных симуляций."
                      color="vra-purple"
                    />
                    <Benefit 
                      title="Практическое обучение без рисков" 
                      icon={<Shield className="h-5 w-5" />}
                      description="Безопасная отработка навыков в виртуальной среде без опасных последствий ошибок."
                      color="vra-blue"
                    />
                    <Benefit 
                      title="Персонализированный опыт" 
                      icon={<Target className="h-5 w-5" />}
                      description="Адаптация образовательного контента под индивидуальные особенности восприятия и темп обучения каждого ученика."
                      color="vra-blue-dark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Детальное описание VR технологии */}
        <section className="vr-section" id="vr">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Виртуальная реальность в обучении</h2>
              <p className="vr-subheading">
                Полное погружение в образовательную среду, где реальный мир заменяется виртуальным
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Виртуальная реальность позволяет ученикам полностью погрузиться в образовательную среду, 
                    где они могут изучать предметы через непосредственное взаимодействие с 3D-моделями и симуляциями. 
                    Это создает эффект присутствия, который невозможно достичь с помощью традиционных методов обучения.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="vr-card">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Преподавание естественных наук</h4>
                        <p className="text-sm text-muted-foreground">
                          Изучение анатомии путем виртуального погружения внутрь человеческого тела, 
                          наблюдение за химическими реакциями на молекулярном уровне, исследование космоса.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="vr-card">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">История и культура</h4>
                        <p className="text-sm text-muted-foreground">
                          Виртуальные реконструкции исторических событий и мест, погружение в различные 
                          культуры и эпохи, "встречи" с историческими личностями.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="vr-card">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Технические дисциплины</h4>
                        <p className="text-sm text-muted-foreground">
                          Интерактивное изучение механизмов и систем, виртуальное проектирование и 
                          тестирование инженерных решений в реальном времени.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="vr-card">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-2">Профессиональные навыки</h4>
                        <p className="text-sm text-muted-foreground">
                          Симуляции сложных профессиональных ситуаций для отработки навыков 
                          в безопасной, но реалистичной виртуальной среде.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
                    <div className="p-3 rounded-full bg-gradient-to-br from-vra-blue to-vra-purple flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-center sm:text-left">
                      В VRA используются передовые VR-гарнитуры и системы тактильной обратной связи 
                      для создания максимально реалистичного опыта обучения.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Card className="vr-card overflow-hidden h-full">
                  <ScrollArea className="h-[500px]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Преимущества VR-обучения</h3>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                            <Brain className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Улучшенное запоминание</h4>
                            <p className="text-sm text-muted-foreground">
                              VR-опыт задействует несколько каналов восприятия, что улучшает запоминание материала на 70%.
                            </p>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                            <BarChart className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Повышенная вовлеченность</h4>
                            <p className="text-sm text-muted-foreground">
                              Игровые элементы и интерактивность VR значительно повышают мотивацию и вовлеченность учащихся.
                            </p>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Ускоренное обучение</h4>
                            <p className="text-sm text-muted-foreground">
                              Полное погружение позволяет освоить материал быстрее, чем при традиционных методах обучения.
                            </p>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-vra-purple-dark/10 flex-shrink-0 flex items-center justify-center text-vra-purple-dark">
                            <BookOpen className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Практическое обучение</h4>
                            <p className="text-sm text-muted-foreground">
                              Возможность практиковать сложные навыки в безопасной, но реалистичной среде.
                            </p>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                            <UserPlus className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Социальное взаимодействие</h4>
                            <p className="text-sm text-muted-foreground">
                              Совместная работа в виртуальной среде развивает навыки коммуникации и командной работы.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </ScrollArea>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Дополненная реальность */}
        <section className="vr-section bg-card/30" id="ar">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Дополненная реальность в обучении</h2>
              <p className="vr-subheading">
                Наложение цифровых образовательных элементов на реальный мир
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <p className="text-lg text-muted-foreground">
                  Дополненная реальность (AR) объединяет физический и цифровой миры, добавляя образовательный 
                  контент в реальную среду. В отличие от VR, AR не заменяет реальность, а дополняет её, 
                  что делает эту технологию особенно удобной для использования в классических учебных заведениях.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-vra-purple/10 flex items-center justify-center text-vra-purple">
                        <Zap className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">Интерактивные учебники</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Печатные материалы оживают с 3D-моделями, видео и интерактивными элементами 
                      при просмотре через AR-устройства.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-vra-blue/10 flex items-center justify-center text-vra-blue">
                        <Grid className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">AR-лаборатории</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Виртуальные эксперименты, проводимые в реальном пространстве без необходимости специального оборудования.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-vra-blue-dark/10 flex items-center justify-center text-vra-blue-dark">
                        <Target className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">Геолокационное обучение</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Образовательный контент, привязанный к реальным географическим точкам для изучения на местности.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-vra-purple-dark/10 flex items-center justify-center text-vra-purple-dark">
                        <Share2 className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">Коллаборативные проекты</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Совместные AR-проекты, где ученики могут создавать и взаимодействовать с общими виртуальными объектами.
                    </p>
                  </div>
                </div>
                
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="AR в образовании" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="vr-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Применение AR в разных дисциплинах</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-vra-purple mb-2">Биология</h4>
                        <p className="text-sm text-muted-foreground">
                          3D-модели органов и систем, наложенные на учебники или плакаты. 
                          Визуализация процессов фотосинтеза, клеточного деления и эволюции видов.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-vra-blue mb-2">Математика и геометрия</h4>
                        <p className="text-sm text-muted-foreground">
                          Интерактивные 3D-модели геометрических фигур, визуализация 
                          математических формул и функций в пространстве.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-vra-blue-dark mb-2">География</h4>
                        <p className="text-sm text-muted-foreground">
                          Интерактивные карты с дополнительной информацией, 3D-рельефы 
                          местности, визуализация геологических процессов.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-vra-purple-dark mb-2">Химия</h4>
                        <p className="text-sm text-muted-foreground">
                          Визуализация молекулярных структур, интерактивная периодическая 
                          таблица, симуляции химических экспериментов.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-vra-purple mb-2">Искусство и дизайн</h4>
                        <p className="text-sm text-muted-foreground">
                          Интерактивные выставки, AR-наложения на произведения искусства, 
                          визуализация архитектурных проектов в реальном пространстве.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Смешанная реальность */}
        <section className="vr-section" id="mr">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Смешанная реальность в обучении</h2>
              <p className="vr-subheading">
                Объединение виртуального и реального для создания нового образовательного опыта
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Смешанная реальность (MR) представляет собой наиболее продвинутую форму иммерсивных технологий, 
                  где виртуальные и реальные объекты сосуществуют и взаимодействуют в реальном времени. 
                  В образовательном контексте это создает уникальные возможности для сложных симуляций и совместной работы.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Ключевые преимущества MR:</h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vra-blue-dark/10 flex-shrink-0 flex items-center justify-center text-vra-blue-dark">
                        <Shuffle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Слияние миров</h4>
                        <p className="text-muted-foreground">
                          Взаимодействие с реальными объектами с наложением виртуальных данных и функций.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vra-purple/10 flex-shrink-0 flex items-center justify-center text-vra-purple">
                        <UserPlus className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Коллаборативные возможности</h4>
                        <p className="text-muted-foreground">
                          Несколько пользователей могут взаимодействовать с одними и теми же виртуальными объектами в реальном пространстве.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vra-blue/10 flex-shrink-0 flex items-center justify-center text-vra-blue">
                        <Grid className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Пространственное понимание</h4>
                        <p className="text-muted-foreground">
                          Развитие объемного мышления и понимания сложных трехмерных концепций и отношений.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Смешанная реальность в образовании" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-6">Применение в образовательном процессе</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Комплексные симуляции</h4>
                    <p className="text-muted-foreground">
                      Сложные образовательные сценарии, где студенты работают с реальными инструментами, 
                      дополненными виртуальной информацией и реакциями.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Многослойное обучение</h4>
                    <p className="text-muted-foreground">
                      Наложение различных слоев информации на реальные объекты, позволяющее изучать 
                      их структуру, функции и взаимосвязи на разных уровнях детализации.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="vr-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                      <UserPlus className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Удаленное сотрудничество</h4>
                    <p className="text-muted-foreground">
                      Совместная работа студентов и преподавателей, находящихся в разных физических локациях, 
                      над общими виртуальными проектами в реальном времени.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="vr-heading mb-6">Готовы испытать будущее образования?</h2>
              <p className="vr-subheading mb-10">
                Присоединяйтесь к Virtual Reality Academy и откройте для себя новые 
                возможности обучения с помощью иммерсивных технологий
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/education">
                  <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                    Изучить наши программы <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-vra-purple/50 hover:border-vra-purple">
                    Связаться с нами
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

export default Technologies;