import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const TechnologyShowcase = () => {
  const [activeTab, setActiveTab] = useState("vr");

  return (
    <section className="vr-section bg-card/30">
      <div className="vr-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="vr-heading mb-4">Инновационные технологии обучения</h2>
          <p className="vr-subheading">
            Мы объединяем реальный и виртуальный миры, создавая уникальную образовательную среду
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 vr-gradient-text inline-block">Переосмысление образования</h3>
            <p className="text-lg text-muted-foreground mb-6">
              В Virtual Reality Academy мы не просто используем VR/AR технологии – мы создаем новый мир образования, 
              где традиционное обучение встречается с цифровыми инновациями.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Представьте, что вы не просто читаете о химических реакциях, а наблюдаете их на молекулярном уровне в 3D-пространстве. 
              Исследуете космос, путешествуете во времени или погружаетесь внутрь человеческого тела – 
              все это становится возможным благодаря нашим технологиям.
            </p>
            <Link to="/technologies">
              <Button className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
                Исследовать технологии <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Card className="vr-card w-full max-w-md overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <img src="/placeholder.svg" alt="VR обучение" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold mb-2">Иммерсивное обучение</h4>
                      <p className="text-sm opacity-90">
                        Полное погружение в материал через технологии виртуальной реальности
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/40 aspect-video">
              <TabsContent value="vr" className="m-0">
                <div className="relative w-full h-full bg-gradient-to-br from-vra-blue-dark via-vra-blue to-vra-purple/70">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/placeholder.svg" alt="VR обучение" className="w-full h-full object-cover opacity-75 mix-blend-overlay" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ar" className="m-0">
                <div className="relative w-full h-full bg-gradient-to-br from-vra-purple via-vra-purple-light to-vra-pink">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/placeholder.svg" alt="AR обучение" className="w-full h-full object-cover opacity-75 mix-blend-overlay" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mr" className="m-0">
                <div className="relative w-full h-full bg-gradient-to-br from-vra-blue-dark via-vra-blue to-vra-blue-dark">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/placeholder.svg" alt="MR обучение" className="w-full h-full object-cover opacity-75 mix-blend-overlay" />
                  </div>
                </div>
              </TabsContent>
            </div>

            <div>
              <TabsContent value="vr" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Виртуальная реальность</h3>
                  <p className="text-muted-foreground">
                    Полное погружение в образовательную среду с помощью VR-гарнитур. 
                    Изучайте анатомию внутри человеческого тела, путешествуйте сквозь время 
                    и исследуйте недоступные места нашей планеты.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-vra-blue text-lg">✓</span>
                      <span>Полное погружение в образовательный процесс</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vra-blue text-lg">✓</span>
                      <span>Визуализация сложных концепций в 3D</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vra-blue text-lg">✓</span>
                      <span>Взаимодействие с виртуальными объектами в реальном времени</span>
                    </li>
                  </ul>
                  <Link to="/technologies#vr">
                    <Button className="bg-vra-blue text-white hover:bg-vra-blue/90 mt-2">
                      Узнать больше о VR-обучении <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="ar" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Дополненная реальность</h3>
                  <p className="text-muted-foreground">
                    Наложение образовательных элементов на реальный мир с помощью AR-устройств. 
                    Превратите любой учебник в интерактивный, добавьте 3D модели в классную комнату 
                    и проводите эксперименты прямо на столе.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-vra-purple text-lg">✓</span>
                      <span>Интерактивные учебные материалы в реальном мире</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vra-purple text-lg">✓</span>
                      <span>Дополнение традиционных методов обучения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vra-purple text-lg">✓</span>
                      <span>Визуализация абстрактных концепций в привычной среде</span>
                    </li>
                  </ul>
                  <Link to="/technologies#ar">
                    <Button className="bg-vra-purple text-white hover:bg-vra-purple/90 mt-2">
                      Узнать больше об AR-обучении <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="mr" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Смешанная реальность</h3>
                  <p className="text-muted-foreground">
                    Комбинирование виртуальных и реальных элементов для создания уникальной 
                    образовательной среды. Сотрудничайте с одноклассниками в совместном виртуальном 
                    пространстве, взаимодействуя с реальными физическими объектами.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-vra-blue-dark text-lg">✓</span>
                      <span>Совместная работа в гибридной среде</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vra-blue-dark text-lg">✓</span>
                      <span>Взаимодействие с виртуальными и реальными объектами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-vra-blue-dark text-lg">✓</span>
                      <span>Симуляция сложных сценариев с физическим взаимодействием</span>
                    </li>
                  </ul>
                  <Link to="/technologies#mr">
                    <Button className="bg-vra-blue-dark text-white hover:bg-vra-blue-dark/90 mt-2">
                      Узнать больше о MR-обучении <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologyShowcase;