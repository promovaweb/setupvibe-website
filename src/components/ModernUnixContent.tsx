"use client";

import { motion } from "framer-motion";
import { 
  Settings, Zap, Search, 
  Check, Copy, 
  Eye, FolderTree, FastForward,
  List, Monitor, Code2, Type, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const modernUnixAliases = [
  { name: "ls", command: "eza --icons --git", description: "Listagem de arquivos colorida com ícones e status do Git." },
  { name: "l", command: "eza -lh --icons --git", description: "Listagem detalhada com tamanho de arquivos humano." },
  { name: "cat", command: "bat", description: "Exibe conteúdo de arquivos com destaque de sintaxe e Git diff." },
  { name: "grep", command: "rg", description: "Busca ultra-rápida de texto dentro de arquivos (Recursivo por padrão)." },
  { name: "find", command: "fd", description: "Localiza arquivos e pastas instantaneamente por nome." },
  { name: "z", command: "zoxide", description: "Teleporte entre diretórios baseado no seu histórico de navegação." },
  { name: "top", command: "htop", description: "Monitor de processos interativo e visual." },
  { name: "diff", command: "delta", description: "Diferenciação de arquivos rica com suporte a temas e sintaxe." },
];

const modernUnixFeatures = [
  {
    name: "eza (Próxima geração do ls)",
    className: "md:col-span-2",
    Icon: FolderTree,
    description: "Escrito em Rust, o eza é muito mais rápido e funcional que o ls clássico. Ele exibe ícones, cores por tipo de arquivo e integra o status do Git diretamente na listagem sem precisar rodar git status.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
    cta: "Repositório eza",
    href: "https://github.com/eza-community/eza"
  },
  {
    name: "bat (Cat com esteroides)",
    className: "md:col-span-1",
    Icon: Eye,
    description: "Um clone do cat que suporta syntax highlighting para centenas de linguagens, números de linha e integração com Git para mostrar alterações em tempo real.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
  },
  {
    name: "ripgrep (rg)",
    className: "md:col-span-1",
    Icon: Search,
    description: "O buscador mais rápido que existe. Ele respeita seu .gitignore e ignora arquivos binários automaticamente, encontrando qualquer texto no seu código em milissegundos.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />,
  },
  {
    name: "zoxide (O cd inteligente)",
    className: "md:col-span-1",
    Icon: FastForward,
    description: "Nunca mais digite caminhos longos. O zoxide aprende quais pastas você mais usa. Digite 'z proj' e ele te leva para '~/documents/trabalho/meu-projeto' instantaneamente.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    name: "fd (Busca de arquivos)",
    className: "md:col-span-1",
    Icon: List,
    description: "Uma alternativa simples e rápida ao comando 'find'. Com uma sintaxe intuitiva e execução paralela, encontrar arquivos nunca foi tão fácil.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />,
  },
  {
    name: "fzf (Fuzzy Finder)",
    className: "md:col-span-2",
    Icon: Zap,
    description: "O filtro interativo definitivo. Integra-se com todos os outros comandos para permitir seleção visual de arquivos, processos e histórico de comandos com busca nebulosa.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
];

export function ModernUnixContent() {
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
            <Settings className="w-4 h-4" />
            Modern Unix Tools
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Utilitários em <span className="text-primary">Rust</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Os comandos clássicos do UNIX (1970) foram incríveis, mas a era moderna exige mais. O SetupVibe substitui os velhos conhecidos por ferramentas reescritas em Rust para serem seguras, paralelas e extremamente focadas em produtividade visual.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Performance</h4>
                <p className="text-xs text-muted-foreground">Execução paralela multi-core.</p>
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
                <p className="text-xs text-muted-foreground">Essencial para ícones e glifos.</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80 font-mono">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-white/40">modern-unix — eza + bat</div>
            </div>
            <div className="flex-1 p-6 text-xs space-y-4 overflow-hidden">
              <div className="flex gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-white/70">ls -la</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-4 text-white/40">
                  <span className="w-20">drwxr-xr-x</span>
                  <span className="text-blue-400"> src</span>
                  <span className="text-green-500/50 text-[10px]">modified 2m ago</span>
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <span className="w-20">-rw-r--r--</span>
                  <span className="text-yellow-400"> index.ts</span>
                  <span className="text-orange-500/50 text-[10px]">[M] unstaged</span>
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <span className="w-20">-rw-r--r--</span>
                  <span className="text-orange-400">󰏗 package.json</span>
                  <span className="text-white/20 text-[10px]">v1.0.0</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5 flex gap-2">
                <span className="text-green-500">➜</span>
                <span className="text-white/70">cat package.json</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/10 text-[10px]">
                <div className="flex gap-4">
                  <span className="text-white/20">1</span>
                  <span>{'{'}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/20">2</span>
                  <span className="text-blue-300">  "name"</span>
                  <span>: </span>
                  <span className="text-green-300">"setupvibe"</span>
                  <span>,</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/20">3</span>
                  <span className="text-blue-300">  "version"</span>
                  <span>: </span>
                  <span className="text-green-300">"1.0.0"</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-primary text-primary-foreground text-[10px] font-bold flex justify-between">
              <span>Rust Core Utilities</span>
              <span>10x Faster</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mx-auto mb-4">
            <Zap className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">O Novo Padrão</h3>
          <p className="text-muted-foreground text-lg">
            Substituímos os utilitários legados por versões modernas que aproveitam o hardware atual e as necessidades de desenvolvedores web.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {modernUnixFeatures.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Aliases Produtivos</h3>
          <p className="text-muted-foreground">
            O SetupVibe já mapeia os comandos clássicos para as versões modernas, para que você não precise mudar sua memória muscular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modernUnixAliases.map((alias) => (
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

      {/* Performance Comparison */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Por que o Rust mudou tudo?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Utilitários como o <strong>ripgrep</strong> são centenas de vezes mais rápidos que o grep tradicional devido ao uso massivo de paralelismo e algoritmos de busca otimizados que ignoram arquivos desnecessários por padrão.
            </p>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span>ripgrep (rg)</span>
                  <span className="text-green-500">0.12s</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[5%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-white/40">
                  <span>grep legacional</span>
                  <span>4.85s</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <GlassCard className="p-6 space-y-4 bg-background/50 border-primary/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold">Pronto para 4K / Retina</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todas as ferramentas são configuradas para usar fontes modernas (Nerd Fonts) com suporte a ligaduras e ícones de alta resolução.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
