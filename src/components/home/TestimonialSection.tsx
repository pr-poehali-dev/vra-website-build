import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

const Testimonial = ({ content, author, role, avatar }: TestimonialProps) => {
  return (
    <Card className="border-border/50 shadow-md bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-vra-purple opacity-50 mb-4" />
        <p className="text-foreground text-lg mb-6">{content}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4 border-2 border-vra-purple/30">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-vra-purple/20 text-vra-purple">{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-muted-foreground text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "Благодаря VR-урокам в VRA моя дочь полюбила химию. Наблюдать молекулярные взаимодействия в 3D измерении гораздо интереснее, чем просто читать о них в учебнике.",
      author: "Анна Смирнова",
      role: "Родитель ученика младшей школы",
    },
    {
      content: "Как выпускник VRA, могу сказать, что полученные здесь знания и опыт работы с VR/AR технологиями дали мне огромное преимущество при поступлении в аспирантуру и при трудоустройстве.",
      author: "Михаил Петров",
      role: "Выпускник бакалавриата VRA",
    },
    {
      content: "VRA изменила моё представление о том, каким должно быть образование. Практический опыт, получаемый через иммерсивные технологии, невозможно сравнить с традиционными методами обучения.",
      author: "Екатерина Иванова",
      role: "Студентка магистратуры",
    },
    {
      content: "Как преподаватель с 15-летним стажем, я был скептически настроен к VR-обучению. Теперь я вижу, как технологии помогают студентам лучше воспринимать сложные концепции и удерживать внимание.",
      author: "Дмитрий Николаев",
      role: "Преподаватель физики",
    },
    {
      content: "Моему сыну было сложно сосредоточиться на занятиях в обычной школе. В VRA его успеваемость выросла благодаря интерактивному подходу и возможности учиться в своем темпе.",
      author: "Ольга Соколова",
      role: "Родитель ученика средней школы",
    },
  ];

  return (
    <section className="vr-section bg-gradient-to-b from-background to-card/30">
      <div className="vr-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="vr-heading mb-4">Что говорят о нас</h2>
          <p className="vr-subheading">
            Отзывы студентов, родителей и преподавателей о Virtual Reality Academy
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Testimonial
                  content={testimonial.content}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="mr-2 static" />
            <CarouselNext className="ml-2 static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
