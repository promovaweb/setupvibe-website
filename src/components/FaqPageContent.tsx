"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Terminal, Server, Bot, Cpu, Layers } from "lucide-react";

const faqCategories = [
  {
    id: "general",
    title: "Geral e Instalação",
    icon: BookOpen,
    faqs: [
      {
        q: "O SetupVibe apaga arquivos antigos do meu computador?",
        a: "Não. O script apenas gerencia dependências globais e de desenvolvedor. Se houver algum `.zshrc` ou configuração antiga, nossos scripts utilizam rotinas modernas recomendadas para criar backups locais antes de sobrescrevê-los."
      },
      {
        q: "É gratuito de verdade?",
        a: "Sim, somos 100% open-source (GPL-3.0) e acreditamos que ferramentas de construção devem ser democráticas. Você pode verificar todo código cru diretamente no Github do projeto."
      },
      {
        q: "Posso instalar no Windows?",
        a: "Completamente! Utilizando o Windows Subsystem for Linux (WSL 2). Instalando a distro Ubuntu pela Microsoft Store e em seguida chamando nosso script clássico, você transformará o Windows em uma máquina Linux robusta para programação."
      },
      {
        q: "Quais SOs Linux são suportados?",
        a: "Nossa lógica checa perfeitamente Debian (12+), Ubuntu (24.04+), Zorin OS e Linux Mint. Você pode tentar em outras distros baseadas no kernel Debian, porém as configurações de repositório APT podem divergir se muito customizadas."
      }
    ]
  },
  {
    id: "tmux",
    title: "Dominando o Tmux",
    icon: Layers,
    faqs: [
      {
        q: "Os meus atalhos do teclado ficaram esquisitos ou meu mouse parou. Como lidar com Tmux?",
        a: "Pelo contrário! O SetupVibe inclui plugins como o `tmux-better-mouse-mode`. Sua rolagem do mouse e clique sobre as abas do terminal vão atuar exatamente como numa janela do navegador. Caso sinta que está perdido, basta desligar o terminal e reabrir."
      },
      {
        q: "Como instalo ou recarrego novos Plugins de Tmux?",
        a: "Utilizamos TPM (Tmux Plugin Manager). Para instalar algo que você adicionou no seu `~/.tmux.conf`, basta rodar a máquina e apertar a sua tecla de Prefixo seguido da letra I Maiúsculo (`Prefix + I`). Ele vai plugar e baixar via Git."
      },
      {
        q: "Qual a Tecla de Prefixo base do projeto?",
        a: "Por padrão da comunidade Open-Source, tentamos modificar a tecla `Prefix` do Tmux de `Ctrl+B` (que era a clássica original) paras teclas muito mais ergonômicas perto do layout do teclado comum (verifique no dotfile gerado)."
      },
      {
        q: "O Tmux preserva o histórico de sessões em caso de queda de energia?",
        a: "Sim. O plugin Tmux-Resurrect é incluído por padrão. Ele está configurado de forma inteligente para que se o sistema matar a janela, suas instâncias retornem intactas na aba onde você parou."
      }
    ]
  },
  {
    id: "pm2",
    title: "Processos Ininterruptos com PM2",
    icon: Cpu,
    faqs: [
      {
        q: "Por que usar PM2 para tudo em vez da ferramenta das linguagens?",
        a: "O PM2 roda processos em C++, Node, Go ou Python de forma agnóstica na porta dos fundos (daemon). Ele gera logs em tempo real agregados e cuida da resiliência térmica limitando a recargas caso o serviço gere erro 500 ou trave memória."
      },
      {
        q: "Como acompanho se o PM2 está online?",
        a: "Em qualquer aba de terminal nova, apenas digite `pm2 monit` e sua tela virará um painel de monitoramento robusto ao estilo htop focado apenas nos processos ativos listando Memória e CPU em tempo real."
      },
      {
        q: "Processos PM2 voltam se a VPS ligar do zero (Reboot)?",
        a: "Sim. No passo 6 do script da SetupVibe para servidores (e Desktop), o PM2 Startup foi mapeado no boot principal (Launchd para Mac e Systemd no Linux). Ele congela os processos que estava rodando antes da queda e dá resume automaticamente em milissegundos."
      }
    ]
  },
  {
    id: "ai",
    title: "Escopo de Inteligência Artificial",
    icon: Bot,
    faqs: [
      {
        q: "Eu ainda preciso configurar chaves de APi para o Claude-Code ou Gemini?",
        a: "Sim. Instalamos o cli das inteligências, porém todas dependem de credenciamento e tokens das criadoras das chaves originais. Digite o respectivo comando, por exemplo, e autentique localmente via login direto do oauth2 no terminal."
      },
      {
        q: "Por que eu focaria no terminal (CLI) se posso usar as IAs pelo site?",
        a: "Porque no cli da sua máquina, a Inteligência ganha visão absoluta de todos os seus arquivos, tem a permissão de injetar ou editar código nas entranhas dos arquivos ignorando uploads e não tem limite de token/copiar e colar. Elas são agentes de máquina completa e criam software sozinhas."
      }
    ]
  }
];

export function FaqPageContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-muted/20" />
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-1.5 text-sm mb-6 shadow-sm">
              <span className="text-xl">💡</span>
              <span className="text-muted-foreground font-semibold">Tire suas dúvidas</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Perguntas Frequentes & Guias
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Consulte respostas absolutas criativas sobre todas as entranhas dos utilitários como PM2, Tmux e o sistema isolado.
          </motion.p>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {faqCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={cat.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">{cat.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {cat.faqs.map((faq, fIdx) => (
                    <AccordionItem key={fIdx} value={`${cat.id}-${fIdx}`} className="border bg-card/60 backdrop-blur-sm rounded-2xl px-6 py-2 shadow-sm data-[state=open]:border-primary/50 transition-colors">
                      <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4 pt-2">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
