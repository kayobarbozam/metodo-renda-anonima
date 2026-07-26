import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  EyeOff, 
  Zap,
  Users,
  CheckCircle2,
  Clock,
  ChevronRight
} from 'lucide-react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * (1500 - 900 + 1)) + 900);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const tick = () => {
      const delay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
      const timer = setTimeout(() => {
        setViewers(prev => {
          const delta = Math.floor(Math.random() * 15) + 1;
          const direction = Math.random() < 0.5 ? 1 : -1;
          return Math.min(1500, Math.max(900, prev + delta * direction));
        });
        tick();
      }, delay);
      return timer;
    };
    const timer = tick();
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Método Liberado por Tempo Limitado
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-[1.1] mb-6 tracking-tight text-white"
        >
          O Método Oculto Para Ganhar Dinheiro na Internet... <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Sem Aparecer Para Ninguém</span>
        </motion.h1>

        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12"
        >
          Descubra como pessoas comuns estão gerando renda diária de forma 100% anônima, usando apenas o celular e copiando um sistema que poucos conhecem.
        </motion.p>

        {/* Google Drive VSL Player */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12"
        >
          <iframe
            src="https://drive.google.com/file/d/1b0Y6hh2qx8tJPVEolxzqTOlQ6yrM1jy8/preview"
            width="100%"
            height="400px"
            frameBorder={0}
            allowFullScreen
            style={{ border: 'none', display: 'block' }}
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 pointer-events-none z-10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            {viewers.toLocaleString('pt-BR')} pessoas assistindo agora
          </div>
        </motion.div>

        <motion.a
          href="https://pay.kiwify.com.br/I8T6zFu?afid=VOFCrdtt"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full sm:w-auto px-8 py-5 sm:px-12 sm:py-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg sm:text-xl shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          QUERO COMEÇAR AGORA
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </section>

      {/* 2. SOCIAL PROOF BAR */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">+4.200</p>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Alunos Ativos</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">97%</p>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">De Aprovação</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Zap className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">7 Dias</p>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Para Primeiros Resultados</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <EyeOff className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">100%</p>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Anônimo</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-24 px-4 relative">
        <div className="absolute top-1/2 -right-64 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Por que o Método Renda Anônima 2.0 é diferente?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Esqueça tudo que te disseram sobre criar autoridade e gravar vídeos de dancinha.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: EyeOff,
                title: "100% Anônimo",
                desc: "Ninguém nunca saberá que é você. Sem exposição, sem julgamentos de amigos ou familiares. Você constrói sua renda em total sigilo."
              },
              {
                icon: Smartphone,
                title: "Só com o Celular",
                desc: "Sem precisar de computador potente ou equipamentos caros. Tudo que você precisa está na palma da sua mão, onde quer que você esteja."
              },
              {
                icon: Lock,
                title: "Sem Aparecer",
                desc: "Zero câmera, zero vídeo, zero stories. O sistema funciona operando nos bastidores da internet, redirecionando fluxos de forma invisível."
              },
              {
                icon: Zap,
                title: "Resultados Rápidos",
                desc: "Enquanto métodos tradicionais levam meses para gerar autoridade, nossa estratégia foca em conversão direta. Primeiros ganhos possíveis em 7 dias."
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-card/50 border border-white/5 rounded-2xl p-8 hover:bg-card hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full group-hover:bg-primary/20 transition-all duration-500" />
                
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display tracking-wide">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 px-4 bg-black/40 border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Alunos Que Já Estão Faturando de Forma Anônima
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Resultados reais de pessoas que aplicaram o método nos últimos dias.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Carlos M.",
                loc: "SP",
                initial: "C",
                color: "bg-blue-500",
                time: "10:42",
                msg: "Cara, fiz R$ 847 na primeira semana e minha esposa nem sabe de onde veio esse dinheiro! O método funciona mesmo, bizarro."
              },
              {
                name: "Ana P.",
                loc: "RJ",
                initial: "A",
                color: "bg-purple-500",
                time: "14:15",
                msg: "Eu tinha muita vergonha de gravar vídeo. Segui o módulo 3 passo a passo e hoje caiu minha primeira venda de R$ 197. Tô tremendo!!!"
              },
              {
                name: "Ricardo L.",
                loc: "MG",
                initial: "R",
                color: "bg-emerald-500",
                time: "09:23",
                msg: "Trabalho como CLT e aplico o método só pelo celular na hora do almoço. Já tirei R$ 1.200 a mais esse mês. Ninguém no trabalho desconfia."
              },
              {
                name: "Juliana F.",
                loc: "SC",
                initial: "J",
                color: "bg-pink-500",
                time: "18:50",
                msg: "O melhor de tudo é não precisar aturar cliente chato e não ter que ficar implorando nos stories pra comprarem de mim."
              },
              {
                name: "Marcos T.",
                loc: "PR",
                initial: "M",
                color: "bg-orange-500",
                time: "21:14",
                msg: "Comprei o curso ontem de noite, apliquei de madrugada, acordei com notificação de venda. Surreal a velocidade disso."
              },
              {
                name: "Fernanda S.",
                loc: "BA",
                initial: "F",
                color: "bg-cyan-500",
                time: "11:30",
                msg: "Sempre achei que esse negócio de internet era golpe, mas o formato anônimo me deu coragem de testar. Que bom que eu testei 🙏"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-[#1e1e1e]/80 border border-white/5 rounded-[1.5rem] rounded-tl-sm p-4 shadow-xl backdrop-blur-md max-w-sm relative"
              >
                {/* Fake chat header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{testimonial.name} <span className="text-white/40 text-xs font-normal">({testimonial.loc})</span></h4>
                    <p className="text-secondary text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
                
                {/* Message bubble */}
                <div className="relative">
                  <p className="text-[#e9edef] text-[15px] leading-relaxed">
                    {testimonial.msg}
                  </p>
                  <div className="flex justify-end items-center gap-1 mt-2">
                    <span className="text-[#8696a0] text-[11px]">{testimonial.time}</span>
                    <CheckCircle2 className="w-3 h-3 text-[#53bdeb]" /> {/* Read receipt blue */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT YOU'LL LEARN */}
      <section className="py-24 px-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none -z-10" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Tudo que está incluído no Método
            </h2>
            <p className="text-muted-foreground text-lg">
              Um passo a passo direto ao ponto, sem enrolação.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-card/30 border border-white/5 rounded-2xl p-2 sm:p-6 backdrop-blur-sm"
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  id: "1",
                  title: "A Fundação",
                  desc: "Como funciona o ecossistema oculto da internet. Entenda o mecanismo exato que faz o dinheiro fluir sem que ninguém precise saber seu nome ou ver seu rosto."
                },
                {
                  id: "2",
                  title: "Configuração Anônima",
                  desc: "Criando sua identidade digital blindada. Ferramentas, estruturas e configurações para garantir seu total anonimato desde o primeiro clique."
                },
                {
                  id: "3",
                  title: "As 3 Fontes de Renda",
                  desc: "Acesso aos canais específicos que geram dinheiro 24h por dia. Nada de produtos físicos, nada de suporte, nada de estoque. Apenas conversão pura."
                },
                {
                  id: "4",
                  title: "Automação Discreta",
                  desc: "Como fazer o sistema trabalhar por você no piloto automático. Configure uma vez e deixe rodar, precisando apenas de minutos por dia para manutenção."
                },
                {
                  id: "5",
                  title: "Escala Silenciosa",
                  desc: "O caminho exato de R$500 para R$5.000 por mês. Como multiplicar seus resultados sem precisar trabalhar mais horas ou investir rios de dinheiro."
                },
                {
                  id: "6",
                  title: "Bônus: Arsenal Oculto",
                  desc: "Uma lista secreta com todas as ferramentas gratuitas e de baixo custo que os grandes players usam para não aparecerem na internet."
                }
              ].map((mod) => (
                <AccordionItem key={mod.id} value={`item-${mod.id}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/30">
                        {mod.id}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-white/90">
                        {mod.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      {mod.desc}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 6. GUARANTEE SECTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-black border-y border-white/5 relative overflow-hidden">
        {/* Glow behind shield */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-8 relative"
          >
            {/* Custom Shield CSS Design */}
            <div className="relative flex items-center justify-center w-32 h-32 group">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:bg-secondary/30 transition-all duration-500" />
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-secondary drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10 relative">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="rgba(16,185,129,0.1)"/>
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold font-display text-white mb-6"
          >
            Garantia Incondicional de 7 Dias
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            Sua compra é 100% protegida. Acesse todo o material agora mesmo. Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, ou achar que não é para você, devolvemos 100% do seu dinheiro. <strong className="text-white font-medium">Sem perguntas, sem burocracia, sem letras miúdas.</strong>
          </motion.p>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Ainda tem dúvidas? As respostas estão aqui.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-card/20 rounded-2xl p-2 sm:p-6"
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Preciso aparecer ou mostrar meu rosto?",
                  a: "Não. O método é 100% focado no anonimato. Nenhuma das estratégias exige que você grave vídeos, tire fotos ou apareça de qualquer forma."
                },
                {
                  q: "Precisa de computador?",
                  a: "Não. Tudo funciona perfeitamente apenas pelo celular. O sistema foi desenhado para ser portátil e prático."
                },
                {
                  q: "Funciona para iniciantes?",
                  a: "Sim. O método foi criado do zero para quem nunca ganhou 1 real na internet. O passo a passo é prático e não exige conhecimento técnico."
                },
                {
                  q: "Quanto tempo preciso dedicar por dia?",
                  a: "Com 1 a 2 horas por dia você já consegue configurar e manter o sistema rodando. Muitos alunos fazem isso no tempo livre ou no intervalo do trabalho."
                },
                {
                  q: "Em quanto tempo verei resultados?",
                  a: "Muitos alunos veem os primeiros resultados em 7 dias aplicando exatamente o que é ensinado. Depende da sua consistência em seguir o método."
                },
                {
                  q: "Como vou receber o acesso?",
                  a: "Imediatamente após a aprovação do pagamento, você receberá um e-mail com seu login e senha para acessar a área de membros exclusiva."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left font-medium text-white/90 hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground/90 leading-relaxed">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section id="checkout" className="py-24 px-4 relative flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold tracking-wide uppercase text-sm mb-8">
            <Clock className="w-4 h-4" />
            Oferta por tempo limitado
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
            O segredo foi revelado. <br />A decisão é sua.
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10">
            Você pode continuar onde está, ou pode aplicar o método hoje e ver o que acontece nos próximos 7 dias. O risco é todo nosso.
          </p>

          <a
            href="https://pay.kiwify.com.br/I8T6zFu?afid=VOFCrdtt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-5 sm:px-16 sm:py-6 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xl sm:text-2xl shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto animate-pulse-glow group"
          >
            QUERO ACESSAR O MÉTODO
            <Lock className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              Pagamento 100% Seguro
            </div>
            
            {/* Fake payment methods */}
            <div className="flex items-center justify-center gap-3 opacity-60 grayscale">
              <div className="h-6 w-10 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold text-white">PIX</div>
              <div className="h-6 w-10 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold text-white">VISA</div>
              <div className="h-6 w-10 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold text-white">MC</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <div className="text-center text-xs text-muted-foreground/40 max-w-2xl">
            <p className="mb-2 text-muted-foreground/60 text-sm font-medium">
              Criado por <span className="text-white/50">Enrico Freitas</span>
            </p>
            <p className="mb-2">
              Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da Meta Platforms, Inc.
            </p>
            <p>
              &copy; 2026 Enrico Freitas - Método Renda Anônima 2.0. Todos os direitos reservados. Os resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
