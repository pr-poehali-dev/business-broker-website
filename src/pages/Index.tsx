import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-gold font-bold text-xl">БП</span>
            </div>
            <span className="text-2xl font-bold text-primary">БизнесПартнер</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-700 hover:text-gold transition-colors">Услуги</a>
            <a href="#sellers" className="text-slate-700 hover:text-gold transition-colors">Продавцам</a>
            <a href="#buyers" className="text-slate-700 hover:text-gold transition-colors">Покупателям</a>
            <a href="#cases" className="text-slate-700 hover:text-gold transition-colors">Кейсы</a>
            <a href="#blog" className="text-slate-700 hover:text-gold transition-colors">Блог</a>
            <a href="#contact" className="text-slate-700 hover:text-gold transition-colors">Контакты</a>
          </div>
          
          <Button className="bg-gold hover:bg-gold/90 text-primary font-semibold premium-button">
            Заказать консультацию
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Продаём и покупаем бизнес{" "}
                <span className="gradient-text">выгодно и эффективно</span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed">
                Экспертное сопровождение сделок и внедрение инструментов систематизации менеджмента для максимальной прибыльности.
              </p>
              <p className="text-lg text-slate-600">
                Мы – агентство <span className="font-semibold text-primary">БизнесПартнер</span>, ваш надежный партнер в сделках купли-продажи готового бизнеса. Мы не просто помогаем совершить сделку, мы обеспечиваем ее выгодность и успех в долгосрочной перспективе.
              </p>
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary font-semibold text-lg px-8 py-6 premium-button">
                Получить бесплатную консультацию
              </Button>
            </div>
            
            <div className="relative animate-scale-in animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/fb13814d-7bb2-4aab-9d14-b9c77f63b9bf/files/f60c08e3-7915-461a-b0c1-f17f8a6b21da.jpg" 
                alt="Бизнес консультация" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            5 причин выбрать <span className="gradient-text">БизнесПартнер</span>
          </h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
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
      <section id="sellers" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Поможем продать ваш бизнес <span className="gradient-text">выгодно</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
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
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} className="text-gold" size={24} />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{service.text}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold premium-button">
                Оставить заявку на продажу
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-primary/10 rounded-3xl blur-2xl"></div>
              <Card className="relative border-2 border-slate-200 shadow-2xl">
                <CardContent className="p-8">
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
      <section id="buyers" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Card className="border-2 border-slate-200 shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Поможем найти идеальный бизнес</h3>
                  
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
            
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Поможем найти ваш <span className="gradient-text">идеальный бизнес</span>
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
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
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} className="text-primary" size={24} />
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{service.text}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary font-semibold premium-button">
                Найти свой бизнес
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary to-slate-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Как мы <span className="gradient-text">проводим сделки</span>
          </h2>
          <p className="text-center text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
            Прозрачный процесс от первой консультации до успешного завершения сделки
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                  <div className="w-14 h-14 mx-auto bg-gold rounded-full flex items-center justify-center">
                    <Icon name={step.icon} className="text-primary" size={24} />
                  </div>
                  <div className="text-4xl font-bold text-gold/50">{index + 1}</div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
            Наши <span className="gradient-text">успешные кейсы</span>
          </h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Реальные истории наших клиентов и достигнутые результаты
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                <CardContent className="p-8 space-y-6">
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
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-primary font-semibold premium-button">
              Смотреть все кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gold to-gold/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Готовы начать работу с нами?
          </h2>
          <p className="text-xl text-primary/80 mb-10 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10 py-6 premium-button">
            Получить консультацию сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-300">
            <p>© 2024 БизнесПартнер. Все права защищены.</p>
            <div className="flex gap-6">
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