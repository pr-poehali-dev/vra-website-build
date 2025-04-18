import { Brain, Compass, Globe, Cpu, Target, Layers, Zap, Users } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="vr-card p-6 transition-all duration-300 hover:shadow-xl hover:border-vra-purple/40">
      <div className="w-12 h-12 rounded-full bg-vra-purple/10 flex items-center justify-center mb-4 text-vra-purple">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Нейроинтерфейсы",
      description: "Система адаптируется к индивидуальным особенностям восприятия каждого ученика."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Виртуальные экскурсии",
      description: "Изучайте историю, посещая древние цивилизации, и географию, путешествуя по всему миру."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Адаптивное обучение",
      description: "Индивидуальная траектория развития и скорость изучения материала для каждого ученика."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Лаборатории будущего",
      description: "Безопасные виртуальные лаборатории для экспериментов любой сложности."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Целевые навыки",
      description: "Фокус на развитии практических навыков через симуляции реальных сценариев."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Многослойный контент",
      description: "Разные уровни сложности материала для разных возрастных групп и направлений."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Быстрое освоение",
      description: "Увеличенная скорость обучения благодаря полному погружению в материал."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Коллаборативность",
      description: "Совместные проекты в виртуальной среде для развития командной работы."
    }
  ];

  return (
    <section className="vr-section relative">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-vra-purple/20"></div>
        <div className="absolute top-1/4 -left-16 w-32 h-32 rounded-full border border-vra-blue/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-vra-pink/20"></div>
      </div>

      <div className="vr-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="vr-heading mb-4">Преимущества обучения с VR/AR</h2>
          <p className="vr-subheading">
            Мы создаем образовательную среду, в которой технологии дополненной и виртуальной реальности 
            раскрывают весь потенциал каждого ученика
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
