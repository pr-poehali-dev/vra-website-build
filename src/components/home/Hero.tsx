import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Градиентные круги */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-vra-purple/10 blur-3xl -z-10 animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-vra-blue/15 blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-vra-pink/10 blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          {/* Увеличиваем расстояние между заголовком и текстом */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight vr-gradient-text inline-block mb-10">
            Учись в будущем
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground">
            VRA — первая академия, где VR/AR технологии заменяют учебники, 
            создавая иммерсивную образовательную среду от школы до университета.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/education">
              <Button className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90 h-12 px-6 text-base">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="border-vra-purple/50 hover:border-vra-purple h-12 px-6 text-base">
                Поступить
                <GraduationCap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Карточки образования */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="vr-card group p-6 transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40">
            <div className="p-3 rounded-full bg-gradient-to-br from-vra-purple to-vra-blue w-fit mb-4">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Школа</h3>
            <p className="text-muted-foreground mb-4">
              Начальное, основное общее и среднее образование с использованием передовых VR технологий.
            </p>
            <Link to="/school" className="flex items-center text-vra-purple font-medium group-hover:underline">
              Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="vr-card group p-6 transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40">
            <div className="p-3 rounded-full bg-gradient-to-br from-vra-blue to-vra-purple-dark w-fit mb-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Университет</h3>
            <p className="text-muted-foreground mb-4">
              Программы бакалавриата, магистратуры и аспирантуры с полным погружением в виртуальную среду.
            </p>
            <Link to="/university" className="flex items-center text-vra-purple font-medium group-hover:underline">
              Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="vr-card group p-6 transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40">
            <div className="p-3 rounded-full bg-gradient-to-br from-vra-blue-dark to-vra-blue w-fit mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">VR/AR Технологии</h3>
            <p className="text-muted-foreground mb-4">
              Погружение в изучаемый материал через визуализации и интерактивные модели вместо обычных учебников.
            </p>
            <Link to="/technologies" className="flex items-center text-vra-purple font-medium group-hover:underline">
              Подробнее <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;