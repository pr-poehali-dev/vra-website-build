import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-vra-blue via-vra-purple to-vra-pink">
                <div className="absolute inset-0.5 rounded-full bg-card flex items-center justify-center">
                  <span className="text-vra-purple font-bold">VR</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight vr-gradient-text">VRA</span>
            </Link>
            <p className="text-muted-foreground mt-2 mb-4">
              Образовательное учреждение нового поколения, использующее VR/AR технологии для обучения от школы до университета.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-vra-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-vra-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-vra-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-vra-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/school" className="text-foreground/70 hover:text-primary transition-colors">
                  Школа
                </Link>
              </li>
              <li>
                <Link to="/university" className="text-foreground/70 hover:text-primary transition-colors">
                  Университет
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-foreground/70 hover:text-primary transition-colors">
                  VR/AR Технологии
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-foreground/70 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Образование</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/school" className="text-foreground/70 hover:text-primary transition-colors">
                  Начальное образование
                </Link>
              </li>
              <li>
                <Link to="/school" className="text-foreground/70 hover:text-primary transition-colors">
                  Основное общее образование
                </Link>
              </li>
              <li>
                <Link to="/school" className="text-foreground/70 hover:text-primary transition-colors">
                  Среднее общее образование
                </Link>
              </li>
              <li>
                <Link to="/university" className="text-foreground/70 hover:text-primary transition-colors">
                  Бакалавриат
                </Link>
              </li>
              <li>
                <Link to="/university" className="text-foreground/70 hover:text-primary transition-colors">
                  Магистратура
                </Link>
              </li>
              <li>
                <Link to="/university" className="text-foreground/70 hover:text-primary transition-colors">
                  Аспирантура
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-vra-purple flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">ул. Виртуальная, 42, г. Москва, 123456</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-vra-purple flex-shrink-0" />
                <span className="text-foreground/70">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-vra-purple flex-shrink-0" />
                <a href="mailto:info@vracademy.ru" className="text-foreground/70 hover:text-primary transition-colors">
                  info@vracademy.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Virtual Reality Academy (VRA). Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
