"use client";

import { motion } from "framer-motion";
import { 
  Bot, Zap, Sparkles, MessageSquare, Code2, 
  Terminal, Cpu, Search, Brain, Rocket,
  Check, Copy, Info, ChevronRight, ArrowRight,
  Shield, Globe, Laptop, Command, ExternalLink
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const aiAliases = [
  { name: "cc", command: "claude --permission-mode=auto --dangerously-skip-permissions", description: "Inicia o Claude Code com permissões automáticas (Vibe Coding Mode)." },
  { name: "ge", command: "gemini --approval-mode=yolo", description: "Invocação do Gemini CLI sem confirmações repetitivas." },
  { name: "skl", command: "npx skills list", description: "Lista todas as skills de IA instaladas no seu ambiente." },
  { name: "skf", command: "npx skills find <query>", description: "Busca novas capacidades e skills no registro oficial." },
  { name: "ska", command: "npx skills add <repo>", description: "Instala uma nova skill de IA no seu terminal." },
  { name: "sku", command: "npx skills update", description: "Atualiza todas as suas skills para a última versão." },
];

const aiFeatures = [
  {
    name: "Claude Code",
    className: "md:col-span-2",
    Icon: MessageSquare,
    description: "A CLI oficial da Anthropic que permite ao Claude ler, escrever e executar comandos diretamente no seu projeto. O SetupVibe configura o 'cc' para que você possa codar apenas conversando com o terminal.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
    cta: "Explorar Claude Code",
    href: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code"
  },
  {
    name: "Gemini CLI",
    className: "md:col-span-1",
    Icon: Sparkles,
    description: "Acesso instantâneo aos modelos Gemini do Google. Perfeito para explicações rápidas de código, geração de documentação e automação de tarefas simples via shell.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
  },
  {
    name: "Skills Framework",
    className: "md:col-span-1",
    Icon: Zap,
    description: "Um sistema extensível de skills que adiciona 'superpoderes' ao seu terminal. Instale integrações com APIs, ferramentas de busca e automações complexas com um comando.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />,
  },
  {
    name: "Vibe Coding Engine",
    className: "md:col-span-1",
    Icon: Brain,
    description: "Ambiente otimizado para que as IAs tenham o contexto correto do seu projeto, respeitando .gitignore e estrutura de diretórios nativamente.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    name: "GitHub Copilot CLI",
    className: "md:col-span-1",
    Icon: Code2,
    description: "O Copilot agora vive no seu terminal. Peça sugestões de comandos complexos e receba explicações detalhadas sobre qualquer utilitário UNIX.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />,
  },
  {
    name: "Automação Inteligente",
    className: "md:col-span-2",
    Icon: Rocket,
    description: "Combine ferramentas clássicas com IA. O SetupVibe prepara o terreno para que você possa usar o 'cc' junto com ferramentas como ripgrep e fd, permitindo que a IA encontre e resolva bugs em segundos.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent" />,
  },
];

export function AiCliContent() {
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
            <Bot className="w-4 h-4" />
            AI-Native Terminal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            A Era do <span className="text-primary">Vibe Coding</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O terminal não é mais apenas um lugar para digitar comandos; agora ele é o lugar onde você colabora com Inteligências Artificiais. O SetupVibe injeta as melhores ferramentas de IA CLI diretamente no seu workflow, prontas para uso imediato.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                <Command className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Contexto Total</h4>
                <p className="text-xs text-muted-foreground">IAs que entendem seus arquivos locais.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <Zap className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Zero Fricção</h4>
                <p className="text-xs text-muted-foreground">Aliases curtos para invocações rápidas.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-white/40 font-mono">claude-code — session: vibing</div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm space-y-4 overflow-hidden">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-purple-400 font-bold">➜</span>
                  <span className="text-white/70">cc "Refatore o componente Tmux para usar BentoGrid"</span>
                </div>
                <div className="pl-4 border-l border-white/10 space-y-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] text-blue-400 uppercase font-bold tracking-widest">Claude is thinking...</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex gap-2 text-[10px]">
                      <span className="text-green-500">READ</span>
                      <span className="text-white/40">src/components/TmuxContent.tsx</span>
                    </div>
                    <div className="flex gap-2 text-[10px]">
                      <span className="text-yellow-500">EDIT</span>
                      <span className="text-white/40">Applying bento-grid patterns...</span>
                    </div>
                  </div>
                  <div className="text-xs text-white/60 leading-relaxed italic">
                    "Componente refatorado com sucesso. Adicionei o BentoGrid para exibir os plugins de forma mais moderna."
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-purple-600 text-white text-[10px] font-bold flex justify-between">
              <span>Claude Code 0.1.x</span>
              <span>Context: Full Project</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Tools Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mx-auto mb-4">
            <Bot className="w-6 h-6 text-cyan-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Arsenal de Inteligência</h3>
          <p className="text-muted-foreground text-lg">
            Combinamos as CLIs mais poderosas do mercado em um único ambiente pronto para produção.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {aiFeatures.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Atalhos de Vibe Coding</h3>
          <p className="text-muted-foreground">
            Comandos encurtados para que sua conversa com a IA seja o mais fluida possível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiAliases.map((alias) => (
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

      {/* Framework Info */}
      <section className="bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-3xl p-8 md:p-12 border border-primary/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Por que CLI?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Diferente de interfaces web (Chat), as CLIs de IA têm acesso direto ao seu sistema de arquivos e ferramentas de build. Isso permite que elas:
            </p>
            <ul className="space-y-4">
              {[
                "Corrijam erros de lint/compilação instantaneamente.",
                "Criem arquivos e diretórios seguindo o padrão do projeto.",
                "Executem testes para validar as próprias alterações.",
                "Encontrem definições de funções em arquivos que você nem sabia que existiam."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />
            <GlassCard className="p-6 space-y-4 bg-muted/50 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold">Segurança & Privacidade</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todas as ferramentas configuradas no SetupVibe respeitam o seu <code className="text-primary">.gitignore</code> e solicitam permissão antes de realizar qualquer alteração crítica ou execução de comandos perigosos.
              </p>
              <div className="pt-2">
                <a href="https://promovaweb.com/courses/vibe-coding" target="_blank" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Aprenda mais sobre Vibe Coding
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
