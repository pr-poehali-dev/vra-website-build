import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Декоративные элементы */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-vra-purple/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-vra-blue/10 blur-3xl"></div>
        </div>

        <div className="text-center max-w-md">
          <div className="mb-6 relative">
            <span className="text-9xl font-bold vr-gradient-text inline-block">404</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-vra-purple/5 rounded-full blur-xl"></div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-muted-foreground mb-8">
            Похоже, вы попытались войти в виртуальную реальность, которая еще не существует.
            Давайте вернемся в реальный мир.
          </p>
          
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
