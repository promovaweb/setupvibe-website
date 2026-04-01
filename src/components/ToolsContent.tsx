"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Server, Monitor, CheckCircle, 
  Cpu, Zap, ShieldCheck, Box, 
  Bot, Code2, Layers, Globe, Network, 
  Settings, Trash2, Hammer,
  Workflow, Database, Cloud, TerminalSquare,
  Wrench, Command, Search, FileCode,
  BarChart3, HardDrive,
  Layout, MousePointer2,
  ChevronRight, Hash, Info, Lightbulb,
  Activity, ArrowUpCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "sistema-base",
    number: 1,
    title: "Sistema Base e Build Tools",
    icon: Hammer,
    description: "Antes de instalar linguagens de alto nível, o script prepara o 'alicerce' do sistema. Isso inclui compiladores C/C++ e bibliotecas de desenvolvimento essenciais para que extensões nativas (como as do PHP ou Gems do Ruby) possam ser compiladas sem erros de linkagem.",
    why: "Sem essas ferramentas, a instalação de bibliotecas como OpenSSL ou compressão de imagens falharia em níveis baixos do sistema operacional.",
    details: [
      { label: "Linux (APT)", value: "build-essential, git, wget, unzip, curl, tmux e bibliotecas de desenvolvimento SSL/zlib." },
      { label: "macOS", value: "Garante a presença do Xcode Command Line Tools, base para qualquer desenvolvimento em Mac." },
      { label: "Utilitários", value: "Instalação do repositório Charmbracelet para o 'glow' (renderizador de Markdown no terminal)." }
    ]
  },
  {
    id: "homebrew",
    number: 2,
    title: "Homebrew: Package Manager",
    icon: Box,
    description: "O SetupVibe padroniza a gestão de pacotes utilizando o Homebrew tanto no macOS quanto no Linux (via Linuxbrew). Isso permite que você use os mesmos comandos `brew install` em qualquer sistema, mantendo versões de pacotes mais recentes do que os repositórios oficiais das distros Linux.",
    why: "Permite isolar ferramentas de desenvolvimento dos binários do sistema operacional, evitando corromper o ambiente nativo.",
    details: [
      { label: "Caminho (PATH)", value: "No Linux, é instalado em /home/linuxbrew/.linuxbrew e injetado no .zshrc, .profile e .bashrc." },
      { label: "Manutenção", value: "Executa automaticamente 'brew update' e 'brew upgrade' para garantir que a stack comece atualizada." },
      { label: "Bibliotecas", value: "Instala dependências críticas como openssl, readline e sqlite via brew." }
    ]
  },
  {
    id: "php",
    number: 3,
    title: "PHP 8.4 Profissional",
    icon: Code2,
    description: "Configura um ambiente PHP moderno pronto para produção. No Linux, utiliza os repositórios de alta confiança do Ondřej Surý, garantindo acesso à versão 8.4 estável mesmo em sistemas com versões mais antigas.",
    why: "Otimizado para o ecossistema Laravel, incluindo todas as extensões necessárias para filas (Redis), banco de dados e manipulação de mídia.",
    details: [
      { label: "Extensões", value: "curl, mbstring, xml, zip, bcmath, intl, mysql, pgsql, sqlite3, gd, imagick, redis, mongodb, yaml e xdebug." },
      { label: "Composer", value: "Instalado globalmente em ~/.local/bin/composer no Linux e via brew no macOS." },
      { label: "Laravel", value: "Instalador oficial do Laravel configurado e disponível via comando 'laravel new'." }
    ]
  },
  {
    id: "ruby",
    number: 4,
    title: "Ruby e rbenv",
    icon: FileCode,
    description: "Em vez de usar o Ruby do sistema (que é perigoso modificar), o script instala o rbenv. Ele permite que você instale e alterne entre múltiplas versões do Ruby de forma segura e isolada por projeto.",
    why: "Evita conflitos de permissões (sudo) ao instalar Gems e permite rodar versões específicas para projetos legados ou novos.",
    details: [
      { label: "Versão Padrão", value: "Ruby 3.3.0 compilado localmente para máxima performance na arquitetura da sua máquina." },
      { label: "Plugins", value: "Instala ruby-build para permitir a compilação de novas versões diretamente pelo terminal." },
      { label: "Gems Base", value: "Bundler (gestão de dependências) e Rails (framework web) pré-instalados." }
    ]
  },
  {
    id: "linguagens",
    number: 5,
    title: "Python (uv), Go e Rust",
    icon: Cpu,
    description: "Uma stack poliglota moderna. O destaque aqui é o 'uv', um gerenciador de pacotes Python escrito em Rust que é até 100x mais rápido que o pip tradicional.",
    why: "Garante que você tenha as linguagens de sistemas (Go/Rust) e de automação/IA (Python) prontas para qualquer desafio.",
    details: [
      { label: "Python 3.12", value: "Gerenciado pelo uv, criando ambientes virtuais (venvs) instantâneos." },
      { label: "Go 1.22.2", value: "Instalado em ~/.local/go, configurando GOBIN e GOPATH automaticamente no seu Shell." },
      { label: "Rust", value: "Instalado via rustup, o padrão da indústria, incluindo cargo e rustc." }
    ]
  },
  {
    id: "javascript",
    number: 6,
    title: "Node 24 e Bun",
    icon: Workflow,
    description: "Prepara o ambiente para o desenvolvimento frontend e backend (SSR/API). Inclui o Node.js 24 (LTS) e o Bun, o runtime ultra-rápido que substitui o Node em muitos casos de uso modernos.",
    why: "Oferece flexibilidade para rodar scripts legados com Node e scripts modernos de alta performance com Bun.",
    details: [
      { label: "Node.js 24", value: "Instalado via brew (Mac) ou NodeSource APT (Linux) para estabilidade a longo prazo." },
      { label: "Gerenciadores", value: "PNPM (economia de disco via hardlinks) e NPM tradicional." },
      { label: "Automação", value: "PM2 para manter processos vivos e n8n (CLI) para automação de fluxos de trabalho." }
    ]
  },
  {
    id: "devops",
    number: 7,
    title: "DevOps e Containers",
    icon: Cloud,
    description: "Instala o motor do Docker e ferramentas de automação. No macOS, integra-se ao Docker Desktop; no Linux, instala o Docker Engine puro com plugins de build modernos.",
    why: "Essencial para replicar ambientes de produção localmente e automatizar tarefas repetitivas via Ansible.",
    details: [
      { label: "Docker Stack", value: "Docker CE, Docker Compose v2 e Docker Buildx para builds multi-plataforma." },
      { label: "Ansible", value: "Instalado via PPA oficial, pronto para configurar servidores remotos." },
      { label: "GitHub CLI", value: "O comando 'gh' permite gerenciar PRs, Issues e Repos sem sair do terminal." }
    ]
  },
  {
    id: "unix-tools",
    number: 8,
    title: "Modern Unix Tools",
    icon: Zap,
    description: "Substitui comandos de 40 anos atrás por versões modernas escritas em Rust, que oferecem cores, ícones e muito mais velocidade.",
    why: "Melhora drasticamente a legibilidade de logs, buscas de arquivos e navegação no dia a dia.",
    details: [
      { label: "Navegação", value: "eza (ls com ícones), zoxide (cd que aprende seus hábitos), fzf (busca fuzzy)." },
      { label: "Leitura", value: "bat (cat com syntax highlighting), glow (visualizador de Markdown estilizado)." },
      { label: "Busca", value: "ripgrep (rg) e fd, as ferramentas de busca mais rápidas do mundo." },
      { label: "Editores", value: "Neovim configurado e LazyGit/LazyDocker para interfaces gráficas no terminal." }
    ]
  },
  {
    id: "rede",
    number: 9,
    title: "Rede e Monitoramento",
    icon: Network,
    description: "Uma caixa de ferramentas para diagnóstico de rede e performance. Inclui ferramentas de monitoramento em tempo real que mostram consumo de CPU, RAM e tráfego de rede por processo.",
    why: "Permite identificar gargalos de performance e problemas de conectividade em segundos.",
    details: [
      { label: "Monitoramento", value: "htop, btop (visual incrível), glances e ctop (monitor de containers)." },
      { label: "Rede", value: "gping (ping gráfico), speedtest-cli, nmap, mtr e rustscan." },
      { label: "Tailscale", value: "Instalado e configurado para criar sua própria VPN mesh segura entre dispositivos." }
    ]
  },
  {
    id: "ssh",
    number: 10,
    title: "Servidor SSH",
    icon: ShieldCheck,
    description: "Exclusivo para Linux. O script garante que o servidor OpenSSH esteja não apenas instalado, mas configurado corretamente para aceitar conexões com segurança.",
    why: "Transforma sua máquina Linux (ou WSL) em um alvo acessível via rede local ou remota.",
    details: [
      { label: "Configuração", value: "Habilita systemd ssh, ajusta PermitRootLogin e PasswordAuthentication conforme necessário." },
      { label: "Resiliência", value: "Realiza backup automático do seu sshd_config original antes de aplicar melhorias." }
    ]
  },
  {
    id: "shell",
    number: 11,
    title: "ZSH + Starship",
    icon: Terminal,
    description: "O SetupVibe redefine seu terminal. Instala o ZSH como motor principal e o Starship como prompt, utilizando o preset 'Gruvbox Rainbow' para um visual elegante e funcional.",
    why: "Um terminal bem configurado reduz a carga cognitiva, mostrando informações do Git e versões de linguagens automaticamente.",
    details: [
      { label: "Prompt Starship", value: "Configuração customizada que mostra erros, status de bateria, contexto de nuvem e Git." },
      { label: "Plugins OMZ", value: "zsh-autosuggestions (previsão de comandos) e zsh-syntax-highlighting (cores enquanto digita)." },
      { label: "Tipografia", value: "Garante a instalação de Nerd Fonts (FiraCode e JetBrains Mono) para exibir ícones corretamente." }
    ]
  },
  {
    id: "tmux",
    number: 12,
    title: "Tmux Master",
    icon: Layout,
    description: "Configura o Tmux com o TPM (Tmux Plugin Manager). O Tmux permite que você feche o terminal e suas janelas e processos continuem rodando exatamente onde você os deixou.",
    why: "Essencial para manter servidores rodando e organizar sua tela em múltiplos painéis sem abrir várias abas.",
    details: [
      { label: "Atalhos", value: "Configuração pré-definida em ~/.tmux.conf focada em ergonomia." },
      { label: "Persistência", value: "Integração com plugins que salvam e restauram sessões após o reboot." }
    ]
  },
  {
    id: "ia-tools",
    number: 13,
    title: "IA Tools via CLI",
    icon: Bot,
    description: "Instala as principais interfaces de IA para terminal (CLI). Isso permite que você peça para a IA codar, refatorar ou explicar comandos diretamente da sua linha de comando.",
    why: "Transforma seu terminal em uma central de inteligência artificial, acelerando o 'Vibe Coding'.",
    details: [
      { label: "Anthropic", value: "Claude Code instalado globalmente via npm (@anthropic-ai/claude-code)." },
      { label: "Google", value: "Gemini CLI oficial disponível para consultas rápidas de modelos Gemini." },
      { label: "GitHub", value: "Copilot CLI para suporte nativo em comandos de terminal." }
    ]
  },
  {
    id: "limpeza",
    number: 14,
    title: "Otimização e PM2",
    icon: Trash2,
    description: "O script finaliza limpando todos os caches de instalação (pip, composer, npm, brew) e configurando a persistência do PM2 para que seus serviços reiniciem com o computador.",
    why: "Garante que seu disco não seja desperdiçado com arquivos temporários e que seu ambiente seja resiliente a reinicializações.",
    details: [
      { label: "Autostart", value: "Configura o PM2 dump e o script de inicialização do sistema (launchd ou systemd)." },
      { label: "Caches", value: "Limpeza profunda em ~/Library/Caches e ~/.cache para liberar gigabytes de espaço." },
      { label: "Aliasing", value: "Injeta aliases úteis (como 'ge' para gemini e 'art' para php artisan) no seu .zshrc." }
    ]
  }
];

