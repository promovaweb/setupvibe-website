"use client";

import { motion } from "framer-motion";
import { 
  Terminal, Layout, Layers, MousePointer2, 
  Settings, Puzzle, Copy, Check, Info, 
  Activity, Command, ChevronRight, 
  Search, Navigation, Clipboard, 
  Globe, Sparkles, Save, ExternalLink
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const tmuxAliases = [
  { name: "t", command: "tmux", description: "Atalho rápido para iniciar o tmux." },
  { name: "tn", command: "tmux new -s <nome>", description: "Cria uma nova sessão com nome." },
  { name: "ta", command: "tmux attach -t <nome>", description: "Reconecta a uma sessão existente." },
  { name: "tl", command: "tmux ls", description: "Lista todas as sessões ativas." },
  { name: "tk", command: "tmux kill-session -t <nome>", description: "Encerra uma sessão específica." },
  { name: "tka", command: "tmux kill-server", description: "Encerra todas as sessões e o servidor tmux." },
  { name: "td", command: "tmux detach", description: "Sai da sessão atual sem encerrá-la." },
  { name: "treload", command: "tmux source ~/.tmux.conf", description: "Recarrega as configurações." },
];

const tmuxShortcuts = [
  { key: "Ctrl + b, %", action: "Divide o painel verticalmente" },
  { key: "Ctrl + b, \"", action: "Divide o painel horizontalmente" },
  { key: "Ctrl + b, o", action: "Alterna entre painéis" },
  { key: "Ctrl + b, c", action: "Cria uma nova janela" },
  { key: "Ctrl + b, n/p", action: "Próxima/Anterior janela" },
  { key: "Ctrl + b, d", action: "Desconecta da sessão (Detach)" },
  { key: "Ctrl + b, [", action: "Entra no modo de scroll/cópia" },
  { key: "Ctrl + b, z", action: "Maximiza/Minimiza o painel atual" },
];

const pluginCategories = [
  {
    name: "Gerenciador & Base",
    className: "md:col-span-2",
    Icon: Settings,
    description: "A fundação do nosso setup. Utilizamos o TPM (Tmux Plugin Manager) para gerenciar extensões e o tmux-sensible para garantir comportamentos modernos e sem atrasos no teclado.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
    cta: "Ver plugins base",
    href: "https://github.com/tmux-plugins/tpm"
  },
  {
    name: "Navegação Fluida",
    className: "md:col-span-1",
    Icon: Navigation,
    description: "Navegação contínua entre painéis do tmux e buffers do Vim/Neovim com christoomey/vim-tmux-navigator e controle total via teclado.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    name: "Gestão de Sessões",
    className: "md:col-span-1",
    Icon: Save,
    description: "Suas sessões nunca morrem. Com Resurrect e Continuum, o estado do seu terminal é salvo a cada 10 minutos e restaurado automaticamente no boot.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    name: "Interface & UX Premium",
    className: "md:col-span-2",
    Icon: Sparkles,
    description: "Barra de status ultra-moderna via tmux2k com tema OneDark. Inclui visualização de CPU, RAM, Git e Docker diretamente na interface do tmux, além de menus interativos e guia de atalhos em tempo real.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
  {
    name: "Super Clipboard",
    className: "md:col-span-1",
    Icon: Clipboard,
    description: "Poder de cópia avançado com tmux-yank (sincronização com sistema) e fastcopy para selecionar textos na tela em milissegundos usando hints visuais.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />,
  },
  {
    name: "Integração Web & FZF",
    className: "md:col-span-1",
    Icon: Globe,
    description: "Abra URLs, arquivos e selecione sessões instantaneamente com a integração profunda do FZF. Pesquisa nebulosa aplicada a todo o fluxo de trabalho.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
  {
    name: "Mouse Inteligente",
    className: "md:col-span-1",
    Icon: MousePointer2,
    description: "Better-mouse-mode para uma experiência desktop. Scroll inteligente, seleção natural e troca de painéis via clique sem perder o foco do código.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />,
  },
];

export function TmuxContent() {
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
            Terminal Multiplexer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            O que é o <span className="text-primary">tmux</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O tmux é uma ferramenta essencial para desenvolvedores que trabalham no terminal. Ele permite gerenciar múltiplas janelas e painéis em uma única sessão, além de manter seus processos rodando mesmo se sua conexão SSH cair.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <Layers className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Persistência</h4>
                <p className="text-xs text-muted-foreground">Sessões continuam ativas em background.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                <Layout className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Multiplexação</h4>
                <p className="text-xs text-muted-foreground">Vários terminais em uma única janela.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-muted-foreground font-mono">tmux — 3.4 (session: setupvibe)</div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm space-y-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="border border-primary/30 rounded p-2 bg-primary/5 flex flex-col justify-between">
                  <span className="text-primary text-[10px] uppercase font-bold tracking-wider">Editor</span>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-white/20 rounded" />
                    <div className="h-1 w-4/5 bg-white/20 rounded" />
                    <div className="h-1 w-2/3 bg-white/20 rounded" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border border-white/10 rounded p-2 h-1/2 flex flex-col justify-between">
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Server</span>
                    <span className="text-green-500/70 text-xs">● Online</span>
                  </div>
                  <div className="border border-white/10 rounded p-2 h-1/2 flex flex-col justify-between">
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Metrics</span>
                    <div className="flex items-end gap-1 h-4">
                      <div className="w-1 bg-primary/50 h-2" />
                      <div className="w-1 bg-primary/50 h-4" />
                      <div className="w-1 bg-primary/50 h-3" />
                      <div className="w-1 bg-primary/50 h-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-primary text-primary-foreground text-[10px] font-bold flex justify-between">
              <span>[setupvibe] 0:nvim* 1:bash 2:docker</span>
              <span>2026-03-31 14:00</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Plugins Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 mx-auto mb-4">
            <Puzzle className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Ecosistema de Plugins</h3>
          <p className="text-muted-foreground text-lg">
            O SetupVibe vem pré-configurado com uma seleção cirúrgica de plugins para transformar o tmux em uma IDE de terminal completa.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {pluginCategories.map((plugin, idx) => (
            <BentoCard key={idx} {...plugin} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Aliases Produtivos</h3>
          <p className="text-muted-foreground">
            O SetupVibe já vem com diversos aliases para facilitar seu fluxo de trabalho com o tmux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tmuxAliases.map((alias) => (
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
              <p className="text-xs font-mono text-muted-foreground mb-2 break-all">{alias.command}</p>
              <p className="text-sm leading-snug">{alias.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shortcuts Grid */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Atalhos Nativos (Default)</h3>
            <p className="text-muted-foreground">Comandos básicos que você precisa saber.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm">
            <Info className="w-4 h-4" />
            <span>Prefix padrão: <strong>Ctrl + b</strong></span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tmuxShortcuts.map((shortcut, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border bg-card">
              <kbd className="px-2 py-1.5 rounded-md bg-muted border-b-2 border-muted-foreground/30 text-xs font-mono w-fit">
                {shortcut.key}
              </kbd>
              <span className="text-sm font-medium">{shortcut.action}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <a 
            href={withBase("/atalhos")} 
            className="inline-flex items-center gap-2 text-primary hover:underline font-bold group"
          >
            Ver todos os aliases e atalhos do SetupVibe
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
