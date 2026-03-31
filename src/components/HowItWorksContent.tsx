"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Bot, Settings, Layers, Box, Cpu, 
  CheckCircle2, ArrowRight, Code, Shield, 
  Search, Wrench, Command 
} from "lucide-react";
import { withBase } from "@/lib/utils";
import { MagicCard } from "@/components/MagicCard";

export function HowItWorksContent() {
  const sections = [
    {
      id: "zsh-starship",
      icon: Terminal,
      title: "ZSH & Starship",
      subtitle: "A fundação definitiva para o seu terminal interativo.",
      gradient: "from-purple-500/20 to-pink-500/20 text-purple-500",
      description: "Substituímos o velho prompt cru do bash pelo Zsh integrado ao Oh My Zsh. Sobre isso, instalamos o Starship com um tema impecável e ultra rápido que suporta fontes ligadas.",
      features: [
        { title: "Prompt Inteligente", text: "Exibe status do Git, tempo de execução, e linguagem detectada." },
        { title: "Aliases Nativos", text: "Atalhos rápidos para evitar digitações repetidas diárias." },
        { title: "PATH Configurado", text: "Todas as suas ferramentas disponíveis em escopo global instantaneamente." }
      ]
    },
    {
      id: "ai-cli-tools",
      icon: Bot,
      title: "AI CLI Tools",
      subtitle: "Ferramentas de Inteligência Artificial para linha de comando.",
      gradient: "from-blue-500/20 to-cyan-500/20 text-blue-500",
      description: "A era do Vibe Coding necessita das IAs integradas no ambiente. Injetamos as melhores CLI de IA e garantimos que estejam rodando no contexto correto e na última versão (via NPM global).",
      features: [
        { title: "claude-code", text: "Invoque o modelo Claude dentro do próprio projeto para ler/alterar arquivos nativamente." },
        { title: "gemini-cli", text: "Assistente de terminal gratuito e altamente conectado do Google." },
        { title: "Codex & Copilot", text: "Acesso total à suíte de CLI do ecossistema GitHub e OpenAI." }
      ]
    },
    {
      id: "ecossistema-dev",
      icon: Box,
      title: "Ecossistema Dev Completo",
      subtitle: "Instalação invisível e veloz do seu ambiente principal.",
      gradient: "from-green-500/20 to-emerald-500/20 text-green-500",
      description: "Preparar a base das linguagens toma o seu tempo inteiro. Nós resolvemos baixando binários perfeitos e setando caminhos sem conflito no Mac/Linux de forma cirúrgica.",
      features: [
        { title: "Python Super Rápido", text: "Aproveitamos do `uv` (escrito em Rust) para criar ambientes Python sem dores de cabeça com interpretadores conflitantes." },
        { title: "Linguagens Modernas", text: "Go, Rust, Bun e Node pré-instalados na raiz para compilação super veloz." },
        { title: "Web Backend", text: "Ruby (Bundler) e PHP (Composer) rodando no SO sem a complexidade de antes." }
      ]
    },
    {
      id: "tmux-master",
      icon: Layers,
      title: "A Mágica do Tmux",
      subtitle: "Multiplexador de terminal que nunca morre.",
      gradient: "from-orange-500/20 to-red-500/20 text-orange-500",
      description: "Para não abrir 10 janelas, o Tmux permite organizar painéis de processos no mesmo terminal. Nós configuramos uma .tmux.conf recheada feita por especialistas em produtividade.",
      features: [
        { title: "Suporte Total a Mouse", text: "Role o conteúdo e clique em painéis livremente como um editor normal." },
        { title: "Sessões Imortais", text: "Se fechar o terminal e voltar amanhã, todas as abas ainda estarão rodando intactas." },
        { title: "Navegação Estilo Vim", text: "Transite sem usar atalhos chatos entre o código e os comandos do prompt." }
      ]
    },
    {
      id: "pm2",
      icon: Cpu,
      title: "Servidor & PM2",
      subtitle: "Não deixe processos em background pararem de funcionar.",
      gradient: "from-yellow-500/20 to-orange-500/20 text-yellow-500",
      description: "Para scripts 24/7, seja local ou em VPS remota, nada supera o PM2. Nós forçamos o PM2 para cuidar da sua máquina debaixo dos panos com integração nativa no S.O.",
      features: [
        { title: "Auto-Startup", text: "Registrado no systemd/launchd para ligar aplicações auto magicamente ao plugar na tomada." },
        { title: "Astro, Next, Python", text: "Hospede e gerencie dezenas de diferentes linguagens no mesmo PM2 list viewer." },
        { title: "Logs Centralizados", text: "Toda atividade do seu Vibe Coding fica guardada sem travar o seu console." }
      ]
    },
    {
      id: "modern-unix",
      icon: Settings,
      title: "Modern Unix",
      subtitle: "A nova era de utilitários rápidos.",
      gradient: "from-pink-500/20 to-rose-500/20 text-pink-500",
      description: "Os comandos clássicos do UNIX (como ls, cat e grep) foram modernizados pela comunidade de Rust nas últimas décadas. O SetupVibe substitui tudo pelos novos padrões globais.",
      features: [
        { title: "eza ao invés de ls", text: "Veja seus diretórios como uma árvore linda e colorida com leitura metadata perfeita." },
        { title: "bat ao invés de cat", text: "Destaque de sintaxe de arquivo e diferenciações visuais (git-diff) direto da tela sem abrir editores." },
        { title: "zoxide e ripgrep", text: "Pule entre pastas em nanossegundos com teleporte via IA de histórico (z) e faça buscas profundas no código inteiro numa fração de segundo." }
      ]
    },
    {
      id: "aliases-produtividade",
      icon: Command,
      title: "Aliases & Atalhos",
      subtitle: "Digite menos, produza muito mais.",
      gradient: "from-emerald-500/20 to-teal-500/20 text-emerald-500",
      description: "O SetupVibe pré-instala centenas de aliases inteligentes que transformam comandos complexos em poucas letras. É a diferença entre digitar 'git commit -m' e apenas 'gcm'.",
      features: [
        { title: "Git & GitHub", text: "Atalhos completos para todo o fluxo de trabalho Git e integração com GitHub CLI (gh)." },
        { title: "Docker & Compose", text: "Gerencie containers, volumes e redes com comandos simplificados e intuitivos." },
        { title: "Atalhos de IA", text: "Comandos ultrarrápidos para invocar Claude Code (cc) e Gemini (ge) sem burocracia." }
      ]
    }
  ];

  const categories = [
    {
      title: "Linguagens Modernas",
      icon: Code,
      color: "text-blue-500",
      description: "Compiladores base e ambientes puros instalados na raiz.",
      items: ["Go (Golang)", "Rust", "Python", "Ruby", "PHP 8.4"],
    },
    {
      title: "Ecossistema JavaScript",
      icon: Box,
      color: "text-yellow-500",
      description: "Runtimes ultrarrápidos e gerenciadores para a web moderna.",
      items: ["Node.js", "Bun", "PNPM"],
    },
    {
      title: "Processos & DevOps",
      icon: Cpu,
      color: "text-orange-500",
      description: "Infraestrutura local imbatível de daemonização.",
      items: ["PM2 (Global + Startup)", "Docker", "Docker Compose", "Ansible"],
    },
    {
      title: "Modern Unix",
      icon: Search,
      color: "text-rose-500",
      description: "Ferramentas incríveis re-escritas em Rust para produtividade CLI.",
      items: ["eza (ls)", "bat (cat)", "ripgrep (rg)", "fd (find)", "zoxide (z)", "delta (git diff)"],
    },
    {
      title: "Ferramentas Base",
      icon: Wrench,
      color: "text-gray-500",
      description: "Gerenciadores de pacotes integrados nativamente ao sistema.",
      items: ["Homebrew", "uv (Python)", "Composer (PHP)", "Bundler & rbenv (Ruby)", "Git", "cURL", "build-essential"],
    },
    {
      title: "AI CLI Tools",
      icon: Bot,
      color: "text-cyan-500",
      description: "Comandos nativos para Vibe Coding.",
      items: ["claude-code", "gemini-cli", "codex", "copilot-cli"],
    },
    {
      title: "O Terminal",
      icon: Terminal,
      color: "text-purple-500",
      description: "Uma interface gráfica limpa construída dentro do terminal shell.",
      items: ["Zsh", "Oh My Zsh", "Starship Prompt (Gruvbox)"],
    },
    {
      title: "Multiplexador Tmux",
      icon: Layers,
      color: "text-green-500",
      description: "Todas as abas do universo operando na mesma janela.",
      items: ["Tmux Core", "TPM (Manager)", "tmux-resurrect", "tmux-yank", "vim-tmux-navigator", "sainnhe/tmux-fzf", "onedark theme"],
    },
    {
      title: "Aliases & Atalhos",
      icon: Command,
      color: "text-emerald-500",
      description: "Centenas de atalhos inteligentes para produtividade instantânea.",
      items: ["Git Shortcuts", "Docker Aliases", "Tmux Master", "AI ge/cc", "Navegação rápida"],
    },
    {
      title: "Rede & Segurança",
      icon: Shield,
      color: "text-indigo-500",
      description: "Ponte e proteção pra testes de servidores locais.",
      items: ["Tailscale", "OpenSSH Server (Linux)", "nmap", "htop"],
    }
  ];

  return (
    <div className="w-full">
      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-12 md:py-24 space-y-24">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          const isEven = idx % 2 === 0;

          return (
            <section id={section.id} key={section.id} className="scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                {/* Column: Title & Info */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-5 space-y-6 lg:sticky lg:top-36 ${!isEven && "lg:col-start-8"}`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.gradient} bg-opacity-10 mb-2 border shadow-sm`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{section.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {section.subtitle}
                  </p>
                </motion.div>

                {/* Column: Features & Description Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`lg:col-span-6 space-y-8 ${isEven ? "lg:col-start-7" : "lg:col-start-1 lg:row-start-1"}`}
                >
                  <div className="rounded-3xl border bg-card/50 p-6 md:p-10 shadow-sm backdrop-blur-sm">
                    <p className="text-lg leading-relaxed mb-8 font-medium">
                      {section.description}
                    </p>

                    <div className="space-y-6">
                      {section.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Technical Stack Grid (from Batteries Included) */}
      <section className="py-24 bg-muted/30 border-y scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">O que está incluído por padrão</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nenhuma ferramenta oculta ou container fechado. Tudo instalado nativamente para máxima performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <MagicCard key={index} className="p-8 group h-full flex flex-col" gradientSize={300}>
                  <div className="flex flex-col h-full">
                    <div className={`inline-flex p-4 rounded-xl bg-muted/50 ${category.color} mb-6 self-start shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {category.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-muted text-foreground border border-border/50 shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Pronto para transformar sua máquina?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experimente um ecossistema que não afunda você em jargões de DevOps. Foque no que importa: conversar com a IA e criar códigos espetaculares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href={withBase("/instalar")}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Instalar Agora
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
            <a
              href={withBase("/ferramentas")}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-300 border border-border shadow-sm"
            >
              Ver Detalhes Técnicos
              <Settings className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
