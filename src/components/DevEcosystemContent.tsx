"use client";

import { motion } from "framer-motion";
import { 
  Code2, Box, Cpu, Zap, Terminal, 
  Check, Copy, Info, ChevronRight, 
  Globe, Laptop, Command, Binary,
  Coffee, Gem, FileCode, Workflow,
  Rocket, Layers, Shield, Search
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const ecosystemAliases = [
  { name: "py", command: "python3", description: "Atalho rápido para o Python 3." },
  { name: "venv", command: "python3 -m venv .venv && source .venv/bin/activate", description: "Cria e ativa um ambiente virtual Python instantaneamente." },
  { name: "ni", command: "npm install", description: "Instalação rápida de dependências Node.js." },
  { name: "bi", command: "bun install", description: "Instalação ultra-rápida com o runtime Bun." },
  { name: "art", command: "php artisan", description: "Atalho para comandos do Laravel (PHP)." },
  { name: "cb", command: "cargo build", description: "Compilação de projetos Rust." },
  { name: "gorun", command: "go run .", description: "Execução imediata de projetos Go." },
  { name: "be", command: "bundle exec", description: "Execução de comandos no contexto do Ruby Bundler." },
];

const ecosystemFeatures = [
  {
    name: "Python com 'uv'",
    className: "md:col-span-2",
    Icon: Zap,
    description: "Utilizamos o 'uv', o gerenciador de pacotes Python mais rápido do mundo escrito em Rust. Esqueça a lentidão do pip e conflitos de dependências; com o uv, seus ambientes virtuais são criados em milissegundos.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
    cta: "Conhecer o uv",
    href: "https://github.com/astral-sh/uv"
  },
  {
    name: "Rust & Cargo",
    className: "md:col-span-1",
    Icon: Binary,
    description: "O ecossistema Rust completo instalado nativamente. Performance máxima para ferramentas de sistema e webAssembly.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
  {
    name: "Go (Golang)",
    className: "md:col-span-1",
    Icon: Workflow,
    description: "Go instalado e configurado com GOPATH automático. Pronto para criar microserviços e ferramentas CLI de alta performance.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
  {
    name: "JS Runtimes (Node/Bun)",
    className: "md:col-span-2",
    Icon: Box,
    description: "O melhor dos dois mundos: Node.js para estabilidade e Bun para velocidade extrema em desenvolvimento e testes. Acompanha PNPM para gestão de pacotes eficiente e econômica em disco.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />,
  },
  {
    name: "PHP 8.4 & Composer",
    className: "md:col-span-1",
    Icon: FileCode,
    description: "A versão mais recente do PHP com Composer global. Setup perfeito para desenvolvimento Laravel e aplicações web modernas.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    name: "Ruby & rbenv",
    className: "md:col-span-1",
    Icon: Gem,
    description: "Gestão de versões Ruby simplificada com rbenv e Bundler pré-configurado. Produtividade total para Rails e automações.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />,
  },
];

export function DevEcosystemContent() {
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
            <Code2 className="w-4 h-4" />
            Full-Stack Ready
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ecossistema de <span className="text-primary">Desenvolvimento</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O SetupVibe não apenas instala ferramentas; ele constrói uma fundação sólida e harmoniosa para as linguagens mais importantes do mercado. Tudo é instalado nativamente, garantindo performance bruta e compatibilidade total com seu S.O.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Rocket className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Pronto para Uso</h4>
                <p className="text-xs text-muted-foreground">Binários no PATH e envs configuradas.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <Layers className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Sem Conflitos</h4>
                <p className="text-xs text-muted-foreground">Gestão inteligente de versões e runtimes.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-white/40 font-mono">setupvibe check --runtimes</div>
            </div>
            <div className="flex-1 p-6 font-mono text-sm space-y-3 overflow-hidden">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-white/80">Node.js</span>
                <span className="text-white/30 text-xs">v22.x (LTS)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-white/80">Python</span>
                <span className="text-white/30 text-xs">v3.12 (via uv)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-white/80">Go</span>
                <span className="text-white/30 text-xs">v1.23</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-white/80">Rust</span>
                <span className="text-white/30 text-xs">v1.81 (stable)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-white/80">Bun</span>
                <span className="text-white/30 text-xs">v1.1.x</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-white/80">PHP</span>
                <span className="text-white/30 text-xs">v8.4</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[10px] text-primary uppercase font-bold tracking-widest mb-2">System Status</div>
                <div className="flex gap-2">
                  <div className="h-1 flex-1 bg-primary/40 rounded" />
                  <div className="h-1 flex-1 bg-primary/40 rounded" />
                  <div className="h-1 flex-1 bg-primary/40 rounded" />
                  <div className="h-1 w-12 bg-white/10 rounded" />
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-emerald-600 text-white text-[10px] font-bold flex justify-between">
              <span>All systems operational</span>
              <span>Ready for Coding</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Ecosystem Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mx-auto mb-4">
            <Binary className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Batteries Included</h3>
          <p className="text-muted-foreground text-lg">
            Esqueça o tempo perdido instalando compiladores e configurando variáveis de ambiente. O SetupVibe entrega tudo pronto para o seu próximo projeto.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {ecosystemFeatures.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Atalhos de Linguagens</h3>
          <p className="text-muted-foreground">
            Aliases pensados para economizar segundos valiosos em tarefas repetitivas de desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ecosystemAliases.map((alias) => (
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

      {/* Performance Info */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Cpu className="w-64 h-64" />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Performance Nativa</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ao contrário de ambientes baseados apenas em Docker para desenvolvimento, o SetupVibe prioriza a instalação nativa. Isso significa:
            </p>
            <div className="space-y-4">
              {[
                { title: "Zero Latência", desc: "Seus scripts rodam na velocidade máxima do hardware, sem overhead de virtualização." },
                { title: "Acesso Direto", desc: "As IAs acessam seus arquivos locais e ferramentas de sistema instantaneamente." },
                { title: "Menor Uso de RAM", desc: "Economize dezenas de GBs de memória ao evitar rodar containers para tarefas simples." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6 text-center space-y-2 bg-background/50 border-primary/10">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Performance</div>
            </GlassCard>
            <GlassCard className="p-6 text-center space-y-2 bg-background/50 border-primary/10">
              <div className="text-3xl font-bold text-primary">0ms</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Lag de I/O</div>
            </GlassCard>
            <GlassCard className="p-6 text-center space-y-2 bg-background/50 border-primary/10">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Linguagens</div>
            </GlassCard>
            <GlassCard className="p-6 text-center space-y-2 bg-background/50 border-primary/10">
              <div className="text-3xl font-bold text-primary">LTS</div>
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Sempre Estável</div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
