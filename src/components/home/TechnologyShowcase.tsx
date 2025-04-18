import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TechnologyShowcase = () => {
  const [activeTab, setActiveTab] = useState("vr");

  return (
    <section className="vr-section bg-card/30">
      <div className="vr-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="vr-heading mb-4">Погружение в образование будущего</h2>
          <p className="vr-subheading">
            Наши VR/AR технологии превращают обучение в захватывающее путешествие по миру знаний
          </p>
        </div>

        <Tabs defaultValue="vr" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-card/60 backdrop-blur-sm">
              <TabsTrigger value="vr" className="data-[state=active]:bg-vra-blue data-[state=active]:text-white">
                Virtual Reality
              </TabsTrigger>
              <TabsTrigger value="ar" className="data-[state=active]:bg-vra-purple data-[state=active]:text-white">
                Augmented Reality
              </TabsTrigger>
              <TabsTrigger value="mr" className="data-[state=active]:bg-vra-blue-dark data-[state=active]:text-white">
                Mixed Reality
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40 aspect-video">
            <TabsContent value="vr" className="m-0">
              <div className="relative w-full h-full bg-gradient-to-br from-vra-blue-dark via-vra-blue to-vra-purple/70">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="VR обучение" className="opacity-75 mix-blend-overlay" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-sm bg-black/30">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Виртуальная реальность</h3>
                  <p className="max-w-lg md:text-lg mb-6">
                    Полное погружение в образовательную среду с помощью VR-гарнитур. 
                    Изучайте анатомию внутри человеческого тела, путешествуйте сквозь время 
                    и исследуйте недоступные места нашей планеты.
                  </p>
                  <Link to="/technologies#vr">
                    <Button className="bg-white text-vra-blue hover:bg-white/90">
                      Узнать больше о VR-обучении <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ar" className="m-0">
              <div className="relative w-full h-full bg-gradient-to-br from-vra-purple via-vra-purple-light to-vra-pink">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="AR обучение" className="opacity-75 mix-blend-overlay" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-sm bg-black/30">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Дополненная реальность</h3>
                  <p className="max-w-lg md:text-lg mb-6">
                    Наложение образовательных элементов на реальный мир с помощью AR-устройств. 
                    Превратите любой учебник в интерактивный, добавьте 3D модели в классную комнату 
                    и проводите эксперименты прямо на столе.
                  </p>
                  <Link to="/technologies#ar">
                    <Button className="bg-white text-vra-purple hover:bg-white/90">
                      Узнать больше об AR-обучении <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mr" className="m-0">
              <div className="relative w-full h-full bg-gradient-to-br from-vra-blue-dark via-vra-blue to-vra-blue-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/placeholder.svg" alt="MR обучение" className="opacity-75 mix-blend-overlay" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-sm bg-black/30">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Смешанная реальность</h3>
                  <p className="max-w-lg md:text-lg mb-6">
                    Комбинирование виртуальных и реальных элементов для создания уникальной 
                    образовательной среды. Сотрудничайте с одноклассниками в совместном виртуальном 
                    пространстве, взаимодействуя с реальными физическими объектами.
                  </p>
                  <Link to="/technologies#mr">
                    <Button className="bg-white text-vra-blue-dark hover:bg-white/90">
                      Узнать больше о MR-обучении <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
