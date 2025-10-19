import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Укажите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно быть не менее 2 символов';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Укажите телефон';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/[\s()-]/g, ''))) {
      newErrors.phone = 'Укажите корректный телефон';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Укажите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Укажите корректный email';
    }
    
    if (!formData.businessType) {
      newErrors.businessType = 'Выберите тип заявки';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Опишите ваш запрос';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно быть не менее 10 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Заявка отправлена:', formData);
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessType: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-gold font-bold text-xl">БП</span>
            </div>
            <span className="text-lg md:text-2xl font-bold text-primary">БизнесПартнер</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-700 hover:text-gold transition-colors">Услуги</a>
            <a href="#sellers" className="text-slate-700 hover:text-gold transition-colors">Продавцам</a>
            <a href="#buyers" className="text-slate-700 hover:text-gold transition-colors">Покупателям</a>
            <a href="#cases" className="text-slate-700 hover:text-gold transition-colors">Кейсы</a>
            <a href="#blog" className="text-slate-700 hover:text-gold transition-colors">Блог</a>
            <a href="#contact" className="text-slate-700 hover:text-gold transition-colors">Контакты</a>
          </div>
          
          <Button className="hidden md:flex bg-gold hover:bg-gold/90 text-primary font-semibold premium-button">
            Заказать консультацию
          </Button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary"
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 hover:text-gold transition-colors border-b border-slate-100">Услуги</a>
              <a href="#sellers" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 hover:text-gold transition-colors border-b border-slate-100">Продавцам</a>
              <a href="#buyers" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 hover:text-gold transition-colors border-b border-slate-100">Покупателям</a>
              <a href="#cases" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 hover:text-gold transition-colors border-b border-slate-100">Кейсы</a>
              <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 hover:text-gold transition-colors border-b border-slate-100">Блог</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-slate-700 hover:text-gold transition-colors border-b border-slate-100">Контакты</a>
              <Button className="w-full bg-gold hover:bg-gold/90 text-primary font-semibold premium-button mt-2">
                Заказать консультацию
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Продаём и покупаем бизнес{" "}
                <span className="gradient-text">выгодно и эффективно</span>
              </h1>
              <p className="text-base md:text-xl text-slate-700 leading-relaxed">
                Экспертное сопровождение сделок и внедрение инструментов систематизации менеджмента для максимальной прибыльности.
              </p>
              <p className="text-sm md:text-lg text-slate-600">
                Мы – агентство <span className="font-semibold text-primary">БизнесПартнер</span>, ваш надежный партнер в сделках купли-продажи готового бизнеса. Мы не просто помогаем совершить сделку, мы обеспечиваем ее выгодность и успех в долгосрочной перспективе.
              </p>
              <Button size="lg" className="w-full md:w-auto bg-gold hover:bg-gold/90 text-primary font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 premium-button">
                Получить бесплатную консультацию
              </Button>
            </div>
            
            <div className="relative animate-scale-in animate-delay-200 mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl md:rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/fb13814d-7bb2-4aab-9d14-b9c77f63b9bf/files/f60c08e3-7915-461a-b0c1-f17f8a6b21da.jpg" 
                alt="Бизнес консультация" 
                className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
            5 причин выбрать <span className="gradient-text">БизнесПартнер</span>
          </h2>
          <p className="text-center text-slate-600 text-sm md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Мы объединяем профессионализм в сделках с системным подходом к управлению бизнесом
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "Award",
                title: "Опыт",
                description: "Многолетний опыт успешных сделок. Знаем рынок изнутри.",
                delay: "0"
              },
              {
                icon: "Briefcase",
                title: "Экспертность",
                description: "Профессионалы в области оценки, продажи и покупки бизнеса.",
                delay: "100"
              },
              {
                icon: "Settings",
                title: "Системный подход",
                description: "Внедрение инструментов управления для повышения прибыльности.",
                delay: "200"
              },
              {
                icon: "Lock",
                title: "Конфиденциальность",
                description: "Гарантируем полную конфиденциальность на всех этапах.",
                delay: "300"
              },
              {
                icon: "Handshake",
                title: "Сопровождение",
                description: "Сопровождаем вас от начала до конца сделки.",
                delay: "400"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className={`border-2 border-slate-200 hover:border-gold transition-all duration-300 hover:shadow-xl animate-slide-up animate-delay-${item.delay}`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold to-gold/70 rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Sellers */}
      <section id="sellers" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Поможем продать ваш бизнес <span className="gradient-text">выгодно</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
                Мы понимаем, что продажа бизнеса – это ответственный шаг. Наша команда обеспечит вам профессиональную оценку, грамотное продвижение, конфиденциальность и выгодную сделку.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "Calculator", text: "Оценка бизнеса" },
                  { icon: "FileCheck", text: "Подготовка к продаже" },
                  { icon: "Users", text: "Поиск покупателей" },
                  { icon: "FileSignature", text: "Сопровождение сделки" },
                  { icon: "TrendingUp", text: "Внедрение инструментов систематизации менеджмента" }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} className="text-gold" size={20} />
                    </div>
                    <span className="text-sm md:text-lg text-slate-700 font-medium">{service.text}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-semibold premium-button">
                Оставить заявку на продажу
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-primary/10 rounded-3xl blur-2xl"></div>
              <Card className="relative border-2 border-slate-200 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-2xl flex items-center justify-center">
                        <Icon name="TrendingUp" className="text-white" size={32} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Средний рост стоимости</p>
                        <p className="text-3xl font-bold text-gold">+23%</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-slate-200"></div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Успешных сделок</span>
                        <span className="font-bold text-primary">250+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Средний срок сделки</span>
                        <span className="font-bold text-primary">45 дней</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Удовлетворённость клиентов</span>
                        <span className="font-bold text-gold">98%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Buyers */}
      <section id="buyers" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Card className="border-2 border-slate-200 shadow-2xl">
                <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Поможем найти идеальный бизнес</h3>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Ресторанный бизнес", value: "35", color: "bg-gold" },
                      { label: "Розничная торговля", value: "28", color: "bg-primary" },
                      { label: "Онлайн-бизнес", value: "42", color: "bg-slate-400" },
                      { label: "Производство", value: "18", color: "bg-gold/60" }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700">{item.label}</span>
                          <span className="font-bold text-primary">{item.value}</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${item.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-600 pt-4 border-t border-slate-200">
                    * Актуальные предложения в нашей базе
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2 space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Поможем найти ваш <span className="gradient-text">идеальный бизнес</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
                Мы поможем вам найти и приобрести готовый бизнес, соответствующий вашим требованиям и бюджету. Наша экспертиза в области систематизации управления обеспечит вам понимание текущей ситуации и перспектив развития бизнеса.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "Search", text: "Подбор бизнеса по критериям" },
                  { icon: "BarChart", text: "Анализ и оценка бизнеса" },
                  { icon: "FileCheck", text: "Сопровождение сделки" },
                  { icon: "FileText", text: "Помощь в оформлении документов" },
                  { icon: "Settings", text: "Внедрение инструментов управления" }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} className="text-primary" size={20} />
                    </div>
                    <span className="text-sm md:text-lg text-slate-700 font-medium">{service.text}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="w-full md:w-auto bg-gold hover:bg-gold/90 text-primary font-semibold premium-button">
                Найти свой бизнес
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Как мы <span className="gradient-text">проводим сделки</span>
          </h2>
          <p className="text-center text-slate-300 text-sm md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Прозрачный процесс от первой консультации до успешного завершения сделки
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { icon: "MessageSquare", title: "Консультация", description: "Знакомство, обсуждение целей и задач" },
              { icon: "Calculator", title: "Оценка", description: "Профессиональная оценка бизнеса" },
              { icon: "Megaphone", title: "Продвижение", description: "Поиск покупателей или подбор бизнеса" },
              { icon: "Users", title: "Переговоры", description: "Проведение переговоров и согласование условий" },
              { icon: "FileSignature", title: "Сделка", description: "Заключение сделки и юридическое сопровождение" },
              { icon: "Rocket", title: "Внедрение", description: "Внедрение инструментов управления" }
            ].map((step, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-gold rounded-full flex items-center justify-center">
                    <Icon name={step.icon} className="text-primary" size={20} />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-gold/50">{index + 1}</div>
                  <h3 className="text-sm md:text-lg font-bold">{step.title}</h3>
                  <p className="text-xs md:text-sm text-slate-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4">
            Наши <span className="gradient-text">успешные кейсы</span>
          </h2>
          <p className="text-center text-slate-600 text-sm md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Реальные истории наших клиентов и достигнутые результаты
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                type: "Ресторанный бизнес",
                result: "Продажа за 18М₽",
                improvement: "+35% к стоимости после систематизации",
                testimonial: "Благодаря БизнесПартнер мы не только продали бизнес выгодно, но и навели порядок в управлении перед продажей."
              },
              {
                type: "Онлайн-магазин",
                result: "Сделка за 32 дня",
                improvement: "Внедрена CRM, +28% конверсии",
                testimonial: "Профессиональный подход на всех этапах. Помогли оптимизировать процессы и найти идеального покупателя."
              },
              {
                type: "Производство",
                result: "Покупка за 45М₽",
                improvement: "Полный аудит и план развития",
                testimonial: "Команда провела глубокий анализ бизнеса, помогли избежать рисков и увидеть потенциал роста."
              }
            ].map((caseItem, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-gold transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gold uppercase tracking-wide">{caseItem.type}</div>
                    <h3 className="text-2xl font-bold text-primary">{caseItem.result}</h3>
                  </div>
                  
                  <div className="p-4 bg-gold/10 rounded-lg">
                    <p className="text-sm font-medium text-primary">{caseItem.improvement}</p>
                  </div>
                  
                  <p className="text-slate-600 italic">"{caseItem.testimonial}"</p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon name="Star" className="text-gold fill-gold" size={16} />
                    <Icon name="Star" className="text-gold fill-gold" size={16} />
                    <Icon name="Star" className="text-gold fill-gold" size={16} />
                    <Icon name="Star" className="text-gold fill-gold" size={16} />
                    <Icon name="Star" className="text-gold fill-gold" size={16} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button size="lg" variant="outline" className="w-full md:w-auto border-2 border-gold text-gold hover:bg-gold hover:text-primary font-semibold premium-button">
              Смотреть все кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Оставьте <span className="gradient-text">заявку</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
              Заполните форму, и наш эксперт свяжется с вами в течение 30 минут
            </p>
          </div>

          <Card className="border-2 border-slate-200 shadow-2xl">
            <CardContent className="p-6 md:p-10">
              {submitSuccess ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Заявка отправлена!</h3>
                  <p className="text-slate-600">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Ваше имя <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <Icon name="AlertCircle" size={14} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Телефон <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <Icon name="AlertCircle" size={14} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <Icon name="AlertCircle" size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-slate-700 font-medium">
                      Тип заявки <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => handleChange('businessType', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold ${
                        errors.businessType ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Выберите тип заявки</option>
                      <option value="sell">Хочу продать бизнес</option>
                      <option value="buy">Хочу купить бизнес</option>
                      <option value="valuation">Оценка бизнеса</option>
                      <option value="consultation">Консультация</option>
                      <option value="management">Систематизация управления</option>
                    </select>
                    {errors.businessType && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <Icon name="AlertCircle" size={14} />
                        {errors.businessType}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Сообщение <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите подробнее о вашем запросе..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className={`resize-none ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <Icon name="AlertCircle" size={14} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold/90 text-primary font-semibold text-base md:text-lg premium-button"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Icon name="Loader2" className="animate-spin" size={20} />
                          Отправка...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Icon name="Send" size={20} />
                          Отправить заявку
                        </span>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-slate-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/70 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary">БП</span>
                </div>
                <span className="text-xl font-bold">БизнесПартнер</span>
              </div>
              <p className="text-slate-300 text-sm">
                Надежный партнер в сделках купли-продажи бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-300 hover:text-gold transition-colors">Услуги</a>
                <a href="#sellers" className="block text-slate-300 hover:text-gold transition-colors">Продавцам</a>
                <a href="#buyers" className="block text-slate-300 hover:text-gold transition-colors">Покупателям</a>
                <a href="#cases" className="block text-slate-300 hover:text-gold transition-colors">Кейсы</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>+7 (495) 123-45-67</p>
                <p>info@biznespartner.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                  <Icon name="Linkedin" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate-300">
            <p>© 2024 БизнесПартнер. Все права защищены.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gold transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;