import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Target, Award, Users, BookOpen, Lightbulb, Rocket, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
                О <span className="vr-gradient-text">Virtual Reality Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Мы создали образовательное учреждение нового поколения, где традиционные методы обучения 
                трансформируются с помощью передовых технологий иммерсивной реальности.
              </p>
            </div>
          </div>
        </section>

        {/* История и миссия */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Наша история</h2>
                  <p className="text-muted-foreground">
                    Virtual Reality Academy была основана в 2020 году группой преподавателей, 
                    инженеров и энтузиастов VR/AR технологий, объединенных общей идеей — 
                    создать образовательную среду, где технологии виртуальной и дополненной 
                    реальности станут фундаментом для нового подхода к обучению.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
                  <p className="text-muted-foreground">
                    Преобразовать образовательный процесс с помощью иммерсивных технологий, 
                    делая обучение более увлекательным, эффективным и доступным. Мы стремимся раскрыть 
                    потенциал каждого ученика через персонализированный опыт обучения, который 
                    невозможно создать традиционными методами.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Команда VRA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 p-6 bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border max-w-xs">
                  <p className="font-medium text-foreground mb-2">
                    "Образование должно выходить за рамки книг и лекций — мы создаем среду, 
                    где знания оживают."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — Основатели VRA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="vr-section">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Почему VRA?</h2>
              <p className="vr-subheading">
                Наши уникальные преимущества, которые делают обучение в Virtual Reality Academy особенным
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Инновационный подход</h3>
                <p className="text-muted-foreground">
                  Мы используем самые передовые технологии виртуальной и дополненной реальности, 
                  которые постоянно совершенствуются нашей технической командой.
                </p>
              </div>
              
              <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Персонализация обучения</h3>
                <p className="text-muted-foreground">
                  Адаптивная система подстраивается под индивидуальные особенности каждого ученика, 
                  учитывая его темп, стиль и предпочтения в обучении.
                </p>
              </div>
              
              <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-vra-blue-dark/10 flex items-center justify-center mb-4 text-vra-blue-dark">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Признанное качество</h3>
                <p className="text-muted-foreground">
                  Наша образовательная программа соответствует государственным стандартам и получила 
                  признание международных организаций в области инновационного образования.
                </p>
              </div>
              
              <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-vra-purple-dark/10 flex items-center justify-center mb-4 text-vra-purple-dark">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Опытный преподавательский состав</h3>
                <p className="text-muted-foreground">
                  Наши преподаватели — эксперты в своих областях с богатым опытом применения 
                  VR/AR технологий в образовательном процессе.
                </p>
              </div>
              
              <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-vra-blue/10 flex items-center justify-center mb-4 text-vra-blue">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Комплексная программа</h3>
                <p className="text-muted-foreground">
                  От школы до университета — полный цикл образования в единой экосистеме 
                  с последовательным развитием знаний и навыков.
                </p>
              </div>
              
              <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-full bg-vra-pink/10 flex items-center justify-center mb-4 text-vra-purple">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Практическая направленность</h3>
                <p className="text-muted-foreground">
                  Обучение ориентировано на приобретение практических навыков через реалистичные 
                  симуляции и виртуальные эксперименты.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Наши результаты */}
        <section className="vr-section bg-card/30">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Наши достижения</h2>
              <p className="vr-subheading">
                Измеримые результаты, которыми мы гордимся
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-vra-purple mb-3">98%</div>
                <p className="text-lg font-medium">Успеваемость учащихся</p>
                <p className="text-muted-foreground">Средний показатель академической успеваемости</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-vra-blue mb-3">1000+</div>
                <p className="text-lg font-medium">Студентов</p>
                <p className="text-muted-foreground">Обучаются в нашей академии на различных программах</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-vra-blue-dark mb-3">98%</div>
                <p className="text-lg font-medium">Трудоустройство</p>
                <p className="text-muted-foreground">Выпускников успешно трудоустраиваются в первый год</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-vra-purple-dark mb-3">25+</div>
                <p className="text-lg font-medium">Партнёров</p>
                <p className="text-muted-foreground">Технологических и образовательных партнёров по всему миру</p>
              </div>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="vr-section">
          <div className="vr-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="vr-heading mb-4">Наша команда</h2>
              <p className="vr-subheading">
                Люди, стоящие за инновациями в образовании
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Здесь будут карточки команды, пока заполняем placeholder-ами */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="vr-card overflow-hidden group">
                  <div className="aspect-square">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Член команды ${i}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{`Имя Фамилия ${i}`}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{`Должность ${i}`}</p>
                    <p className="text-sm">
                      Краткое описание опыта, образования и роли в команде Virtual Reality Academy.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contacts">
                <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                  Свяжитесь с нами <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;