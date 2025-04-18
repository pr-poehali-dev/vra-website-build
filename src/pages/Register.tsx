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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Register = () => {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет логика регистрации
    console.log("Регистрация:", { 
      userType, 
      email, 
      password, 
      firstName, 
      lastName, 
      acceptTerms 
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Декоративные фоновые элементы */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-vra-purple/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-vra-blue/10 blur-3xl"></div>
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
              <CardTitle className="text-2xl font-bold text-center">Регистрация</CardTitle>
              <CardDescription className="text-center">
                Создайте свою учетную запись в VRA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="student" value={userType} onValueChange={setUserType}>
                <TabsList className="grid grid-cols-3 w-full mb-4">
                  <TabsTrigger value="student">Ученик</TabsTrigger>
                  <TabsTrigger value="parent">Родитель</TabsTrigger>
                  <TabsTrigger value="teacher">Преподаватель</TabsTrigger>
                </TabsList>
              </Tabs>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Имя</Label>
                    <Input
                      id="first-name"
                      placeholder="Имя"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Фамилия</Label>
                    <Input
                      id="last-name"
                      placeholder="Фамилия"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
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
                  <Label htmlFor="password">Пароль</Label>
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
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                  <div className="relative">
                    <Input
                      id="confirm-password"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                    >
                      {isConfirmPasswordVisible ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms}
                    onCheckedChange={(checked) => 
                      setAcceptTerms(checked as boolean)
                    }
                    required
                  />
                  <Label 
                    htmlFor="terms" 
                    className="text-sm font-normal leading-tight"
                  >
                    Я принимаю{" "}
                    <Link to="/terms" className="text-vra-purple hover:underline">
                      условия использования
                    </Link>{" "}
                    и{" "}
                    <Link to="/privacy" className="text-vra-purple hover:underline">
                      политику конфиденциальности
                    </Link>
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-vra-blue to-vra-purple hover:opacity-90"
                  disabled={!acceptTerms}
                >
                  Зарегистрироваться
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-vra-purple hover:underline font-medium">
                  Войдите
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
