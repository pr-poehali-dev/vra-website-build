import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет логика аутентификации
    console.log("Логин с:", { email, password, rememberMe });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Декоративные фоновые элементы */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-vra-purple/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-vra-blue/10 blur-3xl"></div>
        </div>

        <div className="w-full max-w-md">
          <Card className="vr-card backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-2">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-vra-blue via-vra-purple to-vra-pink">
                  <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center">
                    <span className="text-vra-purple font-bold text-lg">VR</span>
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center">Вход в аккаунт</CardTitle>
              <CardDescription className="text-center">
                Введите данные своей учетной записи VRA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Пароль</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-xs text-vra-purple hover:underline"
                    >
                      Забыли пароль?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      {isPasswordVisible ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => 
                      setRememberMe(checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor="remember" 
                    className="text-sm font-normal"
                  >
                    Запомнить меня
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90"
                >
                  Войти
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Еще нет аккаунта?{" "}
                <Link to="/register" className="text-vra-purple hover:underline font-medium">
                  Зарегистрироваться
                </Link>
              </div>
              <div className="text-xs text-center text-muted-foreground">
                Продолжая, вы соглашаетесь с нашими{" "}
                <Link to="/terms" className="hover:underline">
                  Условиями использования
                </Link>{" "}
                и{" "}
                <Link to="/privacy" className="hover:underline">
                  Политикой конфиденциальности
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
