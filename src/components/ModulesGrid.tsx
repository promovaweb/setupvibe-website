"use client";

import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { Terminal, Bot, Settings, Layers, Box, Cpu } from "lucide-react";

export function ModulesGrid() {
  return (
    <section id="modulos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Tudo o que você precisa,<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              {" "}já configurado.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pt-4">
            O SetupVibe instala e otimiza um ecossistema inteiro de ferramentas modernas para você focar apenas em criar.
          </p>
        </div>

        <BentoGrid className="lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto">
          <BentoCard
            name="ZSH & Starship"
            className="md:col-span-2 lg:col-span-2"
            Icon={Terminal}
            description="Terminal turbinado com Oh My Zsh e prompt Starship preset Gruvbox Rainbow. Aliases e exportações de PATH configurados automaticamente."
            href="/zsh-starship"
            cta="Ver Configuração"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 transition-opacity opacity-50 group-hover:opacity-100" />
            }
          />
          <BentoCard
            name="AI CLI Tools"
            className="md:col-span-1 lg:col-span-1"
            Icon={Bot}
            description="Integração global de pacotes NPM para desenvolvedores nativos de IAs: Claude Code, Gemini CLI, OpenAI Codex e GitHub Copilot CLI."
            href="/ai-clis"
            cta="Conheça as Ferramentas"
            background={
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 transition-opacity opacity-50 group-hover:opacity-100" />
            }
          />
          <BentoCard
            name="Ecossistema Dev"
            className="md:col-span-1 lg:col-span-1"
            Icon={Box}
            description="Node, Python (uv), Go, Rust, PHP (Composer) e Ruby em suas versões mais recentes instalados perfeitamente."
            href="/ecossistema-dev"
            cta="Ver Stack"
          />
          <BentoCard
            name="Tmux Master"
            className="md:col-span-2 lg:col-span-2"
            Icon={Layers}
            description="Um ambiente robusto com dezenas de plugins de navegação, mouse, copy/paste cross-OS, UI moderna com onedark e gerenciamento de sessões."
            href="/tmux"
            cta="Ver Plugins"
            background={
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 transition-opacity opacity-50 group-hover:opacity-100" />
            }
          />
          <BentoCard
            name="PM2 & DevOps"
            className="md:col-span-2 lg:col-span-2"
            Icon={Cpu}
            description="Docker, Ansible e o incrível gerenciador de processos PM2 com auto-startup configurado como serviço global via systemd/launchd."
            href="/pm2"
            cta="Saber mais sobre PM2"
          />
          <BentoCard
            name="Modern Unix"
            className="md:col-span-1 lg:col-span-1"
            Icon={Settings}
            description="Ferramentas como bat, eza, fd, ripgrep, fzf e zoxide instaladas por padrão. Esqueça os velhos comandos."
            href="/modern-unix"
            cta="Lista de Utilitários"
            background={
              <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/5 dark:to-orange-500/5 transition-opacity opacity-50 group-hover:opacity-100" />
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}