export function ToolsContent() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    steps.forEach((step) => {
      const element = document.getElementById(step.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-28 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 scrollbar-hide py-2">
              <div className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-4 border-b border-primary/5 pb-4">
                Architecture Roadmap
              </div>
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => scrollTo(step.id)}
                  className={cn(
                    "group flex items-center w-full text-left px-4 py-3 text-sm transition-all duration-300 rounded-xl",
                    activeId === step.id 
                      ? "bg-primary/5 text-primary font-bold shadow-sm ring-1 ring-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <span className={cn(
                    "mr-4 font-mono text-[10px] transition-all duration-300",
                    activeId === step.id ? "text-primary scale-110" : "opacity-30"
                  )}>
                    {step.number.toString().padStart(2, '0')}
                  </span>
                  <span className="truncate group-hover:translate-x-1 transition-transform duration-300">
                    {step.title}
                  </span>
                  {activeId === step.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl space-y-48">
            {steps.map((step, index) => (
              <motion.section 
                key={step.id} 
                id={step.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="scroll-mt-32 group relative"
              >
                {/* Decorative Line (Desktop) */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[27px] top-20 bottom-[-140px] w-px bg-gradient-to-b from-primary/20 via-border/50 to-transparent hidden lg:block" />
                )}

                <div className="flex flex-col space-y-8">
                  {/* Header Seção */}
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-card border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 text-muted-foreground group-hover:text-primary transition-all duration-500 shadow-sm z-10">
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>
                    
                    <div className="space-y-2 flex-1 pt-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-primary font-black tracking-widest uppercase bg-primary/10 px-2 py-0.5 rounded-full">
                          Stage {step.number.toString().padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-border/40" />
                        <Hash className="w-4 h-4 text-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-primary" onClick={() => scrollTo(step.id)} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary/90">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  {/* Descrição Detalhada */}
                  <div className="pl-0 lg:pl-20 space-y-8">
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                      {step.description}
                    </p>

                    {/* Bloco 'Por que' */}
                    <div className="relative group/tip">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover/tip:opacity-100 transition duration-500" />
                      <div className="relative flex gap-5 p-6 rounded-3xl bg-muted/30 border border-border/50 items-start backdrop-blur-sm">
                        <div className="mt-1 bg-primary/20 p-2 rounded-xl">
                          <Lightbulb className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-black text-primary uppercase tracking-[0.2em]">Contexto Estratégico</h4>
                          <p className="text-base text-foreground/80 leading-relaxed font-serif italic">
                            {step.why}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tabela de Detalhes Técnicos */}
                    <div className="bg-card border border-border/60 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 transition-all duration-500 hover:shadow-primary/5">
                      <div className="bg-muted/50 px-8 py-4 border-b border-border/60 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-primary animate-pulse" />
                          <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Technical Specification</h4>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/20" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                          <div className="w-2 h-2 rounded-full bg-green-500/20" />
                        </div>
                      </div>
                      <div className="p-0 overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                          <tbody>
                            {step.details.map((detail, idx) => (
                              <tr key={idx} className="border-b last:border-0 border-border/40 hover:bg-primary/[0.02] transition-colors group/row">
                                <td className="px-8 py-6 font-bold text-foreground/70 w-44 align-top border-r border-border/40 bg-muted/10 tracking-tight text-xs uppercase group-hover/row:text-primary transition-colors">
                                  {detail.label}
                                </td>
                                <td className="px-8 py-6 text-muted-foreground leading-relaxed font-mono text-[13px] bg-background/20 whitespace-pre-wrap">
                                  {detail.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Final CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-64 bg-foreground text-background dark:bg-card dark:text-foreground border border-border rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-1000 group-hover:rotate-12">
                <Command className="w-80 h-80" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                  Deployment Ready
                </div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter max-w-2xl mx-auto leading-[0.9]">
                  A máquina que você sempre quis, a um comando de distância.
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
                  SetupVibe é a materialização de centenas de horas de automação para que você foque apenas no código.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="/instalar" className="w-full sm:w-auto inline-flex items-center justify-center h-16 px-12 rounded-full bg-primary text-primary-foreground font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/30 active:scale-95">
                    Instalar Agora
                  </a>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 text-sm font-bold opacity-50 hover:opacity-100 transition-opacity">
                    <ArrowUpCircle className="w-5 h-5" />
                    Voltar ao topo
                  </button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
