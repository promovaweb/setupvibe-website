"use client";

import { motion } from "framer-motion";
import { 
  Type, Download, Apple, Terminal, 
  Check, Copy, Info, Monitor, ExternalLink,
  ChevronRight, ArrowRight, Settings, MousePointer2, Zap
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const fontLinks = {
  nerdFonts: "https://www.nerdfonts.com/font-downloads",
  firaCodeRepo: "https://github.com/tonsky/FiraCode",
};

export function FontConfigContent() {
  const [activeTab, setActiveId] = useState("windows");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Introduction Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Type className="w-4 h-4" />
            Typography & Icons
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Configurando a <span className="text-primary">Fira Code Nerd Font</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para visualizar corretamente os ícones do Starship, Tmux e os glifos de programação, é essencial utilizar uma <strong>Nerd Font</strong>. O SetupVibe recomenda a Fira Code por suas ligaduras elegantes e clareza.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href={fontLinks.nerdFonts} 
              target="_blank" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
            >
              Baixar FiraCode Nerd Font
              <Download className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-8 overflow-hidden bg-black/80 flex flex-col items-center justify-center text-center space-y-6 min-h-[300px]">
            <div className="text-5xl md:text-6xl font-mono text-white tracking-tighter">
              {"=> != === >= <="}
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              Exemplo de ligaduras de programação da Fira Code
            </p>
            <div className="flex gap-6 text-3xl">
              <span className="text-blue-400">󰊄</span>
              <span className="text-orange-500"></span>
              <span className="text-green-500"></span>
              <span className="text-purple-500"></span>
              <span className="text-yellow-500">󰏗</span>
            </div>
            <p className="text-xs text-white/40 uppercase font-bold tracking-widest">
              Suporte total a glifos Nerd Fonts
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Step by Step Tabs */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">Guia de Instalação</h3>
          <p className="text-muted-foreground">
            Escolha seu sistema operacional e siga os passos para configurar a fonte no seu terminal favorito.
          </p>
        </div>

        <Tabs defaultValue="windows" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-12 bg-muted/50 p-1 rounded-full border border-border/50">
            <TabsTrigger value="windows" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              Windows
            </TabsTrigger>
            <TabsTrigger value="mac" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              macOS
            </TabsTrigger>
            <TabsTrigger value="linux" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
              Linux
            </TabsTrigger>
          </TabsList>

          {/* Windows Content */}
          <TabsContent value="windows" className="mt-0 focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <div className="p-6 rounded-2xl border bg-muted/30 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Monitor className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="font-bold">Windows Terminal</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Recomendamos o uso do <strong>Windows Terminal</strong> (moderno) em vez do CMD ou PowerShell clássico.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                {[
                  { title: "Instalação da Fonte", text: "Baixe o arquivo .zip da FiraCode Nerd Font, extraia e instale todos os arquivos .ttf (clique com o botão direito e selecione 'Instalar para todos os usuários')." },
                  { title: "Configurações do Terminal", text: "Abra o Windows Terminal, pressione 'Ctrl + ,' para abrir as configurações." },
                  { title: "Perfil Padrão", text: "Vá em 'Perfis' > 'Padrões' (ou escolha o perfil do Ubuntu/WSL) > 'Aparência'." },
                  { title: "Selecionar Fonte", text: "Em 'Tipo de Letra', selecione 'FiraCode NF' ou 'FiraCode Nerd Font'. Salve as alterações." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl border bg-card/50">
                    <span className="text-4xl font-black text-primary/20 shrink-0">{i + 1}</span>
                    <div className="space-y-1">
                      <h5 className="font-bold text-lg">{step.title}</h5>
                      <p className="text-muted-foreground text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* macOS Content */}
          <TabsContent value="mac" className="mt-0 focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <div className="p-6 rounded-2xl border bg-muted/30 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-gray-500/10 flex items-center justify-center border border-gray-500/20">
                    <Apple className="w-5 h-5 text-gray-500" />
                  </div>
                  <h4 className="font-bold">iTerm2 ou Terminal.app</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O macOS possui excelente renderização. No iTerm2, as ligaduras funcionam por padrão ao selecionar a fonte.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                {[
                  { title: "Via Homebrew (Fácil)", text: "Execute no terminal: brew tap homebrew/cask-fonts && brew install --cask font-fira-code-nerd-font" },
                  { title: "Preferências do iTerm2", text: "Abra o iTerm2, vá em 'Settings' (Cmd + ,) > 'Profiles' > 'Text'." },
                  { title: "Trocar Fonte", text: "Clique no botão 'Change Font' e selecione 'FiraCode Nerd Font' no seletor de fontes do macOS." },
                  { title: "Habilitar Ligaduras", text: "Certifique-se de que a opção 'Use Ligatures' está marcada na mesma aba de configurações." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl border bg-card/50">
                    <span className="text-4xl font-black text-primary/20 shrink-0">{i + 1}</span>
                    <div className="space-y-1">
                      <h5 className="font-bold text-lg">{step.title}</h5>
                      <p className="text-muted-foreground text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Linux Content */}
          <TabsContent value="linux" className="mt-0 focus-visible:outline-none">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <div className="p-6 rounded-2xl border bg-muted/30 space-y-4">
                  <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <Terminal className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="font-bold">Gnome Terminal / Alacritty</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A maioria das distros modernas gerencia fontes via pasta ~/.local/share/fonts.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 space-y-4">
                {[
                  { title: "Download Manual", text: "Baixe a fonte e mova os arquivos .ttf para o diretório '~/.local/share/fonts'." },
                  { title: "Atualizar Cache", text: "Execute o comando 'fc-cache -fv' no terminal para o sistema reconhecer a nova fonte." },
                  { title: "Configurar no Terminal", text: "Abra as preferências do seu terminal (ex: Gnome Terminal > Preferências > Perfil > Texto)." },
                  { title: "Selecionar Fonte", text: "Marque 'Fonte personalizada' e selecione 'FiraCode Nerd Font Regular'. Ajuste o tamanho para 12pt ou 14pt." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl border bg-card/50">
                    <span className="text-4xl font-black text-primary/20 shrink-0">{i + 1}</span>
                    <div className="space-y-1">
                      <h5 className="font-bold text-lg">{step.title}</h5>
                      <p className="text-muted-foreground text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Pro Tip Section */}
      <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Settings className="w-48 h-48" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Dica de Especialista</h4>
            <p className="text-muted-foreground leading-relaxed">
              Se você notar que os ícones do Git ou do Vim estão aparecendo como quadrados vazios (tofu), 99% das vezes é porque seu terminal está usando uma fonte padrão do sistema em vez de uma <strong>Nerd Font</strong>. Sempre procure pelo sufixo "NF" ou "Nerd Font" no seletor do terminal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
