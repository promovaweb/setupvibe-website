"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Box, Shield, Cpu, Monitor, Globe, FileCode, Search, Server, Layers, Bot } from "lucide-react";
import { MagicCard } from "@/components/MagicCard";
import { GradientText } from "@/components/GradientText";
import { withBase } from "@/lib/utils";

export function BatteriesIncludedContent() {
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
      title: "Rede & Segurança",
      icon: Shield,
      color: "text-indigo-500",
      description: "Ponte e proteção pra testes de servidores locais.",
      items: ["Tailscale", "OpenSSH Server (Linux)", "nmap", "htop"],
    }
  ];

  return (
    <div className="w-full">
      {/* Grid de Ferramentas (Usando MagicCard para efeito belíssimo) */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
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
                    {/* Lista das Ferramentas como Tags Elegantes */}
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
    </div>
  );
}

const Wrench = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);
