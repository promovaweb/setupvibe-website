"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Zap, Sparkles, Layout, Shield, 
  Settings, Copy, Check, 
  Search, ArrowRight,
  Palette, Gauge, Rocket, Type, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const zshAliases = [
  { name: "reload", command: "source ~/.zshrc", description: "Recarrega instantaneamente as configurações do ZSH." },
  { name: "zshconfig", command: "nano ~/.zshrc", description: "Atalho rápido para editar seu arquivo de configuração." },
  { name: "starshipconfig", command: "nano ~/.config/starship.toml", description: "Edita o visual do seu prompt Starship." },
  { name: "cls", command: "clear", description: "Limpa o terminal (alias clássico do Windows/DOS)." },
  { name: "..", command: "cd ..", description: "Sobe um nível de diretório." },
  { name: "...", command: "cd ../..", description: "Sobe dois níveis de diretórios." },
  { name: "h", command: "history", description: "Exibe o histórico de comandos digitados." },
  { name: "path", command: "echo $PATH | tr ':' '\\n'", description: "Lista as pastas do seu PATH de forma legível." },
];

const zshFeatures = [
  {
    name: "Motor ZSH + Oh My Zsh",
    className: "md:col-span-2",
    Icon: Terminal,
    description: "Substituímos o Bash padrão pelo ZSH, turbinado pelo framework Oh My Zsh. Isso garante auto-complete inteligente, correção de digitação e suporte a centenas de plugins de produtividade.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
    cta: "Explorar Oh My Zsh",
    href: "https://ohmyz.sh/"
  },
  {
    name: "Prompt Starship (Rust)",
    className: "md:col-span-1",
    Icon: Rocket,
    description: "O prompt mais rápido e informativo do mundo, escrito em Rust. Mostra apenas o que você precisa: status de Git, versão da linguagem, bateria e muito mais.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
  {
    name: "Visual Gruvbox Rainbow",
    className: "md:col-span-1",
    Icon: Palette,
    description: "Preset exclusivo do SetupVibe que traz um visual elegante, colorido e de alto contraste, otimizado para leitura e foco durante longas sessões de código.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    name: "Performance Instantânea",
    className: "md:col-span-1",
    Icon: Gauge,
    description: "Prompt assíncrono que não trava seu terminal. O Starship é desenhado para renderizar em milissegundos, independente do tamanho do seu projeto.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
  },
  {
    name: "Inteligência de Contexto",
    className: "md:col-span-2",
    Icon: Search,
    description: "O prompt se adapta ao seu projeto. Se você estiver em uma pasta Node.js, ele mostra a versão do Node; em uma pasta Python, ele exibe o venv ativo automaticamente.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
  {
    name: "Segurança & PATH",
    className: "md:col-span-1",
    Icon: Shield,
    description: "O SetupVibe organiza suas variáveis de ambiente e PATH de forma cirúrgica, evitando conflitos entre binários globais e locais.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />,
  },
];

export function ZshStarshipContent() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Introduction Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Terminal className="w-4 h-4" />
            Modern Shell Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A Experiência <span className="text-primary">ZSH & Starship</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Seu terminal é sua ferramenta de trabalho número 1. O SetupVibe transforma essa interface em um cockpit de alta performance, combinando o poder do ZSH com a beleza e velocidade do Starship.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                <Zap className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Ultra Rápido</h4>
                <p className="text-xs text-muted-foreground">Escrito em Rust para performance máxima.</p>
              </div>
            </div>
            <a href={withBase("/fontes")} className="flex gap-3 p-4 rounded-xl border bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors group">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                <Type className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm flex items-center gap-1">
                  Nerd Fonts
                  <ChevronRight className="w-3 h-3 opacity-50 group-hover:translate-x-0.5 transition-transform" />
                </h4>
                <p className="text-xs text-muted-foreground">Guia de configuração de fontes.</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80 font-mono">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-white/40">setupvibe — zsh (v5.9)</div>
            </div>
            <div className="flex-1 p-6 text-sm space-y-6">
              {/* Starship Mockup */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-x-2">
                  <span className="bg-[#ebdbb2] text-[#282828] px-2 py-0.5 rounded font-bold"></span>
                  <span className="bg-[#ebdbb2] text-[#282828] px-1 py-0.5 font-bold font-mono"> ~/projects/setupvibe</span>
                  <span className="bg-[#fe8019] text-[#282828] px-2 py-0.5 font-bold font-mono">  main</span>
                  <span className="bg-[#b8bb26] text-[#282828] px-2 py-0.5 font-bold font-mono"> 󰚚 v1.0.0</span>
                  <span className="bg-[#b8bb26] text-[#282828] px-2 py-0.5 rounded font-bold rotate-180"></span>
                </div>
                <div className="flex gap-2 text-white/90">
                  <span className="text-purple-400 font-bold">❯</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              <div className="space-y-2 opacity-50">
                <div className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  <span className="text-white/40 italic text-xs">Comando executado em 0.2s</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-[#282828] text-[#ebdbb2] text-[10px] font-bold flex justify-between border-t border-white/5">
              <span>Starship v1.20.1</span>
              <span> zsh</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">O Motor da sua Produtividade</h3>
          <p className="text-muted-foreground text-lg">
            Um terminal que entende você e se adapta ao seu fluxo de trabalho, entregando informações críticas de forma visual e rápida.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {zshFeatures.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Atalhos do Shell</h3>
          <p className="text-muted-foreground">
            Aliases nativos para navegação e gestão do seu ambiente ZSH.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {zshAliases.map((alias) => (
            <motion.div
              key={alias.name}
              whileHover={{ y: -4 }}
              className="group p-5 rounded-2xl border bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer relative"
              onClick={() => copyToClipboard(alias.command, alias.name)}
            >
              <div className="justify-between items-start mb-3 flex">
                <span className="text-xl font-bold font-mono text-primary">{alias.name}</span>
                {copied === alias.name ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-2 break-all opacity-50">{alias.command}</p>
              <p className="text-sm leading-snug">{alias.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customization Info */}
      <section className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl p-8 md:p-12 border border-primary/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Customização sem Medo</h3>
            <p className="text-muted-foreground leading-relaxed">
              O Starship utiliza um único arquivo TOML para todas as configurações. No SetupVibe, já entregamos o preset <strong>Gruvbox Rainbow</strong>, mas você pode alterar qualquer módulo em segundos:
            </p>
            <div className="space-y-4">
              {[
                { title: "Status de Bateria", desc: "Mostra quanto tempo de carga resta sem sair do terminal." },
                { title: "Tempo de Execução", desc: "Cronometra automaticamente comandos que levam mais de 2s." },
                { title: "Cloud Integration", desc: "Identifica se você está logado no AWS, Google Cloud ou Azure." },
                { title: "Contexto Docker", desc: "Mostra se você está dentro de uma stack dockerizada." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
            <GlassCard className="p-6 space-y-4 bg-muted/50 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold">Como mudar o tema?</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Execute <code className="text-primary">starshipconfig</code> para abrir o arquivo. Você pode conferir todos os presets oficiais na documentação do projeto.
              </p>
              <div className="pt-2">
                <a href="https://starship.rs/presets/" target="_blank" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Ver Presets Oficiais
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
