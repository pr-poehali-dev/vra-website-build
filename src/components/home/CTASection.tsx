import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="vr-section relative">
      {/* Декоративный фон */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-full h-full bg-gradient-to-r from-vra-purple/5 via-vra-blue/5 to-vra-purple/5"></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(151,125,255,0.1) 0%, rgba(0,51,255,0.05) 40%, transparent 70%)"
          }}
        ></div>
      </div>

      <div className="vr-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="vr-heading mb-6">Готовы шагнуть в будущее образования?</h2>
          <p className="vr-subheading mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к Virtual Reality Academy и откройте для себя новый уровень
            обучения с технологиями виртуальной и дополненной реальности.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-gradient-to-r from-vra-blue via-vra-purple to-vra-purple-dark hover:opacity-90 h-12 px-6 text-base">
                Подать заявку на поступление
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline" className="h-12 px-6 text-base">
                Связаться с нами
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-vra-purple mb-2">1000+</div>
              <p className="text-muted-foreground">Студентов обучаются</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-vra-blue mb-2">25+</div>
              <p className="text-muted-foreground">VR/AR программ</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-vra-blue-dark mb-2">98%</div>
              <p className="text-muted-foreground">Трудоустройство выпускников</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
