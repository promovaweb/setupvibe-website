"use client";

import { motion } from "framer-motion";
import { 
  Calendar, Zap, Clock, Shield, 
  Settings, Copy, Check, 
  RefreshCw, List, LayoutDashboard,
  HardDrive, BarChart3, Bell,
  ArrowUpCircle, Timer, Terminal,
  Lightbulb
} from "lucide-react";
import { useState } from "react";
import { cn, withBase } from "@/lib/utils";
import { GlassCard } from "./GlassCard";
import { BentoGrid, BentoCard } from "./BentoGrid";

const cronAliases = [
  { name: "ce", command: "crontab -e", description: "Edita o arquivo de crontab do usuário." },
  { name: "cl", command: "crontab -l", description: "Lista todas as tarefas agendadas no crontab." },
  { name: "cr", command: "crontab -r", description: "Remove todas as tarefas do crontab (CUIDADO!)." },
  { name: "cronboard", command: "cronboard", description: "Abre o dashboard visual do Cronboard." },
];

const cronFeatures = [
  {
    name: "Agendamento Visual",
    className: "md:col-span-2",
    Icon: LayoutDashboard,
    description: "O Cronboard transforma o arquivo obscuro do crontab em uma interface visual intuitiva. Visualize, edite e gerencie suas tarefas recorrentes sem precisar decorar a sintaxe complexa de asteriscos do Linux.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />,
    cta: "Ver Documentação",
    href: "https://github.com/cronboard/cronboard"
  },
  {
    name: "Precisão de Execução",
    className: "md:col-span-1",
    Icon: Timer,
    description: "Garanta que seus scripts de backup, limpeza de logs e automações de IA rodem exatamente no horário planejado, com logs de execução detalhados.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />,
  },
  {
    name: "Monitoramento de Jobs",
    className: "md:col-span-1",
    Icon: BarChart3,
    description: "Acompanhe o histórico de sucesso e falha de cada tarefa agendada. Receba alertas se um job crítico falhar ou demorar mais do que o esperado.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />,
  },
  {
    name: "Automação de Infra",
    className: "md:col-span-1",
    Icon: Zap,
    description: "Use o Cron para disparar renovações de certificados SSL, backups de banco de dados e sincronização de arquivos de forma 100% autônoma.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />,
  },
  {
    name: "Gestão Centralizada",
    className: "md:col-span-1",
    Icon: List,
    description: "Visualize todos os seus cronjobs em um único lugar, categorizados e fáceis de filtrar por status ou frequência.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />,
  },
  {
    name: "Segurança Nativa",
    className: "md:col-span-2",
    Icon: Shield,
    description: "O SetupVibe configura as permissões corretas para o Cron e Cronboard, garantindo que suas tarefas rodem com o nível de privilégio adequado, sem expor seu sistema.",
    background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
  },
];

export function CronboardContent() {
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
            <Calendar className="w-4 h-4" />
            Automation Scheduler
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Cronboard & <span className="text-primary">Crontab</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O gerenciamento de tarefas recorrentes é fundamental para qualquer servidor estável. O SetupVibe traz o poder do Crontab clássico com a facilidade visual do Cronboard, permitindo que você agende backups, limpezas e execuções de IA sem erros de sintaxe.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0 border border-rose-500/20">
                <Clock className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Agendamento</h4>
                <p className="text-xs text-muted-foreground">Tarefas rodando no tempo certo.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl border bg-muted/30">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <LayoutDashboard className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Visualização</h4>
                <p className="text-xs text-muted-foreground">Interface amigável para o Cron.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <GlassCard className="relative p-2 aspect-video flex flex-col overflow-hidden bg-black/80">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-4 text-[10px] text-muted-foreground font-mono">cronboard — scheduling: active</div>
            </div>
            <div className="flex-1 p-4 font-mono text-xs space-y-4 overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[9px] text-white/40 border-b border-white/5 pb-1 uppercase tracking-widest font-bold">
                  <span>Task Name</span>
                  <span>Schedule</span>
                  <span>Next Run</span>
                  <span>Status</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-rose-400 font-bold">Daily Backup</span>
                  <span className="text-white/60">0 0 * * *</span>
                  <span className="text-white/40">In 4h 22m</span>
                  <span className="text-green-500">Active</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-orange-400 font-bold">Log Cleanup</span>
                  <span className="text-white/60">@weekly</span>
                  <span className="text-white/40">In 2d 11h</span>
                  <span className="text-green-500">Active</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-blue-400 font-bold">AI Sync</span>
                  <span className="text-white/60">*/15 * * * *</span>
                  <span className="text-white/40">In 8m 12s</span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-1 bg-rose-600 text-white text-[10px] font-bold flex justify-between">
              <span>Cronboard v1.2.0</span>
              <span>Running 12 tasks</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="h-12 w-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mx-auto mb-4">
            <Zap className="w-6 h-6 text-rose-500" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Poder do Agendamento</h3>
          <p className="text-muted-foreground text-lg">
            O SetupVibe traz a estabilidade do Cron com uma camada moderna de gestão visual, garantindo que nada pare no seu servidor.
          </p>
        </div>

        <BentoGrid className="lg:auto-rows-[18rem]">
          {cronFeatures.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* Aliases Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">Aliases de Automação</h3>
          <p className="text-muted-foreground">
            O SetupVibe simplifica o acesso ao agendador. Use estes atalhos para gerenciar suas tarefas sem atrito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cronAliases.map((alias) => (
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

      {/* Pro Tips Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl border bg-gradient-to-br from-primary/5 to-transparent">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Dica de Vibe Coding
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use o Cronboard para agendar scripts que limpam seus logs do PM2 ou que sincronizam seus projetos com a nuvem toda madrugada. Isso garante que seu ambiente esteja sempre limpo e seguro para a próxima sessão de código.
          </p>
        </div>
        <div className="p-8 rounded-3xl border bg-gradient-to-br from-rose-500/5 to-transparent">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-rose-500" />
            Atenção com Crontab -r
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O comando <code className="text-rose-500 font-bold">cr</code> (crontab -r) remove TODAS as suas tarefas agendadas instantaneamente sem pedir confirmação. Use com extrema cautela ou prefira sempre editar visualmente pelo comando <code className="text-primary font-bold">cronboard</code>.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
              <Terminal className="w-5 h-5 text-rose-500" />
            </div>
            <h4 className="text-xl font-bold">Sintaxe Simplificada</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chega de dúvidas entre `* * * * *`. Com o Cronboard, você agenda tarefas em linguagem natural ou através de seletores visuais amigáveis.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <RefreshCw className="w-5 h-5 text-orange-500" />
            </div>
            <h4 className="text-xl font-bold">Auto-Sincronização</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O Cronboard sincroniza bidirecionalmente com seu arquivo Crontab. Edite no terminal ou no dashboard, os dados estarão sempre atualizados.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <HardDrive className="w-5 h-5 text-blue-500" />
            </div>
            <h4 className="text-xl font-bold">Backups de Infra</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agende backups automáticos de toda a sua configuração do SetupVibe para a nuvem ou para volumes externos com segurança e previsibilidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
